import * as React from "react";
import type { SVGProps } from "react";
const SvgSunElectricity = ({
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
    className="icon icon-tabler icon-tabler-sun-electricity"
    {...props}
  >
    <path stroke="none" d="M0 0h24v24H0z" />
    <path d="M8 12a4 4 0 0 0 4 4m0-8a4 4 0 0 0-4 4M3 12h1M12 3v1M12 20v1M5.6 5.6l.7.7M6.3 17.7l-.7.7M20 7l-3 5h4l-3 5" />
  </svg>
);
export default SvgSunElectricity;
