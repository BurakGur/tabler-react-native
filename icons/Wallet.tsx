import * as React from "react";
import type { SVGProps } from "react";
const SvgWallet = ({
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
    className="icon icon-tabler icon-tabler-wallet"
    {...props}
  >
    <path stroke="none" d="M0 0h24v24H0z" />
    <path d="M17 8V5a1 1 0 0 0-1-1H6a2 2 0 0 0 0 4h12a1 1 0 0 1 1 1v3m0 4v3a1 1 0 0 1-1 1H6a2 2 0 0 1-2-2V6" />
    <path d="M20 12v4h-4a2 2 0 0 1 0-4z" />
  </svg>
);
export default SvgWallet;
