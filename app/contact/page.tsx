import { Suspense } from 'react';
import { PageHero } from '../components/Page';
import EnquiryForm from '../components/EnquiryForm';

export const metadata = { title: 'Contact our team' };

export default function Contact() {
  return <main><PageHero eyebrow="LET’S TALK" title="A clearer next step starts here.">Ask about a device, request availability or arrange a conversation about biomedical services.</PageHero><section className="container section split store-contact-layout"><div><h2>Tell us what you have in mind.</h2><p>For a device quote, include your preferred product and delivery town. For technical support, include the manufacturer, model and a description of the issue.</p><p><strong>Email our team</strong><br /><a className="textLink" href="mailto:info@homeclinicstore.co.za">info@homeclinicstore.co.za</a></p><div className="notice">Your enquiry opens in your email app for you to review and send. Sending a service request does not confirm a booking.</div><p className="releaseNote">Please do not include health records, genetic results, passwords or patient-identifiable details.</p></div><Suspense fallback={<p role="status">Preparing your enquiry…</p>}><EnquiryForm /></Suspense></section></main>;
}
