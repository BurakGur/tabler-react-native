import * as React from "react";
import type { SVGProps } from "react";
const SvgPhotoSquareRounded = ({
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
    className="icon icon-tabler icon-tabler-photo-square-rounded"
    {...props}
  >
    <path stroke="none" d="M0 0h24v24H0z" />
    <path d="M15 8h.01M12 3c7.2 0 9 1.8 9 9s-1.8 9-9 9-9-1.8-9-9 1.8-9 9-9" />
    <path d="M3.5 15.5 8 11c.928-.893 2.072-.893 3 0l5 5" />
    <path d="m14 14 1-1c.928-.893 2.072-.893 3 0l2.5 2.5" />
  </svg>
);
export default SvgPhotoSquareRounded;
