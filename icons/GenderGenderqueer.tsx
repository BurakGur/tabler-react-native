import * as React from "react";
import type { SVGProps } from "react";
const SvgGenderGenderqueer = ({
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
    className="icon icon-tabler icon-tabler-gender-genderqueer"
    {...props}
  >
    <path stroke="none" d="M0 0h24v24H0z" />
    <path d="M12 11a5 5 0 1 1 0 10 5 5 0 0 1 0-10M12 11V3M14.5 4.5l-5 3M9.5 4.5l5 3" />
  </svg>
);
export default SvgGenderGenderqueer;
