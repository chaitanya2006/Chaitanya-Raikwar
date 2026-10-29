import React, { useRef, useState } from 'react';
import {
  Fuel,
  BarChart3,
  BookOpen,
  Briefcase,
  Database,
  Download,
  Info,
  Layers,
  ArrowUp,
  Share2,
  ExternalLink,
  Table as TableIcon,
  CheckCircle2,
  Scale,
  FileSpreadsheet,
} from 'lucide-react';
import { TableauDashboard } from './TableauDashboard';
import { StoryPresentation } from './StoryPresentation';
import { ScenariosView } from './ScenariosView';
import { DataPrepTableauView } from './DataPrepTableauView';
import { PerformanceTestingView } from './PerformanceTestingView';
import { COUNTRIES_DATA } from '../data/fuelDataset';

export const GlobalFuelApp: React.FC = () => {
  const [activeTab, setActiveTab] = useState<'all' | 'dashboard' | 'story' | 'scenarios' | 'data'>('all');

  const heroRef = useRef<HTMLDivElement>(null);
  const aboutRef = useRef<HTMLDivElement>(null);
  const dashboardRef = useRef<HTMLDivElement>(null);
  const storyRef = useRef<HTMLDivElement>(null);
  const scenariosRef = useRef<HTMLDivElement>(null);
  const dataRef = useRef<HTMLDivElement>(null);

  const scrollTo = (ref: React.RefObject<HTMLDivElement | null>) => {
    ref.current?.scrollIntoView({ behavior: 'smooth' });
  };

  const handleExportAllCSV = () => {
    const csvHeader = 'Country,Region,PetrolPriceUSD,DieselPriceUSD,LpgPriceUSD,TaxPercentage,IncomeLevel,SubsidyLevel\n';
    const csvRows = COUNTRIES_DATA.map(
      (c) => `"${c.name}","${c.region}",${c.petrolPrice},${c.dieselPrice},${c.lpgPrice},${c.taxPercentage},"${c.incomeLevel}","${c.subsidyLevel}"`
    ).join('\n');
    const blob = new Blob([csvHeader + csvRows], { type: 'text/csv' });
    const url = URL.createObjectURL(blob);
    const a = document.createElement('a');
    a.href = url;
    a.download = 'global_fuel_prices_and_taxation_84_countries.csv';
    a.click();
  };

  return (
    <div className="min-h-screen font-sans bg-slate-50 text-slate-800 flex flex-col selection:bg-sky-200">
      
      {/* 1. Main Application Header Bar */}
      <header className="sticky top-0 z-40 bg-white/95 backdrop-blur-md border-b border-slate-200 shadow-xs">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 h-16 flex items-center justify-between gap-4">
          
          {/* Brand Logo & Title */}
          <div className="flex items-center space-x-3 cursor-pointer" onClick={() => scrollTo(heroRef)}>
            <div className="w-10 h-10 rounded-xl bg-gradient-to-tr from-sky-600 to-blue-500 text-white flex items-center justify-center shadow-sm shrink-0">
              <Fuel className="w-5 h-5" />
            </div>
            <div>
              <div className="font-bold text-base sm:text-lg text-slate-900 leading-tight tracking-tight">
                Global Fuel Analytics
              </div>
              <div className="text-[11px] text-slate-500 font-medium">
                Prices &amp; Taxation Trends (2020–2026) • 84 Nations
              </div>
            </div>
          </div>

          {/* Center Navigation Links */}
          <nav className="hidden md:flex items-center space-x-1 text-xs font-semibold text-slate-600">
            <button
              onClick={() => scrollTo(aboutRef)}
              className="px-3 py-2 rounded-md hover:bg-slate-100 hover:text-slate-900 transition flex items-center space-x-1.5"
            >
              <Info className="w-3.5 h-3.5 text-sky-600" />
              <span>About the Data</span>
            </button>

            <button
              onClick={() => scrollTo(dashboardRef)}
              className="px-3 py-2 rounded-md hover:bg-slate-100 hover:text-slate-900 transition flex items-center space-x-1.5 text-sky-700 bg-sky-50/60"
            >
              <BarChart3 className="w-3.5 h-3.5 text-sky-600" />
              <span>Tableau Dashboard</span>
            </button>

            <button
              onClick={() => scrollTo(storyRef)}
              className="px-3 py-2 rounded-md hover:bg-slate-100 hover:text-slate-900 transition flex items-center space-x-1.5"
            >
              <BookOpen className="w-3.5 h-3.5 text-emerald-600" />
              <span>Narrative Story</span>
            </button>

            <button
              onClick={() => scrollTo(scenariosRef)}
              className="px-3 py-2 rounded-md hover:bg-slate-100 hover:text-slate-900 transition flex items-center space-x-1.5"
            >
              <Briefcase className="w-3.5 h-3.5 text-purple-600" />
              <span>Policy &amp; Scenarios</span>
            </button>

            <button
              onClick={() => scrollTo(dataRef)}
              className="px-3 py-2 rounded-md hover:bg-slate-100 hover:text-slate-900 transition flex items-center space-x-1.5"
            >
              <Database className="w-3.5 h-3.5 text-amber-600" />
              <span>27.4K Dataset</span>
            </button>
          </nav>

          {/* Action Buttons */}
          <div className="flex items-center space-x-2">
            <button
              onClick={handleExportAllCSV}
              className="bg-sky-600 hover:bg-sky-700 text-white text-xs font-semibold px-3 py-2 rounded-md transition shadow-xs flex items-center space-x-1.5"
            >
              <Download className="w-3.5 h-3.5" />
              <span className="hidden sm:inline">Export Dataset</span>
            </button>
          </div>
        </div>
      </header>

      {/* Floating Quick Action Rail (Left side of page, matching image_b661db78.png) */}
      <div className="fixed left-4 top-1/3 z-30 bg-white/90 backdrop-blur-md border border-slate-200 rounded-full shadow-lg p-1.5 hidden lg:flex flex-col space-y-2 text-slate-600">
        <button
          onClick={() => scrollTo(heroRef)}
          title="Scroll to Top"
          className="p-2 rounded-full hover:bg-sky-100 hover:text-sky-700 transition"
        >
          <ArrowUp className="w-4 h-4" />
        </button>
        <button
          onClick={() => scrollTo(aboutRef)}
          title="About the Data"
          className="p-2 rounded-full hover:bg-sky-100 hover:text-sky-700 transition"
        >
          <Info className="w-4 h-4" />
        </button>
        <button
          onClick={() => scrollTo(dashboardRef)}
          title="Interactive Tableau Dashboard"
          className="p-2 rounded-full hover:bg-sky-100 hover:text-sky-700 transition"
        >
          <BarChart3 className="w-4 h-4" />
        </button>
        <button
          onClick={() => scrollTo(storyRef)}
          title="Global Fuel Story"
          className="p-2 rounded-full hover:bg-sky-100 hover:text-sky-700 transition"
        >
          <BookOpen className="w-4 h-4" />
        </button>
        <button
          onClick={() => scrollTo(scenariosRef)}
          title="Stakeholder Scenarios (Sarah, Marcus, Elena)"
          className="p-2 rounded-full hover:bg-sky-100 hover:text-sky-700 transition"
        >
          <Briefcase className="w-4 h-4" />
        </button>
        <button
          onClick={() => scrollTo(dataRef)}
          title="Dataset Explorer (27,468 rows)"
          className="p-2 rounded-full hover:bg-sky-100 hover:text-sky-700 transition"
        >
          <Database className="w-4 h-4" />
        </button>
      </div>

      <main className="flex-1">
        
        {/* 2. Hero Section (Matching image_b661db78.png) */}
        <section
          ref={heroRef}
          className="relative min-h-[420px] bg-gradient-to-b from-[#d9ebf3] via-[#e5f4f8] to-slate-50 border-b border-slate-200 overflow-hidden flex flex-col items-center justify-center text-center p-6 sm:p-12"
        >
          {/* Subtle World Map Silhouette Vector Background */}
          <div className="absolute inset-0 opacity-25 pointer-events-none flex items-center justify-center">
            <svg viewBox="0 0 1000 500" className="w-full h-full object-cover">
              <path
                d="M 120 70 L 260 70 L 320 120 L 290 190 L 240 220 L 210 260 L 190 280 L 170 250 L 140 200 L 110 140 Z M 330 40 L 410 50 L 380 95 L 340 90 Z M 270 270 L 340 290 L 370 340 L 350 410 L 310 460 L 280 430 L 270 340 Z M 460 110 L 540 100 L 570 140 L 540 180 L 480 180 L 460 150 Z M 460 195 L 560 195 L 590 260 L 570 360 L 520 400 L 470 320 L 450 240 Z M 540 80 L 820 80 L 890 140 L 860 220 L 780 270 L 680 270 L 620 220 L 570 150 Z M 760 330 L 860 330 L 880 390 L 830 420 L 770 400 Z"
                fill="#0284c7"
              />
            </svg>
          </div>

          <div className="relative z-10 max-w-4xl mx-auto space-y-4">
            <div className="inline-flex items-center space-x-2 bg-sky-100 text-sky-900 border border-sky-300 px-3.5 py-1 rounded-full text-xs font-semibold shadow-xs">
              <Fuel className="w-3.5 h-3.5 text-sky-700" />
              <span>Comprehensive Global Report (2020–2026)</span>
            </div>

            <h1 className="text-3xl sm:text-5xl lg:text-6xl font-extrabold text-slate-900 tracking-tight">
              Global Fuel Analytics
            </h1>

            <p className="text-base sm:text-xl text-slate-600 font-medium max-w-2xl mx-auto">
              Exploring <span className="underline decoration-sky-500 underline-offset-4 font-semibold text-slate-800">Market Data</span>, Sovereign Taxation Structures &amp; Subsidy Mechanisms
            </p>

            {/* Social Icons & Share */}
            <div className="flex items-center justify-center space-x-3 pt-2">
              <button
                onClick={() => alert('Link copied to share on X / Twitter')}
                className="w-8 h-8 rounded-full bg-slate-900 text-white flex items-center justify-center text-xs font-bold hover:bg-slate-700 transition shadow-xs"
                title="Share on X"
              >
                𝕏
              </button>
              <button
                onClick={() => alert('Link copied to share on Facebook')}
                className="w-8 h-8 rounded-full bg-blue-600 text-white flex items-center justify-center text-xs font-bold hover:bg-blue-700 transition shadow-xs"
                title="Share on Facebook"
              >
                f
              </button>
              <button
                onClick={() => alert('Link copied to share on LinkedIn')}
                className="w-8 h-8 rounded-full bg-sky-700 text-white flex items-center justify-center text-xs font-bold hover:bg-sky-800 transition shadow-xs"
                title="Share on LinkedIn"
              >
                in
              </button>
            </div>

            {/* Quick Metrics Bar */}
            <div className="pt-4 flex flex-wrap justify-center gap-4 sm:gap-8 text-xs text-slate-600 font-medium border-t border-slate-300/60 max-w-2xl mx-auto">
              <div><span className="font-bold text-slate-900 text-sm">84</span> Countries</div>
              <div>•</div>
              <div><span className="font-bold text-slate-900 text-sm">7</span> Macro Regions</div>
              <div>•</div>
              <div><span className="font-bold text-slate-900 text-sm">27,468</span> Records</div>
              <div>•</div>
              <div><span className="font-bold text-slate-900 text-sm">10</span> Analytical Variables</div>
            </div>
          </div>
        </section>

        {/* 3. About the Data Section (Exact cards from Screenshot image_b661db78.png) */}
        <section ref={aboutRef} className="max-w-6xl mx-auto px-4 sm:px-6 py-12">
          <div className="text-center max-w-3xl mx-auto mb-10">
            <h2 className="text-2xl sm:text-3xl font-bold text-slate-900 tracking-tight">
              About the Data
            </h2>
            <p className="text-xs sm:text-sm text-slate-600 mt-2 leading-relaxed">
              This dataset encompasses global fuel prices and taxation trends spanning from 2020 to 2026, offering detailed insights into petrol, diesel, and LPG costs across different regions. It enables comparative evaluation of national fuel pricing policies and their correlation with tax structures worldwide.
            </p>
          </div>

          {/* 3 Highlighted Cards */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {/* Card 1: Key Insights */}
            <div className="bg-white p-6 rounded-xl border border-slate-200 shadow-xs hover:shadow-md transition flex flex-col justify-between">
              <div>
                <div className="flex items-center space-x-2 text-sky-600 font-bold text-sm mb-2.5">
                  <FileSpreadsheet className="w-4 h-4 text-sky-600" />
                  <span>Key Insights</span>
                </div>
                <p className="text-xs text-slate-600 leading-relaxed">
                  Europe consistently demonstrates the highest average tax percentage (~34%) on fuels, significantly contributing to higher retail prices. Conversely, regions like the Middle East display the lowest taxation rates (~19%), subsidized heavily by local petroleum production.
                </p>
              </div>
              <div className="mt-4 pt-3 border-t border-slate-100 text-[11px] font-semibold text-sky-700 flex items-center justify-between">
                <span>Tax Floor: Europe (38.69%)</span>
                <span>Low: M.East (19.6%)</span>
              </div>
            </div>

            {/* Card 2: Petrol vs. Diesel */}
            <div className="bg-white p-6 rounded-xl border border-slate-200 shadow-xs hover:shadow-md transition flex flex-col justify-between">
              <div>
                <div className="flex items-center space-x-2 text-emerald-600 font-bold text-sm mb-2.5">
                  <Fuel className="w-4 h-4 text-emerald-600" />
                  <span>Petrol vs. Diesel</span>
                </div>
                <p className="text-xs text-slate-600 leading-relaxed">
                  Historically, diesel prices remained marginally lower than petrol globally. However, the data highlights converging price points post-2022, primarily driven by surging commercial demand and varying environmental taxation protocols.
                </p>
              </div>
              <div className="mt-4 pt-3 border-t border-slate-100 text-[11px] font-semibold text-emerald-700 flex items-center justify-between">
                <span>Diesel Mean: $2.13/L</span>
                <span>Petrol Mean: $2.28/L</span>
              </div>
            </div>

            {/* Card 3: Comparison Analysis */}
            <div className="bg-white p-6 rounded-xl border border-slate-200 shadow-xs hover:shadow-md transition flex flex-col justify-between">
              <div>
                <div className="flex items-center space-x-2 text-indigo-600 font-bold text-sm mb-2.5">
                  <Scale className="w-4 h-4 text-indigo-600" />
                  <span>Comparison Analysis</span>
                </div>
                <p className="text-xs text-slate-600 leading-relaxed">
                  When comparing high-tax regions with minimal-tax nations, there is an inverse correlation between taxation levels and raw fuel price volatility. Advanced economies employ higher taxes as a buffer and a means of funding infrastructure, while producing nations maintain baseline costs.
                </p>
              </div>
              <div className="mt-4 pt-3 border-t border-slate-100 text-[11px] font-semibold text-indigo-700 flex items-center justify-between">
                <span>Volatility Buffer</span>
                <span>R² = 0.684</span>
              </div>
            </div>
          </div>
        </section>

        {/* 4. Data Insights Dashboard Section (Matching image_bc586489.png) */}
        <section ref={dashboardRef} className="max-w-7xl mx-auto px-4 sm:px-6 py-8">
          <div className="text-center max-w-3xl mx-auto mb-6">
            <h2 className="text-2xl sm:text-3xl font-bold text-slate-900 tracking-tight">
              Data Insights Dashboard
            </h2>
            <p className="text-xs sm:text-sm text-slate-600 mt-1">
              Interactive dashboard visualizing Average Prices and Taxation Performance Indicators.
            </p>
          </div>

          {/* Embedded Tableau Analytics Container */}
          <TableauDashboard />
        </section>

        {/* 5. Global Fuel Prices Story Section (Matching image_60ebb80b.png) */}
        <section ref={storyRef} className="max-w-6xl mx-auto px-4 sm:px-6 py-12">
          <StoryPresentation />
        </section>

        {/* 6. Stakeholder Scenarios Section (Dr. Sarah Mitchell, Marcus Thompson, Prof. Elena Rodriguez) */}
        <section ref={scenariosRef} className="max-w-6xl mx-auto px-4 sm:px-6 py-12">
          <ScenariosView />
        </section>

        {/* 7. Tableau Data Prep & 27,468 Records Explorer (Matching image_1501e404.png) */}
        <section ref={dataRef} className="max-w-7xl mx-auto px-4 sm:px-6 py-12">
          <div className="mb-6">
            <h2 className="text-2xl font-bold text-slate-900 tracking-tight">
              Tableau Data Source &amp; 27,468 Records Model
            </h2>
            <p className="text-xs sm:text-sm text-slate-600 mt-1">
              Full relational architecture, schema definition across 10 analytical variables, and paginated records explorer.
            </p>
          </div>

          <div className="space-y-6">
            <DataPrepTableauView />
            <PerformanceTestingView />
          </div>
        </section>

      </main>

      {/* 8. Footer */}
      <footer className="bg-slate-900 text-slate-400 border-t border-slate-800 text-xs py-8 px-4 sm:px-6">
        <div className="max-w-7xl mx-auto flex flex-col sm:flex-row items-center justify-between gap-4">
          <div className="flex items-center space-x-2">
            <Fuel className="w-4 h-4 text-sky-400" />
            <span className="font-semibold text-slate-200">
              Global Fuel Prices and Taxation Trends Analytics (2020–2026)
            </span>
          </div>
          <div className="text-[11px] text-slate-500 text-center sm:text-right">
            84 Nations • 7 Global Regions • 27,468 Records • Compliant with Tableau Desktop &amp; Web Standards
          </div>
        </div>
      </footer>

    </div>
  );
};
