import * as React from "react";
import type { SVGProps } from "react";
const SvgBrandPrisma = ({
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
    className="icon icon-tabler icon-tabler-brand-prisma"
    {...props}
  >
    <path stroke="none" d="M0 0h24v24H0z" />
    <path d="m4.186 16.202 3.615 5.313c.265.39.754.57 1.215.447l10.166-2.718a1.086 1.086 0 0 0 .713-1.511L12.39 2.25a.448.448 0 0 0-.787-.033L4.15 15.055a1.07 1.07 0 0 0 .037 1.147zM8.5 22 12 2" />
  </svg>
);
export default SvgBrandPrisma;
