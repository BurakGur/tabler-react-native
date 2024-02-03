import * as React from "react";
import type { SVGProps } from "react";
const SvgBrandGoogleFit = ({
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
    className="icon icon-tabler icon-tabler-brand-google-fit"
    {...props}
  >
    <path stroke="none" d="M0 0h24v24H0z" />
    <path d="M12 9.314 9.657 6.97a3.314 3.314 0 0 0-4.686 4.686L7.314 14 12 18.686l7.03-7.03a3.314 3.314 0 0 0-4.687-4.685L7.313 14" />
  </svg>
);
export default SvgBrandGoogleFit;
