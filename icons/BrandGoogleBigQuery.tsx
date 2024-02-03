import * as React from "react";
import type { SVGProps } from "react";
const SvgBrandGoogleBigQuery = ({
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
    className="icon icon-tabler icon-tabler-brand-google-big-query"
    {...props}
  >
    <path stroke="none" d="M0 0h24v24H0z" />
    <path d="M17.73 19.875A2.23 2.23 0 0 1 15.782 21H8.499a2.22 2.22 0 0 1-1.947-1.158l-4.272-6.75a2.27 2.27 0 0 1 0-2.184l4.272-6.75A2.23 2.23 0 0 1 8.498 3h7.285c.809 0 1.554.443 1.947 1.158l3.98 6.75a2.33 2.33 0 0 1 0 2.25l-3.98 6.75z" />
    <path d="M8 11.5a3.5 3.5 0 1 0 7 0 3.5 3.5 0 1 0-7 0M14 14l2 2" />
  </svg>
);
export default SvgBrandGoogleBigQuery;
