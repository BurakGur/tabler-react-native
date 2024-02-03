import * as React from "react";
import type { SVGProps } from "react";
const SvgPhotoEdit = ({
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
    className="icon icon-tabler icon-tabler-photo-edit"
    {...props}
  >
    <path stroke="none" d="M0 0h24v24H0z" />
    <path d="M15 8h.01M11 20H7a3 3 0 0 1-3-3V7a3 3 0 0 1 3-3h10a3 3 0 0 1 3 3v4" />
    <path d="m4 15 4-4c.928-.893 2.072-.893 3 0l3 3M14 14l1-1c.31-.298.644-.497.987-.596M18.42 15.61a2.1 2.1 0 0 1 2.97 2.97L18 22h-3v-3z" />
  </svg>
);
export default SvgPhotoEdit;
