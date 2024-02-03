import * as React from "react";
import type { SVGProps } from "react";
const SvgHelpOff = ({
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
    className="icon icon-tabler icon-tabler-help-off"
    {...props}
  >
    <path stroke="none" d="M0 0h24v24H0z" />
    <path d="M5.641 5.631A9 9 0 1 0 18.36 18.369m1.68-2.318A9 9 0 0 0 7.966 3.953M12 17v.01" />
    <path d="M12 13.5a1.5 1.5 0 0 1 .394-1.1m2.106-1.9a2.6 2.6 0 0 0-3.347-3.361M3 3l18 18" />
  </svg>
);
export default SvgHelpOff;
