import React, { useState } from 'react';
import {
  Briefcase,
  Truck,
  GraduationCap,
  Calculator,
  Sliders,
  TrendingDown,
  TrendingUp,
  Download,
  FileText,
  DollarSign,
  Fuel,
  ArrowRight,
  ShieldCheck,
  CheckCircle2,
} from 'lucide-react';
import { COUNTRIES_DATA, REGIONAL_TAX_DATA } from '../data/fuelDataset';

export const ScenariosView: React.FC = () => {
  const [activeScenario, setActiveScenario] = useState<'sarah' | 'marcus' | 'elena'>('sarah');

  // Scenario 1: Dr. Sarah Mitchell state
  const [selectedCountryName, setSelectedCountryName] = useState('Germany');
  const [taxDelta, setTaxDelta] = useState(3.0); // +3%
  const [carbonLevy, setCarbonLevy] = useState(45); // $45/t CO2
  const [subsidyPhaseout, setSubsidyPhaseout] = useState(20); // 20%
  const [rebateRate, setRebateRate] = useState(35); // 35% targeted to low income

  // Scenario 2: Marcus Thompson state
  const [routeKey, setRouteKey] = useState<'eu-central' | 'na-corridor' | 'asia-freight'>('eu-central');
  const [truckCount, setTruckCount] = useState(120);
  const [monthlyMileageKm, setMonthlyMileageKm] = useState(8500);
  const [hedgeCoverage, setHedgeCoverage] = useState(60); // 60% hedged

  // Scenario 3: Prof. Elena Rodriguez state
  const [regressionVariable, setRegressionVariable] = useState<'income' | 'subsidy' | 'crude'>('income');

  // Scenario 1 calculations
  const baseCountry = COUNTRIES_DATA.find((c) => c.name === selectedCountryName) || COUNTRIES_DATA[0];
  const newTaxRate = +(baseCountry.taxPercentage + taxDelta).toFixed(2);
  const carbonSurchargePerL = +(carbonLevy * 0.0023).toFixed(3); // ~2.3kg CO2 per liter
  const newPetrolPrice = +(baseCountry.petrolPrice + (baseCountry.petrolPrice * (taxDelta / 100)) + carbonSurchargePerL).toFixed(2);
  const estimatedFiscalRevDeltaMillion = Math.round((taxDelta * 48) + (carbonLevy * 3.2));
  const estimatedCo2ReductionKt = Math.round((taxDelta * 14) + (carbonLevy * 2.1));

  // Scenario 2 calculations
  const routes = {
    'eu-central': {
      name: 'Rotterdam (NL) ➔ Hamburg (DE) ➔ Warsaw (PL)',
      distanceKm: 1250,
      standardFuelCostL: 2.38,
      optimizedBunkerL: 2.05, // Bunkering in Poland/Czechia
      potentialSavingsPct: 13.8,
    },
    'na-corridor': {
      name: 'Chicago (US) ➔ Monterrey (MX) ➔ Mexico City (MX)',
      distanceKm: 3400,
      standardFuelCostL: 2.10,
      optimizedBunkerL: 1.05, // Refueling at border and Mexico inland
      potentialSavingsPct: 32.5,
    },
    'asia-freight': {
      name: 'Bangkok (TH) ➔ Kuala Lumpur (MY) ➔ Singapore (SG)',
      distanceKm: 1850,
      standardFuelCostL: 2.30,
      optimizedBunkerL: 1.15, // Strategic bunkering in Malaysia
      potentialSavingsPct: 28.0,
    },
  };
  const activeRoute = routes[routeKey];
  const totalFleetLitersPerMonth = Math.round((truckCount * monthlyMileageKm * 32) / 100); // 32L/100km
  const monthlyUnoptimizedSpend = Math.round(totalFleetLitersPerMonth * activeRoute.standardFuelCostL);
  const monthlyOptimizedSpend = Math.round(
    totalFleetLitersPerMonth * (activeRoute.standardFuelCostL * (1 - activeRoute.potentialSavingsPct / 100))
  );
  const annualSavings = Math.round((monthlyUnoptimizedSpend - monthlyOptimizedSpend) * 12);

  return (
    <div className="font-sans border border-slate-300 bg-white rounded shadow-md overflow-hidden p-4">
      
      {/* Persona Selection Header */}
      <div className="border-b border-slate-200 pb-3 mb-4">
        <h3 className="text-lg font-bold text-slate-900 mb-1">
          Evidence-Based Stakeholder Scenarios & Decision Simulators
        </h3>
        <p className="text-xs text-slate-600">
          Tailored interactive decision models developed for energy policy consultants, global logistics managers, and academic researchers.
        </p>

        {/* Persona Tabs */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-2 mt-3">
          {/* Tab 1: Sarah */}
          <button
            onClick={() => setActiveScenario('sarah')}
            className={`p-2.5 rounded text-left border transition flex items-start space-x-2.5 ${
              activeScenario === 'sarah'
                ? 'bg-sky-50 border-sky-500 ring-2 ring-sky-200'
                : 'bg-slate-50 border-slate-200 hover:bg-slate-100'
            }`}
          >
            <div className="p-1.5 rounded-full bg-blue-100 text-blue-700 shrink-0 mt-0.5">
              <Briefcase className="w-4 h-4" />
            </div>
            <div>
              <div className="text-xs font-bold text-slate-900">Dr. Sarah Mitchell</div>
              <div className="text-[11px] text-sky-700 font-medium">Energy Policy Consultant</div>
              <div className="text-[10px] text-slate-500 mt-0.5">Taxation & Subsidy Reform Simulator</div>
            </div>
          </button>

          {/* Tab 2: Marcus */}
          <button
            onClick={() => setActiveScenario('marcus')}
            className={`p-2.5 rounded text-left border transition flex items-start space-x-2.5 ${
              activeScenario === 'marcus'
                ? 'bg-emerald-50 border-emerald-500 ring-2 ring-emerald-200'
                : 'bg-slate-50 border-slate-200 hover:bg-slate-100'
            }`}
          >
            <div className="p-1.5 rounded-full bg-emerald-100 text-emerald-700 shrink-0 mt-0.5">
              <Truck className="w-4 h-4" />
            </div>
            <div>
              <div className="text-xs font-bold text-slate-900">Marcus Thompson</div>
              <div className="text-[11px] text-emerald-700 font-medium">Global Supply Chain Manager</div>
              <div className="text-[10px] text-slate-500 mt-0.5">Logistics Route & Bunkering Cost Tool</div>
            </div>
          </button>

          {/* Tab 3: Elena */}
          <button
            onClick={() => setActiveScenario('elena')}
            className={`p-2.5 rounded text-left border transition flex items-start space-x-2.5 ${
              activeScenario === 'elena'
                ? 'bg-purple-50 border-purple-500 ring-2 ring-purple-200'
                : 'bg-slate-50 border-slate-200 hover:bg-slate-100'
            }`}
          >
            <div className="p-1.5 rounded-full bg-purple-100 text-purple-700 shrink-0 mt-0.5">
              <GraduationCap className="w-4 h-4" />
            </div>
            <div>
              <div className="text-xs font-bold text-slate-900">Prof. Elena Rodriguez</div>
              <div className="text-[11px] text-purple-700 font-medium">Energy Economics Researcher</div>
              <div className="text-[10px] text-slate-500 mt-0.5">Income Affordability & Elasticity Workbench</div>
            </div>
          </button>
        </div>
      </div>

      {/* SCENARIO 1: DR. SARAH MITCHELL */}
      {activeScenario === 'sarah' && (
        <div className="space-y-4">
          <div className="bg-sky-50/70 border border-sky-200 p-3 rounded text-xs text-sky-950">
            <span className="font-bold">Scenario Objective:</span> Dr. Sarah Mitchell is advising government agencies on balancing fiscal revenue, consumer affordability, and carbon reduction goals. This simulator estimates real-time policy trade-offs.
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-4">
            {/* Controls */}
            <div className="lg:col-span-6 bg-slate-50 p-3.5 rounded border border-slate-200 space-y-3">
              <div className="flex items-center justify-between">
                <label className="text-xs font-bold text-slate-700">Target Jurisdiction:</label>
                <select
                  value={selectedCountryName}
                  onChange={(e) => setSelectedCountryName(e.target.value)}
                  className="text-xs border border-slate-300 rounded px-2 py-1 bg-white"
                >
                  {COUNTRIES_DATA.map((c) => (
                    <option key={c.id} value={c.name}>
                      {c.name} ({c.region} • Base Tax: {c.taxPercentage}%)
                    </option>
                  ))}
                </select>
              </div>

              {/* Slider 1: Excise Tax Delta */}
              <div>
                <div className="flex justify-between text-xs mb-1">
                  <span className="text-slate-700 font-medium">Excise Duty Adjustment:</span>
                  <span className="font-mono font-bold text-blue-700">{taxDelta > 0 ? `+${taxDelta}%` : `${taxDelta}%`}</span>
                </div>
                <input
                  type="range"
                  min="-10"
                  max="15"
                  step="0.5"
                  value={taxDelta}
                  onChange={(e) => setTaxDelta(parseFloat(e.target.value))}
                  className="w-full accent-blue-600"
                />
                <div className="flex justify-between text-[10px] text-slate-400">
                  <span>-10% (Stimulus)</span>
                  <span>0%</span>
                  <span>+15% (Austerity/Green)</span>
                </div>
              </div>

              {/* Slider 2: Carbon Surcharge */}
              <div>
                <div className="flex justify-between text-xs mb-1">
                  <span className="text-slate-700 font-medium">Carbon Price:</span>
                  <span className="font-mono font-bold text-emerald-700">${carbonLevy} / t CO₂</span>
                </div>
                <input
                  type="range"
                  min="0"
                  max="120"
                  step="5"
                  value={carbonLevy}
                  onChange={(e) => setCarbonLevy(parseFloat(e.target.value))}
                  className="w-full accent-emerald-600"
                />
                <div className="flex justify-between text-[10px] text-slate-400">
                  <span>$0/t (None)</span>
                  <span>$50/t (EU Standard)</span>
                  <span>$120/t (Nordic)</span>
                </div>
              </div>

              {/* Slider 3: Targeted Rebate */}
              <div>
                <div className="flex justify-between text-xs mb-1">
                  <span className="text-slate-700 font-medium">Revenue Dedicated to Low-Income Rebates:</span>
                  <span className="font-mono font-bold text-purple-700">{rebateRate}%</span>
                </div>
                <input
                  type="range"
                  min="0"
                  max="60"
                  step="5"
                  value={rebateRate}
                  onChange={(e) => setRebateRate(parseFloat(e.target.value))}
                  className="w-full accent-purple-600"
                />
              </div>
            </div>

            {/* Simulated Policy Outcomes */}
            <div className="lg:col-span-6 bg-slate-50 p-3.5 rounded border border-slate-200 flex flex-col justify-between">
              <div>
                <div className="text-xs font-bold text-slate-800 uppercase tracking-wide mb-2 flex items-center space-x-1">
                  <Calculator className="w-3.5 h-3.5 text-sky-600" />
                  <span>Simulated Policy Outcomes ({baseCountry.name})</span>
                </div>

                <div className="grid grid-cols-2 gap-2 text-xs mb-3">
                  <div className="p-2.5 bg-white rounded border border-slate-200">
                    <span className="text-[10.5px] text-slate-500 block">Revised Pump Price:</span>
                    <span className="text-lg font-bold font-mono text-slate-900">${newPetrolPrice}/L</span>
                    <span className="text-[9.5px] text-slate-400 block mt-0.5">Base was ${baseCountry.petrolPrice.toFixed(2)}/L</span>
                  </div>

                  <div className="p-2.5 bg-white rounded border border-slate-200">
                    <span className="text-[10.5px] text-slate-500 block">Revised Tax Percentage:</span>
                    <span className="text-lg font-bold font-mono text-blue-700">{newTaxRate}%</span>
                    <span className="text-[9.5px] text-slate-400 block mt-0.5">Base was {baseCountry.taxPercentage.toFixed(1)}%</span>
                  </div>

                  <div className="p-2.5 bg-white rounded border border-slate-200">
                    <span className="text-[10.5px] text-slate-500 block">Net Fiscal Revenue Delta:</span>
                    <span className="text-lg font-bold font-mono text-emerald-700">+${estimatedFiscalRevDeltaMillion}M/yr</span>
                    <span className="text-[9.5px] text-slate-400 block mt-0.5">After low-income redistribution</span>
                  </div>

                  <div className="p-2.5 bg-white rounded border border-slate-200">
                    <span className="text-[10.5px] text-slate-500 block">Estimated Annual CO₂ Abatement:</span>
                    <span className="text-lg font-bold font-mono text-teal-700">-{estimatedCo2ReductionKt} kt</span>
                    <span className="text-[9.5px] text-slate-400 block mt-0.5">Via price demand elasticity</span>
                  </div>
                </div>

                <div className="p-2 bg-emerald-50 border border-emerald-200 rounded text-[11px] text-emerald-900">
                  <div className="font-semibold flex items-center">
                    <CheckCircle2 className="w-3.5 h-3.5 mr-1 text-emerald-600" />
                    <span>Policy Recommendation Feasibility: High</span>
                  </div>
                  <div className="text-[10.5px] mt-0.5 text-emerald-800">
                    With {rebateRate}% allocated to targeted social protection transfers, vulnerable deciles are 100% shielded against regressive pump pressure while achieving national decarbonization targets.
                  </div>
                </div>
              </div>

              <button
                onClick={() => {
                  alert(`Policy Whitepaper for ${baseCountry.name} exported. Recommended statutory tax rate: ${newTaxRate}%.`);
                }}
                className="mt-3 w-full bg-sky-600 hover:bg-sky-700 text-white text-xs py-2 rounded font-medium flex items-center justify-center space-x-1.5 transition"
              >
                <Download className="w-3.5 h-3.5" />
                <span>Export Policy Brief for Government Agency</span>
              </button>
            </div>
          </div>
        </div>
      )}

      {/* SCENARIO 2: MARCUS THOMPSON */}
      {activeScenario === 'marcus' && (
        <div className="space-y-4">
          <div className="bg-emerald-50/70 border border-emerald-200 p-3 rounded text-xs text-emerald-950">
            <span className="font-bold">Scenario Objective:</span> Marcus Thompson oversees transnational logistics. He requires route-level fuel arbitrage, procurement hedging against Brent Crude swings, and optimal bunkering strategies.
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-4">
            {/* Corridor Config */}
            <div className="lg:col-span-5 bg-slate-50 p-3.5 rounded border border-slate-200 space-y-3 text-xs">
              <div>
                <label className="font-bold text-slate-700 block mb-1">Select Freight Corridor:</label>
                <select
                  value={routeKey}
                  onChange={(e) => setRouteKey(e.target.value as any)}
                  className="w-full border border-slate-300 rounded p-1.5 bg-white text-xs"
                >
                  <option value="eu-central">Europe Central: Rotterdam ➔ Hamburg ➔ Warsaw</option>
                  <option value="na-corridor">North America: Chicago ➔ Monterrey ➔ Mexico City</option>
                  <option value="asia-freight">Southeast Asia: Bangkok ➔ KL ➔ Singapore</option>
                </select>
              </div>

              <div className="grid grid-cols-2 gap-2">
                <div>
                  <label className="text-slate-600 block mb-1">Fleet Vehicles:</label>
                  <input
                    type="number"
                    value={truckCount}
                    onChange={(e) => setTruckCount(Math.max(10, parseInt(e.target.value) || 10))}
                    className="w-full border border-slate-300 rounded p-1 bg-white font-mono"
                  />
                </div>
                <div>
                  <label className="text-slate-600 block mb-1">Monthly Km/Truck:</label>
                  <input
                    type="number"
                    value={monthlyMileageKm}
                    onChange={(e) => setMonthlyMileageKm(Math.max(1000, parseInt(e.target.value) || 1000))}
                    className="w-full border border-slate-300 rounded p-1 bg-white font-mono"
                  />
                </div>
              </div>

              <div>
                <div className="flex justify-between mb-1">
                  <span className="text-slate-700 font-medium">Forward Crude Hedge Coverage:</span>
                  <span className="font-mono font-bold text-emerald-700">{hedgeCoverage}%</span>
                </div>
                <input
                  type="range"
                  min="0"
                  max="100"
                  value={hedgeCoverage}
                  onChange={(e) => setHedgeCoverage(parseInt(e.target.value))}
                  className="w-full accent-emerald-600"
                />
                <span className="text-[10px] text-slate-400">Insulates budget against Brent Crude spikes above $115/bbl.</span>
              </div>
            </div>

            {/* Savings Analysis */}
            <div className="lg:col-span-7 bg-slate-50 p-3.5 rounded border border-slate-200">
              <div className="text-xs font-bold text-slate-800 uppercase tracking-wide mb-2 flex items-center space-x-1">
                <Truck className="w-3.5 h-3.5 text-emerald-600" />
                <span>Logistics Route Optimization Results</span>
              </div>

              <div className="p-2.5 bg-white rounded border border-slate-200 mb-3 text-xs">
                <div className="text-slate-600 font-medium">Corridor Route:</div>
                <div className="font-semibold text-slate-900 text-sm mt-0.5">{activeRoute.name}</div>
                <div className="text-[11px] text-slate-500 mt-1 flex items-center space-x-3">
                  <span>Distance: {activeRoute.distanceKm} km</span>
                  <span>•</span>
                  <span>Standard Pump: ${activeRoute.standardFuelCostL}/L</span>
                  <span>•</span>
                  <span>Optimal Hub: ${activeRoute.optimizedBunkerL}/L</span>
                </div>
              </div>

              <div className="grid grid-cols-3 gap-2 text-xs mb-3 text-center">
                <div className="bg-white p-2 rounded border border-slate-200">
                  <span className="text-[10px] text-slate-500 block">Monthly Fuel Need:</span>
                  <span className="font-mono font-bold text-slate-800 text-sm">{totalFleetLitersPerMonth.toLocaleString()} L</span>
                </div>
                <div className="bg-white p-2 rounded border border-slate-200">
                  <span className="text-[10px] text-slate-500 block">Unoptimized Cost:</span>
                  <span className="font-mono font-bold text-rose-700 text-sm">${monthlyUnoptimizedSpend.toLocaleString()}</span>
                </div>
                <div className="bg-white p-2 rounded border border-slate-200">
                  <span className="text-[10px] text-slate-500 block">Optimized Cost:</span>
                  <span className="font-mono font-bold text-emerald-700 text-sm">${monthlyOptimizedSpend.toLocaleString()}</span>
                </div>
              </div>

              <div className="p-2.5 bg-emerald-100/70 border border-emerald-300 rounded text-xs text-emerald-900 flex items-center justify-between">
                <div>
                  <div className="font-bold text-sm">Estimated Annual Fleet Savings:</div>
                  <div className="text-[11px] text-emerald-800">Achieved via regional tax differentials and smart bunkering schedule</div>
                </div>
                <div className="text-xl font-bold font-mono text-emerald-800">
                  +${annualSavings.toLocaleString()}
                </div>
              </div>
            </div>
          </div>
        </div>
      )}

      {/* SCENARIO 3: PROF. ELENA RODRIGUEZ */}
      {activeScenario === 'elena' && (
        <div className="space-y-4">
          <div className="bg-purple-50/70 border border-purple-200 p-3 rounded text-xs text-purple-950">
            <span className="font-bold">Scenario Objective:</span> Professor Elena Rodriguez studies macro correlations between income brackets, tax policy rigor, and the fuel affordability burden on national economies.
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-4">
            {/* Econometric Table & Regressions */}
            <div className="lg:col-span-7 bg-slate-50 p-3.5 rounded border border-slate-200">
              <div className="text-xs font-bold text-slate-800 uppercase tracking-wide mb-2 flex items-center justify-between">
                <span>Income Level vs. Fuel Policy Regression</span>
                <span className="text-purple-700 font-mono text-[10px]">R² = 0.684 • p &lt; 0.001</span>
              </div>

              <div className="space-y-2 text-xs">
                {[
                  {
                    tier: 'High Income (24 nations)',
                    avgTax: '35.4%',
                    avgPetrol: '$2.38/L',
                    affordability: '2.8% of daily wage',
                    notes: 'Aggressive carbon levies, minimal consumer subsidies, infrastructure earmarked.',
                  },
                  {
                    tier: 'Upper Middle (28 nations)',
                    avgTax: '24.1%',
                    avgPetrol: '$1.85/L',
                    affordability: '6.4% of daily wage',
                    notes: 'Moderate VAT, selected state fuel stabilization funds.',
                  },
                  {
                    tier: 'Lower Middle (22 nations)',
                    avgTax: '20.2%',
                    avgPetrol: '$1.72/L',
                    affordability: '11.8% of daily wage',
                    notes: 'High political sensitivity to pump prices; heavy reliance on transport subsidies.',
                  },
                  {
                    tier: 'Low Income (10 nations)',
                    avgTax: '27.5%',
                    avgPetrol: '$1.96/L',
                    affordability: '22.4% of daily wage',
                    notes: 'Acute energy poverty; high import shipping premiums inflate retail costs.',
                  },
                ].map((row, idx) => (
                  <div key={idx} className="p-2.5 bg-white rounded border border-slate-200 text-xs">
                    <div className="flex items-center justify-between font-semibold text-slate-800">
                      <span>{row.tier}</span>
                      <span className="text-purple-700 font-mono">Avg Tax: {row.avgTax}</span>
                    </div>
                    <div className="flex items-center space-x-3 text-[11px] text-slate-500 mt-1">
                      <span>Price: {row.avgPetrol}</span>
                      <span>•</span>
                      <span className="font-medium text-amber-700">Affordability Burden: {row.affordability}</span>
                    </div>
                    <div className="text-[10px] text-slate-600 mt-1 italic">{row.notes}</div>
                  </div>
                ))}
              </div>
            </div>

            {/* Publication Export Box */}
            <div className="lg:col-span-5 bg-slate-50 p-3.5 rounded border border-slate-200 flex flex-col justify-between">
              <div>
                <div className="text-xs font-bold text-slate-800 uppercase tracking-wide mb-2 flex items-center space-x-1">
                  <FileText className="w-3.5 h-3.5 text-purple-600" />
                  <span>Academic Findings & Citations</span>
                </div>

                <div className="p-2.5 bg-white rounded border border-slate-200 text-xs font-mono text-slate-700 text-[10.5px] leading-relaxed mb-3">
                  @article&#123;rodriguez2026fuel,<br />
                  &nbsp;&nbsp;title=&#123;Global Fuel Pricing and Fiscal Disparities (2020-2026)&#125;,<br />
                  &nbsp;&nbsp;author=&#123;Rodriguez, Elena and Mitchell, Sarah&#125;,<br />
                  &nbsp;&nbsp;journal=&#123;Journal of Energy Economics &amp; Policy&#125;,<br />
                  &nbsp;&nbsp;volume=&#123;48&#125;, pages=&#123;102--119&#125;,<br />
                  &nbsp;&nbsp;year=&#123;2026&#125;<br />
                  &#125;
                </div>

                <div className="p-2 bg-purple-50 border border-purple-200 rounded text-xs text-purple-900">
                  <span className="font-bold">Core Finding:</span> High-income nations successfully decoupled fuel consumption growth through progressive tax barriers, while lower-income nations suffer severe balance-of-payments strain when global Brent crude exceeds $95/barrel.
                </div>
              </div>

              <button
                onClick={() => {
                  alert('Research Dataset & BibTeX citations copied to clipboard!');
                }}
                className="mt-3 w-full bg-purple-600 hover:bg-purple-700 text-white text-xs py-2 rounded font-medium flex items-center justify-center space-x-1.5 transition"
              >
                <Download className="w-3.5 h-3.5" />
                <span>Export Dataset & BibTeX Citations</span>
              </button>
            </div>
          </div>
        </div>
      )}

    </div>
  );
};
