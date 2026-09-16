import { CGMDetail } from '../../components/home/CGMDetail';
import Link from 'next/link';
import { notFound } from 'next/navigation';
import { launch } from '../../../lib/launch';
import { catalog } from '../../../lib/catalog';
import { PageHero } from '../../components/Page';
import AddToBag from '../../components/AddToBag';
import { assetPath } from '../../../lib/assets';

export function generateStaticParams() {
  return [...launch.map(p => ({ slug: p.slug })), { slug: 'yuwell-cgm' }];
}

export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const p = launch.find(p => p.slug === slug);
  return {
    title: p?.name || (slug === 'yuwell-cgm' ? 'Continuous glucose monitoring' : 'Product not found'),
    description: p?.copy,
  };
}

export default async function Product({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  if (slug === 'yuwell-cgm') return <CGMDetail />;

  const p = launch.find(p => p.slug === slug);
  if (!p) notFound();

  const catalogItem = catalog.find(c => c.slug === slug);
  const imageSrc = catalogItem?.image;

  return (
    <main>
      <PageHero eyebrow={p.category.toUpperCase()} title={p.headline}>
        {p.copy}
      </PageHero>

      <section className="container section releaseGrid" style={{ alignItems: 'start' }}>
        <div>
          <Link className="backLink" href="/shop">← Back to essentials</Link>
          <h2>{p.name}</h2>
          <p>{p.fit}</p>
          <p className="quoteLabel">Price & availability on request</p>
          <div className="actions">
            <Link className="button" href={'/contact?topic=' + encodeURIComponent('Quote: ' + p.name)}>
              Request a quote →
            </Link>
            <AddToBag slug={p.slug} />
          </div>
          <p className="releaseNote">
            No payment required to enquire. Confirm the exact model, price in rand and delivery before ordering.
          </p>
          <div className="productSummary">
            <h3>Confidence comes from the details.</h3>
            <p>
              Ask for supplied accessories, instructions and warranty terms in writing. If reliable mains power is a concern, confirm battery operation and replacement availability.
            </p>
            <Link className="textLink" href="/buying-guide">Delivery, returns & buying guidance →</Link>
          </div>
        </div>

        <div>
          {imageSrc && (
            <figure className="product-detail-image" style={{ marginBottom: '1.5rem', borderRadius: '12px', overflow: 'hidden', background: '#f4f6f8' }}>
              <img
                src={assetPath(imageSrc)}
                alt={`${p.name} product photo`}
                width={800}
                height={600}
                style={{ width: '100%', height: 'auto', display: 'block' }}
                loading="eager"
              />
              <figcaption style={{ padding: '0.75rem 1rem', fontSize: '0.875rem', color: '#5a6570' }}>
                Representative product image · Exact model confirmed on enquiry
              </figcaption>
            </figure>
          )}
          <h2>Specifications to confirm</h2>
          <p>These are selection checks, not verified specifications for a particular model. Your quote should identify the exact device.</p>
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
                <a className="textLink" href={p.source}>Read the guidance ↗</a>
              </>
            )}
          </div>
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
