import * as React from "react";
import type { SVGProps } from "react";
const SvgGitCherryPick = ({
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
    className="icon icon-tabler icon-tabler-git-cherry-pick"
    {...props}
  >
    <path stroke="none" d="M0 0h24v24H0z" />
    <path d="M4 12a3 3 0 1 0 6 0 3 3 0 1 0-6 0M7 3v6M7 15v6M13 7h2.5l1.5 5-1.5 5H13M17 12h3" />
  </svg>
);
export default SvgGitCherryPick;
