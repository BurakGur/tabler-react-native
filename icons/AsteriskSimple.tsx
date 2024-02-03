import * as React from "react";
import type { SVGProps } from "react";
const SvgAsteriskSimple = ({
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
    className="icon icon-tabler icon-tabler-asterisk-simple"
    {...props}
  >
    <path stroke="none" d="M0 0h24v24H0z" />
    <path d="M12 12V3M12 12 3 9.5M12 12l9-2.5M12 12l6 8.5M12 12l-6 8.5" />
  </svg>
);
export default SvgAsteriskSimple;
