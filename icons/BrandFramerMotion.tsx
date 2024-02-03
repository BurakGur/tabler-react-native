import * as React from "react";
import type { SVGProps } from "react";
const SvgBrandFramerMotion = ({
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
    className="icon icon-tabler icon-tabler-brand-framer-motion"
    {...props}
  >
    <path stroke="none" d="M0 0h24v24H0z" />
    <path d="M12 12 4 4v16L20 4v16l-4-4" />
    <path d="m20 12-8 8-4-4" />
  </svg>
);
export default SvgBrandFramerMotion;
