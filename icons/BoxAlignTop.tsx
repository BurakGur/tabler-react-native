import * as React from "react";
import type { SVGProps } from "react";
const SvgBoxAlignTop = ({
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
    className="icon icon-tabler icon-tabler-box-align-top"
    {...props}
  >
    <path stroke="none" d="M0 0h24v24H0z" />
    <path d="M4 10.005h16v-5a1 1 0 0 0-1-1H5a1 1 0 0 0-1 1zM4 15.005v-.01M4 20.005v-.01M9 20.005v-.01M15 20.005v-.01M20 20.005v-.01M20 15.005v-.01" />
  </svg>
);
export default SvgBoxAlignTop;
