import * as React from "react";
import type { SVGProps } from "react";
const SvgBrightnessUpFilled = ({
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
    className="icon icon-tabler icon-tabler-brightness-up-filled"
    {...props}
  >
    <path stroke="none" d="M0 0h24v24H0z" />
    <path
      fill="currentColor"
      stroke="none"
      d="M12 8a4 4 0 1 1-3.995 4.2L8 12l.005-.2A4 4 0 0 1 12 8M12 2a1 1 0 0 1 .993.883L13 3v2a1 1 0 0 1-1.993.117L11 5V3a1 1 0 0 1 1-1M17.693 4.893a1 1 0 0 1 1.497 1.32l-.083.094-1.4 1.4a1 1 0 0 1-1.497-1.32l.083-.094zM21 11a1 1 0 0 1 .117 1.993L21 13h-2a1 1 0 0 1-.117-1.993L19 11zM16.293 16.293a1 1 0 0 1 1.32-.083l.094.083 1.4 1.4a1 1 0 0 1-1.32 1.497l-.094-.083-1.4-1.4a1 1 0 0 1 0-1.414M12 18a1 1 0 0 1 .993.883L13 19v2a1 1 0 0 1-1.993.117L11 21v-2a1 1 0 0 1 1-1M6.293 16.293a1 1 0 0 1 1.497 1.32l-.083.094-1.4 1.4a1 1 0 0 1-1.497-1.32l.083-.094zM6 11a1 1 0 0 1 .117 1.993L6 13H4a1 1 0 0 1-.117-1.993L4 11zM4.893 4.893a1 1 0 0 1 1.32-.083l.094.083 1.4 1.4a1 1 0 0 1-1.32 1.497l-.094-.083-1.4-1.4a1 1 0 0 1 0-1.414"
    />
  </svg>
);
export default SvgBrightnessUpFilled;
