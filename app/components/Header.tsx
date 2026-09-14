'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { useEffect, useRef, useState } from 'react';
import { ArrowUpRight, ShoppingBag, X } from 'lucide-react';

const links = [
  ['Shop', '/shop'],
  ['Diabetes', '/shop/yuwell-cgm'],
  ['CareGrid', '/caregrid'],
  ['Services', '/services'],
  ['Learn', '/learn'],
];
const discover = [
  ['Find a device', '/device-finder'],
  ['Blood pressure', '/shop/yuwell-blood-pressure'],
  ['Buying & delivery', '/buying-guide'],
  ['About HomeClinicStore', '/about'],
];

export default function Header() {
  const path = usePathname();
  const dialog = useRef<HTMLDialogElement>(null);
  const [open, setOpen] = useState(false);

  function close() { dialog.current?.close(); setOpen(false); }
  function show() { dialog.current?.showModal(); setOpen(true); }

  useEffect(() => {
    if (!open) return;
    const previous = document.body.style.overflow;
    document.body.style.overflow = 'hidden';
    return () => { document.body.style.overflow = previous; };
  }, [open]);

  return <>
    <a className="skipLink" href="#content">Skip to content</a>
    <header className="store-header">
      <div className="store-header-inner">
        <Link className="store-brand" href="/" aria-label="HomeClinicStore home"><img src="/hcs-logo.png" alt="HomeClinicStore — Next-Gen Healthcare at Home" width={920} height={180} /></Link>
        <nav className="store-desktop-nav" aria-label="Main navigation">{links.map(([label, href]) => <Link key={href} href={href} aria-current={path === href ? 'page' : undefined}>{label}</Link>)}</nav>
        <div className="store-header-actions"><Link href="/bag" className="store-bag" aria-label="Your device shortlist"><ShoppingBag size={20} strokeWidth={1.5} /></Link><Link className="store-header-cta" href="/contact">Let’s talk <ArrowUpRight size={15} aria-hidden="true" /></Link><button className="store-menu-button" onClick={show} aria-label="Open navigation" aria-expanded={open} aria-controls="store-mobile-menu"><span /><span /></button></div>
      </div>
    </header>
    <dialog ref={dialog} id="store-mobile-menu" className="store-mobile-menu" aria-label="Navigation" onClose={() => setOpen(false)} onClick={event => { if (event.target === dialog.current) close(); }}>
      <div className="store-mobile-inner">
        <div className="store-mobile-top"><span>Find your next step.</span><button onClick={close} aria-label="Close navigation"><X size={23} strokeWidth={1.5} /></button></div>
        <nav aria-label="Mobile main navigation">{links.map(([label, href], index) => <Link key={href} href={href} onClick={close} aria-current={path === href ? 'page' : undefined} style={{ animationDelay: `${index * 45}ms` }}>{label}<ArrowUpRight size={23} aria-hidden="true" /></Link>)}</nav>
        <div className="store-mobile-discover">{discover.map(([label, href]) => <Link key={href} href={href} onClick={close}>{label}</Link>)}</div>
        <Link href="/contact" onClick={close} className="hcs-action">Ask our team <ArrowUpRight size={17} aria-hidden="true" /></Link>
        <p>Next-Gen Healthcare at Home.<br />South Africa</p>
      </div>
    </dialog>
    <div id="content" tabIndex={-1} />
  </>;
}
