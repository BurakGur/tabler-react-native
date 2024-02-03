import * as React from "react";
import type { SVGProps } from "react";
const SvgDogBowl = ({
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
    className="icon icon-tabler icon-tabler-dog-bowl"
    {...props}
  >
    <path stroke="none" d="M0 0h24v24H0z" />
    <path d="m10 15 5.586-5.585A2 2 0 1 1 19 8a2 2 0 1 1-1.413 3.414L14 15" />
    <path d="M12 13 8.414 9.415A2 2 0 1 0 5 8a2 2 0 1 0 1.413 3.414L10 15M3 20h18c-.175-1.671-.046-3.345-2-5H5q-2 1.5-2 5" />
  </svg>
);
export default SvgDogBowl;
