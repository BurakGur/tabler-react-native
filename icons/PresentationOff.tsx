import * as React from "react";
import type { SVGProps } from "react";
const SvgPresentationOff = ({
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
    className="icon icon-tabler icon-tabler-presentation-off"
    {...props}
  >
    <path stroke="none" d="M0 0h24v24H0z" />
    <path d="M3 4h1m4 0h13M4 4v10a2 2 0 0 0 2 2h10m3.42-.592c.359-.362.58-.859.58-1.408V4M12 16v4M9 20h6M8 12l2-2m4 0 2-2M3 3l18 18" />
  </svg>
);
export default SvgPresentationOff;
