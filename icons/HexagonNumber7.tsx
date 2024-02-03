import * as React from "react";
import type { SVGProps } from "react";
const SvgHexagonNumber7 = ({
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
    className="icon icon-tabler icon-tabler-hexagon-number-7"
    {...props}
  >
    <path stroke="none" d="M0 0h24v24H0z" />
    <path d="M19.02 6.858a2 2 0 0 1 1 1.752v6.555c0 .728-.395 1.4-1.032 1.753l-6.017 3.844a2 2 0 0 1-1.948 0l-6.016-3.844a2 2 0 0 1-1.032-1.752V8.61c0-.728.395-1.4 1.032-1.753l6.017-3.582a2.06 2.06 0 0 1 2 0l6.017 3.583h-.029z" />
    <path d="M10 8h4l-2 8" />
  </svg>
);
export default SvgHexagonNumber7;
