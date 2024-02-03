import * as React from "react";
import type { SVGProps } from "react";
const SvgWorldUp = ({
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
    className="icon icon-tabler icon-tabler-world-up"
    {...props}
  >
    <path stroke="none" d="M0 0h24v24H0z" />
    <path d="M20.985 12.52a9 9 0 1 0-8.451 8.463M3.6 9h16.8M3.6 15h10.9" />
    <path d="M11.5 3a17 17 0 0 0 0 18M12.5 3a17 17 0 0 1 2.391 11.512M19 22v-6M22 19l-3-3-3 3" />
  </svg>
);
export default SvgWorldUp;
