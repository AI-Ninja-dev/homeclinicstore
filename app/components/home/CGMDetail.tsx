import { CGMVisual } from './FeaturedCGM';
import { HomeAction } from './HomeUI';

export function CGMDetail() {
  return <main className="hcs-home" data-motion="paused">
    <section className="hcs-wrap hcs-section hcs-featured-grid">
      <CGMVisual />
      <div className="hcs-featured-copy">
        <span className="hcs-eyebrow">CONTINUOUS GLUCOSE MONITORING</span>
        <h1 style={{ fontSize: 'clamp(2.5rem,5vw,4.5rem)' }}>Yuwell Anytime CT3</h1>
        <p>A wearable glucose-monitoring system for a view of patterns throughout the day. Explore the practical details with your healthcare professional before choosing.</p>
        <div className="hcs-actions"><HomeAction href="/contact?topic=Yuwell%20Anytime%20CT3%20availability">Request Availability</HomeAction><HomeAction href="/caregrid" secondary>Explore CareGrid</HomeAction></div>
        <p className="hcs-fine-print">South African stock, price, supplied model and CareGrid integration are not confirmed. Request these details before ordering.</p>
      </div>
    </section>
    <section className="hcs-wrap hcs-section" style={{ paddingTop: 0 }}>
      <h2>Know the system you’re choosing.</h2>
      <table className="specTable"><tbody>
        <tr><th scope="row">Manufacturer / series</th><td>Yuwell Anytime / CT3</td></tr>
        <tr><th scope="row">Monitoring period</th><td>14 days, as stated by the manufacturer</td></tr>
        <tr><th scope="row">Transmitter</th><td>Reusable transmitter</td></tr>
        <tr><th scope="row">App & phone compatibility</th><td>Confirm the supported local app, phone model and operating system before purchase.</td></tr>
        <tr><th scope="row">Alerts & sharing</th><td>The manufacturer describes trend alerts and family sharing within its Anytime platform. Confirm the features available for the supplied model and local app.</td></tr>
        <tr><th scope="row">Replacement sensors</th><td>Ask about ongoing supply, cost, storage and expiry dates.</td></tr>
        <tr><th scope="row">Supplied contents & warranty</th><td>Confirm the exact pack contents and written local support terms in your quote.</td></tr>
      </tbody></table>
      <p className="hcs-fine-print">Product image and series details: <a className="textLink" href="https://en.yuwell-poctech.com/products/cgm">Yuwell-POCTech manufacturer information ↗</a></p>
      <div className="productSummary" style={{ marginTop: 32 }}><h3>Make the choice with your care team.</h3><p>Confirm suitability, intended users and how to act on readings with your healthcare professional. Follow the supplied instructions; this page is not treatment advice.</p><HomeAction href="/contact?topic=CGM%20buying%20assistance">Ask about CGM</HomeAction></div>
    </section>
  </main>;
}
