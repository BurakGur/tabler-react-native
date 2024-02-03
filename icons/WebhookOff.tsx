import * as React from "react";
import type { SVGProps } from "react";
const SvgWebhookOff = ({
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
    className="icon icon-tabler icon-tabler-webhook-off"
    {...props}
  >
    <path stroke="none" d="M0 0h24v24H0z" />
    <path d="M4.876 13.61A4 4 0 1 0 11 17h6M15.066 20.502a4 4 0 0 0 4.763-.675M21 17a4 4 0 0 0-4-4" />
    <path d="M16 8a4 4 0 0 0-6.824-2.833M8 8c0 1.506.77 2.818 2 3.5L7 17M3 3l18 18" />
  </svg>
);
export default SvgWebhookOff;
