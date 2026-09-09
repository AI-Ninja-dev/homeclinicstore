export const products=[
{slug:'yuwell-cgm',name:'Yuwell Continuous Glucose Monitoring',category:'Diabetes & CGM',description:'Explore continuous glucose monitoring options for care at home.',price:2499},
{slug:'yuwell-blood-pressure',name:'Yuwell Blood Pressure Monitor',category:'Blood Pressure & Cardiovascular',description:'Explore blood pressure monitoring equipment for home use.',price:1299},
{slug:'yuwell-pulse-oximeter',name:'Yuwell Pulse Oximeter',category:'Pulse Oximeters',description:'Explore compact oxygen saturation and pulse monitoring equipment.',price:699},
{slug:'yuwell-thermometer',name:'Yuwell Digital Thermometer',category:'Thermometers',description:'Explore temperature measurement equipment for the home.',price:349}
];
export const categories=['All','Blood Pressure & Cardiovascular','Diabetes & CGM','Pulse Oximeters','Thermometers','Respiratory Care','ECG & Smart Health Devices','Patient Monitoring','Mobility & Home Care','Consumables'];
export const money=(n:number)=>new Intl.NumberFormat('en-ZA',{style:'currency',currency:'ZAR',maximumFractionDigits:0}).format(n);
