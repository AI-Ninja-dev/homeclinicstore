import { assetPath } from '../../lib/assets';
import Link from 'next/link';
import { ArrowUpRight, Facebook, Instagram, Linkedin, MessageCircle, Music2, Youtube } from 'lucide-react';

const whatsappUrl = 'https://wa.me/27678042273?text=Hi%20HomeClinicStore%2C%20I%E2%80%99d%20like%20assistance%20with%20a%20product%20or%20service.';

export default function Footer() {
  return <footer className="store-footer"><div className="hcs-wrap">
    <div className="store-footer-invitation"><h2>A thoughtful next step<br />for your health at home.</h2><Link className="hcs-action hcs-action-light" href="/device-finder">Find your starting point <ArrowUpRight size={18} aria-hidden="true" /></Link></div>
    <div className="store-footer-grid">
      <div>
        <Link href="/" className="store-footer-logo" aria-label="HomeClinicStore home"><img src={assetPath('/hcs-logo.png')} alt="HomeClinicStore" width={920} height={180} /></Link>
        <p>Next-Gen Healthcare at Home.</p>
        <span>Devices. Connected care. Biomedical support.</span>
        <div className="store-footer-contact">
          <a href="tel:+27678042273">067 804 2273</a>
          <a href="mailto:infor@homeclinicstore.co.za">infor@homeclinicstore.co.za</a>
          <span>16 Koeberg Road, Milnerton, Cape Town</span>
        </div>
        <div className="store-socials" aria-label="HomeClinicStore social media">
          <a href={whatsappUrl} target="_blank" rel="noopener noreferrer" aria-label="Chat with HomeClinicStore on WhatsApp"><MessageCircle size={19} aria-hidden="true" /></a>
          <span aria-label="Instagram profile coming soon" title="Instagram profile coming soon"><Instagram size={19} aria-hidden="true" /></span>
          <span aria-label="Facebook profile coming soon" title="Facebook profile coming soon"><Facebook size={19} aria-hidden="true" /></span>
          <span aria-label="LinkedIn profile coming soon" title="LinkedIn profile coming soon"><Linkedin size={19} aria-hidden="true" /></span>
          <span aria-label="TikTok profile coming soon" title="TikTok profile coming soon"><Music2 size={19} aria-hidden="true" /></span>
          <span aria-label="YouTube profile coming soon" title="YouTube profile coming soon"><Youtube size={19} aria-hidden="true" /></span>
        </div>
      </div>
      <nav aria-label="Explore HomeClinicStore"><h3>Explore</h3><Link href="/shop">Shop devices</Link><Link href="/shop/yuwell-cgm">Continuous glucose monitoring</Link><Link href="/caregrid">CareGrid</Link><Link href="/learn">Learn about home monitoring</Link></nav>
      <nav aria-label="Help and information"><h3>Here for you</h3><Link href="/services">Biomedical services</Link><Link href="/buying-guide">Buying & delivery</Link><Link href="/about">About, mission & goals</Link><Link href="/contact">Contact</Link></nav>
    </div>
    <div className="store-footer-bottom"><span>© {new Date().getFullYear()} HomeClinicStore</span><Link href="/privacy">Privacy & your information</Link><span>South Africa</span></div>
  </div></footer>;
}
