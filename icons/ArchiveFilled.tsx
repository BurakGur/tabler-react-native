import * as React from "react";
import type { SVGProps } from "react";
const SvgArchiveFilled = ({
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
    className="icon icon-tabler icon-tabler-archive-filled"
    {...props}
  >
    <path stroke="none" d="M0 0h24v24H0z" />
    <rect
      width={20}
      height={4}
      x={2}
      y={3}
      fill="currentColor"
      stroke="none"
      rx={2}
    />
    <path
      fill="currentColor"
      stroke="none"
      d="M19 9c.513 0 .936.463.993 1.06l.007.14v7.2c0 1.917-1.249 3.484-2.824 3.594L17 21H7c-1.598 0-2.904-1.499-2.995-3.388L4 17.4v-7.2C4 9.537 4.448 9 5 9zm-5 2h-4l-.117.007a1 1 0 0 0 0 1.986L10 13h4l.117-.007a1 1 0 0 0 0-1.986z"
    />
  </svg>
);
export default SvgArchiveFilled;
