import * as React from "react";
import type { SVGProps } from "react";
const SvgBowlFilled = ({
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
    className="icon icon-tabler icon-tabler-bowl-filled"
    {...props}
  >
    <path stroke="none" d="M0 0h24v24H0z" />
    <path
      fill="currentColor"
      stroke="none"
      d="M20 7H4a2 2 0 0 0-2 2v.5l.007.18c.134 1.806 2.169 5.275 3.928 6.771l.065.053V17a2 2 0 0 0 2 2h8l.15-.005A2 2 0 0 0 18 17v-.504l.017-.013C19.753 14.989 22 11.194 22 9.5V9a2 2 0 0 0-2-2"
    />
  </svg>
);
export default SvgBowlFilled;
