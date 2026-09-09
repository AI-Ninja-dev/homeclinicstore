import Link from 'next/link';
import {Activity,ArrowRight,ArrowUpRight,BadgeCheck,Brain,HeartPulse,ShieldCheck,Stethoscope,TrendingDown,Waves,Zap} from 'lucide-react';

const focusAreas=[
 {title:'Cardiovascular health',text:'Connected heart-health tools and trend visibility for proactive care at home.',Icon:HeartPulse,stat:'Heart & circulation'},
 {title:'Diabetes care',text:'Bring glucose readings, routines and supported monitoring into one clearer view.',Icon:Waves,stat:'Glucose insights'},
 {title:'Hypertension',text:'Track blood-pressure patterns over time and share useful trends with your care team.',Icon:Activity,stat:'Blood pressure'},
 {title:'Stroke prevention',text:'Build better visibility around cardiovascular risk signals and daily habits.',Icon:Brain,stat:'Risk awareness'},
];
const services=[
 {n:'01',title:'Choose your device',text:'Explore trusted home-health technology selected for practical everyday use.'},
 {n:'02',title:'Set up with confidence',text:'Get installation, onboarding and technical guidance from biomedical professionals.'},
 {n:'03',title:'Connect with CareGrid',text:'Bring supported readings into a secure remote-monitoring experience.'},
 {n:'04',title:'Keep care on track',text:'Access calibration, preventive maintenance, repairs and ongoing support.'},
];

export default function Home(){return <main>
 <section className="digitalHero"><div className="heroGlow heroGlowOne"/><div className="heroGlow heroGlowTwo"/>
  <div className="container digitalHeroGrid"><div className="digitalHeroCopy">
   <span className="statusBadge"><i/> Next-gen healthcare at home</span><h1>Your health.<br/><span>Connected.</span></h1>
   <p>Medical devices, remote monitoring and biomedical support designed around cardiovascular health, diabetes, hypertension and long-term chronic care.</p>
   <div className="actions"><Link className="button buttonLarge" href="/shop">Explore health solutions <ArrowUpRight size={18}/></Link><Link className="textLink" href="/caregrid">Discover CareGrid <ArrowRight size={18}/></Link></div>
   <div className="trustRow"><span><BadgeCheck size={17}/> Medical-grade solutions</span><span><ShieldCheck size={17}/> Privacy-minded care</span><span><Stethoscope size={17}/> Biomedical expertise</span></div>
  </div><div className="healthStage" aria-label="CareGrid connected health preview"><div className="orbit orbitOne"/><div className="orbit orbitTwo"/>
   <div className="dashboardCard"><div className="dashHeader"><div><span className="dashEyebrow">CAREGRID OVERVIEW</span><strong>Good morning</strong></div><span className="liveBadge"><i/> Live</span></div>
    <div className="readingGrid"><div className="reading primaryReading"><span>Blood pressure</span><strong>118<small>/76</small></strong><em>mmHg</em><div className="miniTrend"><b/><b/><b/><b/><b/><b/><b/></div></div><div className="reading"><span>Heart rate</span><strong>72</strong><em>bpm</em><Activity size={22}/></div><div className="reading"><span>Glucose</span><strong>5.8</strong><em>mmol/L</em><TrendingDown size={22}/></div></div>
    <div className="careSignal"><div className="signalIcon"><Zap size={18}/></div><div><strong>Your readings are connected</strong><span>Latest update received just now</span></div><ArrowRight size={18}/></div>
   </div><div className="floatCard floatHeart"><HeartPulse size={18}/><span><small>Heart rate</small><strong>72 bpm</strong></span></div><div className="floatCard floatTeam"><span className="avatarPair"><i/><i/></span><span><small>Care team</small><strong>Connected</strong></span></div>
  </div></div><div className="container scrollCue"><span>Explore the ecosystem</span><i/></div>
 </section>
 <section className="focusSection container section"><div className="sectionIntro"><div><span className="eyebrow">FOCUSED ON WHAT MATTERS</span><h2>Long-term health needs<br/>a clearer daily picture.</h2></div><p>HomeClinicStore brings together the devices, monitoring and technical support that help make chronic-care routines easier to understand and manage.</p></div>
  <div className="focusGrid">{focusAreas.map(({title,text,Icon,stat},i)=><Link href="/shop" className="focusCard" key={title}><div className="focusTop"><span className="focusIcon"><Icon size={23}/></span><span>0{i+1}</span></div><div><small>{stat}</small><h3>{title}</h3><p>{text}</p></div><span className="cardArrow"><ArrowUpRight size={18}/></span></Link>)}</div>
 </section>
 <section className="caregridShowcase"><div className="container caregridGrid"><div className="caregridCopy"><span className="eyebrow lightEyebrow">INTRODUCING CAREGRID</span><h2>From individual readings<br/>to a connected care story.</h2><p>CareGrid is HomeClinicStore’s remote patient monitoring platform—designed to connect supported devices, health readings and care teams with the right setup and consent.</p><Link className="button mintButton" href="/caregrid">Explore CareGrid <ArrowUpRight size={18}/></Link></div>
  <div className="dataCanvas" aria-label="Illustration of connected home readings"><div className="dataTop"><span>7-day health overview</span><span>Updated today</span></div><div className="chartBars">{[48,58,52,68,61,76,72,83,78,88,82,92].map((h,i)=><i key={i} style={{height:`${h}%`}}/>)}</div><div className="dataFooter"><div><small>Readings captured</small><strong>42</strong></div><div><small>Current status</small><strong className="goodStatus">Within range</strong></div></div></div>
 </div></section>
 <section className="journeySection container section"><div className="sectionIntro"><div><span className="eyebrow">ONE CONNECTED JOURNEY</span><h2>Technology backed by<br/>real technical support.</h2></div><p>From selection to ongoing maintenance, our biomedical engineering services help you get more from the equipment you rely on.</p></div>
  <div className="journeyGrid">{services.map(({n,title,text})=><div className="journeyItem" key={n}><span>{n}</span><h3>{title}</h3><p>{text}</p></div>)}</div>
  <div className="closingPanel"><div><span className="eyebrow">READY WHEN YOU ARE</span><h2>Build a smarter home-health routine.</h2></div><div><p>Start with the right device, explore connected monitoring, or talk to us about technical support.</p><div className="actions"><Link className="button" href="/shop">Shop devices <ArrowUpRight size={18}/></Link><Link className="textLink" href="/contact">Talk to our team <ArrowRight size={18}/></Link></div></div></div>
 </section>
</main>}
