import * as React from "react";
import type { SVGProps } from "react";
const SvgBombFilled = ({
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
    className="icon icon-tabler icon-tabler-bomb-filled"
    {...props}
  >
    <path stroke="none" d="M0 0h24v24H0z" />
    <path
      fill="currentColor"
      stroke="none"
      d="M14.499 3.996a2.2 2.2 0 0 1 1.556.645l3.302 3.301a2.2 2.2 0 0 1 0 3.113l-.567.567.043.192a8.5 8.5 0 0 1-3.732 8.83l-.23.144a8.5 8.5 0 1 1-2.687-15.623l.192.042.567-.566a2.2 2.2 0 0 1 1.362-.636zM10 9a4 4 0 0 0-4 4 1 1 0 0 0 2 0 2 2 0 0 1 2-2 1 1 0 0 0 0-2"
    />
    <path
      fill="currentColor"
      stroke="none"
      d="M21 2a1 1 0 0 1 .117 1.993L21 4h-1c0 .83-.302 1.629-.846 2.25L19 6.413l-1.293 1.293a1 1 0 0 1-1.497-1.32l.083-.094L17.586 5c.232-.232.375-.537.407-.86L18 4a2 2 0 0 1 1.85-1.995L20 2z"
    />
  </svg>
);
export default SvgBombFilled;
