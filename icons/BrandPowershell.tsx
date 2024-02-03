import * as React from "react";
import type { SVGProps } from "react";
const SvgBrandPowershell = ({
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
    className="icon icon-tabler icon-tabler-brand-powershell"
    {...props}
  >
    <path stroke="none" d="M0 0h24v24H0z" />
    <path d="M4.887 20h11.868c.893 0 1.664-.665 1.847-1.592l2.358-12c.212-1.081-.442-2.14-1.462-2.366A1.8 1.8 0 0 0 19.113 4H7.245c-.893 0-1.664.665-1.847 1.592l-2.358 12c-.212 1.081.442 2.14 1.462 2.366q.191.042.385.042" />
    <path d="m9 8 4 4-6 4M12 16h3" />
  </svg>
);
export default SvgBrandPowershell;
