import Link from 'next/link';
import {ArrowUpRight} from 'lucide-react';
export function PageHero({eyebrow,title,children}:{eyebrow:string,title:string,children:React.ReactNode}){return <section className="pageHero"><div className="container"><span className="eyebrow">{eyebrow}</span><h1>{title}</h1><p>{children}</p></div></section>}
export function Enquire({topic='General enquiry',label='Prepare an enquiry'}:{topic?:string,label?:string}){return <Link className="button" href={'/contact?topic='+encodeURIComponent(topic)}>{label}<ArrowUpRight size={17}/></Link>}
