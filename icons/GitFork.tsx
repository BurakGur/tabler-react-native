import * as React from "react";
import type { SVGProps } from "react";
const SvgGitFork = ({
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
    className="icon icon-tabler icon-tabler-git-fork"
    {...props}
  >
    <path stroke="none" d="M0 0h24v24H0z" />
    <path d="M10 18a2 2 0 1 0 4 0 2 2 0 1 0-4 0M5 6a2 2 0 1 0 4 0 2 2 0 1 0-4 0M15 6a2 2 0 1 0 4 0 2 2 0 1 0-4 0" />
    <path d="M7 8v2a2 2 0 0 0 2 2h6a2 2 0 0 0 2-2V8M12 12v4" />
  </svg>
);
export default SvgGitFork;
