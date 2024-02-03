import * as React from "react";
import type { SVGProps } from "react";
const SvgDeviceLandlinePhone = ({
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
    className="icon icon-tabler icon-tabler-device-landline-phone"
    {...props}
  >
    <path stroke="none" d="M0 0h24v24H0z" />
    <path d="M20 3h-2a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h2a2 2 0 0 0 2-2V5a2 2 0 0 0-2-2M16 4H5a3 3 0 0 0-3 3v10a3 3 0 0 0 3 3h11" />
    <path d="M12 8H6v3h6zM12 14v.01M9 14v.01M6 14v.01M12 17v.01M9 17v.01M6 17v.01" />
  </svg>
);
export default SvgDeviceLandlinePhone;
