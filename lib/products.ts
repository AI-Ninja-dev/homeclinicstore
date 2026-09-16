export const products = [
  { slug: 'yuwell-cgm', name: 'Yuwell Anytime CT-3 CGM', category: 'Diabetes & CGM', description: 'Continuous glucose monitoring with reusable transmitter and 14-day sensors.', price: 2500 },
  { slug: 'yuwell-transmitter', name: 'Yuwell Anytime Transmitter', category: 'Diabetes & CGM', description: 'Reusable CGM transmitter for Anytime CT-3.', price: 1100 },
  { slug: 'yuwell-sensor', name: 'Yuwell Anytime Sensor (14-day)', category: 'Diabetes & CGM', description: '14-day CGM sensor with auto-applicator.', price: 950 },
  { slug: 'rossmax-z5', name: 'Rossmax Z5 Bluetooth BP (PARR)', category: 'Blood Pressure & Cardiovascular', description: 'PARR AFib detection, Bluetooth, rechargeable.', price: 2299 },
  { slug: 'rossmax-x5', name: 'Rossmax X5 BP Monitor (PARR)', category: 'Blood Pressure & Cardiovascular', description: 'PARR technology upper-arm BP monitor.', price: 1699 },
  { slug: 'bp-upper-arm', name: 'Upper-Arm Blood Pressure Monitor', category: 'Blood Pressure & Cardiovascular', description: 'Automatic upper-arm BP monitor.', price: 1199 },
  { slug: 'bp-wrist', name: 'Wrist Blood Pressure Monitor', category: 'Blood Pressure & Cardiovascular', description: 'Compact wrist BP monitor.', price: 999 },
  { slug: 'bp-bluetooth', name: 'Bluetooth Blood Pressure Monitor', category: 'Blood Pressure & Cardiovascular', description: 'App-connected BP monitoring.', price: 1899 },
  { slug: 'rossmax-sb210', name: 'Rossmax SB210 Pulse Oximeter (ACT)', category: 'Pulse Oximeters', description: 'SpO2 with Artery Check Technology and Bluetooth.', price: 2299 },
  { slug: 'spo2-fingertip', name: 'Fingertip Pulse Oximeter', category: 'Pulse Oximeters', description: 'Compact SpO2 and pulse spot-check.', price: 699 },
  { slug: 'spo2-ring', name: 'SpO2 Ring Monitor', category: 'Pulse Oximeters', description: 'Wearable ring-style SpO2 monitor.', price: 1499 },
  { slug: 'rossmax-hc700bt', name: 'Rossmax HC700BT Thermometer', category: 'Thermometers', description: 'Non-contact telephoto thermometer with Bluetooth.', price: 1099 },
  { slug: 'rossmax-hs200', name: 'Rossmax HS200 Glucometer', category: 'Diabetes & CGM', description: 'Bluetooth blood glucose meter, GDH-FAD.', price: 999 },
  { slug: 'glucose-strips', name: 'Glucose Test Strips (HS200)', category: 'Consumables', description: 'Test strips for HS200 meter.', price: 349 },
  { slug: 'cpap', name: 'CPAP / PAP Device', category: 'Respiratory Care', description: 'Home CPAP therapy system.', price: 15000 },
  { slug: 'capnograph', name: 'Portable Capnograph', category: 'Respiratory Care', description: 'End-tidal CO2 monitor.', price: 12000 },
  { slug: 'scale-wb101', name: 'Digital Body Scale', category: 'Patient Monitoring', description: 'Digital body weight scale.', price: 599 },
  { slug: 'baby-scale', name: 'Baby / Infant Scale', category: 'Patient Monitoring', description: 'Infant weighing scale.', price: 899 },
  { slug: 'fetal-doppler', name: 'Fetal Doppler', category: 'Mobility & Home Care', description: 'Handheld fetal heart rate Doppler.', price: 1299 },
  { slug: 'ecg-portable', name: 'Portable ECG', category: 'ECG & Smart Health Devices', description: 'Handheld electrocardiograph.', price: 4500 },
];

export const categories = [
  'All',
  'Blood Pressure & Cardiovascular',
  'Diabetes & CGM',
  'Pulse Oximeters',
  'Thermometers',
  'Respiratory Care',
  'ECG & Smart Health Devices',
  'Patient Monitoring',
  'Mobility & Home Care',
  'Consumables',
];

export const money = (n: number) =>
  new Intl.NumberFormat('en-ZA', { style: 'currency', currency: 'ZAR', maximumFractionDigits: 0 }).format(n);
