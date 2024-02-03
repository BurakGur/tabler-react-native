import * as React from "react";
import type { SVGProps } from "react";
const SvgCoinTakaFilled = ({
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
    className="icon icon-tabler icon-tabler-coin-taka-filled"
    {...props}
  >
    <path stroke="none" d="M0 0h24v24H0z" />
    <path
      fill="currentColor"
      stroke="none"
      d="M17 3.34A10 10 0 1 1 2 12l.005-.324A10 10 0 0 1 17 3.34m-6.211 4.384a2 2 0 0 0-2.683-.895l-.553.277a1 1 0 0 0 .894 1.788L9 8.618 8.999 10H8a1 1 0 0 0-.993.883L7 11a1 1 0 0 0 1 1h.999L9 15a3 3 0 0 0 2.824 2.995L12 18h.5a3.5 3.5 0 0 0 3.5-3.5V14a1 1 0 0 0-1-1h-1a1 1 0 0 0-1 1l.007.117a1 1 0 0 0 .876.876l.032.002-.02.057A1.5 1.5 0 0 1 12.5 16H12a1 1 0 0 1-1-1l-.001-3H15a1 1 0 0 0 .993-.883L16 11a1 1 0 0 0-1-1h-4.001L11 8.618a2 2 0 0 0-.136-.725z"
    />
  </svg>
);
export default SvgCoinTakaFilled;
