import * as React from "react";
import type { SVGProps } from "react";
const SvgBottleFilled = ({
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
    className="icon icon-tabler icon-tabler-bottle-filled"
    {...props}
  >
    <path stroke="none" d="M0 0h24v24H0z" />
    <path
      fill="currentColor"
      stroke="none"
      d="M13 1a2 2 0 0 1 1.995 1.85L15 3v.5c0 1.317.381 2.604 1.094 3.705l.17.25.05.072a9.1 9.1 0 0 1 1.68 4.92l.006.354V19a3 3 0 0 1-2.824 2.995L15 22H9a3 3 0 0 1-2.995-2.824L6 19v-6.2a9.1 9.1 0 0 1 1.486-4.982l.2-.292.05-.069A6.82 6.82 0 0 0 9 3.5V3a2 2 0 0 1 1.85-1.995L11 1zm.362 5h-2.724a8.8 8.8 0 0 1-1.08 2.334l-.194.284-.05.069a7.1 7.1 0 0 0-1.307 3.798l-.003.125A3.33 3.33 0 0 1 9.979 12a3.4 3.4 0 0 1 2.833 1.417c.27.375.706.593 1.209.583a1.4 1.4 0 0 0 1.166-.583 3.4 3.4 0 0 1 .81-.8L16 12.8c0-1.37-.396-2.707-1.137-3.852l-.228-.332A8.8 8.8 0 0 1 13.362 6"
    />
  </svg>
);
export default SvgBottleFilled;
