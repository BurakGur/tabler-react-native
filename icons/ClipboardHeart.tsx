import * as React from "react";
import type { SVGProps } from "react";
const SvgClipboardHeart = ({
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
    className="icon icon-tabler icon-tabler-clipboard-heart"
    {...props}
  >
    <path stroke="none" d="M0 0h24v24H0z" />
    <path d="M9 5H7a2 2 0 0 0-2 2v12a2 2 0 0 0 2 2h10a2 2 0 0 0 2-2V7a2 2 0 0 0-2-2h-2" />
    <path d="M9 5a2 2 0 0 1 2-2h2a2 2 0 0 1 2 2v0a2 2 0 0 1-2 2h-2a2 2 0 0 1-2-2M11.993 16.75l2.747-2.815a1.9 1.9 0 0 0 0-2.632 1.775 1.775 0 0 0-2.56 0l-.183.188-.183-.189a1.775 1.775 0 0 0-2.56 0 1.9 1.9 0 0 0 0 2.632l2.738 2.825z" />
  </svg>
);
export default SvgClipboardHeart;
