import * as React from "react";
import type { SVGProps } from "react";
const SvgBrandDatabricks = ({
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
    className="icon icon-tabler icon-tabler-brand-databricks"
    {...props}
  >
    <path stroke="none" d="M0 0h24v24H0z" />
    <path d="m3 17 9 5 9-5v-3l-9 5-9-5v-3l9 5 9-5V8l-9 5-9-5 9-5 5.418 3.01" />
  </svg>
);
export default SvgBrandDatabricks;
