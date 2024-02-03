import * as React from "react";
import type { SVGProps } from "react";
const SvgBrandCouchdb = ({
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
    className="icon icon-tabler icon-tabler-brand-couchdb"
    {...props}
  >
    <path stroke="none" d="M0 0h24v24H0z" />
    <path d="M6 12h12v-2a2 2 0 0 1 2-2 2 2 0 0 0-2-2H6a2 2 0 0 0-2 2 2 2 0 0 1 2 2zM6 15h12M6 18h12M21 11v7M3 11v7" />
  </svg>
);
export default SvgBrandCouchdb;
