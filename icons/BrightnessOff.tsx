import * as React from "react";
import type { SVGProps } from "react";
const SvgBrightnessOff = ({
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
    className="icon icon-tabler icon-tabler-brightness-off"
    {...props}
  >
    <path stroke="none" d="M0 0h24v24H0z" />
    <path d="M12 3v5m0 4v9M5.641 5.631A9 9 0 1 0 18.36 18.369m1.68-2.318A9 9 0 0 0 7.966 3.953M12.5 8.5l4.15-4.15M12 14l1.025-.983m2.065-1.981 4.28-4.106M12 19.6l3.79-3.79m2-2 3.054-3.054M3 3l18 18" />
  </svg>
);
export default SvgBrightnessOff;
