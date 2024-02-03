import * as React from "react";
import type { SVGProps } from "react";
const SvgBrandCodepen = ({
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
    className="icon icon-tabler icon-tabler-brand-codepen"
    {...props}
  >
    <path stroke="none" d="M0 0h24v24H0z" />
    <path d="m3 15 9 6 9-6-9-6z" />
    <path d="m3 9 9 6 9-6-9-6zM3 9v6M21 9v6M12 3v6M12 15v6" />
  </svg>
);
export default SvgBrandCodepen;
