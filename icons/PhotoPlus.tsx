import * as React from "react";
import type { SVGProps } from "react";
const SvgPhotoPlus = ({
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
    className="icon icon-tabler icon-tabler-photo-plus"
    {...props}
  >
    <path stroke="none" d="M0 0h24v24H0z" />
    <path d="M15 8h.01M12.5 21H6a3 3 0 0 1-3-3V6a3 3 0 0 1 3-3h12a3 3 0 0 1 3 3v6.5" />
    <path d="m3 16 5-5c.928-.893 2.072-.893 3 0l4 4" />
    <path d="m14 14 1-1c.67-.644 1.45-.824 2.182-.54M16 19h6M19 16v6" />
  </svg>
);
export default SvgPhotoPlus;
