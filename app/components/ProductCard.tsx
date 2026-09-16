'use client';

import { useState } from 'react';
import { assetPath } from '../../lib/assets';
import Link from 'next/link';
import { Activity, HeartPulse, Thermometer, Waves, ArrowUpRight, Wind, Scale, Baby, Heart } from 'lucide-react';
import type { CatalogProduct } from '../../lib/catalog';
import AddToBag from './AddToBag';
import { money } from '../../lib/products';

const icons = {
  glucose: Waves,
  pressure: Activity,
  temperature: Thermometer,
  oxygen: HeartPulse,
  respiratory: Wind,
  scale: Scale,
  fetal: Baby,
  ecg: Heart,
};

export function ProductCard({ product }: { product: CatalogProduct }) {
  const Icon = icons[product.icon] || Activity;
  const [imgFailed, setImgFailed] = useState(false);
  const showImage = Boolean(product.image) && !imgFailed;

  return (
    <article className="store-product-card">
      <Link
        href={`/shop/${product.slug}`}
        className={`store-product-media${showImage ? ' has-image' : ''}`}
        aria-label={`Explore ${product.name}`}
      >
        {showImage ? (
          <img
            src={assetPath(product.image!)}
            alt={`${product.name} product image`}
            width={800}
            height={600}
            loading="lazy"
            style={{ objectFit: 'contain', background: 'transparent' }}
            onError={() => setImgFailed(true)}
          />
        ) : (
          <>
            <Icon size={64} strokeWidth={1} aria-hidden="true" />
            <span>Photo coming soon</span>
          </>
        )}
        <span className="store-product-arrow">
          <ArrowUpRight size={20} aria-hidden="true" />
        </span>
      </Link>
      <div className="store-product-body">
        <span className="store-category">{product.category}</span>
        <h3>
          <Link href={`/shop/${product.slug}`}>{product.name}</Link>
        </h3>
        <p>{product.copy}</p>
        <small>{product.detail}</small>
        <div className="store-product-price">
          {product.priceHint
            ? `From ${money(product.priceHint)} · confirmed on quote`
            : 'Price on request'}
        </div>
        <div className="store-product-actions">
          <Link className="textLink" href={`/shop/${product.slug}`}>
            View details <ArrowUpRight size={16} aria-hidden="true" />
          </Link>
          <AddToBag slug={product.slug} />
        </div>
      </div>
    </article>
  );
}
