"use client";

import HoverLink from "@/components/HoverLink";
import Link from "next/link";

const Desktop = () => {
  return (
    <nav className="flex-col items-center hidden sm:mx-[60px] md:mx-[70px] lg:mx-[90px] dt:mx-[100px] pt-10 space-y-8 sm:flex">
      <Link href="/" className="self-start font-bebas-neue text-[48px]">
        Frontend Mentor Challenges
      </Link>
      <ul className="px-[40px] dt:px-[100px] sm:pt-[40px] md:pt-[50px] lg:pt-[90px] w-full flex justify-between font-medium font-montserrat sm:text-[18px] md:text-[22px] lg:text-[24px] dt:text-[30px]">
        <div className="flex flex-col space-y-6">
          <li>
            <HoverLink
              difficulty="junior"
              description="A landing page in dark theme for Fylo">
              <Link className="link-item" href="/fylo-dark-theme-landing-page">
                <span className="text-fylo-blue">Fylo</span> Dark Theme Landing
                Page
              </Link>
            </HoverLink>
          </li>
          <li>
            <HoverLink
              difficulty="newbie"
              description="This challenge is perfect if you're just getting started. The shift between the layouts will be a nice test if you're new to building responsive projects.">
              <Link
                className="link-item"
                href="/3-column-preview-card-component">
                3 <span className="text-3cpcc-very-dark-cyan">Column</span>{" "}
                Preview Card Component
              </Link>
            </HoverLink>
          </li>
          <li>
            <HoverLink
              difficulty="junior"
              description="This challenge is designed to sharpen your JavaScript and form validation skills. Working with dates in JavaScript can be tricky, so this will be a nice test!">
              <Link className="link-item" href="/age-calculator-app">
                Age <span className="text-aca-purple">Calculator</span> App
              </Link>
            </HoverLink>
          </li>
          <li>
            <HoverLink
              difficulty="junior"
              description="In this challenge, was created a bar chart component from scratch.">
              <Link className="link-item" href="/expenses-chart-component">
                Expenses <span className="text-ecc-soft-red">Chart</span>{" "}
                Component
              </Link>
            </HoverLink>
          </li>
          <li>
            <HoverLink
              difficulty="junior"
              description="This fun project is an excellent way to practice DOM manipulation and form validation while also putting your HTML and CSS skills to the test.">
              <Link className="link-item" href="/interactive-card-details-form">
                Interactive{" "}
                <span className="text-icc-very-dark-violet">Card</span> Details
                Form
              </Link>
            </HoverLink>
          </li>
          <li>
            <HoverLink
              difficulty="intermediate"
              description="Challenge was to build this countdown timer. There was lots of small CSS tests in the design as well.">
              <Link className="link-item" href="/launch-countdown-timer">
                Launch{" "}
                <span className="text-lct-desaturated-blue-dark">
                  Countdown
                </span>{" "}
                Timer
              </Link>
            </HoverLink>
          </li>
        </div>

        <div className="flex flex-col space-y-6">
          <li>
            <HoverLink
              difficulty="junior"
              description="This news homepage was an excellent opportunity to practice CSS Grid skills. There was lots of tricky decisions to make and plenty of learning opportunities!">
              <Link className="link-item" href="/news-homepage">
                <span className="text-np-soft-orange">News</span> Homepage
              </Link>
            </HoverLink>
          </li>
          <li>
            <HoverLink
              difficulty="junior"
              description="This challenge had get me thinking about building an accessible custom toggle control and also tested my layout skills.">
              <Link className="link-item" href="/pricing-component-with-toggle">
                Pricing Component With{" "}
                <span className="text-pct-lg-end">Toggle</span>
              </Link>
            </HoverLink>
          </li>
          <li>
            <HoverLink
              difficulty="newbie"
              description="This HTML & CSS-only challenge was a perfect to start build responsive projects.">
              <Link
                className="link-item"
                href="/product-preview-card-component">
                Product <span className="text-ppc-dark-cyan">Preview</span> Card
                Component
              </Link>
            </HoverLink>
          </li>
          <li>
            <HoverLink
              difficulty="newbie"
              description="This was a perfect challenge to test my layout skills.">
              <Link className="link-item" href="/profile-card-component">
                <span className="text-pcc-dark-cyan">Profile</span> Card
                Component
              </Link>
            </HoverLink>
          </li>
          <li>
            <HoverLink
              difficulty="newbie"
              description="A small component with simple count up animation and layout shift for different devices.">
              <Link className="link-item" href="/results-summary-component">
                Results{" "}
                <span className="text-rsc-green-teal-dark">Summary</span>{" "}
                Component
              </Link>
            </HoverLink>
          </li>
          <li>
            <HoverLink
              difficulty="junior"
              description="It was a perfect opportunity to practice my CSS Grid skills.">
              <Link className="link-item" href="/time-tracking-dashboard">
                Time Tracking <span className="text-ttd-violet">Dashboard</span>
              </Link>
            </HoverLink>
          </li>
        </div>
      </ul>
    </nav>
  );
};

export default Desktop;
