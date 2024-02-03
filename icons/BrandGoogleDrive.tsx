import * as React from "react";
import type { SVGProps } from "react";
const SvgBrandGoogleDrive = ({
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
    className="icon icon-tabler icon-tabler-brand-google-drive"
    {...props}
  >
    <path stroke="none" d="M0 0h24v24H0z" />
    <path d="M12 10 6 20l-3-5L9 5z" />
    <path d="M9 15h12l-3 5H6M15 15 9 5h6l6 10z" />
  </svg>
);
export default SvgBrandGoogleDrive;
