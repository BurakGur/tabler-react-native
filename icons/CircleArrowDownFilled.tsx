import * as React from "react";
import type { SVGProps } from "react";
const SvgCircleArrowDownFilled = ({
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
    className="icon icon-tabler icon-tabler-circle-arrow-down-filled"
    {...props}
  >
    <path stroke="none" d="M0 0h24v24H0z" />
    <path
      fill="currentColor"
      stroke="none"
      d="M17 3.34a10 10 0 1 1-14.995 8.984L2 12l.005-.324A10 10 0 0 1 17 3.34M12 7a1 1 0 0 0-1 1v5.585l-2.293-2.292-.094-.083a1 1 0 0 0-1.32 1.497l4 4q.04.04.094.083l.092.064.098.052.081.034.113.034.112.02L12 17l.115-.007.114-.02.142-.044.113-.054.111-.071a1 1 0 0 0 .112-.097l4-4 .083-.094a1 1 0 0 0-1.497-1.32L13 13.584V8l-.007-.117A1 1 0 0 0 12 7"
    />
  </svg>
);
export default SvgCircleArrowDownFilled;
