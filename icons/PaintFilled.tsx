import * as React from "react";
import type { SVGProps } from "react";
const SvgPaintFilled = ({
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
    className="icon icon-tabler icon-tabler-paint-filled"
    {...props}
  >
    <path stroke="none" d="M0 0h24v24H0z" />
    <path
      fill="currentColor"
      stroke="none"
      d="M17 2a3 3 0 0 1 2.995 2.824L20 5a3 3 0 0 1 3 3 6 6 0 0 1-5.775 5.996L17 14h-4l.15.005a2 2 0 0 1 1.844 1.838L15 16v4a2 2 0 0 1-1.85 1.995L13 22h-2a2 2 0 0 1-1.995-1.85L9 20v-4a2 2 0 0 1 1.85-1.995L11 14v-1a1 1 0 0 1 .883-.993L12 12h5a4 4 0 0 0 4-4 1 1 0 0 0-.883-.993L20 7l-.005.176a3 3 0 0 1-2.819 2.819L17 10H7a3 3 0 0 1-2.995-2.824L4 7V5a3 3 0 0 1 2.824-2.995L7 2z"
    />
  </svg>
);
export default SvgPaintFilled;
