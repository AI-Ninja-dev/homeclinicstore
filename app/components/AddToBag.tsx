'use client';

import { useState } from 'react';

export default function AddToBag({ slug }: { slug: string }) {
  const [message, setMessage] = useState('');
  return <><button className="button" onClick={() => {
    try {
      const saved: unknown = JSON.parse(sessionStorage.getItem('hcs-bag') || '[]');
      const bag = Array.isArray(saved) ? saved.filter((value): value is string => typeof value === 'string') : [];
      sessionStorage.setItem('hcs-bag', JSON.stringify([...new Set([...bag, slug])]));
      setMessage(bag.includes(slug) ? 'Already in your shortlist.' : 'Added to your shortlist.');
    } catch { setMessage('Your browser could not save this item. Use the product’s quote enquiry instead.'); }
  }}>Add to shortlist</button><span className="store-shortlist-status" role="status">{message}</span></>;
}
