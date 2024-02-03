import * as React from "react";
import type { SVGProps } from "react";
const Svg3DCubeSphereOff = ({
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
    className="icon icon-tabler icon-tabler-3d-cube-sphere-off"
    {...props}
  >
    <path stroke="none" d="M0 0h24v24H0z" />
    <path d="m6 17.6-2-1.1V14M4 10V7.5l2-1.1M10 4.1 12 3l2 1.1M18 6.4l2 1.1V10M20 14v2M14 19.9 12 21l-2-1.1M18 8.6l2-1.1M12 12v2.5M12 18.5V21M12 12l-2-1.12M6 8.6 4 7.5M3 3l18 18" />
  </svg>
);
export default Svg3DCubeSphereOff;
