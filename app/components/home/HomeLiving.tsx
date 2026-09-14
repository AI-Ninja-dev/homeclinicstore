import { HomeAction, SectionHeading } from './HomeUI';
import { Reveal } from './HomeMotion';
import { ProductCard } from '../ProductCard';
import { catalog } from '../../../lib/catalog';

export function EverydayDevices() {
  return <section className="hcs-wrap hcs-section"><Reveal><SectionHeading eyebrow="CHOOSE FOR YOUR ROUTINE" title="A little more confidence, every day.">Explore essentials for blood pressure, temperature and oxygen spot checks.</SectionHeading><div className="store-home-products">{catalog.slice(1).map(product => <ProductCard product={product} key={product.slug} />)}</div><div className="store-section-action"><HomeAction href="/shop" secondary>Explore all devices</HomeAction></div></Reveal></section>;
}

export function HomeLiving() {
  return <section className="store-living"><Reveal className="hcs-wrap store-living-grid"><div className="store-living-copy"><span className="hcs-eyebrow">MADE FOR THE WAY YOU LIVE</span><h2>Health is part of life.<br />Let’s keep it that way.</h2><p>A consistent home-monitoring routine can bring useful information to your next healthcare conversation. Choose a device you understand, learn how to use it and agree a plan with your care team.</p><div className="store-living-topics"><div><h3>Glucose, in context.</h3><p>Learn what continuous glucose monitoring measures and which practical details to check.</p><HomeAction href="/learn#glucose" secondary>Understand CGM</HomeAction></div><div><h3>Know your blood pressure.</h3><p>Start with the right cuff fit and a consistent measurement routine.</p><HomeAction href="/learn#blood-pressure" secondary>Build your routine</HomeAction></div></div></div><figure><img src="/images/family-at-home.webp" srcSet="/images/family-at-home-small.webp 640w, /images/family-at-home.webp 1200w" sizes="(max-width: 760px) 100vw, 45vw" alt="A family sharing a relaxed moment on their sofa at home" width={1200} height={800} loading="lazy" decoding="async" /><figcaption>More room for everyday life.</figcaption></figure></Reveal></section>;
}
