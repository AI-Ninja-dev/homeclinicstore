import { assetPath } from '../../lib/assets';
import Link from 'next/link';
import { ArrowUpRight } from 'lucide-react';

export default function Footer() {
  return <footer className="store-footer"><div className="hcs-wrap">
    <div className="store-footer-invitation"><h2>A thoughtful next step<br />for your health at home.</h2><Link className="hcs-action hcs-action-light" href="/device-finder">Find your starting point <ArrowUpRight size={18} aria-hidden="true" /></Link></div>
    <div className="store-footer-grid"><div><Link href="/" className="store-footer-logo" aria-label="HomeClinicStore home"><img src={assetPath('/hcs-logo.png')} alt="HomeClinicStore" width={920} height={180} /></Link><p>Next-Gen Healthcare at Home.</p><span>Devices. Connected care. Biomedical support.</span></div><nav aria-label="Explore HomeClinicStore"><h3>Explore</h3><Link href="/shop">Shop devices</Link><Link href="/shop/yuwell-cgm">Continuous glucose monitoring</Link><Link href="/caregrid">CareGrid</Link><Link href="/learn">Learn about home monitoring</Link></nav><nav aria-label="Help and information"><h3>Here for you</h3><Link href="/services">Biomedical services</Link><Link href="/buying-guide">Buying & delivery</Link><Link href="/about">Our approach</Link><Link href="/contact">Contact</Link></nav></div>
    <div className="store-footer-bottom"><span>© {new Date().getFullYear()} HomeClinicStore</span><Link href="/privacy">Privacy & your information</Link><span>South Africa</span></div>
  </div></footer>;
}
