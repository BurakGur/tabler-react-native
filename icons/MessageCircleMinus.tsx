import * as React from "react";
import type { SVGProps } from "react";
const SvgMessageCircleMinus = ({
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
    className="icon icon-tabler icon-tabler-message-circle-minus"
    {...props}
  >
    <path stroke="none" d="M0 0h24v24H0z" />
    <path d="M12.023 19.98A9.9 9.9 0 0 1 7.7 19L3 20l1.3-3.9C1.976 12.663 2.874 8.228 6.4 5.726c3.526-2.501 8.59-2.296 11.845.48 2.718 2.319 3.473 5.832 2.096 8.811M16 19h6" />
  </svg>
);
export default SvgMessageCircleMinus;
