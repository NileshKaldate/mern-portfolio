import { ReactNode } from "react";

type SectionHeadingProps = {
  kicker: string;
  title: string;
  description?: ReactNode;
};

const SectionHeading = ({ kicker, title, description }: SectionHeadingProps) => {
  return (
    <div className="mb-10">
      <p className="text-sm font-semibold uppercase tracking-[0.2em] text-brand-400">
        {kicker}
      </p>
      <h2 className="mt-3 text-3xl font-semibold text-white md:text-4xl">{title}</h2>
      {description ? (
        <p className="mt-4 max-w-2xl text-base text-slate-300 md:text-lg">
          {description}
        </p>
      ) : null}
    </div>
  );
};

export default SectionHeading;
