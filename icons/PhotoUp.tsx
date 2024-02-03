import * as React from "react";
import type { SVGProps } from "react";
const SvgPhotoUp = ({
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
    className="icon icon-tabler icon-tabler-photo-up"
    {...props}
  >
    <path stroke="none" d="M0 0h24v24H0z" />
    <path d="M15 8h.01M12.5 21H6a3 3 0 0 1-3-3V6a3 3 0 0 1 3-3h12a3 3 0 0 1 3 3v6.5" />
    <path d="m3 16 5-5c.928-.893 2.072-.893 3 0l3.5 3.5" />
    <path d="m14 14 1-1c.679-.653 1.473-.829 2.214-.526M19 22v-6M22 19l-3-3-3 3" />
  </svg>
);
export default SvgPhotoUp;
