import * as React from "react";
import type { SVGProps } from "react";
const SvgWorldQuestion = ({
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
    className="icon icon-tabler icon-tabler-world-question"
    {...props}
  >
    <path stroke="none" d="M0 0h24v24H0z" />
    <path d="M20.975 11.33a9 9 0 1 0-5.673 9.043M3.6 9h16.8M3.6 15h9.9" />
    <path d="M11.5 3a17 17 0 0 0 0 18M12.5 3a17 17 0 0 1 2.57 9.518m-1.056 5.403A17 17 0 0 1 12.5 21M19 22v.01M19 19a2.003 2.003 0 0 0 .914-3.782 1.98 1.98 0 0 0-2.414.483" />
  </svg>
);
export default SvgWorldQuestion;
