import * as React from "react";
import type { SVGProps } from "react";
const SvgBounceRightFilled = ({
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
    className="icon icon-tabler icon-tabler-bounce-right-filled"
    {...props}
  >
    <path stroke="none" d="M0 0h24v24H0z" />
    <path
      fill="currentColor"
      stroke="none"
      d="M14.143 11.486a1 1 0 0 1 1.714 1.028c-1.502 2.505-2.41 4.89-2.87 7.65-.16.956-1.448 1.15-1.881.283-2.06-4.12-3.858-4.976-6.79-3.998a1 1 0 1 1-.632-1.898c3.2-1.067 5.656-.373 7.803 2.623l.091.13.011-.04c.522-1.828 1.267-3.55 2.273-5.3l.28-.478zM18 4a3 3 0 1 0 0 6 3 3 0 0 0 0-6"
    />
  </svg>
);
export default SvgBounceRightFilled;
