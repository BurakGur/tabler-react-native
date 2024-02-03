import * as React from "react";
import type { SVGProps } from "react";
const SvgBrandDeezer = ({
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
    className="icon icon-tabler icon-tabler-brand-deezer"
    {...props}
  >
    <path stroke="none" d="M0 0h24v24H0z" />
    <path d="M3 16.5h2v.5H3zM8 16.5h2.5v.5H8zM16 17h-2.5v-.5H16zM21.5 17H19v-.5h2.5zM21.5 13H19v.5h2.5zM21.5 9.5H19v.5h2.5zM21.5 6H19v.5h2.5zM16 13h-2.5v.5H16zM8 13.5h2.5V13H8zM8 9.5h2.5v.5H8z" />
  </svg>
);
export default SvgBrandDeezer;
