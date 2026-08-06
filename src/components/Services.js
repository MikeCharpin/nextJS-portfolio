import React from "react";
import AnimatedText from "@/components/AnimatedText";
import Link from "next/link";

const tiers = [
  {
    name: "Concept Sprint",
    description:
      "Get from idea to a feasible, fundable concept in weeks, not months. Sketch concepts, feasibility check, and a basic 3D model.",
    timeline: "2–3 weeks",
  },
  {
    name: "Prototype to Production",
    description:
      "A fully engineered, manufacturable prototype ready for your next round or your first production run. Full CAD, DFM, and a working functional prototype.",
    timeline: "6–12 weeks",
  },
  {
    name: "Embedded Design Partner",
    description:
      "Ongoing design leadership for teams that need a senior designer without a full-time hire. Monthly retainer, scoped to your roadmap.",
    timeline: "Monthly",
  },
];

const Services = () => {
  return (
    <div className="my-16 px-4">
      <AnimatedText
        text={"Services"}
        classname="pb-4 !text-5xl md:!text-4xl sm:!text-3xl"
      />
      <p className="text-center max-w-2xl mx-auto pb-8 text-base font-medium md:text-sm sm:text-xs">
        A small number of engagements at a time. Every project starts with a
        conversation about your product, not a quote.
      </p>
      <div className="grid grid-cols-3 gap-6 lg:grid-cols-1">
        {tiers.map((tier) => (
          <div
            key={tier.name}
            className="flex flex-col justify-between p-6 rounded-2xl border-2 border-solid border-dark dark:border-light"
          >
            <div>
              <h3 className="text-2xl font-bold mb-2 sm:text-xl">
                {tier.name}
              </h3>
              <p className="text-sm font-medium mb-4">{tier.description}</p>
            </div>
            <span className="text-xs font-semibold uppercase tracking-wide text-dark/60 dark:text-light/60">
              {tier.timeline}
            </span>
          </div>
        ))}
      </div>
      <div className="flex justify-center mt-8">
        <Link
          href="mailto:Michael.Charpin@gmail.com"
          target={"_blank"}
          className="flex items-center bg-dark text-light p-2.5 px-6 rounded-lg text-lg font-semibold
          hover:bg-light hover:text-dark hover:border-dark border-2 border-solid border-transparent
          dark:text-dark dark:bg-light hover:dark:bg-dark hover:dark:text-light hover:dark:border-light
          md:p-2 md:px-4 md:text-base"
        >
          Start a conversation
        </Link>
      </div>
    </div>
  );
};

export default Services;
