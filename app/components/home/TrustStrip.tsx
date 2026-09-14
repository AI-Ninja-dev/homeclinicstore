import { House, Radio, Wrench, Headphones } from 'lucide-react';

const pillars = [
  { Icon: House, label: 'Home health devices' },
  { Icon: Radio, label: 'Connected monitoring' },
  { Icon: Wrench, label: 'Biomedical expertise' },
  { Icon: Headphones, label: 'Customer support' },
];

export function TrustStrip() {
  return <section className="hcs-trust" aria-label="The HomeClinicStore approach"><ul className="hcs-wrap">{pillars.map(({ Icon, label }) => <li key={label}><Icon size={21} strokeWidth={1.5} aria-hidden="true" /><span>{label}</span></li>)}</ul></section>;
}
