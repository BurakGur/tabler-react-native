import * as React from "react";
import type { SVGProps } from "react";
const SvgBrandDocker = ({
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
    className="icon icon-tabler icon-tabler-brand-docker"
    {...props}
  >
    <path stroke="none" d="M0 0h24v24H0z" />
    <path d="M22 12.54c-1.804-.345-2.701-1.08-3.523-2.94-.487.696-1.102 1.568-.92 2.4.028.238-.32 1-.557 1H3c0 5.208 3.164 7 6.196 7 4.124.022 7.828-1.376 9.854-5 1.146-.101 2.296-1.505 2.95-2.46" />
    <path d="M5 10h3v3H5zM8 10h3v3H8zM11 10h3v3h-3zM8 7h3v3H8zM11 7h3v3h-3zM11 4h3v3h-3zM4.571 18c1.5 0 2.047-.074 2.958-.78M10 16v.01" />
  </svg>
);
export default SvgBrandDocker;
