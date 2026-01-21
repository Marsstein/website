import React from 'react';
import { motion } from 'framer-motion';
import { FileText, Shield, Zap, CheckCircle, ArrowRight } from 'lucide-react';
import './FrameworkDeckV6.css';

const BlueprintDeck: React.FC = () => {
    const containerVariants = {
        hidden: { opacity: 0 },
        visible: {
            opacity: 1,
            transition: { staggerChildren: 0.2, delayChildren: 0.3 },
        },
    };

    const itemVariants = {
        hidden: { opacity: 0, y: 20 },
        visible: { opacity: 1, y: 0, transition: { duration: 0.5 } },
    };

    return (
        <div className="v6-slide-container">
            <motion.div
                className="v6-slide"
                initial="hidden"
                animate="visible"
                variants={containerVariants}
            >
                <div className="v6-grid-background" />
                <motion.div className="v6-header" variants={itemVariants}>
                    <h1 className="v6-title">Compliance Blueprint</h1>
                    <p className="v6-subtitle">A structured overview of the regulatory landscape.</p>
                </motion.div>

                <div className="v6-diagram">
                    {/* Column 1: Foundation */}
                    <motion.div className="v6-column" variants={containerVariants}>
                        <motion.h2 className="v6-column-title" variants={itemVariants}>Foundation</motion.h2>
                        <motion.div className="v6-node" variants={itemVariants}>
                            <div className="v6-node-header">
                                <FileText className="v6-icon gdpr" />
                                <span className="v6-node-title">GDPR</span>
                            </div>
                            <p className="v6-node-desc">Core principles for data protection.</p>
                        </motion.div>
                    </motion.div>

                    <motion.div className="v6-connector" variants={itemVariants}>
                        <ArrowRight />
                    </motion.div>

                    {/* Column 2: Key Pillars */}
                    <motion.div className="v6-column" variants={containerVariants}>
                        <motion.h2 className="v6-column-title" variants={itemVariants}>Key Pillars</motion.h2>
                        <motion.div className="v6-node" variants={itemVariants}>
                            <div className="v6-node-header">
                                <Shield className="v6-icon iso" />
                                <span className="v6-node-title">ISO 27001</span>
                            </div>
                            <p className="v6-node-desc">Information security management.</p>
                        </motion.div>
                        <motion.div className="v6-node" variants={itemVariants}>
                             <div className="v6-node-header">
                                <Zap className="v6-icon ai-act" />
                                <span className="v6-node-title">EU AI Act</span>
                            </div>
                            <p className="v6-node-desc">Regulation for artificial intelligence.</p>
                        </motion.div>
                    </motion.div>

                    <motion.div className="v6-connector" variants={itemVariants}>
                        <ArrowRight />
                    </motion.div>

                    {/* Column 3: Specializations */}
                    <motion.div className="v6-column" variants={containerVariants}>
                        <motion.h2 className="v6-column-title" variants={itemVariants}>Specializations</motion.h2>
                        <motion.div className="v6-node small" variants={itemVariants}>
                             <div className="v6-node-header">
                                <CheckCircle className="v6-icon tisax" />
                                <span className="v6-node-title">TISAX</span>
                            </div>
                            <p className="v6-node-desc">Automotive industry security.</p>
                        </motion.div>
                    </motion.div>
                </div>
            </motion.div>
        </div>
    );
};

export default BlueprintDeck;
