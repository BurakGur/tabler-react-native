import * as React from "react";
import type { SVGProps } from "react";
const SvgFolderRoot = ({
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
    className="icon icon-tabler icon-tabler-folder-root"
    {...props}
  >
    <path stroke="none" d="M0 0h24v24H0z" />
    <path d="M10 13a2 2 0 1 0 4 0 2 2 0 1 0-4 0M12 15v4" />
    <path d="M5 4h4l3 3h7a2 2 0 0 1 2 2v8a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V6a2 2 0 0 1 2-2" />
  </svg>
);
export default SvgFolderRoot;
