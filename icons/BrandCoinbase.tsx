import * as React from "react";
import type { SVGProps } from "react";
const SvgBrandCoinbase = ({
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
    className="icon icon-tabler icon-tabler-brand-coinbase"
    {...props}
  >
    <path stroke="none" d="M0 0h24v24H0z" />
    <path d="M12.95 22c-4.503 0-8.445-3.04-9.61-7.413s.737-8.988 4.638-11.25a9.906 9.906 0 0 1 12.008 1.598l-3.335 3.367a5.185 5.185 0 0 0-7.354.013 5.25 5.25 0 0 0 0 7.393 5.185 5.185 0 0 0 7.354.013L20 19.088A9.89 9.89 0 0 1 12.95 22" />
  </svg>
);
export default SvgBrandCoinbase;
