import * as React from "react";
import type { SVGProps } from "react";
const SvgCompass = ({
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
    className="icon icon-tabler icon-tabler-compass"
    {...props}
  >
    <path stroke="none" d="M0 0h24v24H0z" />
    <path d="m8 16 2-6 6-2-2 6z" />
    <path d="M3 12a9 9 0 1 0 18 0 9 9 0 1 0-18 0M12 3v2M12 19v2M3 12h2M19 12h2" />
  </svg>
);
export default SvgCompass;
