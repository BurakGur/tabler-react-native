import * as React from "react";
import type { SVGProps } from "react";
const SvgWorldCode = ({
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
    className="icon icon-tabler icon-tabler-world-code"
    {...props}
  >
    <path stroke="none" d="M0 0h24v24H0z" />
    <path d="M20.942 13.02a9 9 0 1 0-9.47 7.964M3.6 9h16.8M3.6 15h9.9" />
    <path d="M11.5 3a17 17 0 0 0 0 18M12.5 3c2 3.206 2.837 6.913 2.508 10.537M20 21l2-2-2-2M17 17l-2 2 2 2" />
  </svg>
);
export default SvgWorldCode;
