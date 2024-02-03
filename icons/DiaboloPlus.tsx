import * as React from "react";
import type { SVGProps } from "react";
const SvgDiaboloPlus = ({
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
    className="icon icon-tabler icon-tabler-diabolo-plus"
    {...props}
  >
    <path stroke="none" d="M0 0h24v24H0z" />
    <path d="M4 6a8 3 0 1 0 16 0A8 3 0 1 0 4 6" />
    <path d="M4 6v.143a1 1 0 0 0 .048.307L6 12l-1.964 5.67a1 1 0 0 0-.036.265V18c0 1.657 3.582 3 8 3q.255 0 .508-.006M18 12l1.952-5.55A1 1 0 0 0 20 6.143V6" />
    <path d="M6 12c0 1.105 2.686 2 6 2s6-.895 6-2M16 19h6M19 16v6" />
  </svg>
);
export default SvgDiaboloPlus;
