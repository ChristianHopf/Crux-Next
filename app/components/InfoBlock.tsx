import React from "react";

type Props = {
  title: string;
  children: React.ReactNode;
};

function InfoBlock({ title, children }: Props) {
  return (
    <div className="w-full max-w-3xl space-y-2">
      <h2 className="text-2xl md:text-3xl font-semibold">
        {title}
      </h2>
      {children}
    </div>
  );
}

export default InfoBlock;
