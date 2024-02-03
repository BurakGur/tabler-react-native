import * as React from "react";
import type { SVGProps } from "react";
const SvgNavigationTop = ({
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
    className="icon icon-tabler icon-tabler-navigation-top"
    {...props}
  >
    <path stroke="none" d="M0 0h24v24H0z" />
    <path d="M16.54 19.977a.34.34 0 0 0 .357-.07.33.33 0 0 0 .084-.35L12 9 7.018 19.557a.33.33 0 0 0 .084.35.34.34 0 0 0 .357.07L12 18.5zM12 3v2" />
  </svg>
);
export default SvgNavigationTop;
