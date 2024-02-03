import * as React from "react";
import type { SVGProps } from "react";
const SvgKeyboardShow = ({
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
    className="icon icon-tabler icon-tabler-keyboard-show"
    {...props}
  >
    <path stroke="none" d="M0 0h24v24H0z" />
    <path d="M2 5a2 2 0 0 1 2-2h16a2 2 0 0 1 2 2v8a2 2 0 0 1-2 2H4a2 2 0 0 1-2-2zM6 7v.01M10 7v.01M14 7v.01M18 7v.01M6 11v.01M18 11v.01M10 11h4M10 19l2 2 2-2" />
  </svg>
);
export default SvgKeyboardShow;
