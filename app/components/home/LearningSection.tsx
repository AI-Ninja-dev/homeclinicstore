import Link from 'next/link';
import { ArrowUpRight } from 'lucide-react';
import { Reveal } from './HomeMotion';

const guides = [
  ['Glucose monitoring', 'What to know before choosing CGM', '/learn#glucose'],
  ['Heart & blood pressure', 'A better start to home measurements', '/learn#blood-pressure'],
  ['Awareness matters', 'Recognising stroke warning signs', '/learn#stroke-awareness'],
];

export function LearningSection() {
  return <section className="hcs-wrap store-learning"><Reveal className="store-learning-grid"><div><span className="hcs-eyebrow">UNDERSTAND YOUR NEXT STEP</span><h2>Good questions.<br />Clearer choices.</h2><p>Practical reading to support your conversations with a healthcare professional.</p></div><div className="store-guide-list">{guides.map(([category, title, href]) => <Link href={href} key={href}><div><span>{category}</span><h3>{title}</h3></div><ArrowUpRight size={24} strokeWidth={1.5} aria-hidden="true" /></Link>)}</div></Reveal></section>;
}
