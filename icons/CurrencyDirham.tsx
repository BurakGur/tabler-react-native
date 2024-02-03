import * as React from "react";
import type { SVGProps } from "react";
const SvgCurrencyDirham = ({
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
    className="icon icon-tabler icon-tabler-currency-dirham"
    {...props}
  >
    <path stroke="none" d="M0 0h24v24H0z" />
    <path d="M8.5 19H5M8.599 16.479A1.5 1.5 0 1 0 7.5 19M7 4v9M15 13h1.888a1.5 1.5 0 0 0 1.296-2.256L16 7M11 13.01V13" />
  </svg>
);
export default SvgCurrencyDirham;
