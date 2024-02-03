import * as React from "react";
import type { SVGProps } from "react";
const SvgEngineOff = ({
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
    className="icon icon-tabler icon-tabler-engine-off"
    {...props}
  >
    <path stroke="none" d="M0 0h24v24H0z" />
    <path d="M3 10v6M12 5v3M10 5h4M5 13H3M16 16h-1v2a1 1 0 0 1-1 1h-3.465a1 1 0 0 1-.832-.445L8 16H6v-6h2l.99-.99M12 8h1.382a1 1 0 0 1 .894.553l1.448 2.894a1 1 0 0 0 .894.553H18v-2h2a1 1 0 0 1 1 1v6M3 3l18 18" />
  </svg>
);
export default SvgEngineOff;
