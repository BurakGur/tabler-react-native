import * as React from "react";
import type { SVGProps } from "react";
const SvgAd2 = ({
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
    className="icon icon-tabler icon-tabler-ad-2"
    {...props}
  >
    <path stroke="none" d="M0 0h24v24H0z" />
    <path d="M11.933 5H5v16h13v-8M14 17H9" />
    <path d="M9 13h5V9H9zM15 5V3M18 6l2-2M19 9h2" />
  </svg>
);
export default SvgAd2;
