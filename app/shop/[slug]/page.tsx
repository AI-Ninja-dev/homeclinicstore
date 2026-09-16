import { CGMDetail } from '../../components/home/CGMDetail';
import Link from 'next/link';
import { notFound } from 'next/navigation';
import { launch } from '../../../lib/launch';
import { catalog } from '../../../lib/catalog';
import { money } from '../../../lib/products';
import { PageHero } from '../../components/Page';
import AddToBag from '../../components/AddToBag';
import { assetPath } from '../../../lib/assets';

export function generateStaticParams() {
  const fromLaunch = launch.map((p) => ({ slug: p.slug }));
  const fromCatalog = catalog.map((p) => ({ slug: p.slug }));
  const seen = new Set<string>();
  const all = [...fromCatalog, ...fromLaunch, { slug: 'yuwell-cgm' }];
  return all.filter((p) => {
    if (seen.has(p.slug)) return false;
    seen.add(p.slug);
    return true;
  });
}

export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const c = catalog.find((p) => p.slug === slug);
  const p = launch.find((p) => p.slug === slug);
  return {
    title: c?.name || p?.name || (slug === 'yuwell-cgm' ? 'Continuous glucose monitoring' : 'Product not found'),
    description: c?.copy || p?.copy,
  };
}

export default async function Product({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  if (slug === 'yuwell-cgm') return <CGMDetail />;

  const p = launch.find((x) => x.slug === slug);
  const catalogItem = catalog.find((c) => c.slug === slug);

  if (!p && !catalogItem) notFound();

  const name = catalogItem?.name || p?.name || 'Product';
  const category = catalogItem?.category || p?.category || 'Equipment';
  const copy = catalogItem?.copy || p?.copy || '';
  const imageSrc = catalogItem?.image;
  const priceHint = catalogItem?.priceHint;
  const detail = catalogItem?.detail;

  return (
    <main>
      <PageHero eyebrow={category.toUpperCase()} title={p?.headline || name}>
        {copy}
      </PageHero>

      <section className="container section releaseGrid" style={{ alignItems: 'start' }}>
        <div>
          <Link className="backLink" href="/shop">
            ← Back to shop
          </Link>
          <h2>{name}</h2>
          {detail && <p>{detail}</p>}
          {p?.fit && <p>{p.fit}</p>}
          <p className="quoteLabel">
            {priceHint ? `From ${money(priceHint)} · final price on quote` : 'Price & availability on request'}
          </p>
          <div className="actions">
            <Link className="button" href={'/contact?topic=' + encodeURIComponent('Quote: ' + name)}>
              Request a quote →
            </Link>
            <AddToBag slug={slug} />
          </div>
          <p className="releaseNote">
            No payment required to enquire. Confirm the exact model, price in rand and delivery before ordering.
          </p>
          <div className="productSummary">
            <h3>Confidence comes from the details.</h3>
            <p>
              Ask for supplied accessories, instructions and warranty terms in writing. If reliable mains power is a
              concern, confirm battery operation and replacement availability.
            </p>
            <Link className="textLink" href="/buying-guide">
              Delivery, returns & buying guidance →
            </Link>
          </div>
        </div>

        <div>
          {imageSrc && (
            <figure
              className="product-detail-image"
              style={{ marginBottom: '1.5rem', borderRadius: '12px', overflow: 'hidden', background: '#f8fafb' }}
            >
              <img
                src={assetPath(imageSrc)}
                alt={`${name} product photo`}
                width={800}
                height={600}
                style={{ width: '100%', height: 'auto', display: 'block', objectFit: 'contain' }}
                loading="eager"
              />
              <figcaption style={{ padding: '0.75rem 1rem', fontSize: '0.875rem', color: '#5a6570' }}>
                Product image · Exact model confirmed on enquiry
              </figcaption>
            </figure>
          )}
          {p?.specs && (
            <>
              <h2>Specifications to confirm</h2>
              <p>
                These are selection checks, not verified specifications for a particular model. Your quote should
                identify the exact device.
              </p>
              <table className="specTable">
                <tbody>
                  {p.specs.map(([label, value]) => (
                    <tr key={label}>
                      <th scope="row">{label}</th>
                      <td>{value}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
              <div className="notice">
                {p.note}
                {p.source && (
                  <>
                    {' '}
                    <a className="textLink" href={p.source}>
                      Read the guidance ↗
                    </a>
                  </>
                )}
              </div>
            </>
          )}
          {!p?.specs && catalogItem && (
            <>
              <h2>About this device</h2>
              <p>{catalogItem.copy}</p>
              <p>
                <strong>{catalogItem.detail}</strong>
              </p>
              <div className="notice">
                Exact model, accessories and South African availability are confirmed when you request a quote.
              </div>
            </>
          )}
        </div>
      </section>

      <section className="container section">
        <h2>Before you say yes.</h2>
        <div className="releaseCards">
          <article>
            <h3>Know the full cost.</h3>
            <p>Request the price in ZAR, VAT treatment, delivery fee and quote validity.</p>
          </article>
          <article>
            <h3>Check the fit.</h3>
            <p>Confirm suitability for the intended user, including any size or age limitations.</p>
          </article>
          <article>
            <h3>Plan for support.</h3>
            <p>Ask who handles setup questions, warranty claims and replacement accessories.</p>
          </article>
        </div>
      </section>
    </main>
  );
}
