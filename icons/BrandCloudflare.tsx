import * as React from "react";
import type { SVGProps } from "react";
const SvgBrandCloudflare = ({
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
    className="icon icon-tabler icon-tabler-brand-cloudflare"
    {...props}
  >
    <path stroke="none" d="M0 0h24v24H0z" />
    <path d="M13.031 7.007C15.5 7 16.326 8.3 17 10c4 0 4.994 3.825 5 6H2c-.001-1.64 1.36-2.954 3-3 0-1.5 1-3 3-3 .66-1.942 2.562-2.986 5.031-2.993M12 13h6M17 10l-2.5 6" />
  </svg>
);
export default SvgBrandCloudflare;
