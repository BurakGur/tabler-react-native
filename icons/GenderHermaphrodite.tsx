import * as React from "react";
import type { SVGProps } from "react";
const SvgGenderHermaphrodite = ({
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
    className="icon icon-tabler icon-tabler-gender-hermaphrodite"
    {...props}
  >
    <path stroke="none" d="M0 0h24v24H0z" />
    <path d="M12 14v7M9 18h6M12 6a4 4 0 1 1 0 8 4 4 0 0 1 0-8" />
    <path d="M15 3a3 3 0 1 1-6 0" />
  </svg>
);
export default SvgGenderHermaphrodite;
