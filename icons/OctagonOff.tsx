import * as React from "react";
import type { SVGProps } from "react";
const SvgOctagonOff = ({
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
    className="icon icon-tabler icon-tabler-octagon-off"
    {...props}
  >
    <path stroke="none" d="M0 0h24v24H0z" />
    <path d="M19.027 19.002a2 2 0 0 1-.65.444l-5.575 2.39a2.04 2.04 0 0 1-1.604 0l-5.575-2.39a2.04 2.04 0 0 1-1.07-1.07l-2.388-5.574a2.04 2.04 0 0 1 0-1.604l2.389-5.575c.103-.24.25-.457.433-.639m2.689-1.31 3.522-1.51a2.04 2.04 0 0 1 1.604 0l5.575 2.39c.48.206.863.589 1.07 1.07l2.388 5.574c.22.512.22 1.092 0 1.604l-1.509 3.522M3 3l18 18" />
  </svg>
);
export default SvgOctagonOff;
