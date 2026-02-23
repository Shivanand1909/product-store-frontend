import React from 'react';
import FooterLink from './FooterLink';

/**
 * A section within the footer that group related links.
 * @param {Object} props
 * @param {string} props.title - The heading for the section
 * @param {Array} props.links - Array of link objects { label, path }
 */
const FooterSection = ({ title, links }) => {
    return (
        <nav className="flex flex-col space-y-4" aria-label={title}>
            <h3 className="text-gray-900 font-semibold text-base uppercase tracking-wider">
                {title}
            </h3>
            <ul className="space-y-2">
                {links.map((link) => (
                    <li key={link.label}>
                        <FooterLink to={link.path}>{link.label}</FooterLink>
                    </li>
                ))}
            </ul>
        </nav>
    );
};

export default FooterSection;
