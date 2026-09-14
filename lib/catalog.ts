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
  ...launch.map((product): CatalogProduct => ({
    slug: product.slug,
    name: product.name,
    category: product.category === 'Blood pressure' ? 'Monitor blood pressure' : 'Track daily vitals',
    copy: product.copy,
    detail: 'Exact model and specification confirmed on enquiry',
    icon: product.category === 'Blood pressure' ? 'pressure' : product.category === 'Temperature' ? 'temperature' : 'oxygen',
  })),
];
