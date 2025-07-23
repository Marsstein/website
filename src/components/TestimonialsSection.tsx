import React from 'react';
import { useLanguage } from '@/hooks/useLanguage';
import { Card, CardContent } from '@/components/ui/card';
import { Star, Quote } from 'lucide-react';

export const TestimonialsSection: React.FC = () => {
  const { t } = useLanguage();

  const testimonials = [
    {
      quote: "Marsstein transformed our compliance process. What used to take weeks now takes hours, and we have complete confidence in our GDPR compliance.",
      author: "Sarah Weber",
      role: "Data Protection Officer",
      company: "TechCorp GmbH",
      avatar: "SW",
      rating: 5
    },
    {
      quote: "The AI-powered audit identified gaps we didn't even know existed. The legal expert review gave us the confidence to move forward.",
      author: "Michael Schmidt", 
      role: "Compliance Manager",
      company: "FinanceSecure AG",
      avatar: "MS",
      rating: 5
    },
    {
      quote: "Excellent support and the document vault has streamlined our entire compliance workflow. Highly recommended for any European business.",
      author: "Dr. Anna Müller",
      role: "CEO",
      company: "HealthTech Solutions",
      avatar: "AM",
      rating: 5
    }
  ];

  return (
    <section className="py-20 md:py-32">
      <div className="container px-4">
        {/* Section Header */}
        <div className="text-center mb-16 space-y-4">
          <h2 className="text-3xl md:text-5xl font-bold tracking-tight">
            {t('testimonials_title')}
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Hear from compliance professionals who trust Marsstein for their privacy management needs.
          </p>
        </div>

        {/* Testimonials Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <Card key={index} className="group relative overflow-hidden hover:shadow-large transition-all duration-300 bg-gradient-card border-0">
              <CardContent className="p-8">
                {/* Quote Icon */}
                <div className="mb-6">
                  <Quote className="h-8 w-8 text-primary/30" />
                </div>

                {/* Rating */}
                <div className="flex gap-1 mb-4">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <Star key={i} className="h-4 w-4 fill-yellow-400 text-yellow-400" />
                  ))}
                </div>

                {/* Quote */}
                <blockquote className="text-foreground leading-relaxed mb-6">
                  "{testimonial.quote}"
                </blockquote>

                {/* Author */}
                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 bg-gradient-primary rounded-full flex items-center justify-center text-primary-foreground font-semibold">
                    {testimonial.avatar}
                  </div>
                  <div>
                    <div className="font-semibold text-foreground">{testimonial.author}</div>
                    <div className="text-sm text-muted-foreground">{testimonial.role}</div>
                    <div className="text-sm text-primary font-medium">{testimonial.company}</div>
                  </div>
                </div>

                {/* Hover effect */}
                <div className="absolute inset-0 bg-gradient-to-r from-primary/5 to-secondary/5 opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none" />
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Customer Logos */}
        <div className="mt-16">
          <p className="text-center text-sm text-muted-foreground mb-8">
            Trusted by leading companies across Europe
          </p>
          <div className="flex flex-wrap justify-center items-center gap-8 opacity-60">
            {['Deutsche Bank', 'Siemens', 'Swisscom', 'BMW Group', 'SAP', 'Allianz'].map((company, index) => (
              <div key={index} className="h-12 px-6 bg-muted rounded-lg flex items-center justify-center">
                <span className="text-sm font-medium text-muted-foreground">{company}</span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};