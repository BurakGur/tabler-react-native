import * as React from "react";
import type { SVGProps } from "react";
const SvgComponentsOff = ({
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
    className="icon icon-tabler icon-tabler-components-off"
    {...props}
  >
    <path stroke="none" d="M0 0h24v24H0z" />
    <path d="m3 12 3 3 3-3-3-3zM18.5 14.5 21 12l-3-3-2.5 2.5M12.499 8.501 15 6l-3-3-2.5 2.5M9 18l3 3 3-3-3-3zM3 3l18 18" />
  </svg>
);
export default SvgComponentsOff;
