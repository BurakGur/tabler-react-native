import * as React from "react";
import type { SVGProps } from "react";
const SvgMoodAnnoyed = ({
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
    className="icon icon-tabler icon-tabler-mood-annoyed"
    {...props}
  >
    <path stroke="none" d="M0 0h24v24H0z" />
    <path d="M12 21a9 9 0 1 1 0-18 9 9 0 0 1 0 18" />
    <path d="M15 14c-2 0-3 1-3.5 2.05M9 10h-.01M15 10h-.01" />
  </svg>
);
export default SvgMoodAnnoyed;
