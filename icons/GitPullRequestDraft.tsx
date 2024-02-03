import * as React from "react";
import type { SVGProps } from "react";
const SvgGitPullRequestDraft = ({
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
    className="icon icon-tabler icon-tabler-git-pull-request-draft"
    {...props}
  >
    <path stroke="none" d="M0 0h24v24H0z" />
    <path d="M4 18a2 2 0 1 0 4 0 2 2 0 1 0-4 0M4 6a2 2 0 1 0 4 0 2 2 0 1 0-4 0M16 18a2 2 0 1 0 4 0 2 2 0 1 0-4 0M6 8v8M18 11h.01M18 6h.01" />
  </svg>
);
export default SvgGitPullRequestDraft;
