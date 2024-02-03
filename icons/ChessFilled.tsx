import * as React from "react";
import type { SVGProps } from "react";
const SvgChessFilled = ({
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
    className="icon icon-tabler icon-tabler-chess-filled"
    {...props}
  >
    <path stroke="none" d="M0 0h24v24H0z" />
    <path
      fill="currentColor"
      stroke="none"
      d="M12 2a4 4 0 0 1 4 4 5 5 0 0 1-.438 2.001L16 8a1 1 0 0 1 .117 1.993L16 10h-1.263l1.24 5.79a1 1 0 0 1-.747 1.184l-.113.02L15 17H9a1 1 0 0 1-.996-1.093l.018-.117L9.262 10H8a1 1 0 0 1-.117-1.993L8 8h.438a5.2 5.2 0 0 1-.412-1.525l-.02-.259L8 6a4 4 0 0 1 4-4M18 18H6a1 1 0 0 0-1 1 2 2 0 0 0 2 2h10a2 2 0 0 0 1.987-1.768l.011-.174A1 1 0 0 0 18 18"
    />
  </svg>
);
export default SvgChessFilled;
