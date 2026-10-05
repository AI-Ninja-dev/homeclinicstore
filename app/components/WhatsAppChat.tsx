'use client';

import { MessageCircle } from 'lucide-react';

const whatsappUrl = 'https://wa.me/27678042273?text=Hi%20HomeClinicStore%2C%20I%E2%80%99d%20like%20assistance%20with%20a%20product%20or%20service.';

export default function WhatsAppChat() {
  return (
    <a
      className="hcs-whatsapp-chat"
      href={whatsappUrl}
      target="_blank"
      rel="noopener noreferrer"
      aria-label="Chat with HomeClinicStore on WhatsApp"
      title="Chat with HomeClinicStore on WhatsApp"
    >
      <MessageCircle size={23} strokeWidth={1.9} aria-hidden="true" />
      <span>Chat with us</span>
    </a>
  );
}
