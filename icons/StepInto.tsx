import * as React from "react";
import type { SVGProps } from "react";
const SvgStepInto = ({
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
    className="icon icon-tabler icon-tabler-step-into"
    {...props}
  >
    <path stroke="none" d="M0 0h24v24H0z" />
    <path d="M12 3v12M16 11l-4 4M8 11l4 4M11 20a1 1 0 1 0 2 0 1 1 0 1 0-2 0" />
  </svg>
);
export default SvgStepInto;
