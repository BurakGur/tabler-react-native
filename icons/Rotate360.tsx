import * as React from "react";
import type { SVGProps } from "react";
const SvgRotate360 = ({
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
    className="icon icon-tabler icon-tabler-rotate-360"
    {...props}
  >
    <path stroke="none" d="M0 0h24v24H0z" />
    <path d="M12 16h4v4" />
    <path d="M19.458 11.042c.86-2.366.722-4.58-.6-5.9-2.272-2.274-7.185-1.045-10.973 2.743s-5.017 8.701-2.744 10.974c2.227 2.226 6.987 1.093 10.74-2.515" />
  </svg>
);
export default SvgRotate360;
