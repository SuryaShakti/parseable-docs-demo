import { MailIcon } from "@heroicons/react/outline";
import React from "react";

const Footer = () => {
  return (
    <div id="contact" className="bg-footerBlue mt-40">
      <div className="grid md:grid-cols-10 max-w-6xl pt-20 md:pt-0  mx-auto sm:px-6 lg:px-8 px-3">
        <div className="pb-10 md:py-20 md:col-span-7 flex flex-col items-start md:pr-20 border-b md:border-b-0 md:border-r border-gray-500  justify-center">
          <div>
            <div className="text-white font-bold text-lg">Contact Us</div>
            <div className="text-white mb-7 font-light text-sm">
              Questions, Queries, or Comments?
            </div>
          </div>
          <form
            action="https://formspree.io/f/mgedgvyv"
            method="POST"
            className="w-full grid grid-cols-1 gap-y-6"
          >
            <div>
              <div className="mt-1 relative rounded-md shadow-sm">
                <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                  <img
                    src={"img/Icon feather-user.svg"}
                    className="w-4  text-gray-400"
                    aria-hidden="true"
                  />
                </div>
                <input
                  type="text"
                  name="full-name"
                  id="full-name"
                  className="block text-white pl-12 w-full shadow-sm py-3 px-4 placeholder-gray-400 bg-footerBlue border border-gray-500"
                  placeholder="Full name"
                  autoComplete="off"
                />
              </div>
            </div>
            <div>
              <div className="mt-1 relative rounded-md shadow-sm">
                <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                  <img
                    src={"img/Icon feather-mail.svg"}
                    className="w-5  text-gray-400"
                    aria-hidden="true"
                  />
                </div>
                <input
                  type="email"
                  name="email"
                  id="email"
                  autoComplete="off"
                  className="block text-white pl-12 w-full shadow-sm py-3 px-4 placeholder-gray-400 bg-footerBlue border border-gray-500"
                  placeholder="E-mail"
                />
              </div>
            </div>
            <div className="w-full relative">
              <div className="absolute top-4 left-3">
                <img
                  src={"img/Icon feather-message-square.svg"}
                  className="w-5  text-gray-400"
                  aria-hidden="true"
                />
              </div>
              <textarea
                id="message"
                name="message"
                rows={4}
                className="block text-white pl-12 w-full shadow-sm py-3 px-4 placeholder-gray-400 bg-footerBlue border border-gray-500"
                placeholder="Message"
                defaultValue={""}
              />
            </div>
            <div>
              <button
                type="submit"
                className="inline-flex justify-center py-2 px-24 border-2 border-gray-100  shadow-sm text-base font-medium rounded-md text-gray-100"
              >
                Send
              </button>
            </div>
          </form>
        </div>
        <div className="md:col-span-3 py-10 md:py-20 md:pl-16 text-white">
          <div className="text-lg font-bold">Find us on Social Media</div>
          <div className="flex mt-3 space-x-3">
            <a href="https://twitter.com/parseableio" target="_blank">
              <img
                src={"img/Icon awesome-twitter-square.svg"}
                className="w-10"
              />
            </a>
            <a
              href="https://www.linkedin.com/company/parseable/"
              target="_blank"
            >
              <img src={"img/Icon awesome-linkedin.svg"} className="w-10" />
            </a>
          </div>
          <div className="mt-20 text-lg font-bold">Useful Links</div>
          <div className="flex flex-col space-y-2 pt-2">
            <a
              href={"https://demo.parseable.io/"}
              target="_blank"
              className="flex items-center space-x-4"
            >
              <img
                src={"img/Icon ionic-ios-arrow-forward.svg"}
                className="w-2"
              />
              <span className="text-sm">Demo</span>
            </a>
            <a
              href={"https://parseable.io/docs"}
              target="_blank"
              className="flex space-x-4"
            >
              <img
                src={"img/Icon ionic-ios-arrow-forward.svg"}
                className="w-2"
              />
              <span className="text-sm">Documentation</span>
            </a>
            <a
              href={"https://launchpass.com/parseable"}
              target="_blank"
              className="flex space-x-4"
            >
              <img
                src={"img/Icon ionic-ios-arrow-forward.svg"}
                className="w-2"
              />
              <span className="text-sm whitespace-nowrap">Community</span>
            </a>
          </div>
          <div className="text-gray-500 text-xs mt-24 whitespace-nowrap">
            © Copyright by Parseable, Inc. All rights reserved.
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
