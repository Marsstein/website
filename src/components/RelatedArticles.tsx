import React from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { Card, CardContent } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { ArrowRight, Clock } from 'lucide-react';
import { LucideIcon } from 'lucide-react';

interface RelatedArticle {
  title: string;
  description: string;
  link: string;
  icon: LucideIcon;
  readTime: string;
  category: string;
}

interface RelatedArticlesProps {
  articles: RelatedArticle[];
  hubLink?: string;
  hubTitle?: string;
}

export const RelatedArticles: React.FC<RelatedArticlesProps> = ({
  articles,
  hubLink = '/wissen/china',
  hubTitle = 'Alle China-Artikel ansehen'
}) => {
  return (
    <section className="py-16 bg-gradient-to-b from-slate-50 to-white">
      <div className="container mx-auto max-w-7xl px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-12"
        >
          <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-4">
            Verwandte Artikel
          </h2>
          <p className="text-lg text-slate-600 max-w-2xl mx-auto">
            Weitere Praxisartikel zu DSGVO & China-Geschäft
          </p>
        </motion.div>

        <div className="grid md:grid-cols-3 gap-8 mb-12">
          {articles.map((article, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1, duration: 0.6 }}
              whileHover={{ y: -5 }}
            >
              <Card className="h-full border-2 border-slate-200 hover:border-slate-300 hover:shadow-lg transition-all duration-300">
                <CardContent className="p-6 h-full flex flex-col">
                  <div className="inline-flex p-3 rounded-xl bg-gradient-to-r from-red-500 to-orange-500 mb-4 w-fit">
                    <article.icon className="h-6 w-6 text-white" />
                  </div>

                  <Badge variant="outline" className="mb-3 w-fit">
                    {article.category}
                  </Badge>

                  <h3 className="text-xl font-bold text-slate-900 mb-3">
                    {article.title}
                  </h3>

                  <p className="text-slate-600 mb-4 flex-grow">
                    {article.description}
                  </p>

                  <div className="flex items-center justify-between pt-4 border-t border-slate-200">
                    <div className="flex items-center text-sm text-slate-500">
                      <Clock className="h-4 w-4 mr-1" />
                      {article.readTime}
                    </div>

                    <Button asChild variant="link" className="text-red-600 hover:text-red-700 p-0">
                      <Link to={article.link} className="flex items-center gap-1">
                        Lesen
                        <ArrowRight className="h-4 w-4" />
                      </Link>
                    </Button>
                  </div>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.4, duration: 0.6 }}
          className="text-center"
        >
          <Button asChild size="lg" className="bg-gradient-to-r from-red-500 to-orange-500 hover:from-red-600 hover:to-orange-600 text-white">
            <Link to={hubLink}>
              {hubTitle}
              <ArrowRight className="ml-2 h-5 w-5" />
            </Link>
          </Button>
        </motion.div>
      </div>
    </section>
  );
};
