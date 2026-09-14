import { CalendarDays, Radio, RefreshCw } from 'lucide-react';
import { Reveal } from './HomeMotion';
import { HomeAction } from './HomeUI';

export function CGMVisual() {
  return (
    <div className="hcs-product-visual">
      <span className="hcs-product-tag">YUWELL ANYTIME</span>
      <div className="hcs-product-image">
        <img src="/images/yuwell-anytime-ct3.webp" alt="Yuwell Anytime CT3 glucose-monitoring applicator and transmitter" width={1400} height={520} loading="lazy" decoding="async" />
      </div>
      <svg className="hcs-data-flow" viewBox="0 0 500 440" fill="none" aria-hidden="true">
        <path d="M155 318 C60 250 90 80 285 75 S470 280 385 340" />
        <path className="hcs-data-pulse" d="M155 318 C60 250 90 80 285 75 S470 280 385 340" />
      </svg>
      <div className="hcs-product-data"><Radio size={17} aria-hidden="true" /><span>Connected glucose insights</span></div>
      <span className="hcs-product-caption">CT3 series · Manufacturer product image</span>
    </div>
  );
}

export function FeaturedCGM() {
  return (
    <section className="hcs-featured" id="featured-cgm" aria-labelledby="cgm-title">
      <Reveal className="hcs-wrap hcs-featured-grid">
        <CGMVisual />
        <div className="hcs-featured-copy">
          <span className="hcs-eyebrow">MEET YOUR NEXT MONITORING ESSENTIAL</span>
          <h2 id="cgm-title">More context.<br /><span>Throughout your day.</span></h2>
          <h3>Yuwell Anytime CT3</h3>
          <p>Explore continuous glucose monitoring that helps you see patterns over time. A small wearable system, designed to bring more information into your daily routine.</p>
          <ul className="hcs-feature-list">
            <li><CalendarDays size={20} aria-hidden="true" /><span><strong>14-day monitoring</strong><small>Manufacturer-stated sensor wear period.</small></span></li>
            <li><RefreshCw size={20} aria-hidden="true" /><span><strong>Reusable transmitter</strong><small>A separate transmitter for the CT3 system.</small></span></li>
            <li><Radio size={20} aria-hidden="true" /><span><strong>A view of glucose trends</strong><small>Confirm the supported app and phone requirements.</small></span></li>
          </ul>
          <div className="hcs-actions"><HomeAction href="/shop/yuwell-cgm">Learn More</HomeAction><HomeAction href="/contact?topic=Yuwell%20Anytime%20CT3%20availability" secondary>Request Availability</HomeAction></div>
          <p className="hcs-fine-print">Local availability, supplied model and app compatibility are confirmed on enquiry. Ask your healthcare professional about suitability.</p>
        </div>
      </Reveal>
    </section>
  );
}
