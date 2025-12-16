import React from "react";
import { InfoData } from "../../data/ContactPage/InfoSection";

export default function ContactInfoSection() {
  const { title, image, imageAlt, details, socialTitle, socialLinks } =
    InfoData;

  return (
    <section className="py-16 lg:py-24 bg-white">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          <div className="relative flex justify-center lg:justify-start">
            <div className="absolute inset-0 bg-blue-500 rounded-[50%_50%_30%_70%/60%_40%_60%_40%] opacity-10 transform scale-110 blur-xl"></div>
            <img
              src={image}
              alt={imageAlt}
              className="relative rounded-2xl shadow-xl w-full max-w-md lg:max-w-none"
            />
          </div>

          <div>
            <h2 className="text-3xl lg:text-4xl font-bold text-gray-800 mb-8">
              {title}
            </h2>

            <div className="space-y-6">
              {details.map((detail, index) => {
                const Icon = detail.icon;
                return (
                  <div key={index} className="flex items-start gap-4">
                    <div className="mt-1 flex-shrink-0 w-8 h-8 flex items-center justify-center bg-gray-100 text-gray-600 rounded-full">
                      <Icon size={18} />
                    </div>
                    <div>
                      <h3 className="text-xl font-semibold text-gray-800">
                        {detail.label}
                      </h3>

                      {detail.href ? (
                        <a
                          href={detail.href}
                          target={detail.label === "Email" ? "_self" : "_blank"}
                          rel="noopener noreferrer"
                          className="text-blue-600 hover:underline"
                        >
                          {detail.value}
                        </a>
                      ) : (
                        <p className="text-gray-600">
                          {detail.value.split("\n").map((line, i) => (
                            <React.Fragment key={i}>
                              {line}
                              {i < detail.value.split("\n").length - 1 && (
                                <br />
                              )}
                            </React.Fragment>
                          ))}
                        </p>
                      )}
                    </div>
                  </div>
                );
              })}
            </div>

            <div className="mt-10 pt-6 border-t border-gray-200">
              <h3 className="text-lg font-semibold text-gray-700 mb-4">
                {socialTitle}
              </h3>
              <div className="flex flex-wrap gap-4">
                {socialLinks.map((link) => {
                  const Icon = link.icon;
                  return (
                    <a
                      key={link.label}
                      href={link.href}
                      target="_blank"
                      rel="noopener noreferrer"
                      aria-label={link.label}
                      className="w-10 h-10 flex items-center justify-center bg-gray-100 text-gray-600 rounded-full hover:bg-blue-600 hover:text-white transition-colors duration-300"
                    >
                      <Icon size={20} />
                    </a>
                  );
                })}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
