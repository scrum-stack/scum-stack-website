import { useState } from "react";
import Button from "../Button";

const FAQContact = () => {
    const [openIndex, setOpenIndex] = useState(0);

    const faqs = [
        { question: "Is my technology allowed on tech?", answer: "There are many variations of passages the majority have suffered alteration in some form injected humour, or randomised words believable." },
        { question: "How to soft launch your business?", answer: "Soft launching details here..." },
        { question: "How to turn visitors into contributors?", answer: "Conversion strategies here..." },
        { question: "How can I find my solutions?", answer: "Finding solutions explanation..." }
    ];

    return (
        <div className="flex flex-col md:flex-row mt-20 pt-8 gap-8 mx-auto   ">
            {/* Contact Form */}
            <div className="w-full  md:w-1/2 flex justify-center items-center bg-[url('/contactBg.jpg')] bg-cover bg-center bg-no-repeat py-12 md:py-0">
                <div className="text-white border-t-4 border-primary p-8 w-full max-w-lg bg-secondary shadow-lg">
                    <h3 className="text-sm text-primary uppercase">Contact Us</h3>
                    <h2 className="text-2xl font-bold mb-6">Write Email</h2>
                    <form className="flex flex-col gap-4">
                        <input type="text" placeholder="Your Name" className="p-3 bg-secondary border border-gray-700 text-gray-400" />
                        <input type="email" placeholder="Email Address" className="p-3 bg-secondary border border-gray-700 text-gray-400" />
                        <input type="tel" placeholder="Phone Number" className="p-3 bg-secondary border border-gray-700 text-gray-400" />
                        <textarea placeholder="Write a Message" className="p-3 bg-secondary border border-gray-700 text-gray-400 h-24"></textarea>
                        <div className="flex justify-center">
                            <Button href="" text="Send A Message" px="8" py="3" isArrow={"hidden"} />
                        </div>
                    </form>
                </div>
            </div>

            {/* FAQ Section */}
            <div className="w-full md:w-1/2 p-6 md:p-14 bg-[url('/faqBg.jpg')] bg-cover bg-no-repeat flex flex-col justify-center">
                <h3 className="text-primary uppercase font-semibold">Questions & Answers</h3>
                <h2 className="text-3xl md:text-4xl text-secondary font-bold mb-6">See Frequently Asked Questions</h2>
                <div className="space-y-4">
                    {faqs.map((faq, index) => (
                        <div key={index} className="border border-gray-300 overflow-hidden">
                            <button
                                className={`w-full text-left text-secondary p-4 font-bold flex justify-between items-center transition-all ${openIndex === index ? 'bg-primary text-black' : 'bg-white'}`}
                                onClick={() => setOpenIndex(openIndex === index ? null : index)}
                            >
                                {faq.question} <span>{openIndex === index ? '-' : '+'}</span>
                            </button>
                            {openIndex === index && (
                                <div className="p-4 bg-white text-secondary border-t">{faq.answer}</div>
                            )}
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
};

export default FAQContact;
