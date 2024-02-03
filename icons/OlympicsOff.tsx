import * as React from "react";
import type { SVGProps } from "react";
const SvgOlympicsOff = ({
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
    className="icon icon-tabler icon-tabler-olympics-off"
    {...props}
  >
    <path stroke="none" d="M0 0h24v24H0z" />
    <path d="M6 6a3 3 0 1 0 3 3M15 9a3 3 0 1 0 6 0 3 3 0 1 0-6 0" />
    <path d="M9 9a3 3 0 0 0 3 3m2.566-1.445a3 3 0 0 0-4.135-4.113M6 15a3 3 0 1 0 6 0 3 3 0 1 0-6 0" />
    <path d="M12.878 12.88a3 3 0 0 0 4.239 4.247m.586-3.431a3 3 0 0 0-1.43-1.414M3 3l18 18" />
  </svg>
);
export default SvgOlympicsOff;
