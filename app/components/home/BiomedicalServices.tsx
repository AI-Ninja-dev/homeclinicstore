import { Gauge, Settings2, Wrench } from 'lucide-react';
import { HomeAction } from './HomeUI';
import { Reveal } from './HomeMotion';

const services = [
  { Icon: Settings2, title: 'Professional servicing', text: 'Discuss preventive maintenance and practical equipment care.' },
  { Icon: Wrench, title: 'Repairs & fault finding', text: 'Get the next step for equipment that is not working as expected.' },
  { Icon: Gauge, title: 'Calibration enquiries', text: 'Ask about measurement checks for your specific device.' },
];

export function BiomedicalServices() {
  return <section className="hcs-wrap hcs-section" aria-labelledby="services-title"><Reveal className="hcs-services"><div className="hcs-services-copy"><span className="hcs-eyebrow">BEYOND THE DEVICE</span><h2 id="services-title">Care for the technology<br />you count on.</h2><p>Biomedical support brings a practical, technical perspective to home healthcare—from choosing equipment to looking after it.</p><HomeAction href="/contact?topic=Biomedical%20service%20booking">Book a Service</HomeAction><p className="hcs-fine-print">Send a service enquiry. Scope, cost and booking are confirmed after review.</p></div><div className="hcs-services-list">{services.map(({ Icon, title, text }) => <div key={title}><span><Icon size={23} strokeWidth={1.5} aria-hidden="true" /></span><div><h3>{title}</h3><p>{text}</p></div></div>)}</div></Reveal></section>;
}
