import React, { useState } from 'react';
import { CountryFuelStat } from '../types/fuelData';

interface WorldMapProps {
  title: string;
  metric: 'petrol' | 'diesel' | 'tax';
  countries: CountryFuelStat[];
  onSelectCountry?: (country: CountryFuelStat) => void;
  selectedCountryId?: string;
}

export const WorldChoroplethMap: React.FC<WorldMapProps> = ({
  title,
  metric,
  countries,
  onSelectCountry,
  selectedCountryId,
}) => {
  const [hoveredCountry, setHoveredCountry] = useState<CountryFuelStat | null>(null);
  const [tooltipPos, setTooltipPos] = useState<{ x: number; y: number }>({ x: 0, y: 0 });

  // Map projection coordinates: lat/lng to SVG 0-1000, 0-500
  const project = (lat: number, lng: number) => {
    // Equirectangular projection
    const x = ((lng + 180) * (1000 / 360));
    const y = ((90 - lat) * (500 / 180));
    return { x, y };
  };

  const getMetricValue = (c: CountryFuelStat) => {
    if (metric === 'petrol') return `$${c.petrolPrice.toFixed(2)}`;
    if (metric === 'diesel') return `$${c.dieselPrice.toFixed(2)}`;
    return `${c.taxPercentage.toFixed(1)}%`;
  };

  const getColor = (c: CountryFuelStat) => {
    if (metric === 'petrol') {
      const p = c.petrolPrice;
      if (p > 2.4) return '#1d4ed8'; // deep blue
      if (p > 2.1) return '#3b82f6';
      if (p > 1.8) return '#60a5fa';
      if (p > 1.3) return '#93c5fd';
      return '#bfdbfe';
    } else if (metric === 'diesel') {
      const d = c.dieselPrice;
      if (d > 2.3) return '#047857'; // emerald
      if (d > 2.0) return '#10b981';
      if (d > 1.6) return '#34d399';
      if (d > 1.2) return '#6ee7b7';
      return '#a7f3d0';
    } else {
      const t = c.taxPercentage;
      if (t > 38) return '#dc2626';
      if (t > 30) return '#f97316';
      if (t > 22) return '#eab308';
      return '#22c55e';
    }
  };

  return (
    <div className="relative border border-[#85c1db] bg-[#b9e6f3] p-1.5 flex flex-col h-full overflow-hidden select-none">
      {/* Title Header */}
      <div className="bg-[#6db5cc] text-gray-900 font-semibold text-xs py-1 px-2 text-center border-b border-[#5aa3ba] tracking-tight">
        {title}
      </div>

      <div 
        className="relative flex-1 bg-[#d8f1f8] min-h-[190px] w-full overflow-hidden"
        onMouseLeave={() => setHoveredCountry(null)}
      >
        <svg
          viewBox="0 0 1000 500"
          className="w-full h-full object-contain filter drop-shadow-sm"
          style={{ background: '#c8ebf5' }}
        >
          {/* Subtle lat/lng grid lines */}
          <line x1="0" y1="250" x2="1000" y2="250" stroke="#b0deed" strokeDasharray="4 4" strokeWidth="1" />
          <line x1="500" y1="0" x2="500" y2="500" stroke="#b0deed" strokeDasharray="4 4" strokeWidth="1" />

          {/* Stylized Continent Silhouette Backgrounds (Tableau Light Map Canvas style) */}
          {/* North America */}
          <path
            d="M 120 70 L 260 70 L 320 120 L 290 190 L 240 220 L 210 260 L 190 280 L 170 250 L 140 200 L 110 140 Z"
            fill="#e2f3f5"
            stroke="#95ccd8"
            strokeWidth="1.2"
          />
          {/* Greenland */}
          <path
            d="M 330 40 L 410 50 L 380 95 L 340 90 Z"
            fill="#eef8fa"
            stroke="#95ccd8"
            strokeWidth="1"
          />
          {/* South America */}
          <path
            d="M 270 270 L 340 290 L 370 340 L 350 410 L 310 460 L 280 430 L 270 340 Z"
            fill="#e2f3f5"
            stroke="#95ccd8"
            strokeWidth="1.2"
          />
          {/* Europe */}
          <path
            d="M 460 110 L 540 100 L 570 140 L 540 180 L 480 180 L 460 150 Z"
            fill="#e2f3f5"
            stroke="#95ccd8"
            strokeWidth="1.2"
          />
          {/* Africa */}
          <path
            d="M 460 195 L 560 195 L 590 260 L 570 360 L 520 400 L 470 320 L 450 240 Z"
            fill="#e2f3f5"
            stroke="#95ccd8"
            strokeWidth="1.2"
          />
          {/* Asia / Eurasia */}
          <path
            d="M 540 80 L 820 80 L 890 140 L 860 220 L 780 270 L 680 270 L 620 220 L 570 150 Z"
            fill="#e2f3f5"
            stroke="#95ccd8"
            strokeWidth="1.2"
          />
          {/* Australia / Oceania */}
          <path
            d="M 760 330 L 860 330 L 880 390 L 830 420 L 770 400 Z"
            fill="#e2f3f5"
            stroke="#95ccd8"
            strokeWidth="1.2"
          />
          {/* New Zealand */}
          <path
            d="M 900 410 L 920 430 L 910 450 L 895 435 Z"
            fill="#e2f3f5"
            stroke="#95ccd8"
            strokeWidth="1"
          />

          {/* Render Countries as interactive nodes and regional clusters */}
          {countries.map((c) => {
            const { x, y } = project(c.lat, c.lng);
            const isSelected = selectedCountryId === c.id;
            const isHovered = hoveredCountry?.id === c.id;
            const color = getColor(c);

            return (
              <g
                key={c.id}
                className="cursor-pointer transition-transform duration-150"
                onClick={() => onSelectCountry?.(c)}
                onMouseEnter={(e) => {
                  const rect = e.currentTarget.ownerSVGElement?.getBoundingClientRect();
                  if (rect) {
                    setTooltipPos({
                      x: (x / 1000) * rect.width,
                      y: (y / 500) * rect.height,
                    });
                  }
                  setHoveredCountry(c);
                }}
              >
                {/* Outer halo when active */}
                {(isSelected || isHovered) && (
                  <circle
                    cx={x}
                    cy={y}
                    r={14}
                    fill={color}
                    opacity="0.35"
                    className="animate-pulse"
                  />
                )}

                {/* Main Node */}
                <circle
                  cx={x}
                  cy={y}
                  r={isSelected ? 7 : isHovered ? 6 : 4.5}
                  fill={color}
                  stroke="#ffffff"
                  strokeWidth={1.5}
                  className="transition-all duration-150 hover:stroke-gray-900"
                />

                {/* Country Label for major regions */}
                {['USA', 'CAN', 'BRA', 'DEU', 'GBR', 'RUS', 'CHN', 'IND', 'SAU', 'AUS', 'NZL', 'RWA', 'TUR'].includes(c.id) && (
                  <text
                    x={x + 6}
                    y={y + 3}
                    fontSize="9"
                    fontWeight="500"
                    fill="#1e293b"
                    className="pointer-events-none drop-shadow-sm select-none"
                    style={{ textShadow: '0 1px 2px rgba(255,255,255,0.9)' }}
                  >
                    {c.name}
                  </text>
                )}
              </g>
            );
          })}
        </svg>

        {/* Dynamic Hover Tooltip */}
        {hoveredCountry && (
          <div
            className="absolute z-30 pointer-events-none bg-slate-900/95 text-white text-xs px-2.5 py-1.5 rounded shadow-lg border border-slate-700 backdrop-blur-sm transform -translate-x-1/2 -translate-y-full mb-2 max-w-[190px]"
            style={{
              left: `${Math.min(Math.max(tooltipPos.x, 80), 280)}px`,
              top: `${Math.max(tooltipPos.y - 8, 30)}px`,
            }}
          >
            <div className="font-semibold text-cyan-300 border-b border-slate-700 pb-0.5 mb-1 flex items-center justify-between">
              <span>{hoveredCountry.name}</span>
              <span className="text-[10px] text-slate-400">{hoveredCountry.region}</span>
            </div>
            <div className="grid grid-cols-2 gap-x-2 text-[10px] leading-tight">
              <span className="text-slate-400">Petrol:</span>
              <span className="font-mono text-emerald-400">${hoveredCountry.petrolPrice.toFixed(2)}/L</span>
              <span className="text-slate-400">Diesel:</span>
              <span className="font-mono text-emerald-400">${hoveredCountry.dieselPrice.toFixed(2)}/L</span>
              <span className="text-slate-400">LPG:</span>
              <span className="font-mono text-emerald-400">${hoveredCountry.lpgPrice.toFixed(2)}/L</span>
              <span className="text-slate-400">Tax Share:</span>
              <span className="font-mono text-amber-400">{hoveredCountry.taxPercentage.toFixed(1)}%</span>
              <span className="text-slate-400">Subsidy:</span>
              <span className="text-slate-300">{hoveredCountry.subsidyLevel}</span>
            </div>
          </div>
        )}

        {/* Map Legend / Watermark */}
        <div className="absolute bottom-1 left-2 flex items-center space-x-1 text-[9px] text-slate-600 bg-white/70 px-1.5 py-0.5 rounded backdrop-blur-xs">
          <span>© 2026 Mapbox © OpenStreetMap</span>
        </div>

        <div className="absolute top-1 right-2 flex items-center space-x-1.5 bg-white/80 px-2 py-0.5 rounded text-[10px] text-slate-700 border border-slate-200">
          <span className="text-[9px] uppercase tracking-wider text-slate-500">Legend:</span>
          <span className="inline-block w-2.5 h-2.5 rounded-full bg-blue-300"></span>
          <span className="text-[9px]">Low</span>
          <span className="inline-block w-2.5 h-2.5 rounded-full bg-blue-500"></span>
          <span className="text-[9px]">Med</span>
          <span className="inline-block w-2.5 h-2.5 rounded-full bg-blue-700"></span>
          <span className="text-[9px]">High</span>
        </div>
      </div>
    </div>
  );
};
