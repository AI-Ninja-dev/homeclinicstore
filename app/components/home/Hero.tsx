import { assetPath } from '../../../lib/assets';
import { HomeAction } from './HomeUI';

export function Hero() {
  return (
    <section className="hcs-editorial-hero hcs-life-hero" aria-labelledby="hero-title">
      <div className="hcs-wrap hcs-life-hero-layout">
        <div className="hcs-life-hero-copy">
          <span className="hcs-life-hero-eyebrow">HEALTHCARE, AT HOME</span>
          <h1 id="hero-title">Feel more at home<br /><span>with your health.</span></h1>
          <p>Practical health devices and biomedical expertise to help make everyday care feel more comfortable, informed and personal.</p>
          <div className="hcs-actions"><HomeAction href="/shop">Explore health devices</HomeAction><HomeAction href="/device-finder" secondary>Find a device</HomeAction></div>
          <div className="hcs-life-hero-note"><span aria-hidden="true">✳</span> Thoughtful support for healthier routines at home</div>
        </div>
        <figure className="hcs-life-hero-image">
          <img src={assetPath('/images/family-at-home.webp')} srcSet={`${assetPath('/images/family-at-home-small.webp')} 640w, ${assetPath('/images/family-at-home.webp')} 1200w`} sizes="(max-width: 760px) 100vw, 54vw" alt="A family relaxing together on their sofa at home, sharing a comfortable moment" width={1200} height={800} fetchPriority="high" />
          <figcaption><span>Care that fits into real life.</span><span>At home, with the people who matter.</span></figcaption>
        </figure>
      </div>
    </section>
  );
}
