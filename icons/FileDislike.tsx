import * as React from "react";
import type { SVGProps } from "react";
const SvgFileDislike = ({
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
    className="icon icon-tabler icon-tabler-file-dislike"
    {...props}
  >
    <path stroke="none" d="M0 0h24v24H0z" />
    <path d="M3 15a1 1 0 0 1 1-1h1a1 1 0 0 1 1 1v3a1 1 0 0 1-1 1H4a1 1 0 0 1-1-1zM6 15a1 1 0 0 1 1-1h3.756a1 1 0 0 1 .958.713l1.2 3c.09.303.133.63-.056.884-.188.254-.542.403-.858.403h-2v2.467a1.1 1.1 0 0 1-2.015.61L6 19zM14 3v4a1 1 0 0 0 1 1h4" />
    <path d="M5 11V5a2 2 0 0 1 2-2h7l5 5v11a2 2 0 0 1-2 2h-2.5" />
  </svg>
);
export default SvgFileDislike;
