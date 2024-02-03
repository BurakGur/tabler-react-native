import * as React from "react";
import type { SVGProps } from "react";
const SvgBrandToyota = ({
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
    className="icon icon-tabler icon-tabler-brand-toyota"
    {...props}
  >
    <path stroke="none" d="M0 0h24v24H0z" />
    <path d="M2 12a10 7 0 1 0 20 0 10 7 0 1 0-20 0" />
    <path d="M9 12c0 3.866 1.343 7 3 7s3-3.134 3-7-1.343-7-3-7-3 3.134-3 7" />
    <path d="M6.415 6.191C5.527 6.694 5 7.321 5 8c0 1.657 3.134 3 7 3s7-1.343 7-3c0-.678-.525-1.304-1.41-1.806" />
  </svg>
);
export default SvgBrandToyota;
