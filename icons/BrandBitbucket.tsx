import * as React from "react";
import type { SVGProps } from "react";
const SvgBrandBitbucket = ({
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
    className="icon icon-tabler icon-tabler-brand-bitbucket"
    {...props}
  >
    <path stroke="none" d="M0 0h24v24H0z" />
    <path d="M3.648 4a.64.64 0 0 0-.64.744l3.14 14.528c.07.417.43.724.852.728h10a.644.644 0 0 0 .642-.539l3.35-14.71a.64.64 0 0 0-.64-.744z" />
    <path d="M14 15h-4L9 9h6z" />
  </svg>
);
export default SvgBrandBitbucket;
