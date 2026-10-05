import Link from 'next/link';
import { ArrowUpRight, HeartPulse, ShieldCheck, Smartphone, Stethoscope } from 'lucide-react';
import { PageHero, Enquire } from '../components/Page';

export const metadata = { title: 'About us' };

const goals = [
  ['Accessible home health', 'Make reliable home-monitoring technology easier to understand, choose and use.'],
  ['Earlier insight', 'Support better awareness of glucose, blood pressure and cardiovascular trends at home.'],
  ['Connected care', 'Bring devices, people and care teams closer together through CareGrid.'],
  ['Professional support', 'Provide dependable biomedical support for home medical equipment throughout its lifecycle.'],
];

const ecosystem = ['Yuwell', 'Dexcom', 'FreeStyle Libre', 'LinX'];

export default function About() {
  return <main>
    <PageHero eyebrow="ABOUT HOMECLINICSTORE" title="A more connected way to care at home.">HomeClinicStore combines home medical devices, connected health technology and biomedical engineering support into one practical South African home-health ecosystem.</PageHero>

    <section className="container section split store-about-intro">
      <div><span className="hcs-eyebrow">OUR PURPOSE</span><h2>Healthcare should work beyond the hospital.</h2></div>
      <div><p>We help people monitor health at home with carefully selected devices, understandable guidance and connected care tools. Our focus is practical: make it easier to measure, understand and act on meaningful health information.</p><p>Our model connects <strong>devices → monitoring → CareGrid → professional support</strong>, so customers can move from simply owning equipment to using it as part of a more informed care routine.</p></div>
    </section>

    <section className="container section store-mission-grid">
      <article><span className="hcs-eyebrow">MISSION</span><h2>Make reliable health monitoring accessible beyond the hospital.</h2><p>We connect people, medical devices and healthcare professionals through technology to support proactive chronic-condition management and stronger participation in care.</p></article>
      <article><span className="hcs-eyebrow">VISION</span><h2>A future where managing health from home is simple, connected and proactive.</h2><p>We believe healthcare should increasingly support prevention, continuous monitoring and informed intervention rather than waiting for problems to become severe.</p></article>
    </section>

    <section className="container section">
      <div className="store-section-heading"><span className="hcs-eyebrow">OUR GOALS</span><h2>Built around better everyday health decisions.</h2></div>
      <div className="store-goals-grid">{goals.map(([title,text], index) => <article key={title}><span>0{index + 1}</span><h3>{title}</h3><p>{text}</p></article>)}</div>
    </section>

    <section className="container section store-why-us">
      <div><span className="hcs-eyebrow">WHY HOMECLINICSTORE</span><h2>Technology selected for real life at home.</h2></div>
      <div className="store-why-grid">
        <div><HeartPulse size={22} aria-hidden="true" /><h3>Health focused</h3><p>Diabetes, hypertension, cardiovascular health and stroke prevention guide our product and platform priorities.</p></div>
        <div><Stethoscope size={22} aria-hidden="true" /><h3>Biomedical support</h3><p>Online-first service, assessment, calibration support, repairs and digital documentation for home medical equipment.</p></div>
        <div><Smartphone size={22} aria-hidden="true" /><h3>Connected monitoring</h3><p>CareGrid is designed to bring patient monitoring, care plans, trends and care-team workflows into one RPM environment.</p></div>
        <div><ShieldCheck size={22} aria-hidden="true" /><h3>Responsible by design</h3><p>Clear information, privacy-aware technology and no unsupported medical claims.</p></div>
      </div>
    </section>

    <section className="container section store-ecosystem">
      <div className="store-section-heading"><span className="hcs-eyebrow">BRANDS & TECHNOLOGIES</span><h2>A growing home-health technology ecosystem.</h2><p>We feature and support relevant home-health technologies based on product availability, compatibility and supply arrangements. Brand names are shown as technologies in our ecosystem and do not imply endorsement unless explicitly stated.</p></div>
      <div className="store-brand-badges">{ecosystem.map(name => <span key={name}>{name}</span>)}</div>
      <div className="store-ecosystem-actions"><Link href="/shop" className="hcs-action">Explore devices <ArrowUpRight size={17} aria-hidden="true" /></Link><Link href="/caregrid" className="hcs-action hcs-action-secondary">Explore CareGrid</Link></div>
    </section>

    <section className="container section"><Enquire label="Talk to HomeClinicStore" /></section>
  </main>;
}
