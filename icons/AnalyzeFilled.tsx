import * as React from "react";
import type { SVGProps } from "react";
const SvgAnalyzeFilled = ({
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
    className="icon icon-tabler icon-tabler-analyze-filled"
    {...props}
  >
    <path stroke="none" d="M0 0h24v24H0z" />
    <path
      fill="currentColor"
      stroke="none"
      d="M4.99 12.862a7.1 7.1 0 0 0 12.171 3.924 2 2 0 0 1-.156-.637L17 16l.005-.15a2 2 0 1 1 1.769 2.137 9.099 9.099 0 0 1-15.764-4.85 1 1 0 0 1 1.98-.275"
    />
    <path
      fill="currentColor"
      stroke="none"
      d="M12 8a4 4 0 1 1-3.995 4.2L8 12l.005-.2A4 4 0 0 1 12 8"
    />
    <path
      fill="currentColor"
      stroke="none"
      d="M13.142 3.09a9.1 9.1 0 0 1 7.848 7.772 1 1 0 0 1-1.98.276 7.1 7.1 0 0 0-6.125-6.064A7.1 7.1 0 0 0 6.837 7.21a2 2 0 1 1-3.831.939L3 8l.005-.15a2 2 0 0 1 2.216-1.838 9.1 9.1 0 0 1 7.921-2.922"
    />
  </svg>
);
export default SvgAnalyzeFilled;
