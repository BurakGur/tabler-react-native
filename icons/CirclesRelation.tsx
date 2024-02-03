import * as React from "react";
import type { SVGProps } from "react";
const SvgCirclesRelation = ({
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
    className="icon icon-tabler icon-tabler-circles-relation"
    {...props}
  >
    <path stroke="none" d="M0 0h24v24H0z" />
    <path d="M9.183 6.117a6 6 0 1 0 4.511 3.986" />
    <path d="M14.813 17.883a6 6 0 1 0-4.496-3.954" />
  </svg>
);
export default SvgCirclesRelation;
