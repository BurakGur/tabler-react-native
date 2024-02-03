import * as React from "react";
import type { SVGProps } from "react";
const SvgWebhook = ({
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
    className="icon icon-tabler icon-tabler-webhook"
    {...props}
  >
    <path stroke="none" d="M0 0h24v24H0z" />
    <path d="M4.876 13.61A4 4 0 1 0 11 17h6" />
    <path d="M15.066 20.502A4 4 0 1 0 17 13c-.706 0-1.424.179-2 .5L12 8" />
    <path d="M16 8a4 4 0 1 0-8 0c0 1.506.77 2.818 2 3.5L7 17" />
  </svg>
);
export default SvgWebhook;
