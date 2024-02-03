import * as React from "react";
import type { SVGProps } from "react";
const SvgCoinYenFilled = ({
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
    className="icon icon-tabler icon-tabler-coin-yen-filled"
    {...props}
  >
    <path stroke="none" d="M0 0h24v24H0z" />
    <path
      fill="currentColor"
      stroke="none"
      d="M17 3.34A10 10 0 1 1 2 12l.005-.324A10 10 0 0 1 17 3.34m-1.445 3.828a1 1 0 0 0-1.387.277L12 10.696l-2.168-3.25a1 1 0 0 0-1.286-.337l-.1.059a1 1 0 0 0-.278 1.387L9.798 11H9a1 1 0 0 0-.993.883L8 12a1 1 0 0 0 1 1h2v1H9a1 1 0 0 0-.993.883L8 15a1 1 0 0 0 1 1h2v1a1 1 0 0 0 .883.993L12 18l.117-.007A1 1 0 0 0 13 17v-1h2a1 1 0 0 0 .993-.883L16 15a1 1 0 0 0-1-1h-2v-1h2a1 1 0 0 0 .993-.883L16 12a1 1 0 0 0-1-1h-.799l1.631-2.445a1 1 0 0 0-.184-1.317z"
    />
  </svg>
);
export default SvgCoinYenFilled;
