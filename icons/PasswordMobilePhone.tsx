import * as React from "react";
import type { SVGProps } from "react";
const SvgPasswordMobilePhone = ({
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
    className="icon icon-tabler icon-tabler-password-mobile-phone"
    {...props}
  >
    <path stroke="none" d="M0 0h24v24H0z" />
    <path d="M12 17v4M10 20l4-2M10 18l4 2M5 17v4M3 20l4-2M3 18l4 2M19 17v4M17 20l4-2M17 18l4 2M7 14V6a2 2 0 0 1 2-2h6a2 2 0 0 1 2 2v8M11 5h2M12 17v.01" />
  </svg>
);
export default SvgPasswordMobilePhone;
