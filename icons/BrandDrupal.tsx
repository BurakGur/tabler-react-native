import * as React from "react";
import type { SVGProps } from "react";
const SvgBrandDrupal = ({
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
    className="icon icon-tabler icon-tabler-brand-drupal"
    {...props}
  >
    <path stroke="none" d="M0 0h24v24H0z" />
    <path d="M12 2c0 4.308-7 6-7 12a7 7 0 0 0 14 0c0-6-7-7.697-7-12" />
    <path d="M12 11.33a66 66 0 0 1-2.012 2.023C8.988 14.31 8 15.32 8 17c0 2.17 1.79 4 4 4s4-1.827 4-4c0-1.676-.989-2.685-1.983-3.642q-.63-.606-5.517-5.858z" />
  </svg>
);
export default SvgBrandDrupal;
