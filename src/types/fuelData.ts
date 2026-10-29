export type Region = 
  | 'North America' 
  | 'Europe' 
  | 'Asia' 
  | 'Middle East' 
  | 'South America' 
  | 'Africa' 
  | 'Oceania';

export type IncomeLevel = 'High' | 'Upper Middle' | 'Lower Middle' | 'Low';
export type SubsidyLevel = 'High' | 'Medium' | 'Low' | 'None';

export interface CountryFuelStat {
  id: string;
  name: string;
  code: string;
  region: Region;
  incomeLevel: IncomeLevel;
  subsidyLevel: SubsidyLevel;
  petrolPrice: number; // USD per liter
  dieselPrice: number; // USD per liter
  lpgPrice: number; // USD per liter
  taxPercentage: number; // percentage (e.g. 39.21)
  lat: number;
  lng: number;
}

export interface FuelRecord {
  id: number;
  date: string;
  country: string;
  region: Region;
  incomeLevel: IncomeLevel;
  subsidyLevel: SubsidyLevel;
  petrolUsdLiter: number;
  dieselUsdLiter: number;
  lpgUsdLiter: number;
  brentCrudeUsd: number;
  taxPercentage: number;
}

export interface YearTrendPoint {
  year: number;
  petrolPrice: number;
  dieselPrice: number;
  lpgPrice: number;
  brentPrice: number;
}

export interface RegionalTaxMetric {
  region: Region;
  taxPercentage: number;
  avgPetrol: number;
  avgDiesel: number;
  color: string;
}

export interface ModuleProgress {
  id: string;
  title: string;
  percentage: number;
  subItems: { id: string; title: string; completed: boolean }[];
}
