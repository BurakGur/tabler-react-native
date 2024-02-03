import * as React from "react";
import type { SVGProps } from "react";
const SvgArrowBigDownLineFilled = ({
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
    className="icon icon-tabler icon-tabler-arrow-big-down-line-filled"
    {...props}
  >
    <path stroke="none" d="M0 0h24v24H0z" />
    <path
      fill="currentColor"
      stroke="none"
      d="m9 5-.117.007A1 1 0 0 0 8 6v4.999L5.414 11A2 2 0 0 0 4 14.414L10.586 21a2 2 0 0 0 2.828 0L20 14.414a2 2 0 0 0 .434-2.18l-.068-.145A2 2 0 0 0 18.586 11L16 10.999V6a1 1 0 0 0-1-1zM15 2a1 1 0 0 1 .117 1.993L15 4H9a1 1 0 0 1-.117-1.993L9 2z"
    />
  </svg>
);
export default SvgArrowBigDownLineFilled;
