import * as React from "react";
import type { SVGProps } from "react";
const SvgPentagonPlus = ({
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
    className="icon icon-tabler icon-tabler-pentagon-plus"
    {...props}
  >
    <path stroke="none" d="M0 0h24v24H0z" />
    <path d="M12.5 21.005H7.042a1.98 1.98 0 0 1-1.881-1.367l-3.064-9.43a1.98 1.98 0 0 1 .719-2.212l8.021-5.828a1.98 1.98 0 0 1 2.326 0l8.021 5.828c.694.504.984 1.397.719 2.212l-.78 2.401M16 19h6M19 16v6" />
  </svg>
);
export default SvgPentagonPlus;
