import * as React from "react";
import type { SVGProps } from "react";
const SvgClockQuestion = ({
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
    className="icon icon-tabler icon-tabler-clock-question"
    {...props}
  >
    <path stroke="none" d="M0 0h24v24H0z" />
    <path d="M20.975 11.33a9 9 0 1 0-5.717 9.06" />
    <path d="M12 7v5l2 2M19 22v.01M19 19a2.003 2.003 0 0 0 .914-3.782 1.98 1.98 0 0 0-2.414.483" />
  </svg>
);
export default SvgClockQuestion;
