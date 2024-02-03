import * as React from "react";
import type { SVGProps } from "react";
const SvgDropletBolt = ({
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
    className="icon icon-tabler icon-tabler-droplet-bolt"
    {...props}
  >
    <path stroke="none" d="M0 0h24v24H0z" />
    <path d="M18.628 12.076a6.7 6.7 0 0 0-.564-1.199l-4.89-7.26c-.42-.625-1.287-.803-1.936-.397a1.4 1.4 0 0 0-.41.397l-4.893 7.26C4.24 13.715 4.9 17.318 7.502 19.423c1.7 1.375 3.906 1.852 5.958 1.431M19 16l-2 3h4l-2 3" />
  </svg>
);
export default SvgDropletBolt;
