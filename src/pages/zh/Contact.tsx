import React from 'react';
import { useSearchParams } from 'react-router-dom';
import { Helmet } from 'react-helmet-async';
import { Header } from '@/components/zh/Header';
import { Footer } from '@/components/zh/Footer';
import { ContactForm } from '@/components/zh/ContactForm';

const Contact = () => {
  const [searchParams] = useSearchParams();
  const isDemoRequest = searchParams.get('demo') === 'true';

  return (
    <div className="min-h-screen bg-background">
      <Helmet>
        <title>联系我们 - Marsstein | GDPR合规与数据保护</title>
        <meta name="description" content="联系Marsstein获取GDPR、ISO 27001和AI法案合规支持。预约免费咨询。" />
        <meta name="robots" content="noindex,nofollow" />
        <link rel="canonical" href="https://marsstein.ai/zh/lianxi" />
      </Helmet>
      <Header />
      <main>
        <ContactForm isDemoRequest={isDemoRequest} />
      </main>
      <Footer />
    </div>
  );
};

export default Contact;
