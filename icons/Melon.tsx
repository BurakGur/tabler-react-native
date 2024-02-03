import * as React from "react";
import type { SVGProps } from "react";
const SvgMelon = ({
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
    className="icon icon-tabler icon-tabler-melon"
    {...props}
  >
    <path stroke="none" d="M0 0h24v24H0z" />
    <path d="M20 10c0 5.523-4.477 10-10 10a9.97 9.97 0 0 1-6.984-2.842l4.343-4.153a4 4 0 0 0 5.76-5.51l4.342-4.153A9.96 9.96 0 0 1 20 10" />
  </svg>
);
export default SvgMelon;
