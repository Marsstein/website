import React from 'react';
import { motion } from 'framer-motion';
import { Shield } from 'lucide-react';

const complianceAreas = [
  { name: 'DSGVO', color: 'from-blue-500 to-blue-600' },
  { name: 'ISO 27001', color: 'from-indigo-500 to-indigo-600' },
  { name: 'EU AI Act', color: 'from-purple-500 to-purple-600' },
  { name: 'SOC2', color: 'from-pink-500 to-pink-600' },
  { name: 'TISAX', color: 'from-red-500 to-red-600' },
  { name: 'NIS2', color: 'from-orange-500 to-orange-600' },
  { name: 'Data Act', color: 'from-amber-500 to-amber-600' },
  { name: 'ISO 27701', color: 'from-teal-500 to-teal-600' },
];

export const ComplianceAreas = () => {
  return (
    <section className="py-24 lg:py-32 bg-gradient-to-b from-white to-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-12"
        >
          <h2 className="text-4xl lg:text-5xl font-bold text-gray-900 mb-4">
            Eine Plattform. Alle Compliance-Bereiche.
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Von Datenschutz über Informationssicherheit bis KI-Governance –
            Schritt für Schritt entsteht Ihr universelles Compliance-System.
          </p>
        </motion.div>

        <div className="flex flex-wrap justify-center gap-4">
          {complianceAreas.map((area, index) => (
            <motion.div
              key={area.name}
              initial={{ opacity: 0, scale: 0.8 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.05 }}
              whileHover={{ scale: 1.05, y: -2 }}
              className="relative group"
            >
              <div className={`absolute inset-0 bg-gradient-to-r ${area.color} rounded-xl opacity-0 group-hover:opacity-100 blur-xl transition-opacity duration-300`} />
              <div className="relative px-6 py-3 bg-white border-2 border-gray-200 rounded-xl shadow-sm group-hover:shadow-lg group-hover:border-gray-300 transition-all duration-300">
                <div className="flex items-center gap-2">
                  <Shield className="w-4 h-4 text-gray-400 group-hover:text-gray-600 transition-colors" />
                  <span className="font-semibold text-gray-800 group-hover:text-gray-900">
                    {area.name}
                  </span>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};