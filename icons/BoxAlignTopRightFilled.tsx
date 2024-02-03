import * as React from "react";
import type { SVGProps } from "react";
const SvgBoxAlignTopRightFilled = ({
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
    className="icon icon-tabler icon-tabler-box-align-top-right-filled"
    {...props}
  >
    <path stroke="none" d="M0 0h24v24H0z" />
    <path
      fill="currentColor"
      stroke="none"
      d="M19 3.01h-5a2 2 0 0 0-2 2v5a2 2 0 0 0 2 2h5a2 2 0 0 0 2-2v-5a2 2 0 0 0-2-2M20 14a1 1 0 0 1 .993.883l.007.127a1 1 0 0 1-1.993.117L19 15a1 1 0 0 1 1-1M20 19a1 1 0 0 1 .993.883l.007.127a1 1 0 0 1-1.993.117L19 20a1 1 0 0 1 1-1M15 19a1 1 0 0 1 .993.883l.007.127a1 1 0 0 1-1.993.117L14 20a1 1 0 0 1 1-1M9 19a1 1 0 0 1 .993.883l.007.127a1 1 0 0 1-1.993.117L8 20a1 1 0 0 1 1-1M9 3a1 1 0 0 1 .993.883L10 4.01a1 1 0 0 1-1.993.117L8 4a1 1 0 0 1 1-1M4 19a1 1 0 0 1 .993.883L5 20.01a1 1 0 0 1-1.993.117L3 20a1 1 0 0 1 1-1M4 14a1 1 0 0 1 .993.883L5 15.01a1 1 0 0 1-1.993.117L3 15a1 1 0 0 1 1-1M4 8a1 1 0 0 1 .993.883L5 9.01a1 1 0 0 1-1.993.117L3 9a1 1 0 0 1 1-1M4 3a1 1 0 0 1 .993.883L5 4.01a1 1 0 0 1-1.993.117L3 4a1 1 0 0 1 1-1"
    />
  </svg>
);
export default SvgBoxAlignTopRightFilled;
