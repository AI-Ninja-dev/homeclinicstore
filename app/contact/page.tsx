import { Suspense } from 'react';
import { MapPin, MessageCircle, Phone, Mail } from 'lucide-react';
import { PageHero } from '../components/Page';
import EnquiryForm from '../components/EnquiryForm';

export const metadata = { title: 'Contact our team' };

const whatsappUrl = 'https://wa.me/27678042273?text=Hi%20HomeClinicStore%2C%20I%E2%80%99d%20like%20assistance%20with%20a%20product%20or%20service.';

export default function Contact() {
  return <main>
    <PageHero eyebrow="LET’S TALK" title="A clearer next step starts here.">Ask about a device, CGM, CareGrid, an order or biomedical support for home medical equipment.</PageHero>
    <section className="container section split store-contact-layout">
      <div>
        <h2>Tell us what you have in mind.</h2>
        <p>For a device enquiry, include your preferred product and delivery town. For technical support, include the manufacturer, model and a short description of the issue.</p>

        <div className="store-contact-cards">
          <a href="tel:+27678042273"><Phone size={19} aria-hidden="true" /><span><strong>Call us</strong>067 804 2273</span></a>
          <a href="mailto:infor@homeclinicstore.co.za"><Mail size={19} aria-hidden="true" /><span><strong>Email</strong>infor@homeclinicstore.co.za</span></a>
          <a href={whatsappUrl} target="_blank" rel="noopener noreferrer"><MessageCircle size={19} aria-hidden="true" /><span><strong>WhatsApp</strong>Start a direct chat</span></a>
          <div><MapPin size={19} aria-hidden="true" /><span><strong>Visit / correspondence</strong>16 Koeberg Road, Milnerton, Cape Town</span></div>
        </div>

        <div className="notice">Sending a service request does not confirm a booking. Our team will confirm the next step and any required logistics.</div>
        <p className="releaseNote">Please do not include health records, genetic results, passwords or patient-identifiable details in general enquiries.</p>
      </div>
      <Suspense fallback={<p role="status">Preparing your enquiry…</p>}><EnquiryForm /></Suspense>
    </section>
  </main>;
}
