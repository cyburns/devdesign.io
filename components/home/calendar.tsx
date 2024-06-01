import React from "react";

const Calendar = () => {
  const index = 1;
  const isExtended = index === 1;

  const buyButtonStyles = isExtended
    ? "bg-blue-600 text-white shadow-sm transition hover:bg-blue-500"
    : "text-black dark:text-white ring-1 ring-inset ring-black dark:ring-white hover:ring-blue-300 transition";

  return (
    <div
      className={`rounded-3xl p-7 xl:p-10 bg-[#EFEFEF] dark:bg-[#161616] shadow-lg`}
    >
      <div className="flex items-center justify-between gap-x-4">
        <p className="rounded-full gradient-background px-2.5 py-1 text-sm font-semibold leading-5 text-white">
          Still available
        </p>
      </div>
      <p className="mt-4 text-3xl leading-[1.5] text-black dark:text-white">
        Join the{" "}
        <span className="hero-gradient-text font-bold capitalize italic">
          {" "}
          BRIGHT{" "}
        </span>
        team for a{" "}
        <span className="font-bold italic">
          <br />
          30 minute call <br />
        </span>{" "}
        to discuss your project and ask any questions.
      </p>

      <a
        href={"https://calendly.com/cyrusburns/30min"}
        aria-describedby={`tier-join-now`}
        className={`${buyButtonStyles} mt-6 block rounded-md py-2 px-3 text-center text-base font-medium leading-6 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-blue-600`}
        target="_blank"
        rel="noopener noreferrer"
      >
        Book a call
      </a>
    </div>
  );
};

export default Calendar;
