import * as React from "react";
import type { SVGProps } from "react";
const SvgNetworkOff = ({
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
    className="icon icon-tabler icon-tabler-network-off"
    {...props}
  >
    <path stroke="none" d="M0 0h24v24H0z" />
    <path d="M6.528 6.536a6 6 0 0 0 7.942 7.933m2.247-1.76A6 6 0 0 0 8.29 4.284" />
    <path d="M12 3q2 .5 2 6 0 .506-.017.968m-.55 3.473Q12.934 14.766 12 15M12 3q-1.405.351-1.822 3.167m-.16 3.838Q10.192 14.549 12 15M6 9h3m4 0h5M3 20h7M14 20h7M10 20a2 2 0 1 0 4 0 2 2 0 0 0-4 0M12 15v3M3 3l18 18" />
  </svg>
);
export default SvgNetworkOff;
