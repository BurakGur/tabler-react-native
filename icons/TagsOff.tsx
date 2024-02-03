import * as React from "react";
import type { SVGProps } from "react";
const SvgTagsOff = ({
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
    className="icon icon-tabler icon-tabler-tags-off"
    {...props}
  >
    <path stroke="none" d="M0 0h24v24H0z" />
    <path d="m16.296 12.296-5.71-5.71M6 6H5a2 2 0 0 0-2 2v4.172a2 2 0 0 0 .586 1.414l5.71 5.71a2.41 2.41 0 0 0 3.408 0l3.278-3.278M18 19l.496-.496M20.384 16.367a4.82 4.82 0 0 0-.792-5.775L15 6M7 10h-.01M3 3l18 18" />
  </svg>
);
export default SvgTagsOff;
