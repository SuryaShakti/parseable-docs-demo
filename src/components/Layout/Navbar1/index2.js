/* This example requires Tailwind CSS v2.0+ */
import { Fragment, useEffect } from "react";
import { Disclosure, Menu, Transition } from "@headlessui/react";
import { BellIcon, MenuIcon, XIcon } from "@heroicons/react/outline";
import { PlayIcon } from "@heroicons/react/solid";
// import { useRouter } from "next/router";
// import Link from "next/link";
// import {
//   Link,
//   Button,
//   Element,
//   Events,
//   animateScroll as scroll,
//   scrollSpy,
//   scroller,
// } from "react-scroll";
import { Link } from "react-scroll";
import { NavLink } from "../../NavLink";

function classNames(...classes) {
  return classes.filter(Boolean).join(" ");
}

export default function Navbar() {
  // const router = useRouter();

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

  // useEffect(() => {
  // }, [router.asPath]);

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
                    src="/Component 19 – 1.svg"
                    alt="Workflow"
                  />
                  <img
                    className="hidden lg:block h-6 w-auto"
                    src="/Component 19 – 1.svg"
                    alt="Workflow"
                  />
                </div>
                <div className="hidden sm:ml-6 sm:flex sm:space-x-10">
                  <NavLink href="/#" activeClassName="active">
                    <span className="flex space-x-3 px-3 items-center  text-sm font-medium text-white h-14">
                      <img className="h-3" src="/Icon awesome-home.svg" />
                      <span>Home</span>
                    </span>
                  </NavLink>
                  <a
                    href="https://demo.parseable.io/"
                    target="_blank"
                    className="border-transparent text-white hover:border-white hover:text-white inline-flex items-center px-1 cursor-pointer  border-b-2 text-sm font-medium"
                  >
                    <span className="flex space-x-3 items-center">
                      <PlayIcon className="h-5 text-white" />
                      <span>Demo</span>
                    </span>
                  </a>

                  <NavLink href="/#features" activeClassName="active">
                    <span className="flex space-x-3 px-3 items-center text-sm font-medium text-white h-14">
                      <img className="h-3" src="/Icon awesome-list.svg" />
                      <span>Features</span>
                    </span>
                  </NavLink>

                  <NavLink href="/#community" activeClassName="active">
                    <span className="flex space-x-3 px-3 items-center  text-sm font-medium text-white h-14">
                      <img className="h-3" src="/Icon ionic-ios-people.svg" />
                      <span>Community</span>
                    </span>
                  </NavLink>

                  <NavLink href="/#contact" activeClassName="active">
                    <span className="flex space-x-3 px-3 items-center  text-sm font-medium text-white h-14">
                      <img className="h-3" src="/Icon ionic-ios-mail.svg" />
                      <span>Contact</span>
                    </span>
                  </NavLink>
                  <a
                    href="https://github.com/parseablehq/parseable"
                    target="_blank"
                    className="border-white text-white hover:border-white rounded-md hover:text-white inline-flex items-center my-2 px-1  border-2 text-sm font-medium"
                  >
                    <span className="flex whitespace-nowrap px-3 items-center">
                      <img
                        className="h-5"
                        src="/Icon awesome-github-alt (1).svg"
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
                    <NavLink href={item.href} activeClassName="phoneActive">
                      <span className="h-10 w-full px-3 text-white inline-flex items-center">
                        {item.name}
                      </span>
                    </NavLink>
                  )}
                </Disclosure.Button>
              ))}
            </div>
          </Disclosure.Panel>
        </>
      )}
    </Disclosure>
  );
}
