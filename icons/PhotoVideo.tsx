import * as React from "react";
import type { SVGProps } from "react";
const SvgPhotoVideo = ({
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
    className="icon icon-tabler icon-tabler-photo-video"
    {...props}
  >
    <path stroke="none" d="M0 0h24v24H0z" />
    <path d="M9 15H6a3 3 0 0 1-3-3V6a3 3 0 0 1 3-3h6a3 3 0 0 1 3 3v3" />
    <path d="M9 12a3 3 0 0 1 3-3h6a3 3 0 0 1 3 3v6a3 3 0 0 1-3 3h-6a3 3 0 0 1-3-3zM3 12l2.296-2.296a2.41 2.41 0 0 1 3.408 0L9 10" />
    <path d="M14 13.5v3l2.5-1.5zM7 6v.01" />
  </svg>
);
export default SvgPhotoVideo;
