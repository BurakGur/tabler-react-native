import * as React from "react";
import type { SVGProps } from "react";
const SvgBrandOpenai = ({
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
    className="icon icon-tabler icon-tabler-brand-openai"
    {...props}
  >
    <path stroke="none" d="M0 0h24v24H0z" />
    <path d="M11.217 19.384A3.501 3.501 0 0 0 18 18.167V13l-6-3.35" />
    <path d="M5.214 15.014A3.501 3.501 0 0 0 9.66 20.28L14 17.746V10.8" />
    <path d="M6 7.63c-1.391-.236-2.787.395-3.534 1.689a3.474 3.474 0 0 0 1.271 4.745L8 16.578l6-3.348" />
    <path d="M12.783 4.616A3.501 3.501 0 0 0 6 5.833V10.9l6 3.45" />
    <path d="M18.786 8.986A3.501 3.501 0 0 0 14.34 3.72L10 6.254V13.2" />
    <path d="M18 16.302c1.391.236 2.787-.395 3.534-1.689a3.474 3.474 0 0 0-1.271-4.745l-4.308-2.514L10 10.774" />
  </svg>
);
export default SvgBrandOpenai;
