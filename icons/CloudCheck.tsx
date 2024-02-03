import * as React from "react";
import type { SVGProps } from "react";
const SvgCloudCheck = ({
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
    className="icon icon-tabler icon-tabler-cloud-check"
    {...props}
  >
    <path stroke="none" d="M0 0h24v24H0z" />
    <path d="M11 18.004H6.657C4.085 18 2 15.993 2 13.517s2.085-4.482 4.657-4.482c.393-1.762 1.794-3.2 3.675-3.773 1.88-.572 3.956-.193 5.444 1 1.488 1.19 2.162 3.007 1.77 4.769h.99c1.388 0 2.585.82 3.138 2.007M15 19l2 2 4-4" />
  </svg>
);
export default SvgCloudCheck;
