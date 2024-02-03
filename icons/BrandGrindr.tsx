import * as React from "react";
import type { SVGProps } from "react";
const SvgBrandGrindr = ({
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
    className="icon icon-tabler icon-tabler-brand-grindr"
    {...props}
  >
    <path stroke="none" d="M0 0h24v24H0z" />
    <path d="M13 13.282c0 .492.784 1.718 2.102 1.718S18 14.034 18 12.938c0-.817-.932-.938-1.409-.938-.228 0-3.591.111-3.591 1.282" />
    <path d="M12 21c-2.984 0-6.471-2.721-6.63-2.982C3.24 14.528 3 4.315 3 4.315L4.446 3c2.499.39 5.023.617 7.554.68A59 59 0 0 0 19.554 3L21 4.315s-.24 10.213-2.37 13.704C18.47 18.279 14.984 21 12 21" />
    <path d="M11 13.282C11 13.774 10.216 15 8.898 15S6 14.034 6 12.938c0-.817.932-.938 1.409-.938.228 0 3.591.111 3.591 1.282" />
  </svg>
);
export default SvgBrandGrindr;
