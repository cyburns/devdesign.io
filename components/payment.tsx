import React from "react";

const priceCardData = [
  {
    title: "Standard",
    price: "$500",
    features: [
      "20 hours of work",
      "Available 10AM-4PM, M-F",
      "All AI features",
      "Use your own OpenAI key",
    ],
    buyLink: "https://buy.stripe.com/test_aEUaF5fOn4ye8BG289",
  },
  {
    title: "Extended",
    price: "$1,000",
    features: [
      "40 hours of work",
      "24/7 on-call support",
      "All AI features",
      "Use your own OpenAI key",
    ],
    buyLink: "https://buy.stripe.com/test_4gw00rgSr9SybNS8ww",
  },
];

export default function Payment() {
  return (
    <section className="flex items-center justify-center pb-10 mb-32">
      <div
        className="p-4 sm:px-10 flex flex-col justify-center items-center text-base h-100vh mx-auto"
        id="pricing"
      >
        <h2 className="font-medium mb-8 text-[5rem] uppercase">pricing</h2>
        <div className="isolate mx-auto grid max-w-md grid-cols-1 gap-8 lg:mx-0 lg:max-w-none lg:grid-cols-2 mt-10">
          {priceCardData.map((card, index) => (
            <PriceCard key={index} card={card} index={index} />
          ))}
        </div>
      </div>
    </section>
  );
}

const PriceCard = ({ card, index }: any) => {
  const isExtended = index === 1;

  const cardStyles = isExtended ? "ring-2 ring-blue-600" : null;

  const titleStyles = isExtended
    ? "hero-gradient-text"
    : "text-black dark:text-white";

  const buyButtonStyles = isExtended
    ? "bg-blue-600 text-white shadow-sm transition hover:bg-blue-500"
    : "text-black dark:text-white ring-1 ring-inset ring-black dark:ring-white hover:ring-blue-300 transition";

  const mostPopularBadge = isExtended ? (
    <p className="rounded-full gradient-background px-2.5 py-1 text-sm font-semibold leading-5 text-white">
      Most popular
    </p>
  ) : null;

  return (
    <div
      className={`rounded-3xl p-8 xl:p-10 ${cardStyles} bg-[#EFEFEF] dark:bg-[#161616]`}
    >
      <div className="flex items-center justify-between gap-x-4">
        <h3
          id={`tier-${card.title.toLowerCase()}`}
          className={`${titleStyles} text-4xl font-semibold leading-8`}
        >
          {card.title}
        </h3>
        {mostPopularBadge}
      </div>
      <p className="mt-4 text-base leading-6 text-black dark:text-white">
        {card.features[0]}
      </p>
      <div className="flex justify-center items-center">
        <p className="mt-6 flex items-baseline gap-x-1 text-center">
          <span className="text-5xl font-bold tracking-tight  text-center text-black dark:text-white">
            {card.price}
          </span>
        </p>
      </div>
      <a
        href={card.buyLink}
        aria-describedby={`tier-${card.title.toLowerCase()}`}
        className={`${buyButtonStyles} mt-6 block rounded-md py-2 px-3 text-center text-base font-medium leading-6 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-blue-600`}
        target="_blank"
        rel="noopener noreferrer"
      >
        Buy now
      </a>
      <ul
        role="list"
        className="mt-8 space-y-3 text-sm leading-6 text-gray-600 xl:mt-10"
      >
        {card.features.slice(1).map((feature: any, idx: number) => (
          <li
            key={idx}
            className="flex gap-x-3 text-base text-black dark:text-white"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth="1.5"
              stroke="currentColor"
              aria-hidden="true"
              className="h-6 w-5 flex-none text-blue-600"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M9 12.75L11.25 15 15 9.75M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
              ></path>
            </svg>
            {feature}
          </li>
        ))}
      </ul>
    </div>
  );
};
