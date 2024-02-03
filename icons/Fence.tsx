import * as React from "react";
import type { SVGProps } from "react";
const SvgFence = ({
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
    className="icon icon-tabler icon-tabler-fence"
    {...props}
  >
    <path stroke="none" d="M0 0h24v24H0z" />
    <path d="M4 12v4h16v-4zM6 16v4h4v-4m0-4V6L8 4 6 6v6M14 16v4h4v-4m0-4V6l-2-2-2 2v6" />
  </svg>
);
export default SvgFence;
