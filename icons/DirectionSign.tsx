import * as React from "react";
import type { SVGProps } from "react";
const SvgDirectionSign = ({
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
    className="icon icon-tabler icon-tabler-direction-sign"
    {...props}
  >
    <path stroke="none" d="M0 0h24v24H0z" />
    <path d="m3.32 12.774 7.906 7.905c.427.428 1.12.428 1.548 0l7.905-7.905a1.095 1.095 0 0 0 0-1.548l-7.905-7.905a1.095 1.095 0 0 0-1.548 0l-7.905 7.905a1.095 1.095 0 0 0 0 1.548zM8 12h7.5" />
    <path d="m12 8.5 3.5 3.5-3.5 3.5" />
  </svg>
);
export default SvgDirectionSign;
