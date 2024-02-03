import * as React from "react";
import type { SVGProps } from "react";
const SvgCopyrightFilled = ({
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
    className="icon icon-tabler icon-tabler-copyright-filled"
    {...props}
  >
    <path stroke="none" d="M0 0h24v24H0z" />
    <path
      fill="currentColor"
      stroke="none"
      d="M17 3.34a10 10 0 1 1-14.995 8.984L2 12l.005-.324A10 10 0 0 1 17 3.34m-2.34 5.659a4.016 4.016 0 0 0-5.543.23 3.993 3.993 0 0 0 0 5.542 4.016 4.016 0 0 0 5.543.23 1 1 0 0 0-1.32-1.502c-.81.711-2.035.66-2.783-.116a1.993 1.993 0 0 1 0-2.766 2.016 2.016 0 0 1 2.783-.116A1 1 0 0 0 14.66 9z"
    />
  </svg>
);
export default SvgCopyrightFilled;
