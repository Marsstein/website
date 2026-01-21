import React from 'react';
import { motion } from 'framer-motion';
import { FileText, Shield, Zap, CheckCircle, Cloud, Server } from 'lucide-react';
import './FrameworkDeckV5.css';

const OrbiterDeck: React.FC = () => {
    const containerVariants = {
        hidden: { opacity: 0 },
        visible: {
            opacity: 1,
            transition: {
                staggerChildren: 0.3,
            },
        },
    };

    const itemVariants = {
        hidden: { scale: 0, opacity: 0 },
        visible: {
            scale: 1,
            opacity: 1,
            transition: {
                type: 'spring',
                damping: 15,
                stiffness: 100,
            },
        },
    };

    const frameworks = [
        { name: 'EU AI Act', icon: Zap, angle: 30, distance: 300, color: '#f97316' },
        { name: 'ISO 27001', icon: Shield, angle: 150, distance: 300, color: '#39B37B' },
        { name: 'TISAX', icon: CheckCircle, angle: 210, distance: 400, color: '#3b82f6' },
        { name: 'ISO 27017', icon: Cloud, angle: 90, distance: 400, color: '#39B37B' },
        { name: 'ISO 27018', icon: Server, angle: 270, distance: 400, color: '#39B37B' },
    ];

    return (
        <div className="v5-slide-container">
            <motion.div
                className="v5-slide"
                initial="hidden"
                animate="visible"
                variants={containerVariants}
            >
                <div className="v5-background-effects" />
                <motion.div className="v5-title-container" variants={itemVariants}>
                    <h1 className="v5-title">The Compliance Universe</h1>
                    <p className="v5-subtitle">GDPR as the gravitational center of modern frameworks.</p>
                </motion.div>

                <div className="v5-diagram">
                    <motion.div className="v5-node-center" variants={itemVariants}>
                        <div className="v5-node gdpr">
                            <FileText />
                            <span>GDPR</span>
                        </div>
                    </motion.div>

                    {frameworks.map((fw, i) => (
                        <motion.div
                            key={fw.name}
                            className="v5-orbit"
                            style={{
                                width: `${fw.distance * 2}px`,
                                height: `${fw.distance * 2}px`,
                            }}
                            variants={{
                                hidden: { opacity: 0 },
                                visible: { opacity: 1, transition: { delay: 0.5 + i * 0.1 } }
                            }}
                        >
                            <motion.div
                                className="v5-node-container"
                                style={{
                                    transform: `rotate(${fw.angle}deg) translateX(${fw.distance}px) rotate(-${fw.angle}deg)`,
                                }}
                                variants={itemVariants}
                            >
                                <div className="v5-node" style={{ '--node-color': fw.color } as React.CSSProperties}>
                                    <fw.icon />
                                    <span>{fw.name}</span>
                                </div>
                            </motion.div>
                        </motion.div>
                    ))}
                </div>
            </motion.div>
        </div>
    );
};

export default OrbiterDeck;
