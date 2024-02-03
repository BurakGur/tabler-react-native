import * as React from "react";
import type { SVGProps } from "react";
const SvgCloudFilled = ({
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
    className="icon icon-tabler icon-tabler-cloud-filled"
    {...props}
  >
    <path stroke="none" d="M0 0h24v24H0z" />
    <path
      fill="currentColor"
      stroke="none"
      d="M10.04 4.305c2.195-.667 4.615-.224 6.36 1.176 1.386 1.108 2.188 2.686 2.252 4.34l.003.212.091.003c2.3.107 4.143 1.961 4.25 4.27l.004.211c0 2.407-1.885 4.372-4.255 4.482l-.21.005H6.657l-.222-.008c-2.94-.11-5.317-2.399-5.43-5.263L1 13.517C1 10.77 3.08 8.507 5.784 8.1l.114-.016.07-.181c.663-1.62 2.056-2.906 3.829-3.518l.244-.08z"
    />
  </svg>
);
export default SvgCloudFilled;
