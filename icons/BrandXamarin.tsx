import * as React from "react";
import type { SVGProps } from "react";
const SvgBrandXamarin = ({
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
    className="icon icon-tabler icon-tabler-brand-xamarin"
    {...props}
  >
    <path stroke="none" d="M0 0h24v24H0z" />
    <path d="M15.958 21H8.041a2 2 0 0 1-1.732-1l-4.041-7a2 2 0 0 1 0-2l4.041-7a2 2 0 0 1 1.732-1h7.917a2 2 0 0 1 1.732 1l4.042 7a2 2 0 0 1 0 2l-4.041 7a2 2 0 0 1-1.733 1M15 16 9 8M9 16l6-8" />
  </svg>
);
export default SvgBrandXamarin;
