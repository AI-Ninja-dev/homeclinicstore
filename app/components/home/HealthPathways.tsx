import Link from 'next/link';
import { Activity, ArrowUpRight, HeartPulse, Waves } from 'lucide-react';
import { Reveal } from './HomeMotion';
import { SectionHeading } from './HomeUI';

const pathways = [
  { Icon: Waves, name: 'Diabetes Management', copy: 'Explore glucose monitoring and the practical details of building a routine at home.', detail: 'Glucose & daily patterns', href: '/shop/yuwell-cgm', tone: 'diabetes' },
  { Icon: HeartPulse, name: 'Cardiovascular Health', copy: 'Find home measurement tools and understand what to check before choosing a device.', detail: 'Heart-health measurement', href: '/shop/yuwell-blood-pressure', tone: 'cardio' },
  { Icon: Activity, name: 'Hypertension & Chronic Care', copy: 'Make blood-pressure readings and equipment support part of a considered care routine.', detail: 'Consistency & ongoing care', href: '/device-finder', tone: 'chronic' },
];

export function HealthPathways() {
  return <section className="hcs-wrap hcs-section" aria-label="Health pathways"><Reveal>
    <SectionHeading eyebrow="HEALTH, ON YOUR TERMS" title="A starting point for your care.">Different needs. One thoughtful approach to choosing technology for home.</SectionHeading>
    <div className="hcs-pathways">{pathways.map(({ Icon, name, copy, detail, href, tone }, i) => (
      <Link href={href} key={name} className={`hcs-pathway hcs-pathway-${tone}`}>
        <div className="hcs-pathway-top"><span className="hcs-pathway-icon"><Icon size={28} strokeWidth={1.4} aria-hidden="true" /></span><span>0{i + 1}</span></div>
        <div><span className="hcs-pathway-detail">{detail}</span><h3>{name}</h3><p>{copy}</p></div>
        <span className="hcs-pathway-link">Explore pathway <ArrowUpRight size={18} aria-hidden="true" /></span>
      </Link>
    ))}</div>
  </Reveal></section>;
}
