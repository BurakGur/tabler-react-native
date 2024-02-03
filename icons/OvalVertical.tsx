import * as React from "react";
import type { SVGProps } from "react";
const SvgOvalVertical = ({
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
    className="icon icon-tabler icon-tabler-oval-vertical"
    {...props}
  >
    <path stroke="none" d="M0 0h24v24H0z" />
    <path d="M3 12c0-3.314 4.03-6 9-6s9 2.686 9 6-4.03 6-9 6-9-2.686-9-6" />
  </svg>
);
export default SvgOvalVertical;
