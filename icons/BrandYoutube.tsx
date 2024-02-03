import * as React from "react";
import type { SVGProps } from "react";
const SvgBrandYoutube = ({
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
    className="icon icon-tabler icon-tabler-brand-youtube"
    {...props}
  >
    <path stroke="none" d="M0 0h24v24H0z" />
    <path d="M2 8a4 4 0 0 1 4-4h12a4 4 0 0 1 4 4v8a4 4 0 0 1-4 4H6a4 4 0 0 1-4-4z" />
    <path d="m10 9 5 3-5 3z" />
  </svg>
);
export default SvgBrandYoutube;
