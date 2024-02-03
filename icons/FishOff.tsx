import * as React from "react";
import type { SVGProps } from "react";
const SvgFishOff = ({
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
    className="icon icon-tabler icon-tabler-fish-off"
    {...props}
  >
    <path stroke="none" d="M0 0h24v24H0z" />
    <path d="M16.69 7.44a6.97 6.97 0 0 0-1.63 3.635" />
    <path d="M2 9.504c5.307 5.948 10.293 8.57 14.597 7.1m2.583-1.449c.988-.788 1.93-1.836 2.82-3.153-3-4.443-6.596-5.812-10.564-4.548M8.672 8.72C6.527 9.986 4.294 11.935 2 14.506M18 11v.01M11.153 11.169q-.43 1.166.347 2.331M3 3l18 18" />
  </svg>
);
export default SvgFishOff;
