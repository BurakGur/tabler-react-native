import * as React from "react";
import type { SVGProps } from "react";
const SvgBucketOff = ({
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
    className="icon icon-tabler icon-tabler-bucket-off"
    {...props}
  >
    <path stroke="none" d="M0 0h24v24H0z" />
    <path d="M5.029 5.036C4.374 5.616 4 6.286 4 7c0 2.033 3.033 3.712 6.96 3.967m3.788-.21C17.812 10.198 20 8.728 20 7c0-2.21-3.582-4-8-4-1.605 0-3.1.236-4.352.643" />
    <path d="M4 7c0 .664.088 1.324.263 1.965L7 19c.5 1.5 2.239 2 5 2s4.5-.5 5-2q.15-.45.457-1.535m.862-3.146q.393-1.463 1.418-5.354A7.5 7.5 0 0 0 20 7M3 3l18 18" />
  </svg>
);
export default SvgBucketOff;
