import * as React from "react";
import type { SVGProps } from "react";
const SvgBrandGooglePodcasts = ({
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
    className="icon icon-tabler icon-tabler-brand-google-podcasts"
    {...props}
  >
    <path stroke="none" d="M0 0h24v24H0z" />
    <path d="M12 3v2M12 19v2M12 8v8M8 17v2M4 11v2M20 11v2M8 5v8M16 7V5M16 19v-8" />
  </svg>
);
export default SvgBrandGooglePodcasts;
