import * as React from "react";
import type { SVGProps } from "react";
const SvgAsterisk = ({
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
    className="icon icon-tabler icon-tabler-asterisk"
    {...props}
  >
    <path stroke="none" d="M0 0h24v24H0z" />
    <path d="m12 12 8-4.5M12 12v9M12 12 4 7.5M12 12l8 4.5M12 3v9M12 12l-8 4.5" />
  </svg>
);
export default SvgAsterisk;
