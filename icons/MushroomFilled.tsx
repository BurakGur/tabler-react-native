import * as React from "react";
import type { SVGProps } from "react";
const SvgMushroomFilled = ({
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
    className="icon icon-tabler icon-tabler-mushroom-filled"
    {...props}
  >
    <path stroke="none" d="M0 0h24v24H0z" />
    <path
      fill="currentColor"
      stroke="none"
      d="M15 15v4a3 3 0 0 1-5.995.176L9 19v-4zM4.9 13a1.9 1.9 0 0 1-1.894-1.752L3 11.1C3 6.077 7.027 2 12 2s9 4.077 9 9.1a1.9 1.9 0 0 1-1.752 1.894L19.1 13z"
    />
  </svg>
);
export default SvgMushroomFilled;
