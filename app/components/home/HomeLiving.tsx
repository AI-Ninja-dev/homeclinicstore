import { HomeAction, SectionHeading } from './HomeUI';
import { Reveal } from './HomeMotion';
import { ProductCard } from '../ProductCard';
import { catalog } from '../../../lib/catalog';

export function EverydayDevices() {
  return <section className="hcs-wrap hcs-section"><Reveal><SectionHeading eyebrow="CHOOSE FOR YOUR ROUTINE" title="A little more confidence, every day.">Explore essentials for blood pressure, temperature and oxygen spot checks.</SectionHeading><div className="store-home-products">{catalog.slice(1).map(product => <ProductCard product={product} key={product.slug} />)}</div><div className="store-section-action"><HomeAction href="/shop" secondary>Explore all devices</HomeAction></div></Reveal></section>;
}

export function HomeLiving() {
  return (
    <section className="store-living">
      <Reveal className="hcs-wrap store-living-grid">
        <div className="store-living-copy">
          <span className="hcs-eyebrow">MADE FOR THE WAY YOU LIVE</span>
          <h2>Health is part of life.<br />Care can fit right in.</h2>
          <p>A consistent home-monitoring routine can bring useful information to your next healthcare conversation. Choose a device you understand, learn how to use it and agree a plan with your care team.</p>
          <div className="store-living-topics">
            <div>
              <h3>Glucose, in context.</h3>
              <p>Learn what continuous glucose monitoring measures and which practical details to check.</p>
              <HomeAction href="/learn#glucose" secondary>Understand CGM</HomeAction>
            </div>
            <div>
              <h3>Know your blood pressure.</h3>
              <p>Start with the right cuff fit and a consistent measurement routine.</p>
              <HomeAction href="/learn#blood-pressure" secondary>Build your routine</HomeAction>
            </div>
          </div>
        </div>
        <aside className="store-routine-card" aria-label="A simple home health routine">
          <span className="store-routine-kicker">A GENTLER WAY TO START</span>
          <h3>Small steps.<br />Useful information.</h3>
          <ol>
            <li><span>01</span><div><strong>Choose what fits your needs</strong><p>Start with a device and measurement you understand.</p></div></li>
            <li><span>02</span><div><strong>Build a steady routine</strong><p>Follow the device instructions and keep notes when helpful.</p></div></li>
            <li><span>03</span><div><strong>Bring questions to your care team</strong><p>Use your readings to support a conversation with a health professional.</p></div></li>
          </ol>
          <p className="store-routine-note">Home monitoring supports care conversations. It does not replace medical advice.</p>
        </aside>
      </Reveal>
    </section>
  );
}
