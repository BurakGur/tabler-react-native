import * as React from "react";
import type { SVGProps } from "react";
const SvgLivePhoto = ({
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
    className="icon icon-tabler icon-tabler-live-photo"
    {...props}
  >
    <path stroke="none" d="M0 0h24v24H0z" />
    <path d="M11 12a1 1 0 1 0 2 0 1 1 0 1 0-2 0" />
    <path d="M7 12a5 5 0 1 0 10 0 5 5 0 1 0-10 0M15.9 20.11v.01M19.04 17.61v.01M20.77 14v.01M20.77 10v.01M19.04 6.39v.01M15.9 3.89v.01M12 3v.01M8.1 3.89v.01M4.96 6.39v.01M3.23 10v.01M3.23 14v.01M4.96 17.61v.01M8.1 20.11v.01M12 21v.01" />
  </svg>
);
export default SvgLivePhoto;
