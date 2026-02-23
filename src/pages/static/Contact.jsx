import React from 'react';

const Contact = () => {
    return (
        <div className="py-16 md:py-24 bg-white">
            <div className="max-w-2xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
                <h1 className="text-4xl md:text-5xl font-extrabold text-gray-900 mb-8">
                    Contact Us
                </h1>
                <p className="text-xl text-gray-600 mb-12">
                    Have questions or need assistance? Our support team is here to help you.
                </p>

                <div className="bg-lightGray rounded-2xl p-8 md:p-12 shadow-sm">
                    <h2 className="text-2xl font-bold text-gray-900 mb-4">Email Us</h2>
                    <a
                        href="mailto:support@qouts.com"
                        className="text-primary text-2xl md:text-3xl font-semibold hover:underline transition-all"
                    >
                        support@qouts.com
                    </a>
                    <p className="mt-6 text-gray-500">
                        We typically respond within 24 hours during business days.
                    </p>
                </div>

                <div className="mt-16 grid grid-cols-1 md:grid-cols-2 gap-8 text-left">
                    <div className="p-6 border border-gray-100 rounded-xl">
                        <h3 className="font-bold text-gray-900 mb-2">Office Headquarters</h3>
                        <p className="text-gray-600">
                            123 E-commerce Ave, Suite 500<br />
                            Tech City, TC 98765
                        </p>
                    </div>
                    <div className="p-6 border border-gray-100 rounded-xl">
                        <h3 className="font-bold text-gray-900 mb-2">Customer Service</h3>
                        <p className="text-gray-600">
                            Monday - Friday: 9 AM - 6 PM<br />
                            Saturday: 10 AM - 4 PM
                        </p>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Contact;
