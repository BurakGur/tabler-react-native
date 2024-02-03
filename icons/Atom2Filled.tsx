import * as React from "react";
import type { SVGProps } from "react";
const SvgAtom2Filled = ({
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
    className="icon icon-tabler icon-tabler-atom-2-filled"
    {...props}
  >
    <path stroke="none" d="M0 0h24v24H0z" />
    <path
      fill="currentColor"
      stroke="none"
      d="M12 8a4 4 0 1 1-3.995 4.2L8 12l.005-.2A4 4 0 0 1 12 8M12 20a1 1 0 0 1 .993.883l.007.127a1 1 0 0 1-1.993.117L11 21a1 1 0 0 1 1-1M3 8a1 1 0 0 1 .993.883L4 9.01a1 1 0 0 1-1.993.117L2 9a1 1 0 0 1 1-1M21 8a1 1 0 0 1 .993.883L22 9.01a1 1 0 0 1-1.993.117L20 9a1 1 0 0 1 1-1M2.89 12.006a1 1 0 0 1 1.104.884 8 8 0 0 0 4.444 6.311A1 1 0 1 1 7.562 21a10 10 0 0 1-5.556-7.89 1 1 0 0 1 .884-1.103zM20.993 12l.117.006a1 1 0 0 1 .884 1.104 10 10 0 0 1-5.556 7.889 1 1 0 1 1-.876-1.798 8 8 0 0 0 4.444-6.31 1 1 0 0 1 .987-.891M5.567 4.226a10 10 0 0 1 12.666 0 1 1 0 1 1-1.266 1.548 8 8 0 0 0-10.134 0 1 1 0 1 1-1.266-1.548"
    />
  </svg>
);
export default SvgAtom2Filled;
