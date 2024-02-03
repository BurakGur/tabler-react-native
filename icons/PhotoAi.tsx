import * as React from "react";
import type { SVGProps } from "react";
const SvgPhotoAi = ({
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
    className="icon icon-tabler icon-tabler-photo-ai"
    {...props}
  >
    <path stroke="none" d="M0 0h24v24H0z" />
    <path d="M15 8h.01M10 21H6a3 3 0 0 1-3-3V6a3 3 0 0 1 3-3h12a3 3 0 0 1 3 3v5" />
    <path d="m3 16 5-5c.928-.893 2.072-.893 3 0l1 1M14 21v-4a2 2 0 1 1 4 0v4M14 19h4M21 15v6" />
  </svg>
);
export default SvgPhotoAi;
