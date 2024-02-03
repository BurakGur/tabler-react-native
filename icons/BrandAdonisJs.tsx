import * as React from "react";
import type { SVGProps } from "react";
const SvgBrandAdonisJs = ({
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
    className="icon icon-tabler icon-tabler-brand-adonis-js"
    {...props}
  >
    <path stroke="none" d="M0 0h24v24H0z" />
    <path d="M12 3c7.2 0 9 1.8 9 9s-1.8 9-9 9-9-1.8-9-9 1.8-9 9-9" />
    <path d="M8.863 16.922C10 16.5 10.5 16 12 16s2 .5 3.138.922c.713.264 1.516-.102 1.778-.772.126-.32.11-.673-.044-.983l-3.708-7.474c-.297-.598-1.058-.859-1.7-.583a1.24 1.24 0 0 0-.627.583l-3.709 7.474c-.321.648-.017 1.415.679 1.714.332.143.715.167 1.056.04z" />
  </svg>
);
export default SvgBrandAdonisJs;
