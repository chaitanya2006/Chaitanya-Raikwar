import React, { useState, useMemo } from 'react';
import {
  GLOBAL_KPIS,
  YEAR_TRENDS,
  REGIONAL_TAX_DATA,
  COUNTRIES_DATA,
} from '../data/fuelDataset';
import { CountryFuelStat, Region } from '../types/fuelData';
import { WorldChoroplethMap } from './WorldChoroplethMap';
import {
  TrendAreaChart,
  RegionalTaxDonutChart,
  HighestTaxBarChart,
  Top3CountriesBarChart,
} from './TableauCharts';
import {
  Download,
  Maximize2,
  Minimize2,
  RotateCcw,
  ChevronDown,
  Filter,
  Check,
  ChevronLeft,
  ChevronRight,
  ArrowUp,
  ArrowDown,
  Share2,
} from 'lucide-react';

interface TableauDashboardProps {
  onSelectCountry?: (country: CountryFuelStat) => void;
  standalone?: boolean;
}

export const TableauDashboard: React.FC<TableauDashboardProps> = ({
  onSelectCountry,
  standalone = false,
}) => {
  // Filters State
  const [selectedCountry, setSelectedCountry] = useState<string>('All');
  const [selectedRegion, setSelectedRegion] = useState<string>('All');
  const [selectedYear, setSelectedYear] = useState<string>('All');
  const [selectedIncome, setSelectedIncome] = useState<string>('All');
  const [selectedSubsidy, setSelectedSubsidy] = useState<string>('All');
  const [activeMeasure, setActiveMeasure] = useState<string>('All Measures');

  const [isFullscreen, setIsFullscreen] = useState(false);
  const [activeModal, setActiveModal] = useState<string | null>(null);

  // Compute filtered countries
  const filteredCountries = useMemo(() => {
    return COUNTRIES_DATA.filter((c) => {
      if (selectedCountry !== 'All' && c.name !== selectedCountry) return false;
      if (selectedRegion !== 'All' && c.region !== selectedRegion) return false;
      if (selectedIncome !== 'All' && c.incomeLevel !== selectedIncome) return false;
      if (selectedSubsidy !== 'All' && c.subsidyLevel !== selectedSubsidy) return false;
      return true;
    });
  }, [selectedCountry, selectedRegion, selectedIncome, selectedSubsidy]);

  // Compute dynamic KPI metrics based on filtered subset
  const dynamicKpis = useMemo(() => {
    if (filteredCountries.length === 0) {
      return GLOBAL_KPIS;
    }
    const count = filteredCountries.length;
    const avgPetrol = filteredCountries.reduce((s, c) => s + c.petrolPrice, 0) / count;
    const avgDiesel = filteredCountries.reduce((s, c) => s + c.dieselPrice, 0) / count;
    const avgLpg = filteredCountries.reduce((s, c) => s + c.lpgPrice, 0) / count;
    const avgTax = filteredCountries.reduce((s, c) => s + c.taxPercentage, 0) / count;

    // Apply Year Trend adjustment if specific year chosen
    let yearFactor = 1.0;
    if (selectedYear !== 'All') {
      const yr = parseInt(selectedYear, 10);
      const trend = YEAR_TRENDS.find((t) => t.year === yr);
      if (trend) {
        yearFactor = trend.petrolPrice / 2.28;
      }
    }

    return {
      avgDiesel: +(avgDiesel * yearFactor).toFixed(2),
      avgLpg: +(avgLpg * yearFactor).toFixed(2),
      avgPetrol: +(avgPetrol * yearFactor).toFixed(2),
      avgTaxPercentage: +avgTax.toFixed(2),
    };
  }, [filteredCountries, selectedYear]);

  // Reset Filters
  const handleReset = () => {
    setSelectedCountry('All');
    setSelectedRegion('All');
    setSelectedYear('All');
    setSelectedIncome('All');
    setSelectedSubsidy('All');
    setActiveMeasure('All Measures');
  };

  const handleCountryPick = (c: CountryFuelStat) => {
    setSelectedCountry(c.name);
    onSelectCountry?.(c);
  };

  const regionsList: Region[] = [
    'North America',
    'Europe',
    'Asia',
    'Middle East',
    'South America',
    'Africa',
    'Oceania',
  ];

  return (
    <div
      className={`relative font-sans bg-[#87c5d9] border-2 border-[#5497af] text-slate-900 rounded-sm shadow-md overflow-hidden transition-all ${
        isFullscreen
          ? 'fixed inset-0 z-50 p-3 bg-slate-900/90 overflow-y-auto'
          : 'w-full'
      }`}
    >
      <div className={`bg-[#9bd6e6] border border-[#64a9be] p-2 ${isFullscreen ? 'max-w-7xl mx-auto rounded shadow-2xl' : ''}`}>
        
        {/* Main Tableau Header with Filters */}
        <div className="flex flex-col lg:flex-row items-stretch lg:items-center justify-between border-b-2 border-[#569cb2] pb-2 mb-2 gap-2 bg-[#89cadc] px-3 py-2">
          {/* Dashboard Title */}
          <div className="flex items-center space-x-2">
            <div className="w-2.5 h-6 bg-[#0284c7] rounded-xs" />
            <h2 className="text-base sm:text-lg font-bold tracking-tight text-slate-900">
              Global Fuel Prices and Taxation Trends (2020–2026)
            </h2>
          </div>

          {/* Filter Controls Bar (Tableau Filter style) */}
          <div className="flex flex-wrap items-center gap-2 text-xs">
            {/* Measure Names */}
            <div className="flex items-center space-x-1 bg-[#d8f1f8] border border-[#71b3c7] px-2 py-1 rounded shadow-xs">
              <span className="text-[10.5px] text-slate-600 font-medium">Measure Names:</span>
              <select
                aria-label="Filter by Measure Names"
                value={activeMeasure}
                onChange={(e) => setActiveMeasure(e.target.value)}
                className="bg-white text-slate-800 text-[11px] font-medium border border-slate-300 rounded px-1 py-0.5 focus:outline-none focus:ring-1 focus:ring-sky-500"
              >
                <option value="All Measures">(Multiple values)</option>
                <option value="Petrol">Avg. Petrol USD/L</option>
                <option value="Diesel">Avg. Diesel USD/L</option>
                <option value="LPG">Avg. LPG USD/L</option>
                <option value="Tax">Avg. Tax Percentage</option>
                <option value="Brent">Brent Crude Price</option>
              </select>
            </div>

            {/* Country Selector */}
            <div className="flex items-center space-x-1 bg-[#d8f1f8] border border-[#71b3c7] px-2 py-1 rounded shadow-xs">
              <span className="text-[10.5px] text-slate-600 font-medium">Country:</span>
              <select
                aria-label="Filter by Country"
                value={selectedCountry}
                onChange={(e) => setSelectedCountry(e.target.value)}
                className="bg-white text-slate-800 text-[11px] font-medium border border-slate-300 rounded px-1 py-0.5 max-w-[130px] focus:outline-none focus:ring-1 focus:ring-sky-500"
              >
                <option value="All">(All)</option>
                {COUNTRIES_DATA.map((c) => (
                  <option key={c.id} value={c.name}>
                    {c.name}
                  </option>
                ))}
              </select>
            </div>

            {/* Year Selector */}
            <div className="flex items-center space-x-1 bg-[#d8f1f8] border border-[#71b3c7] px-2 py-1 rounded shadow-xs">
              <span className="text-[10.5px] text-slate-600 font-medium">Action (YEAR(Date)):</span>
              <select
                aria-label="Filter by Year"
                value={selectedYear}
                onChange={(e) => setSelectedYear(e.target.value)}
                className="bg-white text-slate-800 text-[11px] font-medium border border-slate-300 rounded px-1 py-0.5 focus:outline-none focus:ring-1 focus:ring-sky-500"
              >
                <option value="All">(All)</option>
                <option value="2020">2020</option>
                <option value="2021">2021</option>
                <option value="2022">2022</option>
                <option value="2023">2023</option>
                <option value="2024">2024</option>
                <option value="2025">2025</option>
                <option value="2026">2026</option>
                <option value="2027">2027 (Forecast)</option>
              </select>
            </div>

            {/* Region Filter */}
            <div className="flex items-center space-x-1 bg-[#d8f1f8] border border-[#71b3c7] px-2 py-1 rounded shadow-xs">
              <span className="text-[10.5px] text-slate-600 font-medium">Region:</span>
              <select
                aria-label="Filter by Region"
                value={selectedRegion}
                onChange={(e) => setSelectedRegion(e.target.value)}
                className="bg-white text-slate-800 text-[11px] font-medium border border-slate-300 rounded px-1 py-0.5 focus:outline-none focus:ring-1 focus:ring-sky-500"
              >
                <option value="All">(All)</option>
                {regionsList.map((r) => (
                  <option key={r} value={r}>
                    {r}
                  </option>
                ))}
              </select>
            </div>

            {/* Reset Button */}
            {(selectedCountry !== 'All' ||
              selectedRegion !== 'All' ||
              selectedYear !== 'All') && (
              <button
                onClick={handleReset}
                title="Reset all filters"
                className="flex items-center space-x-1 bg-white hover:bg-slate-100 text-slate-700 text-[11px] px-2 py-1 rounded border border-slate-300 transition"
              >
                <RotateCcw className="w-3 h-3 text-sky-600" />
                <span>Reset</span>
              </button>
            )}

            {/* Fullscreen Toggle */}
            <button
              onClick={() => setIsFullscreen(!isFullscreen)}
              title={isFullscreen ? 'Exit Fullscreen' : 'Fullscreen'}
              className="p-1 rounded bg-[#d8f1f8] hover:bg-white text-slate-700 border border-[#71b3c7] transition"
            >
              {isFullscreen ? (
                <Minimize2 className="w-3.5 h-3.5" />
              ) : (
                <Maximize2 className="w-3.5 h-3.5" />
              )}
            </button>
          </div>
        </div>

        {/* Global Fuel Price and Tax Performance Indicators Bar */}
        <div className="mb-2 border border-[#6cb2c7] bg-[#7ebed1] shadow-xs">
          <div className="bg-[#5eaec4] text-slate-900 font-bold text-xs py-1 px-3 text-center border-b border-[#4d9eb4] tracking-wide uppercase">
            Global Fuel Price and Tax Performance Indicators
          </div>
          <div className="grid grid-cols-2 sm:grid-cols-4 divide-x divide-[#6cb2c7] text-center bg-[#b8e4f0]">
            {/* Avg Diesel */}
            <div className="p-2 hover:bg-[#aee0ee] transition">
              <div className="text-[11px] font-semibold text-slate-700">
                Avg. Diesel Usd Liter
              </div>
              <div className="text-lg sm:text-xl font-bold text-slate-900 font-mono mt-0.5">
                {dynamicKpis.avgDiesel}$
              </div>
              <div className="text-[9.5px] text-slate-600">
                Global Benchmark
              </div>
            </div>

            {/* Avg LPG */}
            <div className="p-2 hover:bg-[#aee0ee] transition">
              <div className="text-[11px] font-semibold text-slate-700">
                Avg. Lpg Usd Liter
              </div>
              <div className="text-lg sm:text-xl font-bold text-slate-900 font-mono mt-0.5">
                {dynamicKpis.avgLpg}$
              </div>
              <div className="text-[9.5px] text-slate-600">
                Alternative Transport
              </div>
            </div>

            {/* Avg Petrol */}
            <div className="p-2 hover:bg-[#aee0ee] transition">
              <div className="text-[11px] font-semibold text-slate-700">
                Avg. Petrol Usd Liter
              </div>
              <div className="text-lg sm:text-xl font-bold text-slate-900 font-mono mt-0.5">
                {dynamicKpis.avgPetrol}$
              </div>
              <div className="text-[9.5px] text-slate-600">
                Consumer Baseline
              </div>
            </div>

            {/* Avg Tax Percentage */}
            <div className="p-2 hover:bg-[#aee0ee] transition">
              <div className="text-[11px] font-semibold text-slate-700">
                Avg. Tax Percentage
              </div>
              <div className="text-lg sm:text-xl font-bold text-slate-900 font-mono mt-0.5">
                {dynamicKpis.avgTaxPercentage}%
              </div>
              <div className="text-[9.5px] text-slate-600">
                Fiscal Levy Share
              </div>
            </div>
          </div>
        </div>

        {/* Dashboard Visualization Grid (Layout identical to Screenshot image_bc586489.png) */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-2">
          
          {/* Column 1 (Left): 5 columns wide - 2 World Choropleth Maps */}
          <div className="lg:col-span-5 flex flex-col gap-2">
            {/* Map 1: Global Comparison of Average Petrol Prices */}
            <div className="flex-1 min-h-[220px]">
              <WorldChoroplethMap
                title="Global Comparison of Average Petrol Prices (USD per Liter)"
                metric="petrol"
                countries={filteredCountries}
                onSelectCountry={handleCountryPick}
                selectedCountryId={
                  COUNTRIES_DATA.find((c) => c.name === selectedCountry)?.id
                }
              />
            </div>

            {/* Map 2: Global Comparison of Average Diesel Prices */}
            <div className="flex-1 min-h-[220px]">
              <WorldChoroplethMap
                title="Global Comparison of Average Diesel Prices (USD per Liter)"
                metric="diesel"
                countries={filteredCountries}
                onSelectCountry={handleCountryPick}
                selectedCountryId={
                  COUNTRIES_DATA.find((c) => c.name === selectedCountry)?.id
                }
              />
            </div>
          </div>

          {/* Column 2 (Middle): 4 columns wide - 4 Stacked Trend Charts */}
          <div className="lg:col-span-4 flex flex-col gap-2">
            {/* Petrol Trend */}
            <div className="h-[105px]">
              <TrendAreaChart
                title="Global Trend of Average Petrol Prices (2020–2027)"
                data={YEAR_TRENDS.map((t) => ({ year: t.year, val: t.petrolPrice }))}
                yAxisLabel="Avg. Pet.."
                minY={1.2}
                maxY={2.8}
                accentColor="#2563eb"
              />
            </div>

            {/* Diesel Trend */}
            <div className="h-[105px]">
              <TrendAreaChart
                title="Global Trend of Average Diesel Prices (2020–2027)"
                data={YEAR_TRENDS.map((t) => ({ year: t.year, val: t.dieselPrice }))}
                yAxisLabel="Avg. Die.."
                minY={1.2}
                maxY={2.6}
                accentColor="#059669"
              />
            </div>

            {/* LPG Trend */}
            <div className="h-[105px]">
              <TrendAreaChart
                title="Global Trend of Average Lpg Prices (2020–2027)"
                data={YEAR_TRENDS.map((t) => ({ year: t.year, val: t.lpgPrice }))}
                yAxisLabel="Avg. Lpg.."
                minY={1.0}
                maxY={2.1}
                accentColor="#d97706"
              />
            </div>

            {/* Brent Crude Oil Prices Trend */}
            <div className="h-[105px]">
              <TrendAreaChart
                title="Global Trend of Average Brent Crude Oil Prices (2020–2027)"
                data={YEAR_TRENDS.map((t) => ({ year: t.year, val: t.brentPrice }))}
                yAxisLabel="Avg. Bren.."
                isCurrency={false}
                minY={30}
                maxY={130}
                accentColor="#dc2626"
              />
            </div>
          </div>

          {/* Column 3 (Right): 3 columns wide - Regional Donut & Highest Tax Bar */}
          <div className="lg:col-span-3 flex flex-col gap-2">
            {/* Regional Tax Donut */}
            <div className="h-[215px]">
              <RegionalTaxDonutChart
                data={REGIONAL_TAX_DATA}
                onSelectRegion={(reg) =>
                  setSelectedRegion(selectedRegion === reg ? 'All' : reg)
                }
                selectedRegion={selectedRegion}
              />
            </div>

            {/* Highest Tax-Paying Nations Bar Chart */}
            <div className="flex-1 min-h-[215px]">
              <HighestTaxBarChart
                onSelectCountry={(c) => setSelectedCountry(c)}
              />
            </div>
          </div>

        </div>

        {/* Bottom Section: Fuel Price Comparison Among Top 3 Countries */}
        <div className="mt-2">
          <Top3CountriesBarChart />
        </div>

        {/* Embedded Tableau Controls Strip */}
        <div className="mt-2 pt-2 border-t border-[#76b9cd] flex items-center justify-between text-xs text-slate-700 bg-[#91d1e2] px-2 py-1 rounded-xs">
          <div className="flex items-center space-x-2">
            <span className="text-[10px] text-slate-600 font-mono">
              Tableau Public Engine • 84 Countries • 27,468 Rows Connected
            </span>
          </div>

          <div className="flex items-center space-x-3">
            {/* Navigation arrows */}
            <div className="flex items-center space-x-1 border border-slate-400/40 rounded px-1 bg-white/70">
              <button 
                title="Scroll/Pan Left" 
                className="p-0.5 hover:text-blue-600 transition"
                onClick={() => setSelectedRegion(selectedRegion === 'All' ? 'Europe' : 'All')}
              >
                <ChevronLeft className="w-3.5 h-3.5" />
              </button>
              <button 
                title="Scroll/Pan Right" 
                className="p-0.5 hover:text-blue-600 transition"
                onClick={() => setSelectedRegion(selectedRegion === 'All' ? 'Asia' : 'All')}
              >
                <ChevronRight className="w-3.5 h-3.5" />
              </button>
            </div>

            {/* Download dataset */}
            <button
              onClick={() => {
                const csvData = [
                  'Country,Region,PetrolPriceUSD,DieselPriceUSD,LpgPriceUSD,TaxPercentage,SubsidyLevel',
                  ...filteredCountries.map(
                    (c) =>
                      `"${c.name}","${c.region}",${c.petrolPrice},${c.dieselPrice},${c.lpgPrice},${c.taxPercentage},"${c.subsidyLevel}"`
                  ),
                ].join('\n');
                const blob = new Blob([csvData], { type: 'text/csv' });
                const url = URL.createObjectURL(blob);
                const a = document.createElement('a');
                a.href = url;
                a.download = `Global_Fuel_Prices_${selectedRegion}_${selectedCountry}.csv`;
                a.click();
              }}
              title="Download Filtered Data (CSV)"
              className="flex items-center space-x-1 bg-white hover:bg-slate-100 text-slate-800 text-[10.5px] px-2 py-0.5 rounded border border-slate-300 font-medium transition"
            >
              <Download className="w-3 h-3 text-sky-600" />
              <span>Export CSV</span>
            </button>

            {/* Share */}
            <button
              onClick={() => {
                navigator.clipboard?.writeText(window.location.href);
                alert('Dashboard state link copied to clipboard!');
              }}
              title="Share Dashboard"
              className="p-1 rounded bg-white hover:bg-slate-100 text-slate-700 border border-slate-300 transition"
            >
              <Share2 className="w-3 h-3" />
            </button>
          </div>
        </div>

      </div>
    </div>
  );
};
