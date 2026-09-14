import Link from 'next/link';
import { Activity, HeartPulse, Thermometer, Waves, ArrowUpRight } from 'lucide-react';
import type { CatalogProduct } from '../../lib/catalog';
import AddToBag from './AddToBag';

const icons = { glucose: Waves, pressure: Activity, temperature: Thermometer, oxygen: HeartPulse };

export function ProductCard({ product }: { product: CatalogProduct }) {
  const Icon = icons[product.icon];
  return <article className="store-product-card">
    <Link href={`/shop/${product.slug}`} className={`store-product-media${product.image ? ' has-image' : ''}`} aria-label={`Explore ${product.name}`}>
      {product.image ? <img src={product.image} alt="Yuwell Anytime CT3 applicator and transmitter" width={1400} height={520} loading="lazy" /> : <Icon size={64} strokeWidth={1} aria-hidden="true" />}
      {!product.image && <span>Model selected on enquiry</span>}
      <span className="store-product-arrow"><ArrowUpRight size={20} aria-hidden="true" /></span>
    </Link>
    <div className="store-product-body"><span className="store-category">{product.category}</span><h3><Link href={`/shop/${product.slug}`}>{product.name}</Link></h3><p>{product.copy}</p><small>{product.detail}</small><div className="store-product-price">Price on request</div><div className="store-product-actions"><Link className="textLink" href={`/shop/${product.slug}`}>View details <ArrowUpRight size={16} aria-hidden="true" /></Link><AddToBag slug={product.slug} /></div></div>
  </article>;
}
