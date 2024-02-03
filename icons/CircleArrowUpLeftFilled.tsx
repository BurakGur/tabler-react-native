import * as React from "react";
import type { SVGProps } from "react";
const SvgCircleArrowUpLeftFilled = ({
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
    className="icon icon-tabler icon-tabler-circle-arrow-up-left-filled"
    {...props}
  >
    <path stroke="none" d="M0 0h24v24H0z" />
    <path
      fill="currentColor"
      stroke="none"
      d="M17 3.34a10 10 0 1 1-14.995 8.984L2 12l.005-.324A10 10 0 0 1 17 3.34M15 8H9l-.117.007-.149.029-.105.035-.113.054-.111.071a1 1 0 0 0-.112.097l-.08.09-.067.096-.052.098-.044.11-.03.112-.017.126L8 15l.007.117A1 1 0 0 0 9 16l.117-.007A1 1 0 0 0 10 15v-3.585l4.293 4.292.094.083a1 1 0 0 0 1.32-1.497L11.415 10H15l.117-.007A1 1 0 0 0 15 8"
    />
  </svg>
);
export default SvgCircleArrowUpLeftFilled;
