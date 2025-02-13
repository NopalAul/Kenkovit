import type { Metadata } from 'next'

import ContactUs from "@/containers/Contact/ContactUs";


export const metadata: Metadata = {
  title: 'Contact Us',
}

export default function ContactPage() {

  return (
    <ContactUs />
  );
}
