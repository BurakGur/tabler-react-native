import * as React from "react";
import type { SVGProps } from "react";
const SvgMessage2Up = ({
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
    className="icon icon-tabler icon-tabler-message-2-up"
    {...props}
  >
    <path stroke="none" d="M0 0h24v24H0z" />
    <path d="M8 9h8M8 13h6M12.354 20.646 12 21l-3-3H6a3 3 0 0 1-3-3V7a3 3 0 0 1 3-3h12a3 3 0 0 1 3 3v5.5M19 22v-6M22 19l-3-3-3 3" />
  </svg>
);
export default SvgMessage2Up;
