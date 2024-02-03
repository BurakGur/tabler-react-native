import * as React from "react";
import type { SVGProps } from "react";
const SvgAnkh = ({
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
    className="icon icon-tabler icon-tabler-ankh"
    {...props}
  >
    <path stroke="none" d="M0 0h24v24H0z" />
    <path d="M6 13h12M12 21v-8l-.422-.211A6.47 6.47 0 0 1 8 7a4 4 0 1 1 8 0 6.47 6.47 0 0 1-3.578 5.789L12 13" />
  </svg>
);
export default SvgAnkh;
