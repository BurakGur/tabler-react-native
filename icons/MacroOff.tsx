import * as React from "react";
import type { SVGProps } from "react";
const SvgMacroOff = ({
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
    className="icon icon-tabler icon-tabler-macro-off"
    {...props}
  >
    <path stroke="none" d="M0 0h24v24H0z" />
    <path d="M6 15a6 6 0 0 0 11.47 2.467" />
    <path d="M15.53 15.53A6 6 0 0 0 12 21" />
    <path d="M12 21a6 6 0 0 0-6-6M12 21V11M10.866 10.87a5.01 5.01 0 0 1-3.734-3.723M7 3l3 2 2-2 2 2 3-2v3a5 5 0 0 1-2.604 4.389M3 3l18 18" />
  </svg>
);
export default SvgMacroOff;
