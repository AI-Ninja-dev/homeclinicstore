import { Activity, Bell, Check, Radio, Users } from 'lucide-react';
import { HomeAction } from './HomeUI';
import { Reveal } from './HomeMotion';

export function CareGridPreview() {
  return (
    <div className="hcs-dashboard" role="img" aria-label="Illustrative CareGrid dashboard, not live patient data. Example glucose trend, device connection and care workflow.">
      <div className="hcs-dashboard-header"><span className="hcs-dashboard-brand"><Activity size={21} aria-hidden="true" />CareGrid<span>™</span></span><span className="hcs-demo-badge">ILLUSTRATIVE PREVIEW</span></div>
      <div className="hcs-dashboard-intro"><div><small>YOUR CONNECTED VIEW</small><h3>Every reading has a story.</h3></div><span className="hcs-dashboard-avatar" aria-hidden="true">CG</span></div>
      <div className="hcs-chart-card">
        <div className="hcs-chart-top"><div><span>Glucose trend</span><strong>6.2 <small>mmol/L</small></strong></div><span className="hcs-example-label">Example reading</span></div>
        <svg className="hcs-trend-chart" viewBox="0 0 440 125" fill="none" aria-hidden="true">
          <defs><linearGradient id="hcsChartFill" x1="0" y1="0" x2="0" y2="1"><stop stopColor="#69a4ed" stopOpacity=".22" /><stop offset="1" stopColor="#69a4ed" stopOpacity="0" /></linearGradient></defs>
          <path className="hcs-chart-grid" d="M0 22H440M0 62H440M0 102H440" />
          <path fill="url(#hcsChartFill)" d="M0 88C25 88 25 58 52 62S85 100 111 80S140 38 166 52S196 75 220 58S247 12 273 30S299 85 326 66S360 41 383 52S416 39 440 42V125H0Z" />
          <path className="hcs-chart-line" d="M0 88C25 88 25 58 52 62S85 100 111 80S140 38 166 52S196 75 220 58S247 12 273 30S299 85 326 66S360 41 383 52S416 39 440 42" />
        </svg>
        <div className="hcs-chart-times"><span>06:00</span><span>12:00</span><span>18:00</span></div>
      </div>
      <div className="hcs-dashboard-tiles"><div><span className="hcs-dashboard-icon"><Radio size={17} aria-hidden="true" /></span><strong>Device readings</strong><span>In one view</span></div><div><span className="hcs-dashboard-icon"><Bell size={17} aria-hidden="true" /></span><strong>Alert preferences</strong><span>Set with your care team</span></div></div>
      <div className="hcs-workflow"><span><Check size={15} aria-hidden="true" />Measure</span><i /><span><Check size={15} aria-hidden="true" />Review</span><i /><span><Users size={15} aria-hidden="true" />Follow up</span></div>
    </div>
  );
}

const steps = [
  ['Connect your device', 'Start with a supported device and an agreed monitoring setup.'],
  ['Bring readings into view', 'Explore trends and configure alerts where the programme supports them.'],
  ['Make room for follow-up', 'Agree who reviews readings, how they respond and when to get in touch.'],
];

export function CareGridSection() {
  return <section className="hcs-caregrid hcs-section" id="caregrid" aria-labelledby="caregrid-title"><Reveal className="hcs-wrap hcs-caregrid-grid">
    <div className="hcs-caregrid-copy"><span className="hcs-eyebrow">DEVICES. READINGS. A MORE CONNECTED ROUTINE.</span><h2 id="caregrid-title">Meet CareGrid.<br /><span>Connect the everyday.</span></h2><p>A connected-care approach that brings supported devices, readings, alerts and care workflows into one considered experience.</p><ol className="hcs-caregrid-steps">{steps.map(([title, copy], i) => <li key={title}><span>0{i + 1}</span><div><h3>{title}</h3><p>{copy}</p></div></li>)}</ol><HomeAction href="/caregrid" light>Discover CareGrid</HomeAction><p className="hcs-caregrid-note">Programme availability, device compatibility and response arrangements must be confirmed. This is not an emergency monitoring service.</p></div>
    <CareGridPreview />
  </Reveal></section>;
}
