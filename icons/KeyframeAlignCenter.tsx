import * as React from "react";
import type { SVGProps } from "react";
const SvgKeyframeAlignCenter = ({
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
    className="icon icon-tabler icon-tabler-keyframe-align-center"
    {...props}
  >
    <path stroke="none" d="M0 0h24v24H0z" />
    <path d="M12 20v2M12.816 16.58c-.207.267-.504.42-.816.42s-.61-.153-.816-.42l-2.908-3.748a1.39 1.39 0 0 1 0-1.664l2.908-3.748c.207-.267.504-.42.816-.42s.61.153.816.42l2.908 3.748a1.39 1.39 0 0 1 0 1.664zM12 2v2M3 12h2M19 12h2" />
  </svg>
);
export default SvgKeyframeAlignCenter;
