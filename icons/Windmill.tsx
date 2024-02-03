import * as React from "react";
import type { SVGProps } from "react";
const SvgWindmill = ({
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
    className="icon icon-tabler icon-tabler-windmill"
    {...props}
  >
    <path stroke="none" d="M0 0h24v24H0z" />
    <path d="M12 12c2.76 0 5-2.01 5-4.5S14.76 3 12 3zM12 12c0 2.76 2.01 5 4.5 5s4.5-2.24 4.5-5zM12 12c-2.76 0-5 2.01-5 4.5S9.24 21 12 21zM12 12c0-2.76-2.01-5-4.5-5S3 9.24 3 12z" />
  </svg>
);
export default SvgWindmill;
