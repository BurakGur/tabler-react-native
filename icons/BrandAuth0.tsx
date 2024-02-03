import * as React from "react";
import type { SVGProps } from "react";
const SvgBrandAuth0 = ({
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
    className="icon icon-tabler icon-tabler-brand-auth0"
    {...props}
  >
    <path stroke="none" d="M0 0h24v24H0z" />
    <path d="M12 14.5 6.5 18l2-6L4 8h6l2-5 2 5h6l-4.5 4 2 6z" />
    <path d="M20.507 8.872 18.497 3H5.503L3.494 8.872c-1.242 3.593-.135 7.094 3.249 9.407L12 22l5.257-3.721c3.385-2.313 4.49-5.814 3.25-9.407" />
  </svg>
);
export default SvgBrandAuth0;
