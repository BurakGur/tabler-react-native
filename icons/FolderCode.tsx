import * as React from "react";
import type { SVGProps } from "react";
const SvgFolderCode = ({
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
    className="icon icon-tabler icon-tabler-folder-code"
    {...props}
  >
    <path stroke="none" d="M0 0h24v24H0z" />
    <path d="M11 19H5a2 2 0 0 1-2-2V6a2 2 0 0 1 2-2h4l3 3h7a2 2 0 0 1 2 2v4M20 21l2-2-2-2M17 17l-2 2 2 2" />
  </svg>
);
export default SvgFolderCode;
