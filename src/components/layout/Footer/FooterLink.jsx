import React from 'react';
import { Link } from 'react-router-dom';

/**
 * Reusable Footer Link component with consistent styling and transitions.
 * @param {Object} props
 * @param {string} props.to - Navigation path
 * @param {React.ReactNode} props.children - Link content
 */
const FooterLink = ({ to, children }) => {
    return (
        <Link
            to={to}
            className="text-gray-600 hover:text-primary transition-colors duration-200 text-sm py-1 block"
        >
            {children}
        </Link>
    );
};

export default FooterLink;
