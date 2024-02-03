import * as React from "react";
import type { SVGProps } from "react";
const SvgPrism = ({
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
    className="icon icon-tabler icon-tabler-prism"
    {...props}
  >
    <path stroke="none" d="M0 0h24v24H0z" />
    <path d="M12 9v13M19 17.17l-5.98 4.485a1.7 1.7 0 0 1-2.04 0L5 17.17a2.5 2.5 0 0 1-1-2V4a1 1 0 0 1 1-1h14a1 1 0 0 1 1 1v11.17a2.5 2.5 0 0 1-1 2" />
    <path d="m4.3 3.3 6.655 5.186a1.7 1.7 0 0 0 2.09 0L19.7 3.3" />
  </svg>
);
export default SvgPrism;
