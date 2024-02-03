import * as React from "react";
import type { SVGProps } from "react";
const SvgDevicesHeart = ({
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
    className="icon icon-tabler icon-tabler-devices-heart"
    {...props}
  >
    <path stroke="none" d="M0 0h24v24H0z" />
    <path d="M13 12V9a1 1 0 0 1 1-1h6a1 1 0 0 1 1 1v2" />
    <path d="M18 8V5a1 1 0 0 0-1-1H4a1 1 0 0 0-1 1v12a1 1 0 0 0 1 1h6M18 22l3.35-3.284a2.143 2.143 0 0 0 .005-3.071 2.24 2.24 0 0 0-3.129-.006l-.224.22-.223-.22a2.24 2.24 0 0 0-3.128-.006 2.143 2.143 0 0 0-.006 3.071zM16 9h2" />
  </svg>
);
export default SvgDevicesHeart;
