import * as React from "react";
import type { SVGProps } from "react";
const SvgDropletHalf2Filled = ({
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
    className="icon icon-tabler icon-tabler-droplet-half-2-filled"
    {...props}
  >
    <path stroke="none" d="M0 0h24v24H0z" />
    <path
      fill="currentColor"
      stroke="none"
      d="m13.905 2.923.098.135 4.92 7.306a7.6 7.6 0 0 1 1.043 3.167l.024.326q.01.07.01.143l-.002.06c.056 2.3-.944 4.582-2.87 6.14-2.969 2.402-7.286 2.402-10.255 0-1.904-1.54-2.904-3.787-2.865-6.071a1 1 0 0 1 .013-.333 7.7 7.7 0 0 1 .913-3.176l.172-.302 4.893-7.26c.185-.275.426-.509.709-.686 1.055-.66 2.446-.413 3.197.55zm-2.06 1.107-.077.038-.041.03-.037.036-.033.042-4.863 7.214A5.6 5.6 0 0 0 6.143 13h11.723a5.4 5.4 0 0 0-.49-1.313l-.141-.251-4.891-7.261a.43.43 0 0 0-.5-.145z"
    />
  </svg>
);
export default SvgDropletHalf2Filled;
