import * as React from "react";
import type { SVGProps } from "react";
const SvgRubberStampOff = ({
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
    className="icon icon-tabler icon-tabler-rubber-stamp-off"
    {...props}
  >
    <path stroke="none" d="M0 0h24v24H0z" />
    <path d="M8.273 8.273c.805 2.341 2.857 5.527-1.484 5.527C4.421 13.8 3 13.8 3 17.85h14.85M5 21h14M3 3l18 18M8.712 4.722A3.99 3.99 0 0 1 12 3a4 4 0 0 1 4 4c0 .992-.806 2.464-1.223 3.785m6.198 6.196c-.182-2.883-1.332-3.153-3.172-3.178" />
  </svg>
);
export default SvgRubberStampOff;
