import * as React from "react";
import type { SVGProps } from "react";
const SvgEyeFilled = ({
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
    className="icon icon-tabler icon-tabler-eye-filled"
    {...props}
  >
    <path stroke="none" d="M0 0h24v24H0z" />
    <path
      fill="currentColor"
      stroke="none"
      d="M12 4c4.29 0 7.863 2.429 10.665 7.154l.22.379.045.1.03.083.014.055.014.082.011.1v.11l-.014.111a1 1 0 0 1-.026.11l-.039.108-.036.075-.016.03c-2.764 4.836-6.3 7.38-10.555 7.499L12 20c-4.396 0-8.037-2.549-10.868-7.504a1 1 0 0 1 0-.992C3.963 6.549 7.604 4 12 4m0 5a3 3 0 1 0 0 6 3 3 0 0 0 0-6"
    />
  </svg>
);
export default SvgEyeFilled;
