import * as React from "react";
import type { SVGProps } from "react";
const SvgGenderDemigirl = ({
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
    className="icon icon-tabler icon-tabler-gender-demigirl"
    {...props}
  >
    <path stroke="none" d="M0 0h24v24H0z" />
    <path d="M7 9a5 5 0 1 0 10 0A5 5 0 1 0 7 9M12 14v7M9 18h3" />
  </svg>
);
export default SvgGenderDemigirl;
