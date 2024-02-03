import * as React from "react";
import type { SVGProps } from "react";
const SvgLamp2 = ({
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
    className="icon icon-tabler icon-tabler-lamp-2"
    {...props}
  >
    <path stroke="none" d="M0 0h24v24H0z" />
    <path d="M5 21h9M10 21l-7-8 8.5-5.5" />
    <path d="M13 14c-2.148-2.148-2.148-5.852 0-8 2.088-2.088 5.842-1.972 8 0z" />
    <path d="m11.742 7.574-1.156-1.156a2 2 0 0 1 2.828-2.829l1.144 1.144M15.5 12l.208.274a2.527 2.527 0 0 0 3.556 0c.939-.933.98-2.42.122-3.4l-.366-.369" />
  </svg>
);
export default SvgLamp2;
