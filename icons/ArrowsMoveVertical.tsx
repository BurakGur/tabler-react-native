import * as React from "react";
import type { SVGProps } from "react";
const SvgArrowsMoveVertical = ({
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
    className="icon icon-tabler icon-tabler-arrows-move-vertical"
    {...props}
  >
    <path stroke="none" d="M0 0h24v24H0z" />
    <path d="m9 18 3 3 3-3M12 15v6M15 6l-3-3-3 3M12 3v6" />
  </svg>
);
export default SvgArrowsMoveVertical;
