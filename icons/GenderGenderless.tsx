import * as React from "react";
import type { SVGProps } from "react";
const SvgGenderGenderless = ({
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
    className="icon icon-tabler icon-tabler-gender-genderless"
    {...props}
  >
    <path stroke="none" d="M0 0h24v24H0z" />
    <path d="M12 10a5 5 0 1 1 0 10 5 5 0 0 1 0-10M12 10V3M7 15h10" />
  </svg>
);
export default SvgGenderGenderless;
