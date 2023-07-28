import Link from "next/link";

const Mobile = () => {
  return (
    <nav className="flex flex-col items-center pt-10 space-y-8 sm:hidden">
      <Link href="/" className="text-3xl font-bebas-neue">
        Frontend Mentor Challenges
      </Link>
      <ul className="flex flex-col font-montserrat text-[0.9rem] font-medium space-y-2">
        <li>
          <Link className="link-item" href="/fylo-dark-theme-landing-page">
            <span className="text-fylo-blue">Fylo</span> Dark Theme Landing Page
          </Link>
        </li>
        <li>
          <Link className="link-item" href="/3-column-preview-card-component">
            3 <span className="text-3cpcc-very-dark-cyan">Column</span> Preview
            Card Component
          </Link>
        </li>
        <li>
          <Link className="link-item" href="/age-calculator-app">
            Age <span className="text-aca-purple">Calculator</span> App
          </Link>
        </li>
        <li>
          <Link className="link-item" href="/expenses-chart-component">
            Expenses <span className="text-ecc-soft-red">Chart</span> Component
          </Link>
        </li>
        <li>
          <Link className="link-item" href="/interactive-card-details-form">
            Interactive <span className="text-icc-very-dark-violet">Card</span>{" "}
            Details Form
          </Link>
        </li>
        <li>
          <Link className="link-item" href="/launch-countdown-timer">
            Launch{" "}
            <span className="text-lct-desaturated-blue-dark">Countdown</span>{" "}
            Timer
          </Link>
        </li>
        <li>
          <Link className="link-item" href="/news-homepage">
            <span className="text-np-soft-orange">News</span> Homepage
          </Link>
        </li>
        <li>
          <Link className="link-item" href="/pricing-component-with-toggle">
            Pricing Component With{" "}
            <span className="text-pct-lg-end">Toggle</span>
          </Link>
        </li>
        <li>
          <Link className="link-item" href="/product-preview-card-component">
            Product <span className="text-ppc-dark-cyan">Preview</span> Card
            Component
          </Link>
        </li>
        <li>
          <Link className="link-item" href="/profile-card-component">
            <span className="text-pcc-dark-cyan">Profile</span> Card Component
          </Link>
        </li>
        <li>
          <Link className="link-item" href="/results-summary-component">
            Results <span className="text-rsc-green-teal-dark">Summary</span>{" "}
            Component
          </Link>
        </li>
        <li>
          <Link className="link-item" href="/time-tracking-dashboard">
            Time Tracking <span className="text-ttd-violet">Dashboard</span>
          </Link>
        </li>
      </ul>
    </nav>
  );
};

export default Mobile;
