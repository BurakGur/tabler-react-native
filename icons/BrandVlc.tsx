import * as React from "react";
import type { SVGProps } from "react";
const SvgBrandVlc = ({
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
    className="icon icon-tabler icon-tabler-brand-vlc"
    {...props}
  >
    <path stroke="none" d="M0 0h24v24H0z" />
    <path d="m13.79 4.337 3.101 9.305c.33.985-.113 2.07-1.02 2.499a9.15 9.15 0 0 1-7.742 0c-.907-.428-1.35-1.514-1.02-2.499l3.1-9.305C10.476 3.537 11.194 3 12 3c.807 0 1.525.537 1.79 1.337" />
    <path d="M7 14H5.571a2 2 0 0 0-1.923 1.45l-.571 2A2 2 0 0 0 5 20h13.998a2 2 0 0 0 1.923-2.55l-.572-2A2 2 0 0 0 18.426 14H17" />
  </svg>
);
export default SvgBrandVlc;
