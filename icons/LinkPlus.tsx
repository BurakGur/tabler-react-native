import * as React from "react";
import type { SVGProps } from "react";
const SvgLinkPlus = ({
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
    className="icon icon-tabler icon-tabler-link-plus"
    {...props}
  >
    <path stroke="none" d="M0 0h24v24H0z" />
    <path d="m9 15 6-6M11 6l.463-.536a5 5 0 0 1 7.072 0 4.993 4.993 0 0 1-.001 7.072M12.603 18.534a5.07 5.07 0 0 1-7.127 0 4.97 4.97 0 0 1 0-7.071L6 11M16 19h6M19 16v6" />
  </svg>
);
export default SvgLinkPlus;
