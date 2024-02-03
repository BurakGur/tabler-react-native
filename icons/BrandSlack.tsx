import * as React from "react";
import type { SVGProps } from "react";
const SvgBrandSlack = ({
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
    className="icon icon-tabler icon-tabler-brand-slack"
    {...props}
  >
    <path stroke="none" d="M0 0h24v24H0z" />
    <path d="M12 12V6a2 2 0 0 1 4 0v6m0-2a2 2 0 1 1 2 2h-6M12 12h6a2 2 0 0 1 0 4h-6m2 0a2 2 0 1 1-2 2v-6M12 12v6a2 2 0 0 1-4 0v-6m0 2a2 2 0 1 1-2-2h6M12 12H6a2 2 0 0 1 0-4h6m-2 0a2 2 0 1 1 2-2v6" />
  </svg>
);
export default SvgBrandSlack;
