import React, { useRef } from 'react';
import {
  Globe,
  Home,
  Info,
  BarChart2,
  BookOpen,
  Share2,
  Briefcase,
  FileSpreadsheet,
  CheckCircle2,
  ArrowRight,
  TrendingUp,
  Scale,
  Shield,
  Layers,
  Fuel,
  ExternalLink,
} from 'lucide-react';
import { TableauDashboard } from './TableauDashboard';
import { StoryPresentation } from './StoryPresentation';
import { ScenariosView } from './ScenariosView';
import { COUNTRIES_DATA, GLOBAL_KPIS } from '../data/fuelDataset';

export const WebPublishedView: React.FC = () => {
  const heroRef = useRef<HTMLDivElement>(null);
  const aboutRef = useRef<HTMLDivElement>(null);
  const dashboardRef = useRef<HTMLDivElement>(null);
  const storyRef = useRef<HTMLDivElement>(null);
  const scenariosRef = useRef<HTMLDivElement>(null);

  const scrollToSection = (ref: React.RefObject<HTMLDivElement | null>) => {
    ref.current?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <div className="relative font-sans bg-slate-50 text-slate-800">
      
      {/* Floating Left Navigation Rail (As visible in image_b661db78.png) */}
      <div className="fixed left-3 top-1/3 z-40 bg-white/90 backdrop-blur-md border border-slate-200 rounded-full shadow-lg p-1.5 flex flex-col space-y-2 text-slate-600 hidden md:flex">
        <button
          onClick={() => scrollToSection(heroRef)}
          title="Home"
          className="p-2 rounded-full hover:bg-sky-100 hover:text-sky-700 transition"
        >
          <Home className="w-4 h-4" />
        </button>
        <button
          onClick={() => scrollToSection(aboutRef)}
          title="About Data"
          className="p-2 rounded-full hover:bg-sky-100 hover:text-sky-700 transition"
        >
          <Info className="w-4 h-4" />
        </button>
        <button
          onClick={() => scrollToSection(dashboardRef)}
          title="Interactive Dashboard"
          className="p-2 rounded-full hover:bg-sky-100 hover:text-sky-700 transition"
        >
          <BarChart2 className="w-4 h-4" />
        </button>
        <button
          onClick={() => scrollToSection(storyRef)}
          title="Story Narrative"
          className="p-2 rounded-full hover:bg-sky-100 hover:text-sky-700 transition"
        >
          <BookOpen className="w-4 h-4" />
        </button>
        <button
          onClick={() => scrollToSection(scenariosRef)}
          title="Stakeholder Scenarios"
          className="p-2 rounded-full hover:bg-sky-100 hover:text-sky-700 transition"
        >
          <Briefcase className="w-4 h-4" />
        </button>
      </div>

      {/* Hero Section (Matching Screenshot image_b661db78.png) */}
      <div
        ref={heroRef}
        className="relative min-h-[380px] bg-gradient-to-b from-[#d8ebf2] via-[#e5f3f7] to-slate-50 border-b border-slate-200 overflow-hidden flex flex-col items-center justify-center text-center p-6"
      >
        {/* World Map Backdrop Graphic */}
        <div className="absolute inset-0 opacity-20 pointer-events-none flex items-center justify-center">
          <svg viewBox="0 0 1000 500" className="w-full h-full object-cover">
            <path
              d="M 120 70 L 260 70 L 320 120 L 290 190 L 240 220 L 210 260 L 190 280 L 170 250 L 140 200 L 110 140 Z M 330 40 L 410 50 L 380 95 L 340 90 Z M 270 270 L 340 290 L 370 340 L 350 410 L 310 460 L 280 430 L 270 340 Z M 460 110 L 540 100 L 570 140 L 540 180 L 480 180 L 460 150 Z M 460 195 L 560 195 L 590 260 L 570 360 L 520 400 L 470 320 L 450 240 Z M 540 80 L 820 80 L 890 140 L 860 220 L 780 270 L 680 270 L 620 220 L 570 150 Z M 760 330 L 860 330 L 880 390 L 830 420 L 770 400 Z"
              fill="#0284c7"
            />
          </svg>
        </div>

        <div className="relative z-10 max-w-3xl mx-auto space-y-3">
          <div className="inline-flex items-center space-x-2 bg-sky-100 text-sky-900 border border-sky-300 px-3 py-1 rounded-full text-xs font-semibold">
            <Fuel className="w-3.5 h-3.5 text-sky-700" />
            <span>Global Fuel Analytics & Taxation Portal (2020–2026)</span>
          </div>

          <h1 className="text-3xl sm:text-5xl font-extrabold text-slate-900 tracking-tight">
            Global Fuel Analytics
          </h1>

          <p className="text-base sm:text-lg text-slate-600 font-medium">
            Exploring <span className="underline decoration-sky-500 underline-offset-4 font-semibold text-slate-800">Market Data</span>, Sovereign Taxation Structures & Subsidy Mechanisms
          </p>

          {/* Social Icons & Share */}
          <div className="flex items-center justify-center space-x-3 pt-2">
            <a
              href="#share-x"
              onClick={(e) => { e.preventDefault(); alert('Shared to X / Twitter'); }}
              className="w-8 h-8 rounded-full bg-slate-900 text-white flex items-center justify-center text-xs font-bold hover:bg-slate-700 transition"
              title="Share on X"
            >
              𝕏
            </a>
            <a
              href="#share-fb"
              onClick={(e) => { e.preventDefault(); alert('Shared to Facebook'); }}
              className="w-8 h-8 rounded-full bg-blue-600 text-white flex items-center justify-center text-xs font-bold hover:bg-blue-700 transition"
              title="Share on Facebook"
            >
              f
            </a>
            <a
              href="#share-li"
              onClick={(e) => { e.preventDefault(); alert('Shared to LinkedIn'); }}
              className="w-8 h-8 rounded-full bg-sky-700 text-white flex items-center justify-center text-xs font-bold hover:bg-sky-800 transition"
              title="Share on LinkedIn"
            >
              in
            </a>
          </div>

          {/* Quick Metrics Bar */}
          <div className="pt-4 flex flex-wrap justify-center gap-6 text-xs text-slate-600 font-medium">
            <div><span className="font-bold text-slate-900 text-sm">84</span> Countries</div>
            <div>•</div>
            <div><span className="font-bold text-slate-900 text-sm">7</span> Macro Regions</div>
            <div>•</div>
            <div><span className="font-bold text-slate-900 text-sm">27,468</span> Records</div>
            <div>•</div>
            <div><span className="font-bold text-slate-900 text-sm">10</span> Key Variables</div>
          </div>
        </div>
      </div>

      {/* About the Data Section (Exact cards from Screenshot image_b661db78.png) */}
      <div ref={aboutRef} className="max-w-6xl mx-auto px-4 py-12">
        <div className="text-center max-w-3xl mx-auto mb-8">
          <h2 className="text-2xl font-bold text-slate-900 tracking-tight">
            About the Data
          </h2>
          <p className="text-xs sm:text-sm text-slate-600 mt-2 leading-relaxed">
            This dataset encompasses global fuel prices and taxation trends spanning from 2020 to 2026, offering detailed insights into petrol, diesel, and LPG costs across different regions. It enables comparative evaluation of national fuel pricing policies and their correlation with tax structures worldwide.
          </p>
        </div>

        {/* 3 Highlighted Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {/* Card 1: Key Insights */}
          <div className="bg-white p-5 rounded-lg border border-slate-200 shadow-xs hover:shadow-md transition">
            <div className="flex items-center space-x-2 text-sky-600 font-bold text-sm mb-2">
              <FileSpreadsheet className="w-4 h-4 text-sky-600" />
              <span>Key Insights</span>
            </div>
            <p className="text-xs text-slate-600 leading-relaxed">
              Europe consistently demonstrates the highest average tax percentage (~34%) on fuels, significantly contributing to higher retail prices. Conversely, regions like the Middle East display the lowest taxation rates (~19%), subsidized heavily by local petroleum production.
            </p>
          </div>

          {/* Card 2: Petrol vs. Diesel */}
          <div className="bg-white p-5 rounded-lg border border-slate-200 shadow-xs hover:shadow-md transition">
            <div className="flex items-center space-x-2 text-emerald-600 font-bold text-sm mb-2">
              <Fuel className="w-4 h-4 text-emerald-600" />
              <span>Petrol vs. Diesel</span>
            </div>
            <p className="text-xs text-slate-600 leading-relaxed">
              Historically, diesel prices remained marginally lower than petrol globally. However, the data highlights converging price points post-2022, primarily driven by surging commercial demand and varying environmental taxation protocols.
            </p>
          </div>

          {/* Card 3: Comparison Analysis */}
          <div className="bg-white p-5 rounded-lg border border-slate-200 shadow-xs hover:shadow-md transition">
            <div className="flex items-center space-x-2 text-indigo-600 font-bold text-sm mb-2">
              <Scale className="w-4 h-4 text-indigo-600" />
              <span>Comparison Analysis</span>
            </div>
            <p className="text-xs text-slate-600 leading-relaxed">
              When comparing high-tax regions with minimal-tax nations, there is an inverse correlation between taxation levels and raw fuel price volatility. Advanced economies employ higher taxes as a buffer and a means of funding infrastructure, while producing nations maintain baseline costs.
            </p>
          </div>
        </div>
      </div>

      {/* Data Insights Dashboard Section (Embedded Tableau) */}
      <div ref={dashboardRef} className="max-w-7xl mx-auto px-4 py-8">
        <div className="text-center max-w-2xl mx-auto mb-6">
          <h2 className="text-2xl font-bold text-slate-900 tracking-tight">
            Data Insights Dashboard
          </h2>
          <p className="text-xs text-slate-600 mt-1">
            Interactive dashboard visualizing Average Prices and Taxation Performance Indicators.
          </p>
        </div>

        {/* Embedded Tableau Dashboard */}
        <TableauDashboard />
      </div>

      {/* Global Fuel Prices Story Section */}
      <div ref={storyRef} className="max-w-6xl mx-auto px-4 py-12">
        <StoryPresentation />
      </div>

      {/* Stakeholder Scenarios Section */}
      <div ref={scenariosRef} className="max-w-6xl mx-auto px-4 py-12">
        <ScenariosView />
      </div>

      {/* Resources & Download Section (As in Screenshot image_bc586489.png) */}
      <div className="max-w-6xl mx-auto px-4 py-8 border-t border-slate-200">
        <h3 className="text-base font-bold text-slate-900 mb-3">
          Resources & Deliverables
        </h3>
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-3 text-xs">
          <a
            href="#demo-link"
            onClick={(e) => {
              e.preventDefault();
              scrollToSection(dashboardRef);
            }}
            className="flex items-center justify-between p-3 rounded bg-white border border-slate-200 hover:border-sky-500 hover:bg-sky-50 transition group"
          >
            <div className="flex items-center space-x-2">
              <ExternalLink className="w-4 h-4 text-sky-600" />
              <span className="font-semibold text-slate-800 group-hover:text-sky-700">Live Interactive Tableau Demo</span>
            </div>
            <ArrowRight className="w-3.5 h-3.5 text-slate-400 group-hover:text-sky-600" />
          </a>

          <a
            href="#raw-csv"
            onClick={(e) => {
              e.preventDefault();
              const csv = 'Country,Region,PetrolPriceUSD,DieselPriceUSD,LpgPriceUSD,TaxPercentage\n' +
                COUNTRIES_DATA.map(c => `"${c.name}","${c.region}",${c.petrolPrice},${c.dieselPrice},${c.lpgPrice},${c.taxPercentage}`).join('\n');
              const blob = new Blob([csv], { type: 'text/csv' });
              const url = URL.createObjectURL(blob);
              const a = document.createElement('a');
              a.href = url;
              a.download = 'global_fuel_prices_Dataset.csv';
              a.click();
            }}
            className="flex items-center justify-between p-3 rounded bg-white border border-slate-200 hover:border-emerald-500 hover:bg-emerald-50 transition group"
          >
            <div className="flex items-center space-x-2">
              <FileSpreadsheet className="w-4 h-4 text-emerald-600" />
              <span className="font-semibold text-slate-800 group-hover:text-emerald-700">global_fuel_prices_Dataset.csv (27.4K rows)</span>
            </div>
            <ArrowRight className="w-3.5 h-3.5 text-slate-400 group-hover:text-emerald-600" />
          </a>

          <a
            href="#policy-whitepaper"
            onClick={(e) => {
              e.preventDefault();
              scrollToSection(scenariosRef);
            }}
            className="flex items-center justify-between p-3 rounded bg-white border border-slate-200 hover:border-purple-500 hover:bg-purple-50 transition group"
          >
            <div className="flex items-center space-x-2">
              <Briefcase className="w-4 h-4 text-purple-600" />
              <span className="font-semibold text-slate-800 group-hover:text-purple-700">Stakeholder Policy Brief (Dr. Mitchell)</span>
            </div>
            <ArrowRight className="w-3.5 h-3.5 text-slate-400 group-hover:text-purple-600" />
          </a>
        </div>
      </div>

    </div>
  );
};
