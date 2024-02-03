import * as React from "react";
import type { SVGProps } from "react";
const SvgScribbleOff = ({
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
    className="icon icon-tabler icon-tabler-scribble-off"
    {...props}
  >
    <path stroke="none" d="M0 0h24v24H0z" />
    <path d="M3 15c2 3 4 4 7 4 1.95 0 4.324-1.268 5.746-3.256m1.181-2.812A6 6 0 0 0 17 12c0-4-3-7-6-7-.642 0-1.239.069-1.78.201M6.728 6.716C6.258 7.333 6 8.102 6 9c0 2.5 2 5 6 5 .597 0 1.203-.055 1.808-.156m3.102-.921C19.145 11.97 21.062 10.5 22 9M3 3l18 18" />
  </svg>
);
export default SvgScribbleOff;
