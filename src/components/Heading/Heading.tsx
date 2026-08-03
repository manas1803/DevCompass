import type { HeadingProps } from "./Heading.types";

function Heading({ title, subtitle }: HeadingProps) {
  return (
    <>
      <h1>{title}</h1>

      {subtitle && <p>{subtitle}</p>}
    </>
  );
}

export default Heading;
