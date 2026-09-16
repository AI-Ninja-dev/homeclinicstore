import { launch } from './launch';

export type CatalogProduct = {
  slug: string;
  name: string;
  category: string;
  copy: string;
  detail: string;
  icon: 'glucose' | 'pressure' | 'temperature' | 'oxygen';
  image?: string;
};

export const catalog: CatalogProduct[] = [
  { slug: 'yuwell-cgm', name: 'Yuwell Anytime CT3', category: 'Manage diabetes', copy: 'Explore continuous glucose patterns with a wearable monitoring system.', detail: '14-day monitoring · Reusable transmitter', icon: 'glucose', image: '/images/yuwell-anytime-ct3.webp' },
  { slug: 'yuwell-blood-pressure', name: 'Yuwell Blood Pressure Monitor', category: 'Monitor blood pressure', copy: 'Make room for a calmer daily routine. Start with a monitor that fits your arm and helps you record readings to discuss with your healthcare professional.', detail: 'Exact model and specification confirmed on enquiry', icon: 'pressure', image: '/images/bp-upper-arm.webp' },
  { slug: 'yuwell-thermometer', name: 'Yuwell Digital Thermometer', category: 'Track daily vitals', copy: 'A useful essential for your home-care kit. Choose a thermometer with a clear display and a measurement method that suits the person you are caring for.', detail: 'Exact model and specification confirmed on enquiry', icon: 'temperature', image: '/images/thermometer.webp' },
  { slug: 'yuwell-pulse-oximeter', name: 'Yuwell Pulse Oximeter', category: 'Track daily vitals', copy: 'Bring more context to a guided home-monitoring routine. Explore a compact device for spot checks of estimated oxygen saturation and pulse, with its limitations clearly explained.', detail: 'Exact model and specification confirmed on enquiry', icon: 'oxygen', image: '/images/spo2.webp' },
];
