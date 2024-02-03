import * as React from "react";
import type { SVGProps } from "react";
const SvgBounceLeftFilled = ({
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
    className="icon icon-tabler icon-tabler-bounce-left-filled"
    {...props}
  >
    <path stroke="none" d="M0 0h24v24H0z" />
    <path
      fill="currentColor"
      stroke="none"
      d="M8.486 11.143a1 1 0 0 1 1.371.343c1.045 1.74 1.83 3.443 2.392 5.237l.172.581.092-.13c2.093-2.921 4.48-3.653 7.565-2.7l.238.077a1 1 0 1 1-.632 1.898c-2.932-.978-4.73-.122-6.79 3.998-.433.866-1.721.673-1.88-.283-.46-2.76-1.369-5.145-2.871-7.65a1 1 0 0 1 .343-1.371M6 4a3 3 0 1 0 0 6 3 3 0 0 0 0-6"
    />
  </svg>
);
export default SvgBounceLeftFilled;
