import * as React from "react";
import type { SVGProps } from "react";
const SvgHexagon7Filled = ({
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
    className="icon icon-tabler icon-tabler-hexagon-7-filled"
    {...props}
  >
    <path stroke="none" d="M0 0h24v24H0z" />
    <path
      fill="currentColor"
      stroke="none"
      d="M10.425 1.414a3.33 3.33 0 0 1 3.216 0l6.775 3.995q.1.06.18.133l.008.007.107.076a3.22 3.22 0 0 1 1.284 2.39l.005.203v7.284c0 1.175-.643 2.256-1.623 2.793l-6.804 4.302c-.98.538-2.166.538-3.2-.032l-6.695-4.237A3.23 3.23 0 0 1 2 15.502V8.217a3.21 3.21 0 0 1 1.65-2.808zM14 7h-4l-.117.007a1 1 0 0 0-.876.876L9 8l.007.117a1 1 0 0 0 .876.876L10 9h2.718l-1.688 6.757-.022.115a1 1 0 0 0 1.927.482l.035-.111 2-8 .021-.112a1 1 0 0 0-.878-1.125z"
    />
  </svg>
);
export default SvgHexagon7Filled;
