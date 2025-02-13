import type { Metadata } from 'next'

import FAQList from "@/containers/FAQ/FAQList";


export const metadata: Metadata = {
  title: 'FAQ',
}

export default function FAQPage() {
  return (
    <FAQList />
  );
}
