'use client';

import { useState, useMemo } from 'react';
import { catalog } from '../../lib/catalog';
import { ProductCard } from '../components/ProductCard';
import { PageHero } from '../components/Page';
import { HomeAction } from '../components/home/HomeUI';

const categories = [
  'All devices',
  'Manage diabetes',
  'Monitor blood pressure',
  'Track daily vitals',
  'Respiratory care',
  'Fetal & maternal',
  'ECG & diagnostics',
];

export default function Shop() {
  const [category, setCategory] = useState('All devices');
  const [query, setQuery] = useState('');

  const filtered = useMemo(() => {
    const q = query.trim().toLowerCase();
    return catalog.filter((product) => {
      const catOk = category === 'All devices' || product.category === category;
      const text = `${product.name} ${product.category} ${product.copy} ${product.detail}`.toLowerCase();
      return catOk && (!q || text.includes(q));
    });
  }, [category, query]);

  return (
    <main>
      <PageHero eyebrow="THE HOMECLINICSTORE COLLECTION" title="Choose for the life you live.">
        From continuous glucose monitoring to everyday essentials. Explore devices with clear guidance before you order.
      </PageHero>
      <section className="hcs-wrap hcs-section">
        <div className="store-shop-bar">
          <label className="store-shop-search">
            Find a device
            <input
              className="searchInput"
              type="search"
              value={query}
              onChange={(e) => setQuery(e.target.value)}
              placeholder="Search CGM, blood pressure, SpO2, CPAP…"
              aria-label="Search devices"
            />
          </label>
          <HomeAction href="/device-finder" secondary>
            Help me choose
          </HomeAction>
        </div>
        <div className="filterRow" aria-label="Shop by health need">
          {categories.map((item) => (
            <button
              key={item}
              type="button"
              onClick={() => setCategory(item)}
              className={item === category ? 'active' : ''}
              aria-pressed={item === category}
            >
              {item}
            </button>
          ))}
        </div>
        <p role="status">
          {filtered.length} {filtered.length === 1 ? 'device' : 'devices'} to explore
        </p>
        {filtered.length ? (
          <div className="store-shop-grid">
            {filtered.map((product) => (
              <ProductCard key={product.slug} product={product} />
            ))}
          </div>
        ) : (
          <div className="store-empty">
            <h2>No matching devices.</h2>
            <p>Try a different search or ask for help with the equipment you need.</p>
            <div className="actions">
              <button
                type="button"
                className="button"
                onClick={() => {
                  setCategory('All devices');
                  setQuery('');
                }}
              >
                Clear filters
              </button>
              <HomeAction href="/contact?topic=Help%20finding%20equipment" secondary>
                Ask our team
              </HomeAction>
            </div>
          </div>
        )}
        <p className="releaseNote">
          Indicative prices in rand. Final price, South African availability and supplied models are confirmed by quote. Online payments are not currently available.
        </p>
      </section>
    </main>
  );
}
