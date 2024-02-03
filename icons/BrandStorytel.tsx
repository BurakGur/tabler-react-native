import * as React from "react";
import type { SVGProps } from "react";
const SvgBrandStorytel = ({
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
    className="icon icon-tabler icon-tabler-brand-storytel"
    {...props}
  >
    <path stroke="none" d="M0 0h24v24H0z" />
    <path d="M4.103 22c2.292-2.933 16.825-2.43 16.825-11.538C20.928 4.164 15.954 2 12.477 2S3 5.036 3 13.241C3 19.615 4.103 22 4.103 22" />
  </svg>
);
export default SvgBrandStorytel;
