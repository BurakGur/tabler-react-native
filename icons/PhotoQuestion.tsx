import * as React from "react";
import type { SVGProps } from "react";
const SvgPhotoQuestion = ({
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
    className="icon icon-tabler icon-tabler-photo-question"
    {...props}
  >
    <path stroke="none" d="M0 0h24v24H0z" />
    <path d="M15 8h.01M15 21H6a3 3 0 0 1-3-3V6a3 3 0 0 1 3-3h12a3 3 0 0 1 3 3v5.5" />
    <path d="m3 16 5-5c.928-.893 2.072-.893 3 0l3 3M19 22v.01M19 19a2.003 2.003 0 0 0 .914-3.782 1.98 1.98 0 0 0-2.414.483" />
  </svg>
);
export default SvgPhotoQuestion;
