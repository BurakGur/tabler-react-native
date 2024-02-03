import * as React from "react";
import type { SVGProps } from "react";
const SvgShirtFilled = ({
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
    className="icon icon-tabler icon-tabler-shirt-filled"
    {...props}
  >
    <path stroke="none" d="M0 0h24v24H0z" />
    <path
      fill="currentColor"
      stroke="none"
      d="M14.883 3.007 14.978 3l.112.004.113.017.113.03 6 2a1 1 0 0 1 .677.833L22 6v5a1 1 0 0 1-.883.993L21 12h-2v7a2 2 0 0 1-1.85 1.995L17 21H7a2 2 0 0 1-1.995-1.85L5 19v-7H3a1 1 0 0 1-.993-.883L2 11V6a1 1 0 0 1 .576-.906l.108-.043 6-2A1 1 0 0 1 10 4a2 2 0 0 0 3.995.15l.009-.24.017-.113.037-.134.044-.103.05-.092.068-.093.069-.08q.083-.08.175-.14l.096-.053.103-.044.108-.032.112-.02z"
    />
  </svg>
);
export default SvgShirtFilled;
