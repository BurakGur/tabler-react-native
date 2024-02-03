import * as React from "react";
import type { SVGProps } from "react";
const SvgBrandRedhat = ({
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
    className="icon icon-tabler icon-tabler-brand-redhat"
    {...props}
  >
    <path stroke="none" d="M0 0h24v24H0z" />
    <path d="m6 10.5 1.436-4c.318-.876.728-1.302 1.359-1.302.219 0 1.054.365 1.88.583.825.219.733-.329.908-.487s.355-.294.61-.294c.242 0 .553.048 1.692.448a20 20 0 0 1 2.204.922c1.175.582 1.426.913 1.595 1.507L18.5 12.5c2.086.898 3.5 2.357 3.5 3.682C22 17.867 20.8 20 16.043 20 9.837 20 2 15.958 2 12.68q0-1.565 4-2.18" />
    <path d="M6 10.5c0 .969 4.39 3.5 9.5 3.5 1.314 0 3 .063 3-1.5" />
  </svg>
);
export default SvgBrandRedhat;
