import * as React from "react";
import type { SVGProps } from "react";
const SvgSocialOff = ({
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
    className="icon icon-tabler icon-tabler-social-off"
    {...props}
  >
    <path stroke="none" d="M0 0h24v24H0z" />
    <path d="M10 5a2 2 0 1 0 4 0 2 2 0 1 0-4 0M3 19a2 2 0 1 0 4 0 2 2 0 1 0-4 0M17.57 17.602a2 2 0 0 0 2.83 2.827M11.113 11.133a3 3 0 1 0 3.765 3.715M12 7v1M6.7 17.8l2.8-2M17.3 17.8l-2.8-2M3 3l18 18" />
  </svg>
);
export default SvgSocialOff;
