import * as React from "react";
import type { SVGProps } from "react";
const SvgBrandComedyCentral = ({
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
    className="icon icon-tabler icon-tabler-brand-comedy-central"
    {...props}
  >
    <path stroke="none" d="M0 0h24v24H0z" />
    <path d="M5.343 17.657a8 8 0 1 0 0-11.314" />
    <path d="M13.828 9.172a4 4 0 1 0 0 5.656" />
  </svg>
);
export default SvgBrandComedyCentral;
