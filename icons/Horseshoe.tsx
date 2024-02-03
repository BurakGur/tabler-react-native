import * as React from "react";
import type { SVGProps } from "react";
const SvgHorseshoe = ({
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
    className="icon icon-tabler icon-tabler-horseshoe"
    {...props}
  >
    <path stroke="none" d="M0 0h24v24H0z" />
    <path d="M19 17c.5-1.242 2-2 2-5s-1-9-9-9-9 6-9 9 1.495 3.749 2 5l-2 1 2 3 2.406-1.147c1.25-.714 1.778-2.08 1.203-3.363C7.531 14.083 7 8 12 8s4.469 6.083 3.39 8.49c-.574 1.284-.045 2.649 1.204 3.363L19 21l2-3z" />
  </svg>
);
export default SvgHorseshoe;
