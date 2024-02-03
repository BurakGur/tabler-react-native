import * as React from "react";
import type { SVGProps } from "react";
const SvgPhotoOff = ({
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
    className="icon icon-tabler icon-tabler-photo-off"
    {...props}
  >
    <path stroke="none" d="M0 0h24v24H0z" />
    <path d="M15 8h.01M7 3h11a3 3 0 0 1 3 3v11m-.856 3.099A3 3 0 0 1 18 21H6a3 3 0 0 1-3-3V6c0-.845.349-1.608.91-2.153" />
    <path d="m3 16 5-5c.928-.893 2.072-.893 3 0l5 5M16.33 12.338c.574-.054 1.155.166 1.67.662l3 3M3 3l18 18" />
  </svg>
);
export default SvgPhotoOff;
