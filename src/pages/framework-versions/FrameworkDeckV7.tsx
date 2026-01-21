import React from 'react';
import { motion } from 'framer-motion';
import { FileText, Shield, Zap, CheckCircle, Cloud } from 'lucide-react';
import './FrameworkDeckV7.css';

const PrismDeck: React.FC = () => {
    const containerVariants = {
        hidden: { opacity: 0 },
        visible: {
            opacity: 1,
            transition: { staggerChildren: 0.1, delayChildren: 0.2 },
        },
    };

    const itemVariants = {
        hidden: { opacity: 0, scale: 0.8 },
        visible: { opacity: 1, scale: 1, transition: { type: 'spring', stiffness: 150, damping: 20 } },
    };

    const lineVariants = (i: number) => ({
        hidden: { pathLength: 0 },
        visible: {
            pathLength: 1,
            transition: {
                duration: 0.8,
                ease: "easeInOut",
                delay: 0.5 + i * 0.1
            }
        }
    });
    
    const frameworks = [
        { name: 'EU AI Act', icon: Zap, color: '#f97316' },
        { name: 'ISO 27001', icon: Shield, color: '#39B37B' },
        { name: 'TISAX', icon: CheckCircle, color: '#3b82f6' },
        { name: 'ISO 27017', icon: Cloud, color: '#8b5cf6' },
    ];

    return (
        <div className="v7-slide-container">
            <motion.div
                className="v7-slide"
                initial="hidden"
                animate="visible"
                variants={containerVariants}
            >
                <div className="v7-background-glow" />
                <motion.div className="v7-header" variants={itemVariants}>
                    <h1 className="v7-title">The Prism of Compliance</h1>
                    <p className="v7-subtitle">Refracting foundational principles into modern standards.</p>
                </motion.div>

                <div className="v7-diagram">
                    <motion.div className="v7-prism-container" variants={itemVariants}>
                         <div className="v7-node-center">
                            <FileText />
                            <span>GDPR</span>
                        </div>
                    </motion.div>

                    <svg className="v7-connector-svg" viewBox="0 0 100 100" preserveAspectRatio="none">
                        <defs>
                            <linearGradient id="prismGradient" x1="0%" y1="0%" x2="100%" y2="0%">
                                <stop offset="0%" stopColor="#e24e1b" />
                                <stop offset="50%" stopColor="#f97316" />
                                <stop offset="100%" stopColor="#ea580c" />
                            </linearGradient>
                        </defs>
                        {/* Lines from Center to Nodes */}
                        <motion.path d="M 50 50 L 15 15" stroke="url(#prismGradient)" variants={lineVariants(0)} fill="none" />
                        <motion.path d="M 50 50 L 15 85" stroke="url(#prismGradient)" variants={lineVariants(1)} fill="none" />
                        <motion.path d="M 50 50 L 85 15" stroke="url(#prismGradient)" variants={lineVariants(2)} fill="none" />
                        <motion.path d="M 50 50 L 85 85" stroke="url(#prismGradient)" variants={lineVariants(3)} fill="none" />
                    </svg>
                    
                    {frameworks.map((framework, index) => {
                        const Icon = framework.icon;
                        return (
                            <motion.div key={framework.name} className={`v7-node-wrapper node-${index + 1}`} variants={itemVariants}>
                                <div className="v7-node" style={{'--node-glow': framework.color} as React.CSSProperties}>
                                    <Icon /> {framework.name}
                                </div>
                            </motion.div>
                        );
                    })}
                </div>
            </motion.div>
        </div>
    );
};

export default PrismDeck;
