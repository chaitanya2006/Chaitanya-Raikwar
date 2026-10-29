import React, { useState } from 'react';
import { YearTrendPoint, RegionalTaxMetric } from '../types/fuelData';
import { HIGHEST_TAX_COUNTRIES, TOP_3_COUNTRIES_COMPARISON } from '../data/fuelDataset';

interface TrendChartProps {
  title: string;
  data: { year: number; val: number }[];
  yAxisLabel: string;
  isCurrency?: boolean;
  minY?: number;
  maxY?: number;
  accentColor?: string;
}

export const TrendAreaChart: React.FC<TrendChartProps> = ({
  title,
  data,
  yAxisLabel,
  isCurrency = true,
  minY = 1.0,
  maxY = 3.0,
  accentColor = '#2b6cb0',
}) => {
  const [hoveredIdx, setHoveredIdx] = useState<number | null>(null);

  const width = 450;
  const height = 90;
  const paddingLeft = 38;
  const paddingRight = 20;
  const paddingTop = 18;
  const paddingBottom = 22;

  const chartW = width - paddingLeft - paddingRight;
  const chartH = height - paddingTop - paddingBottom;

  const getX = (idx: number) => paddingLeft + (idx / (data.length - 1)) * chartW;
  const getY = (val: number) => {
    const clamped = Math.max(minY, Math.min(maxY, val));
    const ratio = (clamped - minY) / (maxY - minY);
    return paddingTop + chartH - ratio * chartH;
  };

  // Generate SVG path points
  const points = data.map((d, i) => `${getX(i)},${getY(d.val)}`).join(' ');
  const areaPath = `M ${getX(0)},${getY(data[0].val)} ` +
    data.map((d, i) => `L ${getX(i)},${getY(d.val)}`).join(' ') +
    ` L ${getX(data.length - 1)},${paddingTop + chartH} L ${getX(0)},${paddingTop + chartH} Z`;

  return (
    <div className="border border-[#85c1db] bg-[#b9e6f3] p-1 flex flex-col h-full overflow-hidden select-none">
      <div className="bg-[#6db5cc] text-gray-900 font-semibold text-[11px] py-0.5 px-2 text-center border-b border-[#5aa3ba]">
        {title}
      </div>

      <div className="relative flex-1 bg-[#d8f1f8] min-h-[85px] w-full">
        <svg viewBox={`0 0 ${width} ${height}`} className="w-full h-full overflow-visible">
          {/* Subtle grid lines */}
          <line x1={paddingLeft} y1={paddingTop} x2={width - paddingRight} y2={paddingTop} stroke="#b0deed" strokeWidth="0.8" />
          <line x1={paddingLeft} y1={paddingTop + chartH / 2} x2={width - paddingRight} y2={paddingTop + chartH / 2} stroke="#b0deed" strokeDasharray="3 3" strokeWidth="0.8" />
          <line x1={paddingLeft} y1={paddingTop + chartH} x2={width - paddingRight} y2={paddingTop + chartH} stroke="#b0deed" strokeWidth="0.8" />

          {/* Area Fill */}
          <path d={areaPath} fill="#a8dded" fillOpacity="0.6" />

          {/* Stroke Line */}
          <polyline fill="none" stroke={accentColor} strokeWidth="1.8" points={points} />

          {/* Y Axis Label */}
          <text
            x={10}
            y={height / 2}
            transform={`rotate(-90 10 ${height / 2})`}
            textAnchor="middle"
            fontSize="8"
            fill="#334155"
            fontWeight="600"
          >
            {yAxisLabel}
          </text>

          {/* Points & Data Labels */}
          {data.map((d, i) => {
            const cx = getX(i);
            const cy = getY(d.val);
            const isHovered = hoveredIdx === i;

            return (
              <g
                key={d.year}
                className="cursor-pointer"
                onMouseEnter={() => setHoveredIdx(i)}
                onMouseLeave={() => setHoveredIdx(null)}
              >
                {/* Year Label */}
                <text
                  x={cx}
                  y={height - 6}
                  textAnchor="middle"
                  fontSize="7.5"
                  fill="#475569"
                  fontWeight="500"
                >
                  {d.year}
                </text>

                {/* Value Label above point */}
                <text
                  x={cx}
                  y={cy - 5}
                  textAnchor="middle"
                  fontSize="7.5"
                  fill="#0f172a"
                  fontWeight="600"
                >
                  {isCurrency ? `$${d.val.toFixed(2)}` : d.val.toFixed(1)}
                </text>

                {/* Point circle */}
                <circle
                  cx={cx}
                  cy={cy}
                  r={isHovered ? 4.5 : 2.5}
                  fill={isHovered ? '#0284c7' : accentColor}
                  stroke="#ffffff"
                  strokeWidth="1"
                />
              </g>
            );
          })}
        </svg>

        {hoveredIdx !== null && (
          <div className="absolute top-1 right-2 bg-slate-900/90 text-white text-[10px] px-2 py-0.5 rounded shadow pointer-events-none">
            {data[hoveredIdx].year}: {isCurrency ? `$${data[hoveredIdx].val.toFixed(2)}` : data[hoveredIdx].val}
          </div>
        )}
      </div>
    </div>
  );
};

export const RegionalTaxDonutChart: React.FC<{
  data: RegionalTaxMetric[];
  onSelectRegion?: (r: string) => void;
  selectedRegion?: string;
}> = ({ data, onSelectRegion, selectedRegion }) => {
  const [hoveredSlice, setHoveredSlice] = useState<RegionalTaxMetric | null>(null);

  const total = data.reduce((sum, item) => sum + item.taxPercentage, 0);
  const size = 260;
  const center = size / 2;
  const radius = 95;
  const innerRadius = 35;

  let cumulativeAngle = -Math.PI / 2; // start at 12 o'clock

  const slices = data.map((item) => {
    const sliceAngle = (item.taxPercentage / total) * (Math.PI * 2);
    const startAngle = cumulativeAngle;
    const endAngle = cumulativeAngle + sliceAngle;
    cumulativeAngle += sliceAngle;

    // SVG arc coordinates
    const x1 = center + radius * Math.cos(startAngle);
    const y1 = center + radius * Math.sin(startAngle);
    const x2 = center + radius * Math.cos(endAngle);
    const y2 = center + radius * Math.sin(endAngle);

    const x3 = center + innerRadius * Math.cos(endAngle);
    const y3 = center + innerRadius * Math.sin(endAngle);
    const x4 = center + innerRadius * Math.cos(startAngle);
    const y4 = center + innerRadius * Math.sin(startAngle);

    const largeArc = sliceAngle > Math.PI ? 1 : 0;
    const pathData = `M ${x1} ${y1} A ${radius} ${radius} 0 ${largeArc} 1 ${x2} ${y2} L ${x3} ${y3} A ${innerRadius} ${innerRadius} 0 ${largeArc} 0 ${x4} ${y4} Z`;

    const midAngle = startAngle + sliceAngle / 2;
    const labelRadius = radius * 0.72;
    const labelX = center + labelRadius * Math.cos(midAngle);
    const labelY = center + labelRadius * Math.sin(midAngle);

    return {
      item,
      pathData,
      labelX,
      labelY,
    };
  });

  return (
    <div className="border border-[#85c1db] bg-[#b9e6f3] p-1 flex flex-col h-full overflow-hidden select-none">
      <div className="bg-[#6db5cc] text-gray-900 font-semibold text-[11px] py-0.5 px-2 text-center border-b border-[#5aa3ba]">
        Average Tax Percentage by Global Region
      </div>

      <div className="relative flex-1 bg-[#d8f1f8] min-h-[160px] flex items-center justify-center p-1">
        <svg viewBox={`0 0 ${size} ${size}`} className="w-full h-full max-h-[175px]">
          {slices.map((slice) => {
            const isSelected = selectedRegion === slice.item.region;
            const isHovered = hoveredSlice?.region === slice.item.region;

            return (
              <g
                key={slice.item.region}
                className="cursor-pointer transition-transform duration-200"
                onClick={() => onSelectRegion?.(slice.item.region)}
                onMouseEnter={() => setHoveredSlice(slice.item)}
                onMouseLeave={() => setHoveredSlice(null)}
              >
                <path
                  d={slice.pathData}
                  fill={slice.item.color}
                  stroke="#ffffff"
                  strokeWidth="1.5"
                  opacity={isHovered || isSelected ? 1 : 0.88}
                  className="hover:opacity-100 transition-opacity"
                />

                {/* Slice labels for major regions */}
                <text
                  x={slice.labelX}
                  y={slice.labelY - 2}
                  textAnchor="middle"
                  fontSize="7.5"
                  fontWeight="600"
                  fill="#ffffff"
                  style={{ textShadow: '0 1px 2px rgba(0,0,0,0.7)' }}
                  className="pointer-events-none select-none"
                >
                  {slice.item.region}
                </text>
                <text
                  x={slice.labelX}
                  y={slice.labelY + 8}
                  textAnchor="middle"
                  fontSize="7"
                  fontWeight="bold"
                  fill="#ffffff"
                  style={{ textShadow: '0 1px 2px rgba(0,0,0,0.7)' }}
                  className="pointer-events-none select-none"
                >
                  {slice.item.taxPercentage.toFixed(2)}%
                </text>
              </g>
            );
          })}

          {/* Donut Center */}
          <circle cx={center} cy={center} r={innerRadius - 4} fill="#d8f1f8" stroke="#85c1db" strokeWidth="1" />
          <text
            x={center}
            y={center - 3}
            textAnchor="middle"
            fontSize="8"
            fill="#334155"
            fontWeight="bold"
          >
            AVG
          </text>
          <text
            x={center}
            y={center + 8}
            textAnchor="middle"
            fontSize="9"
            fill="#0369a1"
            fontWeight="bold"
          >
            26.77%
          </text>
        </svg>

        {hoveredSlice && (
          <div className="absolute bottom-1 bg-slate-900/90 text-white text-[10px] px-2 py-1 rounded shadow pointer-events-none border border-slate-700">
            <span className="font-semibold text-cyan-300">{hoveredSlice.region}:</span> {hoveredSlice.taxPercentage.toFixed(2)}% tax
          </div>
        )}
      </div>
    </div>
  );
};

export const HighestTaxBarChart: React.FC<{
  onSelectCountry?: (countryName: string) => void;
}> = ({ onSelectCountry }) => {
  const [hoveredCountry, setHoveredCountry] = useState<string | null>(null);

  const colors = ['#22d3ee', '#34d399', '#60a5fa', '#f87171', '#38bdf8'];

  return (
    <div className="border border-[#85c1db] bg-[#b9e6f3] p-1 flex flex-col h-full overflow-hidden select-none">
      <div className="bg-[#6db5cc] text-gray-900 font-semibold text-[11px] py-0.5 px-2 text-center border-b border-[#5aa3ba]">
        Highest Tax-Paying Nations: Comparative Analysis
      </div>

      <div className="relative flex-1 bg-[#d8f1f8] min-h-[160px] p-2 flex flex-col justify-end">
        <div className="flex items-end justify-between h-[120px] px-2 gap-2">
          {HIGHEST_TAX_COUNTRIES.map((item, idx) => {
            const heightPercent = (item.taxPercentage / 45) * 100;
            const isHovered = hoveredCountry === item.country;

            return (
              <div
                key={item.country}
                className="flex-1 flex flex-col items-center h-full justify-end cursor-pointer group"
                onClick={() => onSelectCountry?.(item.country)}
                onMouseEnter={() => setHoveredCountry(item.country)}
                onMouseLeave={() => setHoveredCountry(null)}
              >
                {/* Value label */}
                <span className="text-[9px] font-bold text-slate-800 mb-1 group-hover:text-blue-700">
                  {item.taxPercentage.toFixed(2)}%
                </span>

                {/* Bar */}
                <div
                  className="w-full rounded-t-xs transition-all duration-200 border border-slate-400/40 relative shadow-xs"
                  style={{
                    height: `${heightPercent}%`,
                    backgroundColor: colors[idx % colors.length],
                    opacity: isHovered ? 1 : 0.88,
                  }}
                >
                  {isHovered && (
                    <div className="absolute inset-0 bg-white/20 animate-pulse"></div>
                  )}
                </div>

                {/* Country Name */}
                <span className="text-[8.5px] font-medium text-slate-700 mt-1 truncate max-w-[50px] text-center" title={item.country}>
                  {item.country}
                </span>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export const Top3CountriesBarChart: React.FC = () => {
  const [activeMetric, setActiveMetric] = useState<string | null>(null);

  const series = [
    { key: 'lpg', label: 'Avg. Lpg', color: '#f59e0b' },
    { key: 'diesel', label: 'Avg. Diesel', color: '#10b981' },
    { key: 'petrol', label: 'Avg. Petro..', color: '#3b82f6' },
  ];

  return (
    <div className="border border-[#85c1db] bg-[#b9e6f3] p-1 flex flex-col h-full overflow-hidden select-none">
      <div className="bg-[#6db5cc] text-gray-900 font-semibold text-[11px] py-0.5 px-2 text-center border-b border-[#5aa3ba]">
        Fuel Price Comparison Among Top 3 Countries
      </div>

      <div className="relative flex-1 bg-[#d8f1f8] min-h-[140px] p-2 flex flex-col justify-end">
        <div className="flex items-end justify-around h-[105px] px-1">
          {TOP_3_COUNTRIES_COMPARISON.map((c) => (
            <div key={c.country} className="flex flex-col items-center flex-1 max-w-[130px]">
              {/* Grouped Bars */}
              <div className="flex items-end gap-1.5 w-full justify-center h-[80px]">
                {/* LPG */}
                <div className="flex flex-col items-center">
                  <span className="text-[8px] font-bold text-slate-800 mb-0.5">{c.lpg}$</span>
                  <div
                    className="w-4 rounded-t-xs bg-amber-500 border border-amber-600/50 shadow-xs"
                    style={{ height: `${(c.lpg / 2.8) * 65}px` }}
                  />
                  <span className="text-[7px] text-slate-600 mt-0.5">Avg. Lpg</span>
                </div>

                {/* Diesel */}
                <div className="flex flex-col items-center">
                  <span className="text-[8px] font-bold text-slate-800 mb-0.5">{c.diesel}$</span>
                  <div
                    className="w-4 rounded-t-xs bg-emerald-500 border border-emerald-600/50 shadow-xs"
                    style={{ height: `${(c.diesel / 2.8) * 65}px` }}
                  />
                  <span className="text-[7px] text-slate-600 mt-0.5">Avg. Dies..</span>
                </div>

                {/* Petrol */}
                <div className="flex flex-col items-center">
                  <span className="text-[8px] font-bold text-slate-800 mb-0.5">{c.petrol}$</span>
                  <div
                    className="w-4 rounded-t-xs bg-blue-500 border border-blue-600/50 shadow-xs"
                    style={{ height: `${(c.petrol / 2.8) * 65}px` }}
                  />
                  <span className="text-[7px] text-slate-600 mt-0.5">Avg. Petro..</span>
                </div>
              </div>

              {/* Country Label */}
              <span className="text-[9px] font-semibold text-slate-800 mt-1 border-t border-slate-300 w-full text-center pt-0.5">
                {c.country}
              </span>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};
