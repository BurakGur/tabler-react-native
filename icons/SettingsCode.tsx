import * as React from "react";
import type { SVGProps } from "react";
const SvgSettingsCode = ({
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
    className="icon icon-tabler icon-tabler-settings-code"
    {...props}
  >
    <path stroke="none" d="M0 0h24v24H0z" />
    <path d="M11.482 20.924a1.67 1.67 0 0 1-1.157-1.241 1.724 1.724 0 0 0-2.573-1.066c-1.543.94-3.31-.826-2.37-2.37a1.724 1.724 0 0 0-1.065-2.572c-1.756-.426-1.756-2.924 0-3.35a1.724 1.724 0 0 0 1.066-2.573c-.94-1.543.826-3.31 2.37-2.37 1 .608 2.296.07 2.572-1.065.426-1.756 2.924-1.756 3.35 0a1.724 1.724 0 0 0 2.573 1.066c1.543-.94 3.31.826 2.37 2.37a1.724 1.724 0 0 0 1.065 2.572c1.312.318 1.644 1.794.995 2.697" />
    <path d="M9 12a3 3 0 1 0 6 0 3 3 0 0 0-6 0M20 21l2-2-2-2M17 17l-2 2 2 2" />
  </svg>
);
export default SvgSettingsCode;
