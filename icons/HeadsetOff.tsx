import * as React from "react";
import type { SVGProps } from "react";
const SvgHeadsetOff = ({
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
    className="icon icon-tabler icon-tabler-headset-off"
    {...props}
  >
    <path stroke="none" d="M0 0h24v24H0z" />
    <path d="M4 14v-3c0-1.953.7-3.742 1.862-5.13m2.182-1.825A8 8 0 0 1 20 11v3M18 19c0 1.657-2.686 3-6 3" />
    <path d="M4 14a2 2 0 0 1 2-2h1a2 2 0 0 1 2 2v3a2 2 0 0 1-2 2H6a2 2 0 0 1-2-2zM16.169 12.18c.253-.115.534-.18.831-.18h1a2 2 0 0 1 2 2v2m-1.183 2.826c-.25.112-.526.174-.817.174h-1a2 2 0 0 1-2-2v-2M3 3l18 18" />
  </svg>
);
export default SvgHeadsetOff;
