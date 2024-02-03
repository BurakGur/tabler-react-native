import * as React from "react";
import type { SVGProps } from "react";
const SvgPhotoCirclePlus = ({
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
    className="icon icon-tabler icon-tabler-photo-circle-plus"
    {...props}
  >
    <path stroke="none" d="M0 0h24v24H0z" />
    <path d="M15 8h.01M20.964 12.806A9 9 0 0 0 12 3a9 9 0 0 0-9 9 9 9 0 0 0 9.397 8.991" />
    <path d="m4 15 4-4c.928-.893 2.072-.893 3 0l4 4" />
    <path d="m14 14 1-1c.928-.893 2.072-.893 3 0M16 19.33h6M19 16.33v6" />
  </svg>
);
export default SvgPhotoCirclePlus;
