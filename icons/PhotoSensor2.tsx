import * as React from "react";
import type { SVGProps } from "react";
const SvgPhotoSensor2 = ({
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
    className="icon icon-tabler icon-tabler-photo-sensor-2"
    {...props}
  >
    <path stroke="none" d="M0 0h24v24H0z" />
    <path d="M17 5h2a2 2 0 0 1 2 2v10a2 2 0 0 1-2 2h-2M7 19H5a2 2 0 0 1-2-2V7a2 2 0 0 1 2-2h2M8 12a4 4 0 1 0 8 0 4 4 0 1 0-8 0" />
  </svg>
);
export default SvgPhotoSensor2;
