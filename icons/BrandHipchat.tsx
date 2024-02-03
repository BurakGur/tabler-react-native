import * as React from "react";
import type { SVGProps } from "react";
const SvgBrandHipchat = ({
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
    className="icon icon-tabler icon-tabler-brand-hipchat"
    {...props}
  >
    <path stroke="none" d="M0 0h24v24H0z" />
    <path d="M17.802 17.292s.077-.055.2-.149c1.843-1.425 3-3.49 3-5.789 0-4.286-4.03-7.764-9-7.764s-9 3.478-9 7.764c0 4.288 4.03 7.646 9 7.646q.636 0 2.088-.084c1.262.82 3.104 1.493 4.716 1.493.499 0 .734-.41.414-.828-.486-.596-1.156-1.551-1.416-2.29z" />
    <path d="M7.5 13.5c2.5 2.5 6.5 2.5 9 0" />
  </svg>
);
export default SvgBrandHipchat;
