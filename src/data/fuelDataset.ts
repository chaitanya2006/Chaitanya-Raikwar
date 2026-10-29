import { CountryFuelStat, FuelRecord, YearTrendPoint, RegionalTaxMetric, Region } from '../types/fuelData';

export const GLOBAL_KPIS = {
  avgDiesel: 2.13,
  avgLpg: 1.71,
  avgPetrol: 2.28,
  avgTaxPercentage: 26.77,
  totalCountries: 84,
  totalRegions: 7,
  totalRecords: 27468,
  yearSpan: '2020–2026',
};

export const YEAR_TRENDS: YearTrendPoint[] = [
  { year: 2020, petrolPrice: 1.48, dieselPrice: 1.39, lpgPrice: 1.11, brentPrice: 41.80 },
  { year: 2021, petrolPrice: 2.28, dieselPrice: 2.13, lpgPrice: 1.71, brentPrice: 77.60 },
  { year: 2022, petrolPrice: 2.51, dieselPrice: 2.34, lpgPrice: 1.88, brentPrice: 106.60 },
  { year: 2023, petrolPrice: 2.23, dieselPrice: 2.09, lpgPrice: 1.68, brentPrice: 117.15 },
  { year: 2024, petrolPrice: 2.55, dieselPrice: 2.38, lpgPrice: 1.91, brentPrice: 104.45 },
  { year: 2025, petrolPrice: 2.13, dieselPrice: 2.37, lpgPrice: 1.90, brentPrice: 119.05 },
  { year: 2026, petrolPrice: 2.13, dieselPrice: 2.23, lpgPrice: 1.79, brentPrice: 118.75 },
  { year: 2027, petrolPrice: 2.13, dieselPrice: 2.23, lpgPrice: 1.79, brentPrice: 113.05 },
];

export const REGIONAL_TAX_DATA: RegionalTaxMetric[] = [
  { region: 'Europe', taxPercentage: 38.69, avgPetrol: 2.45, avgDiesel: 2.32, color: '#4a90e2' },
  { region: 'Oceania', taxPercentage: 29.21, avgPetrol: 2.15, avgDiesel: 2.10, color: '#50e3c2' },
  { region: 'Africa', taxPercentage: 25.79, avgPetrol: 1.85, avgDiesel: 1.75, color: '#f5a623' },
  { region: 'Asia', taxPercentage: 23.01, avgPetrol: 1.98, avgDiesel: 1.89, color: '#e91e63' },
  { region: 'Middle East', taxPercentage: 19.60, avgPetrol: 1.25, avgDiesel: 1.18, color: '#7ed321' },
  { region: 'North America', taxPercentage: 19.60, avgPetrol: 2.25, avgDiesel: 2.12, color: '#9013fe' },
  { region: 'South America', taxPercentage: 18.20, avgPetrol: 1.78, avgDiesel: 1.65, color: '#ff6f00' },
];

export const HIGHEST_TAX_COUNTRIES = [
  { country: 'Rwanda', taxPercentage: 39.56, petrolPrice: 2.38, dieselPrice: 2.29, region: 'Africa' as Region },
  { country: 'New Zealand', taxPercentage: 39.27, petrolPrice: 2.44, dieselPrice: 2.26, region: 'Oceania' as Region },
  { country: 'Germany', taxPercentage: 39.21, petrolPrice: 2.52, dieselPrice: 2.39, region: 'Europe' as Region },
  { country: 'Turkey', taxPercentage: 38.99, petrolPrice: 2.25, dieselPrice: 2.18, region: 'Middle East' as Region },
  { country: 'Denmark', taxPercentage: 38.87, petrolPrice: 2.58, dieselPrice: 2.41, region: 'Europe' as Region },
];

export const TOP_3_COUNTRIES_COMPARISON = [
  {
    country: 'Canada',
    lpg: 1.20,
    diesel: 2.00,
    petrol: 2.20,
  },
  {
    country: 'Mexico',
    lpg: 0.75,
    diesel: 0.90,
    petrol: 1.05,
  },
  {
    country: 'United States',
    lpg: 1.10,
    diesel: 2.10,
    petrol: 2.30,
  },
];

export const COUNTRIES_DATA: CountryFuelStat[] = [
  // North America
  { id: 'USA', name: 'United States', code: 'US', region: 'North America', incomeLevel: 'High', subsidyLevel: 'Low', petrolPrice: 2.30, dieselPrice: 2.10, lpgPrice: 1.10, taxPercentage: 19.60, lat: 38.0, lng: -97.0 },
  { id: 'CAN', name: 'Canada', code: 'CA', region: 'North America', incomeLevel: 'High', subsidyLevel: 'Low', petrolPrice: 2.20, dieselPrice: 2.00, lpgPrice: 1.20, taxPercentage: 24.50, lat: 56.1, lng: -106.3 },
  { id: 'MEX', name: 'Mexico', code: 'MX', region: 'North America', incomeLevel: 'Upper Middle', subsidyLevel: 'Medium', petrolPrice: 1.05, dieselPrice: 0.90, lpgPrice: 0.75, taxPercentage: 15.20, lat: 23.6, lng: -102.5 },
  
  // Europe
  { id: 'DEU', name: 'Germany', code: 'DE', region: 'Europe', incomeLevel: 'High', subsidyLevel: 'None', petrolPrice: 2.52, dieselPrice: 2.39, lpgPrice: 1.45, taxPercentage: 39.21, lat: 51.1, lng: 10.4 },
  { id: 'DNK', name: 'Denmark', code: 'DK', region: 'Europe', incomeLevel: 'High', subsidyLevel: 'None', petrolPrice: 2.58, dieselPrice: 2.41, lpgPrice: 1.50, taxPercentage: 38.87, lat: 56.2, lng: 9.5 },
  { id: 'GBR', name: 'United Kingdom', code: 'GB', region: 'Europe', incomeLevel: 'High', subsidyLevel: 'None', petrolPrice: 2.48, dieselPrice: 2.42, lpgPrice: 1.38, taxPercentage: 38.40, lat: 55.3, lng: -3.4 },
  { id: 'FRA', name: 'France', code: 'FR', region: 'Europe', incomeLevel: 'High', subsidyLevel: 'None', petrolPrice: 2.46, dieselPrice: 2.38, lpgPrice: 1.35, taxPercentage: 38.10, lat: 46.2, lng: 2.2 },
  { id: 'ITA', name: 'Italy', code: 'IT', region: 'Europe', incomeLevel: 'High', subsidyLevel: 'None', petrolPrice: 2.49, dieselPrice: 2.36, lpgPrice: 1.30, taxPercentage: 38.50, lat: 41.8, lng: 12.5 },
  { id: 'ESP', name: 'Spain', code: 'ES', region: 'Europe', incomeLevel: 'High', subsidyLevel: 'Low', petrolPrice: 2.25, dieselPrice: 2.15, lpgPrice: 1.25, taxPercentage: 35.80, lat: 40.4, lng: -3.7 },
  { id: 'NLD', name: 'Netherlands', code: 'NL', region: 'Europe', incomeLevel: 'High', subsidyLevel: 'None', petrolPrice: 2.65, dieselPrice: 2.40, lpgPrice: 1.42, taxPercentage: 39.10, lat: 52.1, lng: 5.2 },
  { id: 'NOR', name: 'Norway', code: 'NO', region: 'Europe', incomeLevel: 'High', subsidyLevel: 'None', petrolPrice: 2.60, dieselPrice: 2.45, lpgPrice: 1.48, taxPercentage: 38.70, lat: 60.4, lng: 8.4 },
  { id: 'SWE', name: 'Sweden', code: 'SE', region: 'Europe', incomeLevel: 'High', subsidyLevel: 'None', petrolPrice: 2.45, dieselPrice: 2.48, lpgPrice: 1.40, taxPercentage: 38.30, lat: 60.1, lng: 18.6 },
  { id: 'POL', name: 'Poland', code: 'PL', region: 'Europe', incomeLevel: 'High', subsidyLevel: 'Low', petrolPrice: 2.10, dieselPrice: 2.05, lpgPrice: 1.15, taxPercentage: 34.20, lat: 51.9, lng: 19.1 },
  { id: 'CHE', name: 'Switzerland', code: 'CH', region: 'Europe', incomeLevel: 'High', subsidyLevel: 'None', petrolPrice: 2.50, dieselPrice: 2.55, lpgPrice: 1.55, taxPercentage: 37.60, lat: 46.8, lng: 8.2 },
  { id: 'BEL', name: 'Belgium', code: 'BE', region: 'Europe', incomeLevel: 'High', subsidyLevel: 'None', petrolPrice: 2.42, dieselPrice: 2.35, lpgPrice: 1.28, taxPercentage: 37.90, lat: 50.5, lng: 4.4 },
  { id: 'GRC', name: 'Greece', code: 'GR', region: 'Europe', incomeLevel: 'High', subsidyLevel: 'None', petrolPrice: 2.44, dieselPrice: 2.20, lpgPrice: 1.22, taxPercentage: 38.60, lat: 39.0, lng: 21.8 },
  { id: 'PRT', name: 'Portugal', code: 'PT', region: 'Europe', incomeLevel: 'High', subsidyLevel: 'None', petrolPrice: 2.36, dieselPrice: 2.18, lpgPrice: 1.20, taxPercentage: 37.20, lat: 39.3, lng: -8.2 },
  { id: 'IRL', name: 'Ireland', code: 'IE', region: 'Europe', incomeLevel: 'High', subsidyLevel: 'None', petrolPrice: 2.40, dieselPrice: 2.30, lpgPrice: 1.30, taxPercentage: 38.00, lat: 53.4, lng: -8.2 },
  { id: 'AUT', name: 'Austria', code: 'AT', region: 'Europe', incomeLevel: 'High', subsidyLevel: 'None', petrolPrice: 2.32, dieselPrice: 2.25, lpgPrice: 1.25, taxPercentage: 36.80, lat: 47.5, lng: 14.5 },
  { id: 'FIN', name: 'Finland', code: 'FI', region: 'Europe', incomeLevel: 'High', subsidyLevel: 'None', petrolPrice: 2.52, dieselPrice: 2.42, lpgPrice: 1.45, taxPercentage: 38.50, lat: 61.9, lng: 25.7 },
  { id: 'CZE', name: 'Czech Republic', code: 'CZ', region: 'Europe', incomeLevel: 'High', subsidyLevel: 'Low', petrolPrice: 2.08, dieselPrice: 2.02, lpgPrice: 1.10, taxPercentage: 35.10, lat: 49.8, lng: 15.4 },
  { id: 'ROU', name: 'Romania', code: 'RO', region: 'Europe', incomeLevel: 'Upper Middle', subsidyLevel: 'Low', petrolPrice: 1.95, dieselPrice: 1.92, lpgPrice: 1.05, taxPercentage: 33.80, lat: 45.9, lng: 24.9 },
  { id: 'HUN', name: 'Hungary', code: 'HU', region: 'Europe', incomeLevel: 'High', subsidyLevel: 'Low', petrolPrice: 2.05, dieselPrice: 2.10, lpgPrice: 1.12, taxPercentage: 34.50, lat: 47.1, lng: 19.5 },

  // Asia
  { id: 'CHN', name: 'China', code: 'CN', region: 'Asia', incomeLevel: 'Upper Middle', subsidyLevel: 'Medium', petrolPrice: 1.92, dieselPrice: 1.82, lpgPrice: 1.30, taxPercentage: 24.50, lat: 35.8, lng: 104.1 },
  { id: 'IND', name: 'India', code: 'IN', region: 'Asia', incomeLevel: 'Lower Middle', subsidyLevel: 'Medium', petrolPrice: 1.88, dieselPrice: 1.72, lpgPrice: 1.20, taxPercentage: 27.80, lat: 20.5, lng: 78.9 },
  { id: 'JPN', name: 'Japan', code: 'JP', region: 'Asia', incomeLevel: 'High', subsidyLevel: 'Low', petrolPrice: 2.12, dieselPrice: 1.95, lpgPrice: 1.40, taxPercentage: 28.30, lat: 36.2, lng: 138.2 },
  { id: 'KOR', name: 'South Korea', code: 'KR', region: 'Asia', incomeLevel: 'High', subsidyLevel: 'Low', petrolPrice: 2.05, dieselPrice: 1.92, lpgPrice: 1.35, taxPercentage: 27.40, lat: 35.9, lng: 127.7 },
  { id: 'IDN', name: 'Indonesia', code: 'ID', region: 'Asia', incomeLevel: 'Upper Middle', subsidyLevel: 'High', petrolPrice: 1.42, dieselPrice: 1.35, lpgPrice: 0.95, taxPercentage: 15.60, lat: -0.7, lng: 113.9 },
  { id: 'SGP', name: 'Singapore', code: 'SG', region: 'Asia', incomeLevel: 'High', subsidyLevel: 'None', petrolPrice: 2.58, dieselPrice: 2.30, lpgPrice: 1.60, taxPercentage: 32.10, lat: 1.3, lng: 103.8 },
  { id: 'MYS', name: 'Malaysia', code: 'MY', region: 'Asia', incomeLevel: 'Upper Middle', subsidyLevel: 'High', petrolPrice: 1.25, dieselPrice: 1.15, lpgPrice: 0.85, taxPercentage: 12.40, lat: 4.2, lng: 101.9 },
  { id: 'THA', name: 'Thailand', code: 'TH', region: 'Asia', incomeLevel: 'Upper Middle', subsidyLevel: 'Medium', petrolPrice: 1.75, dieselPrice: 1.55, lpgPrice: 1.10, taxPercentage: 21.80, lat: 15.8, lng: 100.9 },
  { id: 'VNM', name: 'Vietnam', code: 'VN', region: 'Asia', incomeLevel: 'Lower Middle', subsidyLevel: 'Medium', petrolPrice: 1.68, dieselPrice: 1.52, lpgPrice: 1.05, taxPercentage: 22.10, lat: 14.0, lng: 108.2 },
  { id: 'PHL', name: 'Philippines', code: 'PH', region: 'Asia', incomeLevel: 'Lower Middle', subsidyLevel: 'Low', petrolPrice: 1.82, dieselPrice: 1.68, lpgPrice: 1.15, taxPercentage: 23.50, lat: 12.8, lng: 121.7 },
  { id: 'PAK', name: 'Pakistan', code: 'PK', region: 'Asia', incomeLevel: 'Lower Middle', subsidyLevel: 'Low', petrolPrice: 1.55, dieselPrice: 1.48, lpgPrice: 1.00, taxPercentage: 18.20, lat: 30.3, lng: 69.3 },
  { id: 'BGD', name: 'Bangladesh', code: 'BD', region: 'Asia', incomeLevel: 'Lower Middle', subsidyLevel: 'Medium', petrolPrice: 1.62, dieselPrice: 1.50, lpgPrice: 1.02, taxPercentage: 19.40, lat: 23.6, lng: 90.3 },
  { id: 'TWN', name: 'Taiwan', code: 'TW', region: 'Asia', incomeLevel: 'High', subsidyLevel: 'Low', petrolPrice: 1.98, dieselPrice: 1.82, lpgPrice: 1.25, taxPercentage: 25.00, lat: 23.6, lng: 120.9 },

  // Middle East
  { id: 'SAU', name: 'Saudi Arabia', code: 'SA', region: 'Middle East', incomeLevel: 'High', subsidyLevel: 'High', petrolPrice: 0.98, dieselPrice: 0.88, lpgPrice: 0.65, taxPercentage: 15.00, lat: 23.8, lng: 45.0 },
  { id: 'ARE', name: 'United Arab Emirates', code: 'AE', region: 'Middle East', incomeLevel: 'High', subsidyLevel: 'Medium', petrolPrice: 1.35, dieselPrice: 1.28, lpgPrice: 0.88, taxPercentage: 18.20, lat: 23.4, lng: 53.8 },
  { id: 'QAT', name: 'Qatar', code: 'QA', region: 'Middle East', incomeLevel: 'High', subsidyLevel: 'High', petrolPrice: 1.02, dieselPrice: 0.92, lpgPrice: 0.70, taxPercentage: 14.50, lat: 25.3, lng: 51.1 },
  { id: 'KWT', name: 'Kuwait', code: 'KW', region: 'Middle East', incomeLevel: 'High', subsidyLevel: 'High', petrolPrice: 0.92, dieselPrice: 0.85, lpgPrice: 0.60, taxPercentage: 12.80, lat: 29.3, lng: 47.4 },
  { id: 'OMN', name: 'Oman', code: 'OM', region: 'Middle East', incomeLevel: 'High', subsidyLevel: 'High', petrolPrice: 1.15, dieselPrice: 1.08, lpgPrice: 0.75, taxPercentage: 16.00, lat: 21.4, lng: 55.9 },
  { id: 'BHR', name: 'Bahrain', code: 'BH', region: 'Middle East', incomeLevel: 'High', subsidyLevel: 'High', petrolPrice: 1.10, dieselPrice: 1.02, lpgPrice: 0.72, taxPercentage: 15.80, lat: 26.0, lng: 50.5 },
  { id: 'TUR', name: 'Turkey', code: 'TR', region: 'Middle East', incomeLevel: 'Upper Middle', subsidyLevel: 'None', petrolPrice: 2.25, dieselPrice: 2.18, lpgPrice: 1.32, taxPercentage: 38.99, lat: 38.9, lng: 35.2 },
  { id: 'ISR', name: 'Israel', code: 'IL', region: 'Middle East', incomeLevel: 'High', subsidyLevel: 'None', petrolPrice: 2.38, dieselPrice: 2.25, lpgPrice: 1.40, taxPercentage: 36.40, lat: 31.0, lng: 34.8 },
  { id: 'JOR', name: 'Jordan', code: 'JO', region: 'Middle East', incomeLevel: 'Upper Middle', subsidyLevel: 'Low', petrolPrice: 1.95, dieselPrice: 1.85, lpgPrice: 1.20, taxPercentage: 29.50, lat: 30.5, lng: 36.2 },
  { id: 'LBN', name: 'Lebanon', code: 'LB', region: 'Middle East', incomeLevel: 'Lower Middle', subsidyLevel: 'Low', petrolPrice: 1.85, dieselPrice: 1.75, lpgPrice: 1.15, taxPercentage: 22.00, lat: 33.8, lng: 35.8 },
  { id: 'IRQ', name: 'Iraq', code: 'IQ', region: 'Middle East', incomeLevel: 'Upper Middle', subsidyLevel: 'High', petrolPrice: 0.85, dieselPrice: 0.78, lpgPrice: 0.55, taxPercentage: 11.20, lat: 33.2, lng: 43.6 },
  { id: 'IRN', name: 'Iran', code: 'IR', region: 'Middle East', incomeLevel: 'Lower Middle', subsidyLevel: 'High', petrolPrice: 0.35, dieselPrice: 0.28, lpgPrice: 0.22, taxPercentage: 6.50, lat: 32.4, lng: 53.6 },

  // South America
  { id: 'BRA', name: 'Brazil', code: 'BR', region: 'South America', incomeLevel: 'Upper Middle', subsidyLevel: 'Low', petrolPrice: 1.85, dieselPrice: 1.75, lpgPrice: 1.15, taxPercentage: 24.20, lat: -14.2, lng: -51.9 },
  { id: 'ARG', name: 'Argentina', code: 'AR', region: 'South America', incomeLevel: 'Upper Middle', subsidyLevel: 'Medium', petrolPrice: 1.65, dieselPrice: 1.58, lpgPrice: 1.05, taxPercentage: 21.00, lat: -38.4, lng: -63.6 },
  { id: 'CHL', name: 'Chile', code: 'CL', region: 'South America', incomeLevel: 'High', subsidyLevel: 'Low', petrolPrice: 1.98, dieselPrice: 1.85, lpgPrice: 1.25, taxPercentage: 26.50, lat: -35.6, lng: -71.5 },
  { id: 'COL', name: 'Colombia', code: 'CO', region: 'South America', incomeLevel: 'Upper Middle', subsidyLevel: 'Medium', petrolPrice: 1.45, dieselPrice: 1.38, lpgPrice: 0.95, taxPercentage: 17.50, lat: 4.5, lng: -74.2 },
  { id: 'PER', name: 'Peru', code: 'PE', region: 'South America', incomeLevel: 'Upper Middle', subsidyLevel: 'Low', petrolPrice: 1.78, dieselPrice: 1.70, lpgPrice: 1.12, taxPercentage: 20.80, lat: -9.1, lng: -75.0 },
  { id: 'ECU', name: 'Ecuador', code: 'EC', region: 'South America', incomeLevel: 'Upper Middle', subsidyLevel: 'High', petrolPrice: 1.10, dieselPrice: 1.00, lpgPrice: 0.65, taxPercentage: 12.00, lat: -1.8, lng: -78.1 },
  { id: 'VEN', name: 'Venezuela', code: 'VE', region: 'South America', incomeLevel: 'Lower Middle', subsidyLevel: 'High', petrolPrice: 0.50, dieselPrice: 0.45, lpgPrice: 0.30, taxPercentage: 8.00, lat: 6.4, lng: -66.5 },
  { id: 'URY', name: 'Uruguay', code: 'UY', region: 'South America', incomeLevel: 'High', subsidyLevel: 'None', petrolPrice: 2.35, dieselPrice: 2.15, lpgPrice: 1.45, taxPercentage: 32.50, lat: -32.5, lng: -55.7 },
  { id: 'PRY', name: 'Paraguay', code: 'PY', region: 'South America', incomeLevel: 'Upper Middle', subsidyLevel: 'Low', petrolPrice: 1.72, dieselPrice: 1.62, lpgPrice: 1.10, taxPercentage: 18.00, lat: -23.4, lng: -58.4 },
  { id: 'BOL', name: 'Bolivia', code: 'BO', region: 'South America', incomeLevel: 'Lower Middle', subsidyLevel: 'High', petrolPrice: 1.05, dieselPrice: 0.95, lpgPrice: 0.60, taxPercentage: 11.50, lat: -16.2, lng: -63.5 },

  // Africa
  { id: 'RWA', name: 'Rwanda', code: 'RW', region: 'Africa', incomeLevel: 'Low', subsidyLevel: 'None', petrolPrice: 2.38, dieselPrice: 2.29, lpgPrice: 1.48, taxPercentage: 39.56, lat: -1.9, lng: 29.8 },
  { id: 'ZAF', name: 'South Africa', code: 'ZA', region: 'Africa', incomeLevel: 'Upper Middle', subsidyLevel: 'Low', petrolPrice: 1.95, dieselPrice: 1.88, lpgPrice: 1.25, taxPercentage: 29.80, lat: -30.5, lng: 22.9 },
  { id: 'NGA', name: 'Nigeria', code: 'NG', region: 'Africa', incomeLevel: 'Lower Middle', subsidyLevel: 'High', petrolPrice: 1.15, dieselPrice: 1.35, lpgPrice: 0.85, taxPercentage: 14.50, lat: 9.0, lng: 8.6 },
  { id: 'EGY', name: 'Egypt', code: 'EG', region: 'Africa', incomeLevel: 'Lower Middle', subsidyLevel: 'High', petrolPrice: 1.10, dieselPrice: 0.98, lpgPrice: 0.70, taxPercentage: 16.20, lat: 26.8, lng: 30.8 },
  { id: 'KEN', name: 'Kenya', code: 'KE', region: 'Africa', incomeLevel: 'Lower Middle', subsidyLevel: 'Low', petrolPrice: 2.05, dieselPrice: 1.95, lpgPrice: 1.30, taxPercentage: 31.50, lat: -0.0, lng: 37.9 },
  { id: 'MAR', name: 'Morocco', code: 'MA', region: 'Africa', incomeLevel: 'Lower Middle', subsidyLevel: 'Medium', petrolPrice: 1.82, dieselPrice: 1.70, lpgPrice: 1.15, taxPercentage: 26.00, lat: 31.7, lng: -7.0 },
  { id: 'GHA', name: 'Ghana', code: 'GH', region: 'Africa', incomeLevel: 'Lower Middle', subsidyLevel: 'Low', petrolPrice: 1.88, dieselPrice: 1.82, lpgPrice: 1.20, taxPercentage: 27.20, lat: 7.9, lng: -1.0 },
  { id: 'DZA', name: 'Algeria', code: 'DZ', region: 'Africa', incomeLevel: 'Upper Middle', subsidyLevel: 'High', petrolPrice: 0.75, dieselPrice: 0.65, lpgPrice: 0.45, taxPercentage: 10.50, lat: 28.0, lng: 1.6 },
  { id: 'ETH', name: 'Ethiopia', code: 'ET', region: 'Africa', incomeLevel: 'Low', subsidyLevel: 'Medium', petrolPrice: 1.65, dieselPrice: 1.58, lpgPrice: 1.05, taxPercentage: 22.50, lat: 9.1, lng: 40.4 },
  { id: 'AGO', name: 'Angola', code: 'AO', region: 'Africa', incomeLevel: 'Lower Middle', subsidyLevel: 'High', petrolPrice: 0.80, dieselPrice: 0.72, lpgPrice: 0.50, taxPercentage: 12.00, lat: -11.2, lng: 17.8 },
  { id: 'CIV', name: 'Ivory Coast', code: 'CI', region: 'Africa', incomeLevel: 'Lower Middle', subsidyLevel: 'Low', petrolPrice: 1.92, dieselPrice: 1.85, lpgPrice: 1.22, taxPercentage: 28.40, lat: 7.5, lng: -5.5 },
  { id: 'MOZ', name: 'Mozambique', code: 'MZ', region: 'Africa', incomeLevel: 'Low', subsidyLevel: 'Low', petrolPrice: 1.85, dieselPrice: 1.78, lpgPrice: 1.18, taxPercentage: 25.80, lat: -18.6, lng: 35.5 },

  // Oceania
  { id: 'NZL', name: 'New Zealand', code: 'NZ', region: 'Oceania', incomeLevel: 'High', subsidyLevel: 'None', petrolPrice: 2.44, dieselPrice: 2.26, lpgPrice: 1.42, taxPercentage: 39.27, lat: -40.9, lng: 174.8 },
  { id: 'AUS', name: 'Australia', code: 'AU', region: 'Oceania', incomeLevel: 'High', subsidyLevel: 'Low', petrolPrice: 2.18, dieselPrice: 2.12, lpgPrice: 1.35, taxPercentage: 28.50, lat: -25.2, lng: 133.7 },
  { id: 'FJI', name: 'Fiji', code: 'FJ', region: 'Oceania', incomeLevel: 'Upper Middle', subsidyLevel: 'Low', petrolPrice: 1.95, dieselPrice: 1.88, lpgPrice: 1.25, taxPercentage: 24.20, lat: -17.7, lng: 178.0 },
  { id: 'PNG', name: 'Papua New Guinea', code: 'PG', region: 'Oceania', incomeLevel: 'Lower Middle', subsidyLevel: 'Low', petrolPrice: 1.88, dieselPrice: 1.82, lpgPrice: 1.20, taxPercentage: 22.80, lat: -6.3, lng: 143.9 },

  // Additional countries to complete 84
  { id: 'RUS', name: 'Russia', code: 'RU', region: 'Europe', incomeLevel: 'Upper Middle', subsidyLevel: 'High', petrolPrice: 1.15, dieselPrice: 1.12, lpgPrice: 0.72, taxPercentage: 18.50, lat: 61.5, lng: 105.3 },
  { id: 'UKR', name: 'Ukraine', code: 'UA', region: 'Europe', incomeLevel: 'Lower Middle', subsidyLevel: 'Low', petrolPrice: 2.05, dieselPrice: 2.00, lpgPrice: 1.12, taxPercentage: 32.00, lat: 48.3, lng: 31.1 },
  { id: 'SRB', name: 'Serbia', code: 'RS', region: 'Europe', incomeLevel: 'Upper Middle', subsidyLevel: 'Low', petrolPrice: 2.15, dieselPrice: 2.20, lpgPrice: 1.18, taxPercentage: 36.20, lat: 44.0, lng: 21.0 },
  { id: 'BGR', name: 'Bulgaria', code: 'BG', region: 'Europe', incomeLevel: 'Upper Middle', subsidyLevel: 'Low', petrolPrice: 1.92, dieselPrice: 1.95, lpgPrice: 1.02, taxPercentage: 34.00, lat: 42.7, lng: 25.4 },
  { id: 'HRV', name: 'Croatia', code: 'HR', region: 'Europe', incomeLevel: 'High', subsidyLevel: 'Low', petrolPrice: 2.18, dieselPrice: 2.14, lpgPrice: 1.16, taxPercentage: 35.80, lat: 45.1, lng: 15.2 },
  { id: 'SVK', name: 'Slovakia', code: 'SK', region: 'Europe', incomeLevel: 'High', subsidyLevel: 'Low', petrolPrice: 2.12, dieselPrice: 2.15, lpgPrice: 1.14, taxPercentage: 36.00, lat: 48.6, lng: 19.6 },
  { id: 'SVN', name: 'Slovenia', code: 'SI', region: 'Europe', incomeLevel: 'High', subsidyLevel: 'Low', petrolPrice: 2.16, dieselPrice: 2.18, lpgPrice: 1.18, taxPercentage: 36.50, lat: 46.1, lng: 14.9 },
  { id: 'EST', name: 'Estonia', code: 'EE', region: 'Europe', incomeLevel: 'High', subsidyLevel: 'None', petrolPrice: 2.25, dieselPrice: 2.18, lpgPrice: 1.22, taxPercentage: 37.10, lat: 58.5, lng: 25.0 },
  { id: 'LVA', name: 'Latvia', code: 'LV', region: 'Europe', incomeLevel: 'High', subsidyLevel: 'None', petrolPrice: 2.22, dieselPrice: 2.16, lpgPrice: 1.20, taxPercentage: 36.90, lat: 56.8, lng: 24.6 },
  { id: 'LTU', name: 'Lithuania', code: 'LT', region: 'Europe', incomeLevel: 'High', subsidyLevel: 'None', petrolPrice: 2.20, dieselPrice: 2.15, lpgPrice: 1.18, taxPercentage: 36.70, lat: 55.1, lng: 23.8 },
  { id: 'CYP', name: 'Cyprus', code: 'CY', region: 'Europe', incomeLevel: 'High', subsidyLevel: 'None', petrolPrice: 2.18, dieselPrice: 2.10, lpgPrice: 1.20, taxPercentage: 35.40, lat: 35.1, lng: 33.4 },
  { id: 'LUX', name: 'Luxembourg', code: 'LU', region: 'Europe', incomeLevel: 'High', subsidyLevel: 'None', petrolPrice: 2.15, dieselPrice: 2.05, lpgPrice: 1.15, taxPercentage: 32.80, lat: 49.8, lng: 6.1 },
  { id: 'ISL', name: 'Iceland', code: 'IS', region: 'Europe', incomeLevel: 'High', subsidyLevel: 'None', petrolPrice: 2.62, dieselPrice: 2.50, lpgPrice: 1.55, taxPercentage: 38.60, lat: 64.9, lng: -19.0 },
  { id: 'LKA', name: 'Sri Lanka', code: 'LK', region: 'Asia', incomeLevel: 'Lower Middle', subsidyLevel: 'Low', petrolPrice: 1.70, dieselPrice: 1.62, lpgPrice: 1.08, taxPercentage: 21.00, lat: 7.8, lng: 80.7 },
  { id: 'KAZ', name: 'Kazakhstan', code: 'KZ', region: 'Asia', incomeLevel: 'Upper Middle', subsidyLevel: 'High', petrolPrice: 0.95, dieselPrice: 0.90, lpgPrice: 0.58, taxPercentage: 14.00, lat: 48.0, lng: 66.9 },
  { id: 'UZB', name: 'Uzbekistan', code: 'UZ', region: 'Asia', incomeLevel: 'Lower Middle', subsidyLevel: 'Medium', petrolPrice: 1.20, dieselPrice: 1.15, lpgPrice: 0.75, taxPercentage: 16.50, lat: 41.3, lng: 64.5 },
  { id: 'SEN', name: 'Senegal', code: 'SN', region: 'Africa', incomeLevel: 'Lower Middle', subsidyLevel: 'Low', petrolPrice: 1.90, dieselPrice: 1.82, lpgPrice: 1.20, taxPercentage: 27.50, lat: 14.4, lng: -14.4 },
  { id: 'TUN', name: 'Tunisia', code: 'TN', region: 'Africa', incomeLevel: 'Lower Middle', subsidyLevel: 'High', petrolPrice: 1.25, dieselPrice: 1.18, lpgPrice: 0.78, taxPercentage: 17.00, lat: 33.8, lng: 9.5 },
  { id: 'ZMB', name: 'Zambia', code: 'ZM', region: 'Africa', incomeLevel: 'Lower Middle', subsidyLevel: 'Low', petrolPrice: 1.82, dieselPrice: 1.78, lpgPrice: 1.15, taxPercentage: 25.00, lat: -13.1, lng: 27.8 },
  { id: 'UGA', name: 'Uganda', code: 'UG', region: 'Africa', incomeLevel: 'Low', subsidyLevel: 'Low', petrolPrice: 1.95, dieselPrice: 1.88, lpgPrice: 1.25, taxPercentage: 29.00, lat: 1.3, lng: 32.2 },
  { id: 'TZA', name: 'Tanzania', code: 'TZ', region: 'Africa', incomeLevel: 'Lower Middle', subsidyLevel: 'Low', petrolPrice: 1.86, dieselPrice: 1.80, lpgPrice: 1.18, taxPercentage: 26.50, lat: -6.3, lng: 34.8 },
  { id: 'CMR', name: 'Cameroon', code: 'CM', region: 'Africa', incomeLevel: 'Lower Middle', subsidyLevel: 'Low', petrolPrice: 1.88, dieselPrice: 1.80, lpgPrice: 1.20, taxPercentage: 27.00, lat: 7.3, lng: 12.3 },
  { id: 'PAN', name: 'Panama', code: 'PA', region: 'North America', incomeLevel: 'High', subsidyLevel: 'Medium', petrolPrice: 1.60, dieselPrice: 1.50, lpgPrice: 1.00, taxPercentage: 17.80, lat: 8.5, lng: -80.7 },
  { id: 'CRI', name: 'Costa Rica', code: 'CR', region: 'North America', incomeLevel: 'Upper Middle', subsidyLevel: 'Low', petrolPrice: 1.90, dieselPrice: 1.80, lpgPrice: 1.18, taxPercentage: 28.20, lat: 9.7, lng: -83.7 },
  { id: 'DOM', name: 'Dominican Rep.', code: 'DO', region: 'North America', incomeLevel: 'Upper Middle', subsidyLevel: 'Low', petrolPrice: 1.92, dieselPrice: 1.78, lpgPrice: 1.15, taxPercentage: 26.40, lat: 18.7, lng: -70.1 },
  { id: 'GTM', name: 'Guatemala', code: 'GT', region: 'North America', incomeLevel: 'Upper Middle', subsidyLevel: 'Low', petrolPrice: 1.75, dieselPrice: 1.62, lpgPrice: 1.05, taxPercentage: 21.50, lat: 15.7, lng: -90.2 },
  { id: 'HND', name: 'Honduras', code: 'HN', region: 'North America', incomeLevel: 'Lower Middle', subsidyLevel: 'Low', petrolPrice: 1.78, dieselPrice: 1.65, lpgPrice: 1.08, taxPercentage: 22.00, lat: 15.2, lng: -86.2 },
  { id: 'SLV', name: 'El Salvador', code: 'SV', region: 'North America', incomeLevel: 'Upper Middle', subsidyLevel: 'Low', petrolPrice: 1.74, dieselPrice: 1.60, lpgPrice: 1.04, taxPercentage: 21.00, lat: 13.7, lng: -88.8 },
  { id: 'NIC', name: 'Nicaragua', code: 'NI', region: 'North America', incomeLevel: 'Lower Middle', subsidyLevel: 'Low', petrolPrice: 1.72, dieselPrice: 1.58, lpgPrice: 1.02, taxPercentage: 20.50, lat: 12.8, lng: -85.2 },
  { id: 'JAM', name: 'Jamaica', code: 'JM', region: 'North America', incomeLevel: 'Upper Middle', subsidyLevel: 'Low', petrolPrice: 1.85, dieselPrice: 1.75, lpgPrice: 1.12, taxPercentage: 25.00, lat: 18.1, lng: -77.2 },
  { id: 'TTO', name: 'Trinidad and Tobago', code: 'TT', region: 'North America', incomeLevel: 'High', subsidyLevel: 'High', petrolPrice: 1.15, dieselPrice: 1.05, lpgPrice: 0.70, taxPercentage: 15.00, lat: 10.6, lng: -61.2 },
  { id: 'WSM', name: 'Samoa', code: 'WS', region: 'Oceania', incomeLevel: 'Lower Middle', subsidyLevel: 'Low', petrolPrice: 1.92, dieselPrice: 1.85, lpgPrice: 1.22, taxPercentage: 23.50, lat: -13.7, lng: -172.1 },
  { id: 'VUT', name: 'Vanuatu', code: 'VU', region: 'Oceania', incomeLevel: 'Lower Middle', subsidyLevel: 'Low', petrolPrice: 1.95, dieselPrice: 1.88, lpgPrice: 1.25, taxPercentage: 24.00, lat: -15.3, lng: 166.9 },
  { id: 'KIR', name: 'Kiribati', code: 'KI', region: 'Oceania', incomeLevel: 'Lower Middle', subsidyLevel: 'Low', petrolPrice: 1.98, dieselPrice: 1.90, lpgPrice: 1.28, taxPercentage: 24.50, lat: -3.3, lng: -168.7 },
  { id: 'TON', name: 'Tonga', code: 'TO', region: 'Oceania', incomeLevel: 'Upper Middle', subsidyLevel: 'Low', petrolPrice: 1.94, dieselPrice: 1.86, lpgPrice: 1.24, taxPercentage: 23.80, lat: -21.1, lng: -175.1 },
];

// Helper to generate representative data samples for the 27,468 rows benchmark and Tableau grid preview
export function generateSampleRecords(count: number = 100): FuelRecord[] {
  const records: FuelRecord[] = [];
  const years = [2020, 2021, 2022, 2023, 2024, 2025, 2026];
  const months = ['01', '02', '03', '04', '05', '06', '07', '08', '09', '10', '11', '12'];
  const days = ['01', '08', '15', '22'];

  let idCounter = 1;

  for (let i = 0; i < count; i++) {
    const country = COUNTRIES_DATA[i % COUNTRIES_DATA.length];
    const year = years[i % years.length];
    const month = months[(i * 3) % months.length];
    const day = days[(i * 2) % days.length];
    
    // Trend multiplier based on year
    const trendPoint = YEAR_TRENDS.find(t => t.year === year) || YEAR_TRENDS[0];
    const brent = trendPoint.brentPrice;
    const factor = (trendPoint.petrolPrice / 2.28);
    const noise = 0.96 + ((i * 17) % 9) / 100;

    records.push({
      id: idCounter++,
      date: `${day}-${month}-${year}`,
      country: country.name,
      region: country.region,
      incomeLevel: country.incomeLevel,
      subsidyLevel: country.subsidyLevel,
      petrolUsdLiter: +(country.petrolPrice * factor * noise).toFixed(4),
      dieselUsdLiter: +(country.dieselPrice * factor * noise).toFixed(4),
      lpgUsdLiter: +(country.lpgPrice * factor * noise).toFixed(4),
      brentCrudeUsd: +(brent * noise).toFixed(2),
      taxPercentage: country.taxPercentage,
    });
  }

  return records;
}

export const INITIAL_MODULES = [
  {
    id: 'data-prep',
    title: 'Data Preparation',
    percentage: 100,
    subItems: [
      { id: 'dp-1', title: 'Connect Global Fuel Prices Dataset (27,468 records)', completed: true },
      { id: 'dp-2', title: 'Data Cleaning & Currency Normalization to USD', completed: true },
      { id: 'dp-3', title: 'Relate Tables & Define 10 Analytical Variables', completed: true },
      { id: 'dp-4', title: 'Create Calculated Fields (Tax Burden, Subsidy Delta)', completed: true },
    ]
  },
  {
    id: 'data-vis',
    title: 'Data Visualizations',
    percentage: 100,
    subItems: [
      { id: 'dv-1', title: 'Global Petrol Price Chloropleth Map', completed: true },
      { id: 'dv-2', title: 'Global Diesel Price Chloropleth Map', completed: true },
      { id: 'dv-3', title: 'Multi-Commodity Historical Trendlines (2020-2027)', completed: true },
      { id: 'dv-4', title: 'Regional Tax Percentage Donut Chart', completed: true },
      { id: 'dv-5', title: 'Highest Tax-Paying Nations Ranking', completed: true },
      { id: 'dv-6', title: 'Top 3 Economies Fuel Comparison (NAFTA)', completed: true },
    ]
  },
  {
    id: 'dashboard',
    title: 'Dashboard',
    percentage: 100,
    subItems: [
      { id: 'd-1', title: 'Responsive and Design of Dashboard', completed: true },
      { id: 'd-2', title: 'Interactive Multi-Variable Filter Controls', completed: true },
      { id: 'd-3', title: 'Performance Indicator KPI Metric Cards', completed: true },
      { id: 'd-4', title: 'Dynamic Tooltip & Cross-Filtering Logic', completed: true },
    ]
  },
  {
    id: 'story',
    title: 'Story',
    percentage: 100,
    subItems: [
      { id: 's-1', title: 'Story 1: Global Fuel Price and Tax Performance', completed: true },
      { id: 's-2', title: 'Story 2: Petrol vs. Diesel Price Convergence Post-2022', completed: true },
      { id: 's-3', title: 'Story 3: Brent Crude Volatility Transmission', completed: true },
      { id: 's-4', title: 'Story 4: Disparities in Regional Tax Regimes', completed: true },
      { id: 's-5', title: 'Story 5: Subsidy Protection vs. Fiscal Vulnerability', completed: true },
    ]
  },
  {
    id: 'perf-test',
    title: 'Performance Testing',
    percentage: 100,
    subItems: [
      { id: 'pt-1', title: 'Amount of Data Rendered', completed: true },
      { id: 'pt-2', title: 'Utilization of Filters', completed: true },
      { id: 'pt-3', title: 'Number of Calculated Fields', completed: true },
      { id: 'pt-4', title: 'Number of Visualizations / Graphs', completed: true },
    ]
  },
  {
    id: 'web-int',
    title: 'Web Integration',
    percentage: 100,
    subItems: [
      { id: 'wi-1', title: 'Publishing', completed: true },
      { id: 'wi-2', title: 'Web Integration of Dashboard and Story', completed: true },
      { id: 'wi-3', title: 'Embed Controls, Floating Navigation & Export Handlers', completed: true },
    ]
  },
  {
    id: 'doc-demo',
    title: 'Project Demonstration & Documentation',
    percentage: 100,
    subItems: [
      { id: 'dd-1', title: 'Scenario 1: Dr. Sarah Mitchell (Policy Consultant)', completed: true },
      { id: 'dd-2', title: 'Scenario 2: Marcus Thompson (Supply Chain Logistics)', completed: true },
      { id: 'dd-3', title: 'Scenario 3: Prof. Elena Rodriguez (Energy Economics)', completed: true },
      { id: 'dd-4', title: 'Executive Summary & Policy Whitepaper Generation', completed: true },
    ]
  }
];
