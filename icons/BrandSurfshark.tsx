import * as React from "react";
import type { SVGProps } from "react";
const SvgBrandSurfshark = ({
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
    className="icon icon-tabler icon-tabler-brand-surfshark"
    {...props}
  >
    <path stroke="none" d="M0 0h24v24H0z" />
    <path d="M19.954 9.447c-.237-6.217 0-6.217-6-6.425-5.774-.208-6.824 1-7.91 5.382C3.16 20.22 2.199 23.12 10.836 19.602c9.392-3.831 9.297-5.382 9.114-10.155z" />
    <path d="M8 16h.452c1.943.007 3.526-1.461 3.543-3.286v-2.428c.018-1.828 1.607-3.298 3.553-3.286H16" />
  </svg>
);
export default SvgBrandSurfshark;
