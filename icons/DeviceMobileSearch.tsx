import * as React from "react";
import type { SVGProps } from "react";
const SvgDeviceMobileSearch = ({
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
    className="icon icon-tabler icon-tabler-device-mobile-search"
    {...props}
  >
    <path stroke="none" d="M0 0h24v24H0z" />
    <path d="M12 21H8a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h8a2 2 0 0 1 2 2v6M15 18a3 3 0 1 0 6 0 3 3 0 1 0-6 0M20.2 20.2 22 22M11 4h2M12 17v.01" />
  </svg>
);
export default SvgDeviceMobileSearch;
