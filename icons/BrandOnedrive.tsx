import * as React from "react";
import type { SVGProps } from "react";
const SvgBrandOnedrive = ({
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
    className="icon icon-tabler icon-tabler-brand-onedrive"
    {...props}
  >
    <path stroke="none" d="M0 0h24v24H0z" />
    <path d="M18.456 10.45a6.45 6.45 0 0 0-12-2.151 4.857 4.857 0 0 0-4.44 5.241 4.856 4.856 0 0 0 5.236 4.444h10.751a3.77 3.77 0 0 0 3.99-3.54 3.77 3.77 0 0 0-3.538-3.992z" />
  </svg>
);
export default SvgBrandOnedrive;
