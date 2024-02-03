import * as React from "react";
import type { SVGProps } from "react";
const SvgBoxAlignLeft = ({
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
    className="icon icon-tabler icon-tabler-box-align-left"
    {...props}
  >
    <path stroke="none" d="M0 0h24v24H0z" />
    <path d="M10.002 20.003v-16h-5a1 1 0 0 0-1 1v14a1 1 0 0 0 1 1zM15.002 20.003h-.01M20.003 20.003h-.011M20.003 15.002h-.011M20.003 9.002h-.011M20.003 4.002h-.011M15.002 4.002h-.01" />
  </svg>
);
export default SvgBoxAlignLeft;
