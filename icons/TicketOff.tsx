import * as React from "react";
import type { SVGProps } from "react";
const SvgTicketOff = ({
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
    className="icon icon-tabler icon-tabler-ticket-off"
    {...props}
  >
    <path stroke="none" d="M0 0h24v24H0z" />
    <path d="M15 5v2M15 17v2M9 5h10a2 2 0 0 1 2 2v3a2 2 0 1 0 0 4v3m-2 2H5a2 2 0 0 1-2-2v-3a2 2 0 1 0 0-4V7a2 2 0 0 1 2-2M3 3l18 18" />
  </svg>
);
export default SvgTicketOff;
