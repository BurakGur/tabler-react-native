import * as React from "react";
import type { SVGProps } from "react";
const SvgPanoramaHorizontalOff = ({
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
    className="icon icon-tabler icon-tabler-panorama-horizontal-off"
    {...props}
  >
    <path stroke="none" d="M0 0h24v24H0z" />
    <path d="M10.95 6.952q4.352.225 8.705-1.42A1 1 0 0 1 21 6.466V17m-3.212.806q-6.724-1.922-13.449.622A.993.993 0 0 1 3 17.493V6.466a1 1 0 0 1 1.338-.935q.882.332 1.764.59M3 3l18 18" />
  </svg>
);
export default SvgPanoramaHorizontalOff;
