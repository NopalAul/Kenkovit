import type { Metadata } from 'next'

import About from '@/containers/About/About';

export const metadata: Metadata = {
  title: 'About Us',
}

export default function AboutPage() {
  return (
    <About />
  );
}
