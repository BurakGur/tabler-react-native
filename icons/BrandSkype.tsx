import * as React from "react";
import type { SVGProps } from "react";
const SvgBrandSkype = ({
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
    className="icon icon-tabler icon-tabler-brand-skype"
    {...props}
  >
    <path stroke="none" d="M0 0h24v24H0z" />
    <path d="M12 3a9 9 0 0 1 8.603 11.65 4.5 4.5 0 0 1-5.953 5.953A9 9 0 0 1 3.397 9.35 4.5 4.5 0 0 1 9.35 3.396 9 9 0 0 1 12 3" />
    <path d="M8 14.5c.5 2 2.358 2.5 4 2.5 2.905 0 4-1.187 4-2.5 0-1.503-1.927-2.5-4-2.5s-4-1-4-2.5C8 8.187 9.095 7 12 7c1.642 0 3.5.5 4 2.5" />
  </svg>
);
export default SvgBrandSkype;
