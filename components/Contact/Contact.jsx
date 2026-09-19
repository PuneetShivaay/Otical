'use client';
import React from "react";
import { contactInfo } from "@/data";
import Icon from "@/components/ui/Icon";
import ContactForm from "./ContactForm";

function Contact() {
  return (
    <div className="relative py-20 border-b border-neutral-800 bg-neutral-900/50">
      <div className="max-w-7xl mx-auto px-4">
        <div className="text-center">
          <span className="bg-orange-500/10 text-orange-500 rounded-full h-6 text-sm font-medium px-4 py-2 uppercase">Connect With Us</span>
          <h2 className="text-3xl sm:text-5xl lg:text-6xl mt-8 tracking-tight text-white">
            Let&apos;s Build Something Amazing
            <span className="bg-gradient-to-r from-orange-500 to-red-700 text-transparent bg-clip-text">
              {" "}
              Together
            </span>
          </h2>
          <p className="sm:text-xl lg:text-2xl text-neutral-400 text-center mt-6 tracking-wide max-w-4xl mx-auto">Ready to discuss your project? Contact us today for a free consultation.</p>
        </div>
        <ContactForm />
        <div className="my-20 flex flex-wrap justify-center gap-8">
            {contactInfo.map((item) => (
              <div key={item.title} className="w-full sm:w-1/2 lg:w-1/4 p-2 text-center">
                <div className="bg-neutral-800/50 p-6 rounded-2xl border border-neutral-700 h-full transition-all duration-300 hover:border-orange-500 hover:shadow-lg hover:shadow-orange-500/15 transform hover:-translate-y-2">
                  <div className="text-orange-500 mb-5 inline-flex h-16 w-16 items-center justify-center rounded-full bg-neutral-900">
                    <Icon name={item.icon} size={32} />
                  </div>
                  <div>
                    <h5 className="mb-2 text-xl text-white">{item.title}</h5>
                    <a href={item.href} className="text-md text-neutral-400 hover:text-orange-500 transition-colors">
                      {item.value}
                    </a>
                  </div>
                </div>
              </div>
            ))}
        </div>
      </div>
    </div>
  );
}

export default Contact;
