import * as React from "react";
import type { SVGProps } from "react";
const SvgChairDirector = ({
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
    className="icon icon-tabler icon-tabler-chair-director"
    {...props}
  >
    <path stroke="none" d="M0 0h24v24H0z" />
    <path d="m6 21 12-9M6 12l12 9M5 12h14M6 3v9M18 3v9M6 8h12M6 5h12" />
  </svg>
);
export default SvgChairDirector;
