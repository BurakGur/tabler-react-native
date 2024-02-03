import * as React from "react";
import type { SVGProps } from "react";
const SvgFireExtinguisher = ({
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
    className="icon icon-tabler icon-tabler-fire-extinguisher"
    {...props}
  >
    <path stroke="none" d="M0 0h24v24H0z" />
    <path d="M12 7a4 4 0 0 1 4 4v9a1 1 0 0 1-1 1H9a1 1 0 0 1-1-1v-9a4 4 0 0 1 4-4M9 16h6M12 7V4M16 5l-4-1 4-1M12 4H9a3 3 0 0 0-3 3" />
  </svg>
);
export default SvgFireExtinguisher;
