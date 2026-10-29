import React, { useState, useMemo } from 'react';
import { generateSampleRecords, COUNTRIES_DATA } from '../data/fuelDataset';
import { FuelRecord } from '../types/fuelData';
import {
  Database,
  FileSpreadsheet,
  Search,
  Filter,
  Layers,
  ArrowUpDown,
  PlusCircle,
  Download,
  CheckCircle2,
  Table as TableIcon,
  ChevronLeft,
  ChevronRight,
  Maximize2
} from 'lucide-react';

export const DataPrepTableauView: React.FC = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedRegion, setSelectedRegion] = useState('All');
  const [selectedCountry, setSelectedCountry] = useState('All');
  const [rowCount, setRowCount] = useState<number>(100);
  const [page, setPage] = useState<number>(1);
  const pageSize = 15;

  // Generate dataset records
  const allRecords = useMemo(() => {
    return generateSampleRecords(rowCount);
  }, [rowCount]);

  const filteredRecords = useMemo(() => {
    return allRecords.filter((r) => {
      if (selectedRegion !== 'All' && r.region !== selectedRegion) return false;
      if (selectedCountry !== 'All' && r.country !== selectedCountry) return false;
      if (searchTerm) {
        const query = searchTerm.toLowerCase();
        return (
          r.country.toLowerCase().includes(query) ||
          r.region.toLowerCase().includes(query) ||
          r.date.includes(query) ||
          r.incomeLevel.toLowerCase().includes(query)
        );
      }
      return true;
    });
  }, [allRecords, selectedRegion, selectedCountry, searchTerm]);

  const totalPages = Math.ceil(filteredRecords.length / pageSize);
  const pageRecords = filteredRecords.slice((page - 1) * pageSize, page * pageSize);

  const fileList = [
    'global_fuel_prices_Dataset.csv',
    '101_74-1.csv',
    '111_74-1.csv',
    '2023-t-9.1_aw_rate.csv',
    '2024_perso_p_code.csv',
    'data_for_Co...vs_Year.csv',
    'annual-enter...visional.csv',
    'Average_inc...table.csv',
    't-9-1-high-...etadata.csv',
    'cleaned_fuel_prices.csv',
    'cscpopendata.csv',
    'CT_Personal_...opality.csv',
    'Data flow and diagrams.txt',
    'Document.txt',
    'final_report.txt',
    'Food_orders_dataset.csv',
    'global_ai_in_education.csv',
  ];

  return (
    <div className="font-sans border border-slate-300 bg-white rounded shadow-md overflow-hidden text-slate-800">
      
      {/* Tableau Desktop Public Simulation Window Titlebar */}
      <div className="bg-[#24527a] text-white px-3 py-1.5 flex items-center justify-between text-xs border-b border-[#1b3d5b]">
        <div className="flex items-center space-x-2">
          <Database className="w-4 h-4 text-sky-300" />
          <span className="font-semibold tracking-wide">
            Tableau Desktop Public Edition - Global fuel prices project tableau
          </span>
        </div>
        <div className="flex items-center space-x-3 text-[11px] text-sky-200">
          <span className="cursor-pointer hover:text-white">File</span>
          <span className="cursor-pointer hover:text-white">Data</span>
          <span className="cursor-pointer hover:text-white">Window</span>
          <span className="cursor-pointer hover:text-white">Help</span>
          <button className="bg-orange-500 hover:bg-orange-600 text-white font-bold px-2 py-0.5 rounded text-[10px]">
            Tableau Public Connected
          </button>
        </div>
      </div>

      <div className="flex flex-col lg:flex-row h-auto min-h-[580px]">
        
        {/* Left Side: Connections & Files List (Exact to Tableau screenshot) */}
        <div className="w-full lg:w-64 border-r border-slate-200 bg-[#f8fafc] p-3 text-xs flex flex-col justify-between shrink-0">
          <div>
            <div className="flex items-center justify-between text-slate-700 font-bold mb-2 pb-1 border-b border-slate-200">
              <span>Connections</span>
              <span className="text-sky-600 hover:underline cursor-pointer font-normal text-[11px]">Add</span>
            </div>
            
            <div className="flex items-center space-x-2 bg-sky-50 text-sky-900 px-2 py-1.5 rounded border border-sky-200 font-medium mb-3">
              <FileSpreadsheet className="w-4 h-4 text-sky-600" />
              <div className="truncate">global_fuel_prices_Dataset</div>
            </div>

            <div className="text-[11px] font-bold text-slate-600 uppercase tracking-wider mb-1">
              Files in Workspace
            </div>
            <div className="text-[11px] text-slate-500 mb-2 flex items-center space-x-1">
              <input type="checkbox" id="data-interpreter" className="rounded text-sky-600" defaultChecked />
              <label htmlFor="data-interpreter" className="cursor-pointer">Use Data Interpreter</label>
            </div>

            {/* File List */}
            <div className="max-h-60 overflow-y-auto space-y-0.5 pr-1 border border-slate-200 rounded p-1 bg-white">
              {fileList.map((file, idx) => (
                <div
                  key={idx}
                  className={`px-2 py-1 rounded text-[11px] truncate flex items-center space-x-1.5 cursor-pointer ${
                    file.includes('global_fuel')
                      ? 'bg-sky-100 text-sky-900 font-semibold'
                      : 'text-slate-600 hover:bg-slate-100'
                  }`}
                >
                  <FileSpreadsheet className="w-3 h-3 text-slate-400 shrink-0" />
                  <span className="truncate">{file}</span>
                </div>
              ))}
            </div>
          </div>

          <div className="mt-4 pt-3 border-t border-slate-200 text-[11px] text-slate-500">
            <div className="font-semibold text-slate-700">Dataset Specs:</div>
            <div>• 10 Variables Schema</div>
            <div>• 27,468 Observations</div>
            <div>• 84 Sovereign Nations</div>
            <div>• 7 Macro Geographic Regions</div>
          </div>
        </div>

        {/* Center / Right: Relate Tables Canvas & Data Grid Preview */}
        <div className="flex-1 flex flex-col bg-slate-50">
          
          {/* Relate Tables Canvas (visual relational model) */}
          <div className="p-3 bg-white border-b border-slate-200">
            <div className="flex items-center justify-between mb-2">
              <div className="flex items-center space-x-2 text-xs font-bold text-slate-700">
                <Layers className="w-4 h-4 text-sky-600" />
                <span>Relational Data Model & Physical Tables</span>
              </div>
              <span className="text-[11px] text-slate-500 italic">
                Drag tables near each other to relate them
              </span>
            </div>

            <div className="h-32 border-2 border-dashed border-sky-300 rounded bg-[#f3f9fb] flex items-center justify-center p-3 relative overflow-hidden">
              {/* Relational Table Node */}
              <div className="bg-white border-2 border-sky-500 text-sky-900 px-4 py-2 rounded shadow-md flex items-center space-x-2.5 z-10">
                <TableIcon className="w-5 h-5 text-sky-600" />
                <div>
                  <div className="font-bold text-xs">global_fuel_prices_Dataset.csv</div>
                  <div className="text-[10px] text-slate-500">10 fields • 27,468 rows</div>
                </div>
              </div>

              {/* Connecting noodles */}
              <svg className="absolute inset-0 w-full h-full pointer-events-none">
                <line x1="30%" y1="50%" x2="50%" y2="50%" stroke="#0284c7" strokeWidth="2" strokeDasharray="4 4" />
                <line x1="50%" y1="50%" x2="70%" y2="50%" stroke="#0284c7" strokeWidth="2" strokeDasharray="4 4" />
              </svg>

              <div className="absolute right-4 text-[10px] text-slate-400 max-w-[170px] text-right">
                Multi-fact fuel economics with normalized exchange benchmarks
              </div>
            </div>
          </div>

          {/* Lower Section: Data Grid Preview */}
          <div className="flex-1 p-3 flex flex-col">
            
            {/* Filter & Search Bar */}
            <div className="flex flex-wrap items-center justify-between gap-2 mb-3 bg-white p-2 rounded border border-slate-200">
              <div className="flex items-center space-x-2">
                <div className="relative">
                  <Search className="w-3.5 h-3.5 text-slate-400 absolute left-2 top-2" />
                  <input
                    type="text"
                    placeholder="Search country, region, date..."
                    value={searchTerm}
                    onChange={(e) => setSearchTerm(e.target.value)}
                    className="pl-7 pr-2 py-1 text-xs border border-slate-300 rounded focus:outline-none focus:ring-1 focus:ring-sky-500 w-48 sm:w-60"
                  />
                </div>

                <select
                  value={selectedRegion}
                  onChange={(e) => setSelectedRegion(e.target.value)}
                  className="text-xs border border-slate-300 rounded px-2 py-1 bg-white focus:outline-none"
                >
                  <option value="All">All Regions</option>
                  <option value="North America">North America</option>
                  <option value="Europe">Europe</option>
                  <option value="Asia">Asia</option>
                  <option value="Middle East">Middle East</option>
                  <option value="South America">South America</option>
                  <option value="Africa">Africa</option>
                  <option value="Oceania">Oceania</option>
                </select>
              </div>

              <div className="flex items-center space-x-2 text-xs">
                <span className="text-slate-500 font-medium">Rows sample:</span>
                <select
                  value={rowCount}
                  onChange={(e) => {
                    setRowCount(Number(e.target.value));
                    setPage(1);
                  }}
                  className="border border-slate-300 rounded px-2 py-1 bg-white font-mono text-xs"
                >
                  <option value="50">50 rows</option>
                  <option value="100">100 rows</option>
                  <option value="250">250 rows</option>
                  <option value="500">500 rows</option>
                </select>
                <span className="text-slate-400">of 27,468 total</span>
              </div>
            </div>

            {/* Table */}
            <div className="flex-1 overflow-x-auto border border-slate-200 rounded bg-white shadow-xs">
              <table className="w-full text-left border-collapse text-xs">
                <thead>
                  <tr className="bg-slate-100 text-slate-700 font-semibold border-b border-slate-200 text-[11px]">
                    <th className="p-2 border-r border-slate-200">#</th>
                    <th className="p-2 border-r border-slate-200">Date</th>
                    <th className="p-2 border-r border-slate-200">Country</th>
                    <th className="p-2 border-r border-slate-200">Region</th>
                    <th className="p-2 border-r border-slate-200">Income Level</th>
                    <th className="p-2 border-r border-slate-200">Subsidy Level</th>
                    <th className="p-2 border-r border-slate-200 font-mono text-right">Petrol (USD/L)</th>
                    <th className="p-2 border-r border-slate-200 font-mono text-right">Diesel (USD/L)</th>
                    <th className="p-2 border-r border-slate-200 font-mono text-right">LPG (USD/L)</th>
                    <th className="p-2 border-r border-slate-200 font-mono text-right">Brent Crude ($)</th>
                    <th className="p-2 font-mono text-right">Tax (%)</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-slate-100">
                  {pageRecords.map((r, i) => (
                    <tr key={r.id} className="hover:bg-sky-50/70 transition">
                      <td className="p-2 text-slate-400 border-r border-slate-100 font-mono text-[10px]">
                        {(page - 1) * pageSize + i + 1}
                      </td>
                      <td className="p-2 text-slate-800 border-r border-slate-100 font-mono whitespace-nowrap">
                        {r.date}
                      </td>
                      <td className="p-2 font-medium text-slate-900 border-r border-slate-100 whitespace-nowrap">
                        {r.country}
                      </td>
                      <td className="p-2 text-slate-700 border-r border-slate-100 whitespace-nowrap">
                        {r.region}
                      </td>
                      <td className="p-2 border-r border-slate-100">
                        <span className={`px-1.5 py-0.5 rounded text-[10px] font-medium ${
                          r.incomeLevel === 'High' ? 'bg-emerald-100 text-emerald-800' :
                          r.incomeLevel === 'Upper Middle' ? 'bg-sky-100 text-sky-800' :
                          r.incomeLevel === 'Lower Middle' ? 'bg-amber-100 text-amber-800' :
                          'bg-purple-100 text-purple-800'
                        }`}>
                          {r.incomeLevel}
                        </span>
                      </td>
                      <td className="p-2 border-r border-slate-100">
                        <span className={`px-1.5 py-0.5 rounded text-[10px] ${
                          r.subsidyLevel === 'High' ? 'bg-orange-100 text-orange-800 font-medium' :
                          r.subsidyLevel === 'Medium' ? 'bg-yellow-100 text-yellow-800' :
                          r.subsidyLevel === 'Low' ? 'bg-slate-100 text-slate-700' :
                          'bg-red-50 text-red-700'
                        }`}>
                          {r.subsidyLevel}
                        </span>
                      </td>
                      <td className="p-2 font-mono text-right text-blue-700 font-medium border-r border-slate-100">
                        ${r.petrolUsdLiter.toFixed(4)}
                      </td>
                      <td className="p-2 font-mono text-right text-emerald-700 font-medium border-r border-slate-100">
                        ${r.dieselUsdLiter.toFixed(4)}
                      </td>
                      <td className="p-2 font-mono text-right text-amber-700 border-r border-slate-100">
                        ${r.lpgUsdLiter.toFixed(4)}
                      </td>
                      <td className="p-2 font-mono text-right text-slate-700 border-r border-slate-100">
                        ${r.brentCrudeUsd.toFixed(2)}
                      </td>
                      <td className="p-2 font-mono text-right font-semibold text-slate-800">
                        {r.taxPercentage.toFixed(2)}%
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>

            {/* Pagination Controls */}
            <div className="flex items-center justify-between mt-3 text-xs text-slate-600 bg-white p-2 rounded border border-slate-200">
              <div>
                Showing <span className="font-semibold text-slate-800">{(page - 1) * pageSize + 1}</span> to{' '}
                <span className="font-semibold text-slate-800">
                  {Math.min(page * pageSize, filteredRecords.length)}
                </span>{' '}
                of <span className="font-semibold text-slate-800">{filteredRecords.length}</span> filtered entries
              </div>

              <div className="flex items-center space-x-1">
                <button
                  onClick={() => setPage((p) => Math.max(1, p - 1))}
                  disabled={page === 1}
                  className="px-2 py-1 rounded border border-slate-300 bg-white hover:bg-slate-100 disabled:opacity-40"
                >
                  <ChevronLeft className="w-3.5 h-3.5" />
                </button>
                <span className="px-2 font-mono text-xs">
                  Page {page} of {totalPages || 1}
                </span>
                <button
                  onClick={() => setPage((p) => Math.min(totalPages, p + 1))}
                  disabled={page >= totalPages}
                  className="px-2 py-1 rounded border border-slate-300 bg-white hover:bg-slate-100 disabled:opacity-40"
                >
                  <ChevronRight className="w-3.5 h-3.5" />
                </button>
              </div>
            </div>

          </div>
        </div>

      </div>
    </div>
  );
};
