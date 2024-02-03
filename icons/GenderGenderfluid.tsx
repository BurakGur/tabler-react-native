import * as React from "react";
import type { SVGProps } from "react";
const SvgGenderGenderfluid = ({
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
    className="icon icon-tabler icon-tabler-gender-genderfluid"
    {...props}
  >
    <path stroke="none" d="M0 0h24v24H0z" />
    <path d="M10 15.464a4 4 0 1 0 4-6.928 4 4 0 0 0-4 6.928M15.464 14l3-5.196M5.536 15.195l3-5.196M12 12h.01M9 9 3 3M5.5 8.5l3-3M21 21l-6-6M17 20l3-3M3 7V3h4" />
  </svg>
);
export default SvgGenderGenderfluid;
