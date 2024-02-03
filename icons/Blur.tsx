import * as React from "react";
import type { SVGProps } from "react";
const SvgBlur = ({
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
    className="icon icon-tabler icon-tabler-blur"
    {...props}
  >
    <path stroke="none" d="M0 0h24v24H0z" />
    <path d="M12 21a9 9 0 0 0 2.32-.302 9 9 0 0 0 1.74-16.733A9 9 0 1 0 12 21M12 3v17M12 12h9M12 9h8M12 6h6M12 18h6M12 15h8" />
  </svg>
);
export default SvgBlur;
