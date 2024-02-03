import * as React from "react";
import type { SVGProps } from "react";
const SvgInnerShadowRightFilled = ({
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
    className="icon icon-tabler icon-tabler-inner-shadow-right-filled"
    {...props}
  >
    <path stroke="none" d="M0 0h24v24H0z" />
    <path
      fill="currentColor"
      stroke="none"
      d="M4.929 4.929c3.905-3.905 10.237-3.905 14.142 0s3.905 10.237 0 14.142-10.237 3.905-14.142 0-3.905-10.237 0-14.142m12.02 2.121a1 1 0 0 0-1.413 1.414 5 5 0 0 1 0 7.072 1 1 0 0 0 1.414 1.414 7 7 0 0 0 0-9.9z"
    />
  </svg>
);
export default SvgInnerShadowRightFilled;
