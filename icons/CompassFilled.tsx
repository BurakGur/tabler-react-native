import * as React from "react";
import type { SVGProps } from "react";
const SvgCompassFilled = ({
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
    className="icon icon-tabler icon-tabler-compass-filled"
    {...props}
  >
    <path stroke="none" d="M0 0h24v24H0z" />
    <path
      fill="currentColor"
      stroke="none"
      d="M17 3.34A10 10 0 1 1 2 12l.005-.324A10 10 0 0 1 17 3.34M12 18a1 1 0 1 0 0 2 1 1 0 0 0 0-2m3.684-10.949-6 2a1 1 0 0 0-.633.633L7.044 15.71l-.023.086-.017.113-.004.068v.044l.009.111.012.07.04.144.045.1.054.095.064.09.069.075.084.074.098.07.1.054.078.033.105.033.109.02.043.005.068.004h.044l.111-.009.07-.012.02-.006.019-.002.074-.022 6-2a1 1 0 0 0 .633-.633l2-6a1 1 0 0 0-1.265-1.265zM14.419 9.58l-1.21 3.629-3.629 1.21 1.21-3.629zM5 11a1 1 0 1 0 0 2 1 1 0 0 0 0-2m14 0a1 1 0 1 0 0 2 1 1 0 0 0 0-2m-7-7a1 1 0 1 0 0 2 1 1 0 0 0 0-2"
    />
  </svg>
);
export default SvgCompassFilled;
