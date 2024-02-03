import * as React from "react";
import type { SVGProps } from "react";
const SvgGardenCartOff = ({
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
    className="icon icon-tabler icon-tabler-garden-cart-off"
    {...props}
  >
    <path stroke="none" d="M0 0h24v24H0z" />
    <path d="M15.733 15.732a2.5 2.5 0 1 0 3.544 3.527M6 8v11a1 1 0 0 0 1.806.591L11.5 14.5v.055" />
    <path d="M6 8h2m4 0h9l-3 6.01m-3.319.693-4.276-.45a4 4 0 0 1-3.296-2.493L4.256 4.63A1 1 0 0 0 3.328 4H2.005M3 3l18 18" />
  </svg>
);
export default SvgGardenCartOff;
