import React from 'react';
import { motion } from 'framer-motion';
import { FileText, Shield, Zap, CheckCircle, Cloud, Server } from 'lucide-react';
import './FrameworkDeckV4.css';

const FrameworkDeckV4: React.FC = () => {
    const containerVariants = {
        hidden: { opacity: 0 },
        visible: { opacity: 1, transition: { staggerChildren: 0.15 } },
    };

    const itemVariants = {
        hidden: { scale: 0.5, opacity: 0 },
        visible: { scale: 1, opacity: 1, transition: { type: 'spring', stiffness: 120 } },
    };

    return (
        <div className="v4-slide-container">
            <motion.div
                className="v4-slide"
                initial="hidden"
                animate="visible"
                variants={containerVariants}
            >
                <motion.h1 className="v4-title" variants={itemVariants}>
                    Integrated Compliance Ecosystem
                </motion.h1>
                <motion.p className="v4-subtitle" variants={itemVariants}>
                    Visualize the relationship between foundational and specialized frameworks.
                </motion.p>
                
                <div className="v4-diagram-wrapper">
                    {/* GDPR Foundational Node */}
                    <motion.div className="v4-node-container start" variants={itemVariants}>
                        <div className="v4-node gdpr">
                            <FileText className="v4-icon" />
                            <span className="v4-node-title">GDPR</span>
                            <p className="v4-node-desc">Foundational Data Privacy</p>
                        </div>
                    </motion.div>

                    {/* Main Branches */}
                    <div className="v4-branches-container">
                        {/* EU AI Act Branch */}
                        <motion.div className="v4-branch" variants={containerVariants}>
                            <div className="v4-connector-line" />
                            <motion.div className="v4-node-container" variants={itemVariants}>
                                <div className="v4-node ai-act">
                                    <Zap className="v4-icon" />
                                    <span className="v4-node-title">EU AI Act</span>
                                    <p className="v4-node-desc">Builds on GDPR principles</p>
                                </div>
                            </motion.div>
                        </motion.div>

                        {/* ISO 27001 Branch */}
                        <motion.div className="v4-branch" variants={containerVariants}>
                            <div className="v4-connector-line" />
                            <motion.div className="v4-node-container" variants={itemVariants}>
                                <div className="v4-node iso">
                                    <Shield className="v4-icon" />
                                    <span className="v4-node-title">ISO 27001</span>
                                    <p className="v4-node-desc">Information Security Standard</p>
                                </div>
                            </motion.div>
                            
                            {/* Sub-branches for ISO */}
                            <div className="v4-sub-branches">
                                <motion.div className="v4-branch sub" variants={containerVariants}>
                                    <div className="v4-connector-line sub" />
                                    <motion.div className="v4-node-container" variants={itemVariants}>
                                        <div className="v4-node tisax">
                                            <CheckCircle className="v4-icon" />
                                            <span className="v4-node-title">TISAX</span>
                                             <p className="v4-node-desc">Based on ISO 27001</p>
                                        </div>
                                    </motion.div>
                                </motion.div>
                                <motion.div className="v4-branch sub" variants={containerVariants}>
                                     <div className="v4-connector-line sub" />
                                    <motion.div className="v4-node-container" variants={itemVariants}>
                                        <div className="v4-node other-iso">
                                            <Cloud className="v4-icon" />
                                            <span className="v4-node-title">ISO 27017</span>
                                            <p className="v4-node-desc">Cloud Security</p>
                                        </div>
                                    </motion.div>
                                </motion.div>
                                 <motion.div className="v4-branch sub" variants={containerVariants}>
                                     <div className="v4-connector-line sub" />
                                    <motion.div className="v4-node-container" variants={itemVariants}>
                                        <div className="v4-node other-iso">
                                            <Server className="v4-icon" />
                                            <span className="v4-node-title">ISO 27018</span>
                                            <p className="v4-node-desc">PII in Clouds</p>
                                        </div>
                                    </motion.div>
                                </motion.div>
                            </div>
                        </motion.div>
                    </div>
                </div>
            </motion.div>
        </div>
    );
};

export default FrameworkDeckV4;
