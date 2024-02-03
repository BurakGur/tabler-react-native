import * as React from "react";
import type { SVGProps } from "react";
const SvgPhoneFilled = ({
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
    className="icon icon-tabler icon-tabler-phone-filled"
    {...props}
  >
    <path stroke="none" d="M0 0h24v24H0z" />
    <path
      fill="currentColor"
      stroke="none"
      d="M9 3a1 1 0 0 1 .877.519l.051.11 2 5a1 1 0 0 1-.313 1.16l-.1.068-1.674 1.004.063.103a10 10 0 0 0 3.132 3.132l.102.062 1.005-1.672a1 1 0 0 1 1.113-.453l.115.039 5 2a1 1 0 0 1 .622.807L21 15v4c0 1.657-1.343 3-3.06 2.998C9.361 21.477 2.522 14.638 2 6a3 3 0 0 1 2.824-2.995L5 3z"
    />
  </svg>
);
export default SvgPhoneFilled;
