import * as React from "react";
import type { SVGProps } from "react";
const SvgBrandPatreon = ({
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
    className="icon icon-tabler icon-tabler-brand-patreon"
    {...props}
  >
    <path stroke="none" d="M0 0h24v24H0z" />
    <path d="M20 8.408c-.003-2.299-1.746-4.182-3.79-4.862-2.54-.844-5.888-.722-8.312.453-2.939 1.425-3.862 4.545-3.896 7.656-.028 2.559.22 9.297 3.92 9.345 2.75.036 3.159-3.603 4.43-5.356.906-1.247 2.071-1.599 3.506-1.963 2.465-.627 4.146-2.626 4.142-5.273" />
  </svg>
);
export default SvgBrandPatreon;
