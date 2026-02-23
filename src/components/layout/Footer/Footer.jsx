import React from 'react';
import FooterSection from './FooterSection';
import { Link } from 'react-router-dom';

const Footer = () => {
    const companyLinks = [
        { label: 'About Us', path: '/about' },
        { label: 'Contact', path: '/contact' },
        { label: 'Careers', path: '/careers' },
    ];

    const helpLinks = [
        { label: 'Support', path: '/support' },
        { label: 'Shipping', path: '/shipping' },
        { label: 'Returns', path: '/returns' },
        { label: 'FAQ', path: '/faq' },
    ];

    const legalLinks = [
        { label: 'Privacy Policy', path: '/privacy' },
        { label: 'Terms of Service', path: '/terms' },
        { label: 'Cookie Policy', path: '/cookies' },
    ];

    return (
        <footer className="bg-white border-t border-gray-200 pt-12 pb-8 mt-auto" role="contentinfo">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8 mb-12">
                    {/* Brand Section */}
                    <div className="col-span-2 md:col-span-1">
                        <Link to="/" className="flex items-center mb-6">
                            <span className="text-2xl font-bold text-primary">Qouts</span>
                        </Link>
                        <p className="text-gray-500 text-sm leading-relaxed max-w-xs">
                            Your one-stop destination for premium products. Experience the best quality and service with Qouts.
                        </p>
                    </div>

                    {/* Navigation Sections */}
                    <FooterSection title="Company" links={companyLinks} />
                    <FooterSection title="Help" links={helpLinks} />
                    <FooterSection title="Legal" links={legalLinks} />
                </div>

                {/* Bottom Bar */}
                <div className="pt-8 border-t border-gray-100 flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0 text-center md:text-left">
                    <p className="text-gray-400 text-sm">
                        © {new Date().getFullYear()} Qouts Inc. All rights reserved.
                    </p>
                    <div className="flex space-x-6">
                        <span className="text-gray-400 text-sm">Follow us:</span>
                        {/* Social icons can be added here */}
                        <div className="flex space-x-4">
                            <a href="#" className="text-gray-400 hover:text-primary transition-colors" aria-label="Facebook">FB</a>
                            <a href="#" className="text-gray-400 hover:text-primary transition-colors" aria-label="Twitter">TW</a>
                            <a href="#" className="text-gray-400 hover:text-primary transition-colors" aria-label="Instagram">IG</a>
                        </div>
                    </div>
                </div>
            </div>
        </footer>
    );
};

export default Footer;
