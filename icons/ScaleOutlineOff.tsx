import * as React from "react";
import type { SVGProps } from "react";
const SvgScaleOutlineOff = ({
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
    className="icon icon-tabler icon-tabler-scale-outline-off"
    {...props}
  >
    <path stroke="none" d="M0 0h24v24H0z" />
    <path d="M7 3h10a4 4 0 0 1 4 4v10m-1.173 2.83A3.99 3.99 0 0 1 17 21H7a4 4 0 0 1-4-4V7c0-1.104.447-2.103 1.17-2.827" />
    <path d="M11.062 7.062Q11.527 7 12 7c1.956 0 3.724.802 5 2.095A143 143 0 0 0 15 11m-3.723.288a3 3 0 0 0-1.315.71L7.006 9.095a7 7 0 0 1 1.142-.942M3 3l18 18" />
  </svg>
);
export default SvgScaleOutlineOff;
