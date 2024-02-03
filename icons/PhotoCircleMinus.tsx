import * as React from "react";
import type { SVGProps } from "react";
const SvgPhotoCircleMinus = ({
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
    className="icon icon-tabler icon-tabler-photo-circle-minus"
    {...props}
  >
    <path stroke="none" d="M0 0h24v24H0z" />
    <path d="M15 8h.01M20.475 15.035A9 9 0 0 0 12 3a9 9 0 0 0-9 9 9 9 0 0 0 9.525 8.985" />
    <path d="m4 15 4-4c.928-.893 2.072-.893 3 0l4 4" />
    <path d="m14 14 1-1c.928-.893 2.072-.893 3 0l2 2M16 19h6" />
  </svg>
);
export default SvgPhotoCircleMinus;
