"use client";
import { useMemo, useState } from "react";
import Link from "next/link";
import { ArrowRight, Check, Filter, Search, ShoppingBag, X } from "lucide-react";

const products = [
  {slug:"yuwell-cgm", name:"Yuwell Continuous Glucose Monitoring", short:"Connected glucose monitoring for care at home.", price:2499, category:"CGM", badge:"Flagship"},
  {slug:"yuwell-blood-pressure", name:"Yuwell Blood Pressure Monitor", short:"Simple, reliable home patient monitoring.", price:1299, category:"Patient Monitoring", badge:"Featured"},
  {slug:"yuwell-pulse-oximeter", name:"Yuwell Pulse Oximeter", short:"Compact oxygen saturation and pulse monitoring.", price:699, category:"Patient Monitoring", badge:"Popular"},
  {slug:"yuwell-thermometer", name:"Yuwell Digital Thermometer", short:"Fast temperature monitoring for home care.", price:349, category:"Patient Monitoring", badge:"New"},
];

const money=(n:number)=>`R${n.toLocaleString("en-ZA")}`;

function ProductVisual({category}:{category:string}) {
  return <div className="shopVisual">
    <div className={`visualDevice ${category==="CGM"?"cgmDevice":category==="Patient Monitoring"?"monitorDevice":"smallDevice"}`}>
      {category==="CGM" && <div className="visualSensor">CGM</div>}
      {category==="Patient Monitoring" && <div className="visualScreen"><span>HCS</span><b>122/78</b></div>}
    </div>
  </div>
}

export default function ShopPage(){
  const [query,setQuery]=useState("");
  const [category,setCategory]=useState("All");
  const [cart,setCart]=useState<typeof products>([]);
  const [cartOpen,setCartOpen]=useState(false);
  const categories=["All","CGM","Patient Monitoring"];
  const filtered=useMemo(()=>products.filter(p=>(category==="All"||p.category===category)&&p.name.toLowerCase().includes(query.toLowerCase())),[query,category]);
  const add=(p:typeof products[number])=>setCart(c=>c.some(x=>x.slug===p.slug)?c:[...c,p]);
  const total=cart.reduce((s,p)=>s+p.price,0);
  return <>
    <header className="nav glass"><div className="container navinner">
      <Link className="brand" href="/">homeclinic<span>store</span></Link>
      <nav className="navlinks"><Link href="/shop">Shop</Link><Link href="/#cgm">CGM</Link><Link href="/#monitoring">Patient Monitoring</Link><Link href="/#rpm">RPM</Link><Link href="/#services">Services</Link><Link href="/#support">Support</Link></nav>
      <div className="navactions"><Link className="iconbtn" href="/" aria-label="Home"><ArrowRight size={17}/></Link><button className="iconbtn" onClick={()=>setCartOpen(true)} aria-label="Cart"><ShoppingBag size={17}/></button><button className="pill" onClick={()=>location.href="/#services"}>Book a Service</button></div>
    </div></header>

    <main>
      <section className="shopHero"><div className="container">
        <div className="eyebrow">Home medical equipment</div>
        <h1>Technology for care at home.</h1>
        <p>Explore HCS-supported home medical equipment, led by Yuwell CGM and patient-monitoring solutions.</p>
        <div className="shopTools">
          <div className="searchBox"><Search size={18}/><input value={query} onChange={e=>setQuery(e.target.value)} placeholder="Search equipment"/></div>
          <div className="categoryTabs">{categories.map(c=><button className={category===c?"active":""} key={c} onClick={()=>setCategory(c)}><Filter size={14}/>{c}</button>)}</div>
        </div>
      </div></section>

      <section className="section shopSection"><div className="container">
        <div className="shopCount">{filtered.length} products</div>
        <div className="shopGrid">{filtered.map(p=><article className="shopCard" key={p.slug}>
          <Link href={`/shop/${p.slug}`}><ProductVisual category={p.category}/></Link>
          <div className="shopCardBody"><span className="tag">{p.badge}</span><h2>{p.name}</h2><p className="muted">{p.short}</p><div className="shopBottom"><strong>{money(p.price)}</strong><button className="pill" onClick={()=>add(p)}>Add to cart</button></div><Link className="link" href={`/shop/${p.slug}`}>View product <ArrowRight size={14}/></Link></div>
        </article>)}</div>
        {filtered.length===0&&<div className="emptyState"><h2>No equipment found.</h2><p>Try another search or category.</p></div>}
      </div></section>

      <section className="section"><div className="container"><div className="feature"><div><div className="eyebrow">Supported beyond the sale</div><h2>Your equipment has a lifecycle.</h2><p className="sub">HCS connects product purchase with service, calibration, digital certificates and ongoing equipment support.</p><div className="actions"><Link className="pill" href="/#services">Book a service <ArrowRight size={15}/></Link><Link className="pill outline" href="/#support">View certificates</Link></div></div><div className="lifecycle"><span>Purchase</span><i>→</i><span>Connect</span><i>→</i><span>Monitor</span><i>→</i><span>Maintain</span></div></div></div></section>
    </main>

    {cartOpen&&<div className="modal"><div className="cartPanel"><button className="close" onClick={()=>setCartOpen(false)}><X size={17}/></button><div className="eyebrow">Your HCS cart</div><h2>Shopping bag</h2>{cart.length===0?<div className="emptyState small"><ShoppingBag size={30}/><p>Your cart is empty.</p><Link className="pill" href="/shop" onClick={()=>setCartOpen(false)}>Browse equipment</Link></div>:<><div className="cartList">{cart.map(p=><div className="cartItem" key={p.slug}><div><b>{p.name}</b><span>{money(p.price)}</span></div><button onClick={()=>setCart(c=>c.filter(x=>x.slug!==p.slug))}>Remove</button></div>)}</div><div className="cartTotal"><span>Total</span><strong>{money(total)}</strong></div><button className="pill checkout">Proceed to checkout</button><p className="muted">Checkout/payment integration can be connected to your chosen South African payment provider.</p></>}</div></div>}
  </>
}
