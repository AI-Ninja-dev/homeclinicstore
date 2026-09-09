import Link from "next/link";
import { ArrowRight, CalendarDays, CheckCircle2, Download, FileCheck2, History, ShieldCheck, Wrench } from "lucide-react";

const equipment = {
  name: "Yuwell Blood Pressure Monitor",
  model: "YE680B",
  serial: "HCS-DEMO-001245",
  status: "Active",
  location: "Home Care",
  nextService: "19 August 2027",
  lastCalibration: "19 August 2026",
};

const history = [
  { date: "19 Aug 2026", event: "Calibration completed", ref: "HCS-CAL-2026-000123", status: "Passed" },
  { date: "19 Aug 2026", event: "Performance inspection", ref: "HCS-SRV-2026-000124", status: "Completed" },
  { date: "19 Aug 2026", event: "Equipment registered", ref: "HCS-REG-2026-000081", status: "Registered" },
];

const traceability = [
  { name: "Reference Standard", value: "HCS-STD-001 — Digital Pressure Reference", detail: "Traceable reference used for verification" },
  { name: "Reference ID", value: "HCS-REF-2026-044", detail: "Current traceability record" },
  { name: "Verification date", value: "19 August 2026", detail: "Reference standard verified before use" },
  { name: "Technician", value: "HCS Biomedical Service Team", detail: "Authorised service personnel" },
];

export default function EquipmentPage() {
  return (
    <>
      <header className="nav glass">
        <div className="container navinner">
          <Link className="brand" href="/">homeclinic<span>store</span></Link>
          <nav className="navlinks">
            <Link href="/shop">Shop</Link>
            <Link href="/#cgm">CGM</Link>
            <Link href="/#monitoring">Patient Monitoring</Link>
            <Link href="/#rpm">RPM</Link>
            <Link href="/#services">Services</Link>
            <Link href="/equipment">My Equipment</Link>
          </nav>
          <div className="navactions">
            <Link className="pill" href="/#services">Book a Service</Link>
          </div>
        </div>
      </header>

      <main>
        <section className="portalHero">
          <div className="container">
            <div className="eyebrow">HCS Equipment Portal</div>
            <h1>Hospital-level equipment records. Built for home care.</h1>
            <p>
              Every supported home medical device can have its own equipment record,
              service history, calibration certificates and calibration traceability.
            </p>
            <div className="actions">
              <Link className="pill" href="#certificates">Download certificate <Download size={15}/></Link>
              <Link className="pill outline" href="#history">View equipment history</Link>
            </div>
          </div>
        </section>

        <section className="section">
          <div className="container">
            <div className="equipmentSummary">
              <div>
                <div className="eyebrow">Registered equipment</div>
                <h2>{equipment.name}</h2>
                <p className="sub">This is the equipment record a customer can access from their HCS account.</p>
              </div>
              <div className="statusBadge"><CheckCircle2 size={17}/> {equipment.status}</div>
            </div>

            <div className="equipmentGrid">
              <div className="card">
                <h3>Equipment identity</h3>
                <div className="recordRows">
                  <div><span>Manufacturer</span><b>Yuwell</b></div>
                  <div><span>Model</span><b>{equipment.model}</b></div>
                  <div><span>Serial number</span><b>{equipment.serial}</b></div>
                  <div><span>Use environment</span><b>{equipment.location}</b></div>
                </div>
              </div>
              <div className="card">
                <h3>Service status</h3>
                <div className="recordRows">
                  <div><span>Last calibration</span><b>{equipment.lastCalibration}</b></div>
                  <div><span>Next service due</span><b>{equipment.nextService}</b></div>
                  <div><span>Current record</span><b>Complete</b></div>
                  <div><span>Support</span><b>HCS Biomedical</b></div>
                </div>
                <Link className="link" href="/#services">Book service <Wrench size={14}/></Link>
              </div>
            </div>
          </div>
        </section>

        <section className="section portalSoft" id="certificates">
          <div className="container">
            <div className="sectionHead">
              <div>
                <div className="eyebrow">Digital calibration records</div>
                <h2>Certificates available online.</h2>
              </div>
              <p className="sub">Customers can retrieve approved calibration certificates without waiting for paperwork.</p>
            </div>

            <div className="certificateGrid">
              <div className="card certificateCard">
                <div className="certificateIcon"><FileCheck2 size={25}/></div>
                <div>
                  <span className="tag">CALIBRATION CERTIFICATE</span>
                  <h3>HCS-CAL-2026-000123</h3>
                  <p className="muted">Yuwell {equipment.model} · S/N {equipment.serial}</p>
                  <p className="muted">Calibration date: 19 August 2026 · Result: Passed</p>
                  <a className="pill downloadBtn" href="/certificates/HCS-CAL-2026-000123.pdf" download>
                    <Download size={15}/> Download PDF
                  </a>
                </div>
              </div>

              <div className="card">
                <ShieldCheck size={27}/>
                <h3>Certificate verification</h3>
                <p className="muted">Use the certificate number to verify the record and match it to the registered equipment.</p>
                <Link className="pill" href="/#support">Verify certificate <ArrowRight size={15}/></Link>
              </div>
            </div>
          </div>
        </section>

        <section className="section" id="traceability">
          <div className="container">
            <div className="sectionHead">
              <div>
                <div className="eyebrow">Calibration traceability</div>
                <h2>Know what was used to verify your equipment.</h2>
              </div>
              <p className="sub">The digital record can link each calibration to the reference standards and service details used during the work.</p>
            </div>

            <div className="traceGrid">
              {traceability.map((item) => (
                <div className="traceItem" key={item.name}>
                  <ShieldCheck size={20}/>
                  <div><span>{item.name}</span><b>{item.value}</b><small>{item.detail}</small></div>
                </div>
              ))}
            </div>
          </div>
        </section>

        <section className="section portalSoft" id="history">
          <div className="container">
            <div className="sectionHead">
              <div>
                <div className="eyebrow">Equipment history</div>
                <h2>A complete lifecycle record.</h2>
              </div>
              <p className="sub">Treat home equipment like supported clinical equipment: registration, service, calibration, repair and records stay together.</p>
            </div>

            <div className="historyTable">
              <div className="historyHeader"><span>Date</span><span>Event</span><span>Reference</span><span>Status</span></div>
              {history.map((row) => (
                <div className="historyRow" key={row.ref}>
                  <span>{row.date}</span><b>{row.event}</b><span>{row.ref}</span><span className="historyStatus"><CheckCircle2 size={15}/>{row.status}</span>
                </div>
              ))}
            </div>
          </div>
        </section>

        <section className="section">
          <div className="container">
            <div className="feature">
              <div>
                <div className="eyebrow">Online home equipment service</div>
                <h2>Need calibration, maintenance or repair?</h2>
                <p className="sub">Submit the equipment details online. HCS can receive the request, assess the equipment, schedule the work and update the equipment record when the service is completed.</p>
                <div className="actions">
                  <Link className="pill" href="/#services"><CalendarDays size={15}/> Book service online</Link>
                  <Link className="pill outline" href="/shop">Shop supported equipment</Link>
                </div>
              </div>
              <div className="card lifecycleCard">
                <History size={28}/>
                <h3>One equipment record</h3>
                <p className="muted">Purchase → Registration → Service → Calibration → Certificate → Traceability → History</p>
              </div>
            </div>
          </div>
        </section>
      </main>
    </>
  );
}
