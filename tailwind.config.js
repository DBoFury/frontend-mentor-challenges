/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: ["class"],
  content: [
    "./pages/**/*.{ts,tsx}",
    "./components/**/*.{ts,tsx}",
    "./app/**/*.{ts,tsx}",
    "./src/**/*.{ts,tsx}",
  ],
  theme: {
    container: {
      center: true,
      padding: "2rem",
      screens: {
        "2xl": "1400px",
      },
    },
    extend: {
      screens: {
        ml: "375px",
        dt: "1440px",
      },
      boxShadow: {
        // Launch Countdown Timer
        "lct-display": "0 1vh 2px -1px rgba(0, 0, 0, 0.20)",
        // Results Summary Component
        "rsc-summary": "10px 10px 25px -15px rgba(0, 0, 0, 0.3)",
      },
      colors: {
        night: "hsl(84, 17%, 6%)",
        magnolia: "#f3f1f3",
        box: {
          DEFAULT: "#697268",
          hover: "#c6cac5",
        },
        challenge: {
          newbie: "#6ABECD",
          junior: "#AAD742",
          intermediate: "#F1B604",
        },
        // Fylo Dark Theme Landing Page
        fylo: {
          intro: "hsl(217, 28%, 15%)",
          main: "hsl(218, 28%, 13%)",
          footer: "hsl(216, 53%, 9%)",
          testimonials: "hsl(219, 30%, 18%)",
          cyan: "hsl(176, 68%, 64%)",
          blue: "hsl(198, 60%, 50%)",
          "light-red": "hsl(0, 100%, 63%)",
        },
        // 3 Column Preview Card Component
        "3cpcc": {
          "bright-orange": "hsl(31, 77%, 52%)",
          "dark-cyan": "hsl(184, 100%, 22%)",
          "very-dark-cyan": "hsl(179, 100%, 13%)",
          "transparent-white": "hsla(0, 0%, 100%, 0.75)",
          "very-light-gray": "hsl(0, 0%, 95%)",
        },
        // Age Calculator App
        aca: {
          purple: "hsl(259, 100%, 65%)",
          "light-red": "hsl(0, 100%, 67%)",
          "off-white": "hsl(0, 0%, 94%)",
          "light-grey": "hsl(0, 0%, 86%)",
          "smokey-grey": "hsl(0, 1%, 44%)",
          "off-black": "hsl(0, 0%, 8%)",
        },
        // Expenses Chart Component
        ecc: {
          "soft-red": {
            DEFAULT: "hsl(10, 79%, 65%)",
            bright: "hsl(10, 79%, 80%)",
          },
          cyan: {
            DEFAULT: "hsl(186, 34%, 60%)",
            bright: "hsl(186, 34%, 75%)",
          },
          "dark-brown": "hsl(25, 47%, 15%)",
          "medium-brown": "hsl(28, 10%, 53%)",
          cream: "hsl(27, 66%, 92%)",
          "very-pale-orange": "hsl(33, 100%, 98%)",
        },
        // Interactive Card Details Form
        icd: {
          "active-input": {
            from: "hsl(249, 99%, 64%)",
            to: "hsl(278, 94%, 30%)",
          },
          red: "hsl(0, 100%, 66%)",
          "light-grayish-violet": "hsl(270, 3%, 87%)",
          "dark-grayish-violet": "hsl(279, 6%, 55%)",
          "very-dark-violet": "hsl(278, 68%, 11%)",
        },
        // Launch Countdown Timer
        lct: {
          "grayish-blue": "hsl(237, 18%, 59%)",
          "soft-red": "hsl(345, 95%, 68%)",
          "desaturated-blue": {
            dark: "hsl(236, 21%, 20%)",
            light: "hsl(236, 21%, 26%)",
          },
          "very-dark-blue": "hsl(235, 16%, 14%)",
          "blackish-blue": "hsl(234, 17%, 12%)",
        },
        // News Homepage
        np: {
          "soft-orange": "hsl(35, 77%, 62%)",
          "soft-red": "hsl(5, 85%, 63%)",
          "off-white": "hsl(36, 100%, 99%)",
          "grayish-blue": "hsl(233, 8%, 79%)",
          "dark-grayish-blue": "hsl(236, 13%, 42%)",
          "very-dark-blue": "hsl(240, 100%, 5%)",
        },
        // Pricing Component With Toggle
        pct: {
          lg: {
            start: "hsl(236, 72%, 79%)",
            end: "hsl(237, 63%, 64%)",
          },
          "very-light-grayish-blue": "hsl(240, 78%, 98%)",
          "light-grayish-blue": "hsl(234, 14%, 74%)",
          "grayish-blue": "hsl(233, 13%, 49%)",
          "dark-grayish-blue": "hsl(232, 13%, 33%)",
          "off-white": "hsl(36, 100%, 99%)",
        },
        // Pricing Preview Card Component
        ppc: {
          "dark-cyan": {
            DEFAULT: "hsl(158, 36%, 37%)",
            dark: "hsl(158, 36%, 20%)",
          },
          cream: "hsl(30, 38%, 92%)",
          "very-dark-blue": "hsl(212, 21%, 14%)",
          "dark-grayish-blue": "hsl(228, 12%, 48%)",
          white: "hsl(0, 0%, 100%)",
        },
        // Profile Card Component
        pcc: {
          "dark-cyan": "hsl(185, 75%, 39%)",
          "very-dark-desaturated-blue": "hsl(229, 23%, 23%)",
          "dark-grayish-blue": "hsl(227, 10%, 46%)",
          "dark-gray": "hsl(0, 0%, 59%)",
          "off-white": "hsl(36, 100%, 99%)",
        },
        // Results Summary Component
        rsc: {
          red: {
            light: "hsl(0, 100%, 97%)",
            dark: "hsl(0, 100%, 67%)",
          },
          "orangey-yellow": {
            light: "hsl(39, 100%, 97%)",
            dark: "hsl(39, 100%, 56%)",
          },
          "green-teal": {
            light: "hsl(166, 100%, 97%)",
            dark: "hsl(166, 100%, 37%)",
          },
          "cobalt-blue": {
            light: "hsl(234, 85%, 97%)",
            dark: "hsl(234, 85%, 45%)",
          },
          "light-slate-blue": "hsl(252, 100%, 67%)",
          "light-royal-blue": "hsl(241, 81%, 54%)",
          "violet-blue": "hsla(256, 72%, 46%, 1)",
          "persian-blue": "hsla(241, 72%, 46%, 0)",
          "light-lavender": "hsl(241, 100%, 89%)",
          "dark-gray-blue": "hsl(224, 30%, 27%)",
        },
        // Time Tracking Dashboard
        ttd: {
          blue: "hsl(246, 80%, 60%)",
          "light-red-work": "hsl(15, 100%, 70%)",
          "soft-blue": "hsl(195, 74%, 62%)",
          "light-red-study": "hsl(348, 100%, 68%)",
          "lime-green": "hsl(145, 58%, 55%)",
          violet: "hsl(264, 64%, 52%)",
          "soft-orange": "hsl(43, 84%, 65%)",
          "very-dark-blue": "hsl(226, 43%, 10%)",
          "dark-blue": "hsl(235, 46%, 20%)",
          "desaturated-blue": "hsl(235, 45%, 61%)",
          "pale-blue": "hsl(236, 100%, 87%)",
        },
      },
      backgroundImage: {
        // Fylo Dark Theme Landing Page
        "fylo-desktop":
          "url('/frontend-mentor-challenges/fylo-dark-theme-landing-page/bg-curvy-desktop.svg')",
        "fylo-mobile":
          "url('/frontend-mentor-challenges/fylo-dark-theme-landing-page/bg-curvy-mobile.svg')",
        // Interactive Card Details Form
        "icd-card-back":
          "url(/frontend-mentor-challenges/interactive-card-details-form/bg-card-back.png)",
        "icd-card-front":
          "url(/frontend-mentor-challenges/interactive-card-details-form/bg-card-front.png)",
        "icd-main-desktop":
          "url(/frontend-mentor-challenges/interactive-card-details-form/bg-main-desktop.png)",
        "icd-main-mobile":
          "url(/frontend-mentor-challenges/interactive-card-details-form/bg-main-mobile.png)",
        // Launch Countdown Timer
        "lct-stars":
          "url('/frontend-mentor-challenges/launch-countdown-timer/bg-stars.svg')",
        "lct-pattern-hills":
          "url('/frontend-mentor-challenges/launch-countdown-timer/pattern-hills.svg')",
        // News Homepage
        "np-main-mobile":
          "url('/frontend-mentor-challenges/news-homepage/image-web-3-mobile.jpg')",
        "np-main-desktop":
          "url('/frontend-mentor-challenges/news-homepage/image-web-3-desktop.jpg')",
        "np-retro-pcs":
          "url('/frontend-mentor-challenges/news-homepage/image-retro-pcs.jpg')",
        "np-top-laptops":
          "url('/frontend-mentor-challenges/news-homepage/image-top-laptops.jpg')",
        "np-gaming-growth":
          "url('/frontend-mentor-challenges/news-homepage/image-gaming-growth.jpg')",
        // Pricing Component With Toggle
        "pct-image-top":
          "url('/frontend-mentor-challenges/pricing-component-with-toggle/bg-top.svg')",
        "pct-image-bottom":
          "url('/frontend-mentor-challenges/pricing-component-with-toggle/bg-bottom.svg')",
        // Profile Card Component
        "pcc-profile":
          "url('/frontend-mentor-challenges/profile-card-component/image-victor.jpg')",
        "pcc-pattern-top":
          "url('/frontend-mentor-challenges/profile-card-component/bg-pattern-top.svg')",
        "pcc-pattern-bottom":
          "url('/frontend-mentor-challenges/profile-card-component/bg-pattern-bottom.svg')",
        "pcc-card":
          "url('/frontend-mentor-challenges/profile-card-component/bg-pattern-card.svg')",
      },
      fontFamily: {
        sans: ["var(--font-open-sans)"],
        raleway: ["var(--font-raleway)"],
        "lexend-deca": ["var(--font-lexend-deca)"],
        "big-shoulders-display": ["var(--font-big-shoulders-display)"],
        poppins: ["var(--font-poppins)"],
        "dm-sans": ["var(--font-dm-sans)"],
        "space-grotesk": ["var(--font-space-grotesk)"],
        "red-hat-text": ["var(--font-red-hat-text)"],
        inter: ["var(--font-inter)"],
        montserrat: ["var(--font-montserrat)"],
        fraunces: ["var(--font-fraunces)"],
        "kumbh-sans": ["var(--font-kumbh-sans)"],
        "hanken-grotesk": ["var(--font-hanken-grotesk)"],
        rubik: ["var(--font-rubik)"],
        "bebas-neue": "var(--font-bebas-neue)",
      },
      keyframes: {
        "accordion-down": {
          from: { height: 0 },
          to: { height: "var(--radix-accordion-content-height)" },
        },
        "accordion-up": {
          from: { height: "var(--radix-accordion-content-height)" },
          to: { height: 0 },
        },
      },
      animation: {
        "accordion-down": "accordion-down 0.2s ease-out",
        "accordion-up": "accordion-up 0.2s ease-out",
      },
    },
  },
  safelist: [
    {
      pattern: /(text|bg)-(\w+)/,
    },
  ],
  plugins: [require("tailwindcss-animate")],
};
