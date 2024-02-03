import * as React from "react";
import type { SVGProps } from "react";
const SvgCreditCardPay = ({
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
    className="icon icon-tabler icon-tabler-credit-card-pay"
    {...props}
  >
    <path stroke="none" d="M0 0h24v24H0z" />
    <path d="M12 19H6a3 3 0 0 1-3-3V8a3 3 0 0 1 3-3h12a3 3 0 0 1 3 3v4.5M3 10h18M16 19h6M19 16l3 3-3 3M7.005 15h.005M11 15h2" />
  </svg>
);
export default SvgCreditCardPay;
