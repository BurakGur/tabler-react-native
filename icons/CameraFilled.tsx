import * as React from "react";
import type { SVGProps } from "react";
const SvgCameraFilled = ({
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
    className="icon icon-tabler icon-tabler-camera-filled"
    {...props}
  >
    <path stroke="none" d="M0 0h24v24H0z" />
    <path
      fill="currentColor"
      stroke="none"
      d="M15 3a2 2 0 0 1 1.995 1.85L17 5a1 1 0 0 0 .883.993L18 6h1a3 3 0 0 1 2.995 2.824L22 9v9a3 3 0 0 1-2.824 2.995L19 21H5a3 3 0 0 1-2.995-2.824L2 18V9a3 3 0 0 1 2.824-2.995L5 6h1a1 1 0 0 0 1-1 2 2 0 0 1 1.85-1.995L9 3zm-3 7a3 3 0 0 0-2.985 2.698l-.011.152L9 13l.004.15A3 3 0 1 0 12 10"
    />
  </svg>
);
export default SvgCameraFilled;
