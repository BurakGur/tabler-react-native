import * as React from "react";
import type { SVGProps } from "react";
const SvgBrandAlipay = ({
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
    className="icon icon-tabler icon-tabler-brand-alipay"
    {...props}
  >
    <path stroke="none" d="M0 0h24v24H0z" />
    <path d="M19 3H5a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2V5a2 2 0 0 0-2-2M7 7h10M12 3v7" />
    <path d="M21 17.314C18.029 15.391 6 8.535 6 15.45 6 17.166 7.52 18 8.985 18c3.512 0 6.814-5.425 6.814-8H9.195" />
  </svg>
);
export default SvgBrandAlipay;
