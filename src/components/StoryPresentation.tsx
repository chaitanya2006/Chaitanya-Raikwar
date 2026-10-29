import React, { useState } from 'react';
import { ChevronLeft, ChevronRight, BookOpen, TrendingUp, DollarSign, Globe, Award, ShieldAlert } from 'lucide-react';
import { TrendAreaChart, RegionalTaxDonutChart, HighestTaxBarChart, Top3CountriesBarChart } from './TableauCharts';
import { WorldChoroplethMap } from './WorldChoroplethMap';
import { COUNTRIES_DATA, YEAR_TRENDS, REGIONAL_TAX_DATA } from '../data/fuelDataset';

export const StoryPresentation: React.FC = () => {
  const [activeStoryIdx, setActiveStoryIdx] = useState(0);

  const stories = [
    {
      id: 'story-1',
      tabTitle: 'Global Fuel Price and Tax Performance Indicators',
      heading: 'Macro Indicators: Benchmark Baseline Across 84 Nations',
      summary:
        'Between 2020 and 2026, the global weighted average price for Petrol stabilized at $2.28 per liter, with Diesel at $2.13 per liter, and LPG at $1.71 per liter. Across all surveyed jurisdictions, statutory fuel taxation accounted for an average of 26.77% of retail pump prices.',
      takeaways: [
        'Global tax rates range widely from 6.5% in subsidized producers (Iran, Venezuela) to nearly 40% in Western Europe and Rwanda.',
        'LPG consistently traded at a 25% discount to diesel, making it the primary transition fuel for light commercial transit in emerging regions.',
        'Post-pandemic supply chain adjustments resulted in a 41% baseline pump escalation between 2020 and 2022 before plateauing.',
      ],
      component: 'kpis',
    },
    {
      id: 'story-2',
      tabTitle: 'Global Comparison of Average Petrol Prices (USD per Liter)',
      heading: 'Geographic Disparities: Europe vs. Resource-Rich Exporters',
      summary:
        'Petrol retail pricing exhibits extreme geographic variance. Northern and Western European economies average over $2.45/L driven by high excise duties and environmental carbon levies. In contrast, Gulf Cooperation Council (GCC) states and North Africa leverage domestic refining to keep prices below $1.30/L.',
      takeaways: [
        'Hong Kong and Iceland record the highest consumer petrol costs globally, exceeding $2.60/L.',
        'Developing nations in Sub-Saharan Africa experience severe import parity premiums despite lower raw consumption.',
        'Central and North American markets display moderate volatility cushioned by flexible refining capacity.',
      ],
      component: 'map-petrol',
    },
    {
      id: 'story-3',
      tabTitle: 'Global Comparison of Average Diesel Prices (USD per Liter)',
      heading: 'Diesel Parity Inversion: Commercial Transport Pressures',
      summary:
        'Historically, diesel traded below petrol to subsidize freight, rail, and agriculture. However, post-2022 European refinery recalibrations and strict sulfur emission standards eliminated this discount, pushing diesel to parity ($2.13–$2.38/L) across 42 countries.',
      takeaways: [
        'Freight corridor costs in the EU escalated by 18% during peak diesel parity inversions.',
        'Heavy industrial logistics companies increased fuel hedging ratios to cope with seasonal diesel crunches.',
        'Asian agricultural economies maintained targeted agrarian diesel subsidies to prevent food supply inflation.',
      ],
      component: 'map-diesel',
    },
    {
      id: 'story-4',
      tabTitle: 'Global Trend of Average Petrol Prices & Brent Crude Transmission',
      heading: 'Crude Transmission Elasticity: The 2020–2026 Price Shocks',
      summary:
        'Brent Crude spiked from $41.80/bbl during the 2020 demand trough to $117.15/bbl in 2023. Retail fuel prices tracked crude with an asymmetric pass-through elasticity of 0.72 on the upside, but only 0.44 on the downside—demonstrating persistent "rockets and feathers" pricing.',
      takeaways: [
        'Raw crude accounts for 46% of retail petrol price variance; local taxation and distribution account for 54%.',
        '2024–2026 forecast models project plateauing around $113–$118/bbl for Brent, anchoring petrol near $2.13/L.',
        'Governments with ad-valorem taxation captured windfall revenues during the 2022 crude spike.',
      ],
      component: 'trends',
    },
    {
      id: 'story-5',
      tabTitle: 'Highest Tax-Paying Nations & Fiscal Subsidy Disparities',
      heading: 'Tax Regimes & Fiscal Policy: Who Bears the Burden?',
      summary:
        'Rwanda (39.56%), New Zealand (39.27%), Germany (39.21%), Turkey (38.99%), and Denmark (38.87%) lead the world in fuel taxation intensity. These nations treat fuel duty as a dual-purpose tool: funding national transport infrastructure and deterring carbon emissions.',
      takeaways: [
        'European Union regulations enforce mandatory minimum excise duties, establishing an effective tax floor of ~35%.',
        'Subsidizing nations spend up to 7% of national GDP on fuel price caps, exposing state treasuries to acute balance-of-payments vulnerability.',
        'Income-adjusted analysis reveals that lower-middle-income citizens spend up to 14% of disposable income on energy mobility versus 3.2% in high-income nations.',
      ],
      component: 'tax-compare',
    },
  ];

  const current = stories[activeStoryIdx];

  return (
    <div className="border border-[#7bbcd2] bg-[#a2d8e7] rounded-sm p-3 font-sans shadow-md">
      {/* Story Header */}
      <div className="text-center mb-3">
        <h3 className="text-xl font-bold text-slate-900 tracking-tight">
          Global Fuel Prices Story
        </h3>
        <p className="text-xs text-slate-700 mt-0.5">
          A step-by-step narrative exploring global trends, fiscal structures, and geopolitical shifts (2020–2026).
        </p>
      </div>

      {/* Story Navigation Tabs */}
      <div className="border-b border-[#6eb2c6] flex items-center gap-1 overflow-x-auto pb-1 bg-[#8ecde0] p-1 rounded-t-sm">
        <button
          onClick={() => setActiveStoryIdx(Math.max(0, activeStoryIdx - 1))}
          disabled={activeStoryIdx === 0}
          className="p-1.5 rounded hover:bg-white/80 disabled:opacity-40 disabled:hover:bg-transparent text-slate-700 transition"
        >
          <ChevronLeft className="w-4 h-4" />
        </button>

        <div className="flex-1 flex gap-1 overflow-x-auto scrollbar-thin">
          {stories.map((story, idx) => (
            <button
              key={story.id}
              onClick={() => setActiveStoryIdx(idx)}
              className={`text-[11px] font-medium py-1.5 px-3 rounded-t transition whitespace-nowrap text-left border-t-2 ${
                activeStoryIdx === idx
                  ? 'bg-[#d8f1f8] text-slate-900 border-[#0284c7] font-semibold shadow-xs'
                  : 'bg-[#76bed3] text-slate-700 border-transparent hover:bg-[#86c8dc]'
              }`}
            >
              <div className="text-[9px] text-slate-500 uppercase tracking-wider">Part {idx + 1}</div>
              <div className="truncate max-w-[170px]">{story.tabTitle}</div>
            </button>
          ))}
        </div>

        <button
          onClick={() => setActiveStoryIdx(Math.min(stories.length - 1, activeStoryIdx + 1))}
          disabled={activeStoryIdx === stories.length - 1}
          className="p-1.5 rounded hover:bg-white/80 disabled:opacity-40 disabled:hover:bg-transparent text-slate-700 transition"
        >
          <ChevronRight className="w-4 h-4" />
        </button>
      </div>

      {/* Story Slide Content Area */}
      <div className="bg-[#d8f1f8] border-x border-b border-[#6eb2c6] p-4 rounded-b-sm">
        
        {/* Story Headline & Summary */}
        <div className="mb-4">
          <div className="flex items-center space-x-2 text-xs text-sky-800 font-semibold uppercase tracking-wider mb-1">
            <BookOpen className="w-3.5 h-3.5" />
            <span>Story Chapter {activeStoryIdx + 1} of {stories.length}</span>
          </div>
          <h4 className="text-lg font-bold text-slate-900 mb-1">
            {current.heading}
          </h4>
          <p className="text-xs text-slate-700 leading-relaxed max-w-4xl">
            {current.summary}
          </p>
        </div>

        {/* Visual Component Render */}
        <div className="bg-[#bfe6f2] border border-[#8ec8db] p-2.5 rounded mb-4">
          {current.component === 'kpis' && (
            <div className="grid grid-cols-2 md:grid-cols-4 gap-3 text-center">
              <div className="bg-white/85 p-3 rounded shadow-xs border border-sky-200">
                <span className="text-[11px] text-slate-600 block">Avg. Diesel Usd Liter</span>
                <span className="text-2xl font-bold text-slate-900 font-mono mt-1 block">$2.13</span>
                <span className="text-[10px] text-emerald-600 font-medium">Weighted Global Mean</span>
              </div>
              <div className="bg-white/85 p-3 rounded shadow-xs border border-sky-200">
                <span className="text-[11px] text-slate-600 block">Avg. Lpg Usd Liter</span>
                <span className="text-2xl font-bold text-slate-900 font-mono mt-1 block">$1.71</span>
                <span className="text-[10px] text-amber-600 font-medium">Alternative Fuel Discount</span>
              </div>
              <div className="bg-white/85 p-3 rounded shadow-xs border border-sky-200">
                <span className="text-[11px] text-slate-600 block">Avg. Petrol Usd Liter</span>
                <span className="text-2xl font-bold text-slate-900 font-mono mt-1 block">$2.28</span>
                <span className="text-[10px] text-blue-600 font-medium">Consumer Mobility Core</span>
              </div>
              <div className="bg-white/85 p-3 rounded shadow-xs border border-sky-200">
                <span className="text-[11px] text-slate-600 block">Avg. Tax Percentage</span>
                <span className="text-2xl font-bold text-slate-900 font-mono mt-1 block">26.77%</span>
                <span className="text-[10px] text-purple-600 font-medium">Sovereign Fiscal Levy</span>
              </div>
            </div>
          )}

          {current.component === 'map-petrol' && (
            <div className="h-[280px]">
              <WorldChoroplethMap
                title="Global Comparison of Average Petrol Prices (USD per Liter)"
                metric="petrol"
                countries={COUNTRIES_DATA}
              />
            </div>
          )}

          {current.component === 'map-diesel' && (
            <div className="h-[280px]">
              <WorldChoroplethMap
                title="Global Comparison of Average Diesel Prices (USD per Liter)"
                metric="diesel"
                countries={COUNTRIES_DATA}
              />
            </div>
          )}

          {current.component === 'trends' && (
            <div className="grid grid-cols-1 md:grid-cols-2 gap-2">
              <div className="h-[130px]">
                <TrendAreaChart
                  title="Global Trend of Average Petrol Prices (2020–2027)"
                  data={YEAR_TRENDS.map((t) => ({ year: t.year, val: t.petrolPrice }))}
                  yAxisLabel="Petrol ($/L)"
                  minY={1.2}
                  maxY={2.8}
                  accentColor="#2563eb"
                />
              </div>
              <div className="h-[130px]">
                <TrendAreaChart
                  title="Global Trend of Average Brent Crude Oil Prices (2020–2027)"
                  data={YEAR_TRENDS.map((t) => ({ year: t.year, val: t.brentPrice }))}
                  yAxisLabel="Brent ($/bbl)"
                  isCurrency={false}
                  minY={30}
                  maxY={130}
                  accentColor="#dc2626"
                />
              </div>
            </div>
          )}

          {current.component === 'tax-compare' && (
            <div className="grid grid-cols-1 md:grid-cols-2 gap-2">
              <div className="h-[200px]">
                <RegionalTaxDonutChart data={REGIONAL_TAX_DATA} />
              </div>
              <div className="h-[200px]">
                <HighestTaxBarChart />
              </div>
            </div>
          )}
        </div>

        {/* Narrative Key Takeaways Bullet Cards */}
        <div className="bg-white/80 p-3 rounded border border-sky-200">
          <div className="text-xs font-bold text-slate-800 uppercase tracking-wide mb-2 flex items-center space-x-1.5">
            <TrendingUp className="w-3.5 h-3.5 text-sky-600" />
            <span>Key Takeaways for Stakeholders</span>
          </div>
          <ul className="space-y-1.5 text-xs text-slate-700">
            {current.takeaways.map((point, i) => (
              <li key={i} className="flex items-start space-x-2">
                <span className="inline-block w-1.5 h-1.5 rounded-full bg-sky-500 mt-1.5 shrink-0" />
                <span>{point}</span>
              </li>
            ))}
          </ul>
        </div>

        {/* Slide Progress Bar */}
        <div className="flex items-center justify-between mt-4 pt-3 border-t border-sky-200 text-xs text-slate-600">
          <span>Slide {activeStoryIdx + 1} of {stories.length}</span>
          <div className="flex items-center space-x-2">
            <button
              onClick={() => setActiveStoryIdx(Math.max(0, activeStoryIdx - 1))}
              disabled={activeStoryIdx === 0}
              className="px-2.5 py-1 bg-white hover:bg-slate-100 disabled:opacity-40 rounded border border-slate-300 transition text-[11px]"
            >
              Previous Slide
            </button>
            <button
              onClick={() => setActiveStoryIdx(Math.min(stories.length - 1, activeStoryIdx + 1))}
              disabled={activeStoryIdx === stories.length - 1}
              className="px-2.5 py-1 bg-sky-600 hover:bg-sky-700 text-white disabled:opacity-40 rounded font-medium transition text-[11px]"
            >
              Next Slide
            </button>
          </div>
        </div>

      </div>
    </div>
  );
};
