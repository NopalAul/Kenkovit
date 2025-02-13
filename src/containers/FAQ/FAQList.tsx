"use client";

import Image from "next/image";
import { useState } from "react";

const faqData = [
  {
    question: "Mengapa Kenkovit Beauty Collagen bermanfaat untuk mencegah penuaan dan dapat meningkatkan kecantikan dan kesehatan tubuh?",
    answer: `Sejak umur 25 tahun, tubuh akan kehilangan kolagen 1.5% per tahun. Kolagen merupakan sejenis protein penopang utama kulit. Jika kolagen berkurang signifikan, akibatnya kulit terlihat kendur dan keriput. Kenkovit Beauty Collagen diformulasikan secara khusus untuk membantu pembentukan kolagen dan mengganti kehilangan kolagen tubuh.`,
  },
  {
    question: "Apa saja kandungan utama Kenkovit Beauty Collagen?",
    answer: `Kenkovit Beauty Collagen mengandung Hydrolized Marine Collagen, Vitamin C dan Vitamin E. 
- Hydrolized Marine Collagen: berasal dari Ikan Tilapia, dengan struktur yang mirip Kolagen tipe I manusia. 
- Vitamin C: Membantu pembentukan Kolagen dan Elastin serta melindungi kulit dari sinar UV.
- Vitamin E Alami: Mencegah penuaan kulit dan lebih efektif dibanding Vitamin E sintesis.`,
  },
  {
    question: "Bagaimana sebaiknya cara mengkonsumsi Kenkovit Beauty Collagen?",
    answer: `Dapat dikonsumsi kapan saja, tetapi untuk hasil optimal, sebaiknya dikonsumsi pagi hari dan malam hari sebelum tidur.`,
  },
  {
    question: "Berapa kalori per serving Kenkovit Beauty Collagen?",
    answer: `Kenkovit Beauty Collagen tersedia dalam 2 pilihan rasa: 
- Creamy Chocolate: 95 Kalori
- Sweet Orange: 89 Kalori`,
  },
  {
    question: "Berapa lama waktu yang diperlukan sampai saya dapat melihat hasil yang diinginkan?",
    answer: `Hasilnya tergantung individu, tetapi umumnya dalam 21 hari (1 siklus regenerasi sel kulit).`,
  },
  {
    question: "Hasil seperti apa yang saya harapkan dapat terjadi?",
    answer: `Anda akan merasakan kulit lebih halus dalam beberapa minggu, lebih kencang, lembab, dan garis halus di sekitar mata berkurang.`,
  },
  {
    question: "Apakah Kenkovit Hand Sanitizer aman?",
    answer: `Kenkovit Hand Sanitizer sangat aman, karena hanya menggunakan bahan bahan yg berasal dari supplier terpercaya. Bahan utama Alkohol, yaitu dengan jenis Ethanol, berasal dari supplier besar yg memiliki Certificate of Analysis ( CoA)/ sertifikat analyis yang terjamin keamanannya. `,
  },
  {
    question: "Apa Itu Ethanol?",
    answer: `Ethanol adalah salah satu jenis alkohol yang berfungsi sebagai antiseptik/ desinfectan pembunuh kuman/bakteri , sebagai komponen utama Kenkovit Hand Sanitizer. Jenis alkohol yang dipakai khusus alkohol antiseptik.`,
  },
  {
    question: "Bagaimana penggunaan Hand Sanitizer yang benar?",
    answer: `Semprotkan ke telapak dan punggung tangan, lalu ratakan. Biarkan sekitar 20 detik agar mampu membunuh kuman. Jangan langsung dihirup karena  ada bau alkohol  yg cukup kuat di hidung.`,
  },
];

export default function FAQList() {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const toggleFAQ = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <div className="px-[5vw] md:px-[15vw] py-36 mx-auto">
      <h1 className="text-2xl md:text-3xl font-medium text-center text-purple1 mb-8">
        Frequently Asked Questions
      </h1>

      {faqData.map((faq, index) => (
        <div key={index} className="mb-4">
          {/* Question Button */}
          <button
            onClick={() => toggleFAQ(index)}
            className={`flex justify-between gap-2 items-center w-full px-5 py-4 text-left font-medium text-sm text-white bg-purple1 rounded-2xl transition-all ${
              openIndex === index ? "rounded-b-none" : "transition-transform hover:scale-101"
            }`}
          >
            {faq.question}
            <Image
              src="/images/Icon/chevron_right.svg"
              alt="Chevron Icon"
              width={10}
              height={10}
              className={`transition-transform duration-300 ${
                openIndex === index ? "rotate-90" : "rotate-0"
              }`}
            />
          </button>

          {/* Answer Section */}
          <div
            className={`overflow-hidden transition-[max-height] duration-300 ease-in-out ${
              openIndex === index ? "max-h-[500px]" : "max-h-0"
            }`}
          >
            <div className="bg-gray-200 px-5 py-4 rounded-b-xl text-gray-700">
              <p className="whitespace-pre-line text-sm">{faq.answer}</p>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
}
