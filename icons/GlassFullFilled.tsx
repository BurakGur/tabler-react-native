import * as React from "react";
import type { SVGProps } from "react";
const SvgGlassFullFilled = ({
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
    className="icon icon-tabler icon-tabler-glass-full-filled"
    {...props}
  >
    <path stroke="none" d="M0 0h24v24H0z" />
    <path
      fill="currentColor"
      stroke="none"
      d="m5.004 10.229-.003-.186.001-.113.008-.071 1-7a1 1 0 0 1 .877-.853L7 2h10a1 1 0 0 1 .968.747l.022.112 1.006 7.05L19 10c0 3.226-2.56 5.564-6 5.945V20h3a1 1 0 0 1 .117 1.993L16 22H8a1 1 0 0 1-.117-1.993L8 20h3v-4.055c-3.358-.371-5.878-2.609-5.996-5.716M16.133 4H7.866l-.607 4.258a6 6 0 0 1 5.125.787l.216.155a4 4 0 0 0 4.32.31z"
    />
  </svg>
);
export default SvgGlassFullFilled;
