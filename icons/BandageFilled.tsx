import * as React from "react";
import type { SVGProps } from "react";
const SvgBandageFilled = ({
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
    className="icon icon-tabler icon-tabler-bandage-filled"
    {...props}
  >
    <path stroke="none" d="M0 0h24v24H0z" />
    <path
      fill="currentColor"
      stroke="none"
      d="M20.207 3.793a5.95 5.95 0 0 1 .179 8.228l-.179.186-8 8a5.95 5.95 0 0 1-8.593-8.228l.179-.186 8-8a5.95 5.95 0 0 1 8.414 0M12 13a1 1 0 0 0-1 1l.007.127A1 1 0 0 0 13 14.01l-.007-.127A1 1 0 0 0 12 13m2-2a1 1 0 0 0-1 1l.007.127A1 1 0 0 0 15 12.01l-.007-.127A1 1 0 0 0 14 11m-4 0a1 1 0 0 0-1 1l.007.127A1 1 0 0 0 11 12.01l-.007-.127A1 1 0 0 0 10 11m2-2a1 1 0 0 0-1 1l.007.127A1 1 0 0 0 13 10.01l-.007-.127A1 1 0 0 0 12 9"
    />
  </svg>
);
export default SvgBandageFilled;
