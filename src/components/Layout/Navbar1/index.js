import React from "react";
import { Disclosure, Menu, Transition } from "@headlessui/react";
import { BellIcon, HomeIcon, MenuIcon, XIcon } from "@heroicons/react/outline";
import { PlayIcon } from "@heroicons/react/solid";
import { NavLink } from "react-router-dom";
import { NavHashLink } from "react-router-hash-link";

const navigation = [
  {
    name: "Home",
    href: "#",
  },
  {
    name: "Demo",
    href: "https://demo.parseable.io/",
  },
  { name: "Features", href: "#features" },
  { name: "Community", href: "#community" },
  { name: "Contact", href: "#contact" },
  {
    name: "Github",
    href: "https://github.com/parseablehq/parseable",
  },
];

function classNames(...classes) {
  return classes.filter(Boolean).join(" ");
}

const Navbar1 = () => {
  return (
    <Disclosure as="nav" className="fixed w-full z-50  bg-bluePrimary">
      {({ open }) => (
        <>
          {/* <div className="top-0 left-0 w-full h-32"></div> */}
          <div className="max-w-7xl mx-auto px-2 sm:px-6 lg:px-8">
            <div className="relative flex items-center justify-between h-16">
              <div className="absolute inset-y-0 left-0 flex items-center sm:hidden">
                {/* Mobile menu button*/}
                <Disclosure.Button className="inline-flex items-center justify-center p-2 rounded-md text-gray-400 hover:text-white hover:bg-gray-700 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-white">
                  <span className="sr-only">Open main menu</span>
                  {open ? (
                    <XIcon className="block h-6 w-6" aria-hidden="true" />
                  ) : (
                    <MenuIcon className="block h-6 w-6" aria-hidden="true" />
                  )}
                </Disclosure.Button>
              </div>
              <div className="flex-1 flex items-center justify-center sm:items-stretch sm:justify-between">
                <div className="flex-shrink-0 flex items-center">
                  <img
                    className="block lg:hidden h-8 w-auto"
                    src="img/Component 19 – 1.svg"
                    alt="Workflow"
                  />
                  <img
                    className="hidden lg:block h-6 w-auto"
                    src="img/Component 19 – 1.svg"
                    alt="Workflow"
                  />
                </div>
                <div className="hidden sm:ml-6 sm:flex sm:space-x-10">
                  <NavHashLink
                    to="/"
                    className="flex space-x-3 px-3 items-center  text-sm font-medium text-white h-14 hover:text-white hover:no-underline"
                    activeClassName="border-b-4 border-white "
                  >
                    <img className="h-3" src="img/Icon awesome-home.svg" />
                    <span>Home</span>
                  </NavHashLink>
                  <a
                    href="https://demo.parseable.io/"
                    target="_blank"
                    className="border-transparent text-white hover:text-white inline-flex hover:no-underline items-center px-1 cursor-pointer  border-b-2 text-sm font-medium"
                  >
                    <span className="flex space-x-3 items-center">
                      <PlayIcon className="h-5 text-white" />
                      <span>Demo</span>
                    </span>
                  </a>

                  <NavHashLink
                    to="/#features"
                    className="flex space-x-3 px-3 items-center text-sm font-medium text-white h-14 hover:text-white hover:no-underline"
                    activeClassName="border-b-4 border-white "
                  >
                    <img className="h-3" src="img/Icon awesome-list.svg" />
                    <span>Features</span>
                  </NavHashLink>

                  <NavHashLink
                    to="/#community"
                    className="flex space-x-3 px-3 items-center  text-sm font-medium hover:text-white hover:no-underline text-white h-14"
                    activeClassName="border-b-4 border-white "
                  >
                    <img className="h-3" src="img/Icon ionic-ios-people.svg" />
                    <span>Community</span>
                  </NavHashLink>

                  <NavHashLink
                    to="/#contact"
                    className="flex space-x-3 px-3 items-center  text-sm font-medium hover:text-white hover:no-underline text-white h-14"
                    activeClassName="border-b-4 border-white "
                  >
                    <img className="h-3" src="img/Icon ionic-ios-mail.svg" />
                    <span>Contact</span>
                  </NavHashLink>
                  <a
                    href="https://github.com/parseablehq/parseable"
                    target="_blank"
                    className="border-white text-white hover:border-white rounded-md hover:text-white inline-flex items-center my-2 px-1  border-2 text-sm font-medium"
                  >
                    <span className="flex whitespace-nowrap px-3 items-center">
                      <img
                        className="h-5"
                        src="img/Icon awesome-github-alt (1).svg"
                      />
                    </span>
                  </a>
                </div>
              </div>
            </div>
          </div>

          <Disclosure.Panel className="sm:hidden">
            <div className="px-2 pt-2 pb-3 space-y-1">
              {navigation.map((item) => (
                <Disclosure.Button
                  key={item.name}
                  as="a"
                  href={item.href}
                  className="block  w-full rounded-md"
                  aria-current={item.current ? "page" : undefined}
                >
                  {item.name === "Demo" ? (
                    <a
                      target={"_blank"}
                      href={item.href}
                      className="h-10 w-full px-3 text-white inline-flex items-center"
                    >
                      {item.name}
                    </a>
                  ) : item.name === "Github" ? (
                    <a
                      target={"_blank"}
                      href={item.href}
                      className="h-10 w-full px-3 text-white inline-flex items-center"
                    >
                      {item.name}
                    </a>
                  ) : (
                    <NavHashLink to={item.href} activeClassName="phoneActive">
                      <span className="h-10 w-full px-3 text-white inline-flex items-center">
                        {item.name}
                      </span>
                    </NavHashLink>
                  )}
                </Disclosure.Button>
              ))}
            </div>
          </Disclosure.Panel>
        </>
      )}
    </Disclosure>
  );
};

export default Navbar1;
