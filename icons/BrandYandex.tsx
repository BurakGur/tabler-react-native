import * as React from "react";
import type { SVGProps } from "react";
const SvgBrandYandex = ({
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
    className="icon icon-tabler icon-tabler-brand-yandex"
    {...props}
  >
    <path stroke="none" d="M0 0h24v24H0z" />
    <path d="M15 20V4h-2a4 4 0 0 0-4 4v1a4 4 0 0 0 4 4h2M9 20l3-7" />
  </svg>
);
export default SvgBrandYandex;
