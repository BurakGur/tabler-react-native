import * as React from "react";
import type { SVGProps } from "react";
const SvgMessageCircleQuestion = ({
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
    className="icon icon-tabler icon-tabler-message-circle-question"
    {...props}
  >
    <path stroke="none" d="M0 0h24v24H0z" />
    <path d="M15.02 19.52c-2.341.736-5 .606-7.32-.52L3 20l1.3-3.9C1.976 12.663 2.874 8.228 6.4 5.726c3.526-2.501 8.59-2.296 11.845.48 1.649 1.407 2.575 3.253 2.742 5.152M19 22v.01" />
    <path d="M19 19a2.003 2.003 0 0 0 .914-3.782 1.98 1.98 0 0 0-2.414.483" />
  </svg>
);
export default SvgMessageCircleQuestion;
