import React from 'react';
import { motion } from 'framer-motion';
import { FileText, Shield, Zap, CheckCircle } from 'lucide-react';
import './FrameworkDeckV3.css';

const FrameworkDeckV3: React.FC = () => {
    const containerVariants = {
        hidden: { opacity: 0 },
        visible: {
            opacity: 1,
            transition: {
                staggerChildren: 0.2,
            },
        },
    };

    const itemVariants = {
        hidden: { y: 20, opacity: 0 },
        visible: {
            y: 0,
            opacity: 1,
            transition: {
                type: 'spring',
                stiffness: 100,
            },
        },
    };

    const lineVariants = {
        hidden: { pathLength: 0 },
        visible: {
            pathLength: 1,
            transition: {
                duration: 1,
                ease: 'easeInOut',
            },
        },
    };

    return (
        <div className="v3-slide-container">
            <motion.div
                className="v3-slide"
                initial="hidden"
                animate="visible"
                variants={containerVariants}
            >
                <motion.h1 className="v3-title" variants={itemVariants}>
                    The Compliance Journey
                </motion.h1>
                <motion.p className="v3-subtitle" variants={itemVariants}>
                    From Foundational GDPR to Specialized Frameworks
                </motion.p>
                <div className="v3-diagram">
                    {/* GDPR Node */}
                    <motion.div className="v3-node gdpr" variants={itemVariants}>
                        <FileText className="v3-icon" />
                        <span className="v3-node-title">GDPR</span>
                        <p className="v-node-desc">Foundation</p>
                    </motion.div>

                    {/* Connectors */}
                    <div className="v3-connectors">
                        <svg className="v3-svg" viewBox="0 0 400 200">
                            <motion.path
                                d="M 50 100 Q 150 50, 250 50"
                                fill="none"
                                stroke="rgba(255, 255, 255, 0.3)"
                                strokeWidth="2"
                                variants={lineVariants}
                            />
                            <motion.path
                                d="M 50 100 L 250 100"
                                fill="none"
                                stroke="rgba(255, 255, 255, 0.3)"
                                strokeWidth="2"
                                variants={lineVariants}
                            />
                             <motion.path
                                d="M 50 100 Q 150 150, 250 150"
                                fill="none"
                                stroke="rgba(255, 255, 255, 0.3)"
                                strokeWidth="2"
                                variants={lineVariants}
                            />
                        </svg>
                    </div>

                    {/* Tier 2 Branches */}
                    <motion.div className="v3-branch" variants={containerVariants}>
                        <motion.div className="v3-node iso" variants={itemVariants}>
                            <Shield className="v3-icon" />
                            <span className="v3-node-title">ISO 27001</span>
                            <p className="v-node-desc">Security</p>
                        </motion.div>
                        <motion.div className="v3-node ai-act" variants={itemVariants}>
                            <Zap className="v3-icon" />
                            <span className="v3-node-title">EU AI Act</span>
                             <p className="v-node-desc">Innovation</p>
                        </motion.div>
                        <motion.div className="v3-node tisax" variants={itemVariants}>
                            <CheckCircle className="v3-icon" />
                            <span className="v3-node-title">TISAX</span>
                            <p className="v-node-desc">Automotive</p>
                        </motion.div>
                    </motion.div>
                </div>
            </motion.div>
        </div>
    );
};

export default FrameworkDeckV3;