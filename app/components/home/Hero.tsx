import { HomeAction } from './HomeUI';

export function Hero() {
  return (
    <section className="hcs-editorial-hero" aria-labelledby="hero-title">
      <div className="hcs-wrap hcs-editorial-layout">
        <div className="hcs-editorial-copy">
          <h1 id="hero-title">Next-Gen Healthcare<br /><span>at Home.</span></h1>
          <p>Connected health technology for everyday life. Explore continuous glucose monitoring and practical care, from the comfort of home.</p>
          <div className="hcs-actions"><HomeAction href="/shop/yuwell-cgm">Explore CGM</HomeAction><HomeAction href="#caregrid" secondary>How CareGrid Works</HomeAction></div>
        </div>
        <figure className="hcs-editorial-product">
          <img src="/images/yuwell-anytime-ct3.webp" alt="Yuwell Anytime CT3 applicator and reusable transmitter" width={1400} height={520} fetchPriority="high" />
          <figcaption>Yuwell Anytime CT3 <span>Continuous glucose monitoring</span></figcaption>
        </figure>
      </div>
    </section>
  );
}
