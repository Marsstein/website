import React from 'react';
import { useLanguage } from '@/contexts/LanguageContext';
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from '@/components/ui/accordion';

export const FAQSection: React.FC = () => {
  const { t } = useLanguage();

  const faqs = [
    {
      questionKey: 'faq_q1',
      answerKey: 'faq_a1'
    },
    {
      questionKey: 'faq_q2', 
      answerKey: 'faq_a2'
    },
    {
      questionKey: 'faq_q3',
      answerKey: 'faq_a3'
    },
    {
      questionKey: 'faq_q4',
      answerKey: 'faq_a4'
    }
  ];

  return (
    <section className="py-20 md:py-32 bg-muted/30">
      <div className="container px-4">
        <div className="max-w-3xl mx-auto">
          {/* Section Header */}
          <div className="text-center mb-16 space-y-4">
            <h2 className="text-3xl md:text-5xl font-bold tracking-tight">
              {t('faq_title')}
            </h2>
            <p className="text-lg text-muted-foreground">
              Get answers to common questions about our compliance solutions.
            </p>
          </div>

          {/* FAQ Accordion */}
          <Accordion type="single" collapsible className="space-y-4">
            {faqs.map((faq, index) => (
              <AccordionItem 
                key={index} 
                value={`item-${index}`}
                className="bg-background rounded-lg border-0 shadow-soft overflow-hidden"
              >
                <AccordionTrigger className="px-6 py-4 text-left text-lg font-semibold hover:no-underline hover:text-primary transition-colors">
                  {t(faq.questionKey)}
                </AccordionTrigger>
                <AccordionContent className="px-6 pb-6 text-muted-foreground leading-relaxed">
                  {t(faq.answerKey)}
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>

          {/* Contact CTA */}
          <div className="mt-12 text-center">
            <p className="text-muted-foreground mb-4">
              Still have questions? Our compliance experts are here to help.
            </p>
            <a 
              href="#contact" 
              className="inline-flex items-center justify-center px-6 py-3 bg-primary text-primary-foreground rounded-lg hover:opacity-90 transition-opacity font-medium"
            >
              Contact Our Experts
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};