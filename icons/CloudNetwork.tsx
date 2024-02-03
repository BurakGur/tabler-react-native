import * as React from "react";
import type { SVGProps } from "react";
const SvgCloudNetwork = ({
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
    className="icon icon-tabler icon-tabler-cloud-network"
    {...props}
  >
    <path stroke="none" d="M0 0h24v24H0z" />
    <path d="M3 20h7M14 20h7M10 20a2 2 0 1 0 4 0 2 2 0 0 0-4 0M12 16v2M8 16.004H6.657C4.085 16 2 13.993 2 11.517s2.085-4.482 4.657-4.482c.393-1.762 1.794-3.2 3.675-3.773 1.88-.572 3.956-.193 5.444 1 1.488 1.19 2.162 3.007 1.77 4.769h.99c1.913 0 3.464 1.56 3.464 3.486s-1.551 3.487-3.465 3.487H16" />
  </svg>
);
export default SvgCloudNetwork;
