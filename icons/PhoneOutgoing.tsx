import * as React from "react";
import type { SVGProps } from "react";
const SvgPhoneOutgoing = ({
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
    className="icon icon-tabler icon-tabler-phone-outgoing"
    {...props}
  >
    <path stroke="none" d="M0 0h24v24H0z" />
    <path d="M5 4h4l2 5-2.5 1.5a11 11 0 0 0 5 5L15 13l5 2v4a2 2 0 0 1-2 2A16 16 0 0 1 3 6a2 2 0 0 1 2-2M15 9l5-5M16 4h4v4" />
  </svg>
);
export default SvgPhoneOutgoing;
