import React, { useState } from 'react';

const HeroThird = () => {
    // Define an array of FAQs
    const faqs = [
        {
            question: 'What is the process for requesting city documents online?',
            answer: 'To request city documents online, visit the city portal and select the "Request Documents" option. Fill out the required forms and submit the necessary documents. Payment can be made online, and you will receive a confirmation email once the request has been processed.',
            isExpanded: false,
        },
        {
            question: 'How can I track the status of my document request?',
            answer: 'You can track the status of your document request by visiting the "Track Request" section on the city portal. Enter your request reference number to view the current status and expected completion date.',
            isExpanded: false,
        },
        {
            question: 'What are the accepted payment methods for online transactions?',
            answer: 'Accepted payment methods include credit and debit cards, online banking, and e-wallets such as PayPal. Choose the option that works best for you when making payments online.',
            isExpanded: false,
        },
        {
            question: 'What should I do if I encounter an issue with my online request?',
            answer: 'If you encounter any issues with your online request, you can contact the city hall support team for assistance. Use the contact information provided on the city portal to reach out via phone or email.',
            isExpanded: false,
        },
        {
            question: 'How do I contact city hall for further assistance?',
            answer: 'You can contact city hall for further assistance by calling the provided phone number or sending an email to the support team. You may also visit city hall in person during business hours.',
            isExpanded: false,
        },
    ];

    // Use the useState hook to manage the FAQs state
    const [faqsState, setFaqsState] = useState(faqs);

    // Function to toggle the expansion state of an FAQ
    const toggleFaq = (index) => {
        setFaqsState((prevFaqsState) => {
            const updatedFaqs = prevFaqsState.map((faq, idx) => {
                // Toggle isExpanded state of the selected FAQ
                if (idx === index) {
                    return {
                        ...faq,
                        isExpanded: !faq.isExpanded,
                    };
                }
                return faq;
            });
            return updatedFaqs;
        });
    };

    return (
        <section className="py-15 mb-4">
            <h2 className="text-3xl font-bold mb-6 text-center">Frequently Asked Questions</h2>
            <div className="space-y-4 flex flex-col items-center">
                {faqsState.map((faq, index) => (
                    <div key={index} className="flex flex-col items-center text-center w-3/4 md:w-1/2">
                        {/* FAQ question and toggle button */}
                        <div className="flex justify-center w-full items-center">
                            <p className="flex-1 text-lg">
                                {faq.question}
                            </p>
                            {/* Drop-down arrow button */}
                            <button
                                className="text-xl text-gray-700 hover:text-gray-500 ml-2"
                                onClick={() => toggleFaq(index)}
                            >
                                {faq.isExpanded ? '▲' : '▼'}
                            </button>
                        </div>
                        {/* Conditional rendering of the answer */}
                        {faq.isExpanded && (
                            <p className="mt-2 text-sm text-gray-700 w-full">
                                {faq.answer}
                            </p>
                        )}
                    </div>
                ))}
            </div>
        </section>
    );
};

export default HeroThird;
