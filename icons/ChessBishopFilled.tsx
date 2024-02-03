import * as React from "react";
import type { SVGProps } from "react";
const SvgChessBishopFilled = ({
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
    className="icon icon-tabler icon-tabler-chess-bishop-filled"
    {...props}
  >
    <path stroke="none" d="M0 0h24v24H0z" />
    <path
      fill="currentColor"
      stroke="none"
      d="M12 2a2 2 0 0 1 1.386 3.442q.969.42 1.74 1.017l-3.833 3.834-.083.094a1 1 0 0 0 1.403 1.403l.094-.083 3.814-3.813C17.498 9.244 18 10.964 18 13c0 1.913-1.178 3.722-3.089 3.973l-.2.02L14.5 17h-5C7.374 17 6 15.076 6 13c0-3.68 1.57-6.255 4.613-7.56A2 2 0 0 1 12 2M12 5v1M18 18H6a1 1 0 0 0-1 1 2 2 0 0 0 2 2h10a2 2 0 0 0 1.987-1.768l.011-.174A1 1 0 0 0 18 18"
    />
  </svg>
);
export default SvgChessBishopFilled;
