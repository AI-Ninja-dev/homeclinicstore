'use client';

import { useState } from 'react';
import { useSearchParams } from 'next/navigation';

function enquiryText(form: HTMLFormElement) {
  return Array.from(new FormData(form).entries()).filter(([key]) => key !== 'consent').map(([key, value]) => `${key}: ${value}`).join('\n\n');
}

export default function EnquiryForm() {
  const params = useSearchParams();
  const [done, setDone] = useState(false);
  const initialTopic = params.get('topic') || 'General enquiry';
  const initialMessage = params.get('items') ? `Please confirm the exact models, availability and pricing for:\n${params.get('items')}` : '';

  return <form className="store-form" key={params.toString()} onSubmit={event => {
    event.preventDefault();
    const form = event.currentTarget;
    const topic = String(new FormData(form).get('Topic'));
    window.location.href = `mailto:info@homeclinicstore.co.za?subject=${encodeURIComponent(`HCS enquiry: ${topic}`)}&body=${encodeURIComponent(enquiryText(form))}`;
    setDone(true);
  }}>
    <label>Your name<input name="Name" autoComplete="name" maxLength={120} required /></label>
    <label>Email address<input name="Email" type="email" autoComplete="email" maxLength={200} required /></label>
    <fieldset><legend>Delivery location (optional)</legend><label>Town / city<input name="Town" autoComplete="address-level2" maxLength={100} /></label><label>South African postcode<input name="Postcode" inputMode="numeric" pattern="[0-9]{4}" title="Enter a four-digit South African postcode" autoComplete="postal-code" maxLength={4} /></label></fieldset>
    <label>Enquiry topic<input name="Topic" defaultValue={initialTopic} maxLength={250} required /></label>
    <label>How can we help?<textarea name="Message" defaultValue={initialMessage} required maxLength={1500} placeholder="Include the device or service you’re interested in. Please leave out health records and passwords." /></label>
    <label className="checkLabel"><input type="checkbox" name="consent" required /><span>Open this enquiry in my email app so I can review and send it to HomeClinicStore.</span></label>
    <div className="actions"><button className="button" type="submit">Continue in email</button><button className="store-download" type="button" onClick={event => {
      const form = event.currentTarget.form;
      if (!form || !form.reportValidity()) return;
      const url = URL.createObjectURL(new Blob([enquiryText(form)], { type: 'text/plain;charset=utf-8' }));
      const link = document.createElement('a');
      link.href = url; link.download = 'homeclinicstore-enquiry.txt'; link.click();
      setTimeout(() => URL.revokeObjectURL(url), 1000);
    }}>Download a copy</button></div>
    {done && <div className="success" role="status"><strong>Review and send in your email app.</strong><p>This website has not sent your message. If your email app did not open, download a copy and send it to info@homeclinicstore.co.za.</p></div>}
  </form>;
}
