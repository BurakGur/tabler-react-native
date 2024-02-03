import * as React from "react";
import type { SVGProps } from "react";
const SvgExposurePlus2 = ({
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
    className="icon icon-tabler icon-tabler-exposure-plus-2"
    {...props}
  >
    <path stroke="none" d="M0 0h24v24H0z" />
    <path d="M12 9a4 4 0 1 1 8 0c0 1.098-.564 2.025-1.159 2.815L12 19h8M3 12h6M6 9v6" />
  </svg>
);
export default SvgExposurePlus2;
