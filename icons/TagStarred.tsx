import * as React from "react";
import type { SVGProps } from "react";
const SvgTagStarred = ({
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
    className="icon icon-tabler icon-tabler-tag-starred"
    {...props}
  >
    <path stroke="none" d="M0 0h24v24H0z" />
    <path d="M6.5 7.5a1 1 0 1 0 2 0 1 1 0 1 0-2 0" />
    <path d="M3 6v5.172a2 2 0 0 0 .586 1.414l7.71 7.71a2.41 2.41 0 0 0 3.408 0l5.592-5.592a2.41 2.41 0 0 0 0-3.408l-7.71-7.71A2 2 0 0 0 11.172 3H6a3 3 0 0 0-3 3" />
    <path d="M12.5 13.847 11 15l.532-1.857L10 12h1.902l.598-1.8.598 1.8H15l-1.532 1.143L14 15z" />
  </svg>
);
export default SvgTagStarred;
