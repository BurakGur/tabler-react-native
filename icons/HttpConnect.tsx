import * as React from "react";
import type { SVGProps } from "react";
const SvgHttpConnect = ({
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
    className="icon icon-tabler icon-tabler-http-connect"
    {...props}
  >
    <path stroke="none" d="M0 0h24v24H0z" />
    <path d="M7 10a2 2 0 1 0-4 0v4a2 2 0 1 0 4 0M17 16V8l4 8V8M12 8a2 2 0 0 1 2 2v4a2 2 0 1 1-4 0v-4a2 2 0 0 1 2-2" />
  </svg>
);
export default SvgHttpConnect;
