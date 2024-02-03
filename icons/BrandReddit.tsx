import * as React from "react";
import type { SVGProps } from "react";
const SvgBrandReddit = ({
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
    className="icon icon-tabler icon-tabler-brand-reddit"
    {...props}
  >
    <path stroke="none" d="M0 0h24v24H0z" />
    <path d="M12 8c2.648 0 5.028.826 6.675 2.14a2.5 2.5 0 0 1 2.326 4.36c0 3.59-4.03 6.5-9 6.5-4.875 0-8.845-2.8-9-6.294l-1-.206a2.5 2.5 0 0 1 2.326-4.36C5.973 8.827 8.353 8 11.001 8zM12 8l1-5 6 1" />
    <path d="M18 4a1 1 0 1 0 2 0 1 1 0 1 0-2 0" />
    <circle cx={9} cy={13} r={0.5} fill="currentColor" />
    <circle cx={15} cy={13} r={0.5} fill="currentColor" />
    <path d="M10 17q1 .5 2 .5c1 0 1.333-.167 2-.5" />
  </svg>
);
export default SvgBrandReddit;
