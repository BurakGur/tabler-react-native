import * as React from "react";
import type { SVGProps } from "react";
const SvgAlpha = ({
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
    className="icon icon-tabler icon-tabler-alpha"
    {...props}
  >
    <path stroke="none" d="M0 0h24v24H0z" />
    <path d="M18.1 6q-1.65 4.37-2.4 6c-1.879 4.088-3.713 6-6 6-2.4 0-4.8-2.4-4.8-6s2.4-6 4.8-6c2.267 0 4.135 1.986 6 6q.768 1.653 2.4 6" />
  </svg>
);
export default SvgAlpha;
