import * as React from "react";
import type { SVGProps } from "react";
const SvgShieldCheckeredFilled = ({
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
    className="icon icon-tabler icon-tabler-shield-checkered-filled"
    {...props}
  >
    <path stroke="none" d="M0 0h24v24H0z" />
    <path
      fill="currentColor"
      stroke="none"
      d="M11.013 12v9.754A13 13 0 0 1 2.28 12zm9.284 3.794a13 13 0 0 1-7.283 5.951L13.013 12h8.708a13 13 0 0 1-1.424 3.794M11.014 2.526 11.013 10H2.027c-.068-1.432.101-2.88.514-4.282a1 1 0 0 1 1.005-.717 11 11 0 0 0 7.192-2.256zM13.013 10V2.547l-.09-.073a11 11 0 0 0 7.189 2.537l.342-.01a1 1 0 0 1 1.005.717c.413 1.403.582 2.85.514 4.282z"
    />
  </svg>
);
export default SvgShieldCheckeredFilled;
