import * as React from "react";
import type { SVGProps } from "react";
const SvgVocabulary = ({
  size = 24,
  stroke = 2,
  ...props
}: {
  size: number,
  stroke: number,
  props: SVGProps,
}) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width={size}
    height={size}
    fill="none"
    stroke="currentColor"
    strokeLinecap="round"
    strokeLinejoin="round"
    strokeWidth={stroke}
    className="icon icon-tabler icon-tabler-vocabulary"
    {...props}
  >
    <path stroke="none" d="M0 0h24v24H0z" />
    <path d="M10 19H4a1 1 0 0 1-1-1V4a1 1 0 0 1 1-1h6a2 2 0 0 1 2 2 2 2 0 0 1 2-2h6a1 1 0 0 1 1 1v14a1 1 0 0 1-1 1h-6a2 2 0 0 0-2 2 2 2 0 0 0-2-2M12 5v16M7 7h1M7 11h1M16 7h1M16 11h1M16 15h1" />
  </svg>
);
export default SvgVocabulary;
