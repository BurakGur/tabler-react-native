import * as React from "react";
import type { SVGProps } from "react";
const SvgMoustache = ({
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
    className="icon icon-tabler icon-tabler-moustache"
    {...props}
  >
    <path stroke="none" d="M0 0h24v24H0z" />
    <path d="M15 9a3 3 0 0 1 2.599 1.5h0c.933 1.333 2.133 1.556 3.126 1.556h.291l.77-.044h.213q-1.444 2.888-6.6 3h-.565a3 3 0 0 1 .165-6z" />
    <path d="M9 9a3 3 0 0 0-2.599 1.5h0c-.933 1.333-2.133 1.556-3.126 1.556h-.291l-.77-.044h-.213q1.445 2.888 6.6 3h.565a3 3 0 0 0-.165-6z" />
  </svg>
);
export default SvgMoustache;
