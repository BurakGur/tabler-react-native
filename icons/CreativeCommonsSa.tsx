import * as React from "react";
import type { SVGProps } from "react";
const SvgCreativeCommonsSa = ({
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
    className="icon icon-tabler icon-tabler-creative-commons-sa"
    {...props}
  >
    <path stroke="none" d="M0 0h24v24H0z" />
    <path d="M3 12a9 9 0 1 0 18 0 9 9 0 1 0-18 0" />
    <path d="M12 16a4 4 0 1 0-4-4v1" />
    <path d="m6 12 2 2 2-2" />
  </svg>
);
export default SvgCreativeCommonsSa;
