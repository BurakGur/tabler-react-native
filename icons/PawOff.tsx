import * as React from "react";
import type { SVGProps } from "react";
const SvgPawOff = ({
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
    className="icon icon-tabler icon-tabler-paw-off"
    {...props}
  >
    <path stroke="none" d="M0 0h24v24H0z" />
    <path d="M11.168 11.154c-.71.31-1.184 1.107-2 2.593-.942 1.703-2.846 1.845-3.321 3.291-.097.265-.145.677-.143.962 0 1.176.787 2 1.8 2 1.259 0 3-1 4.5-1s3.241 1 4.5 1c.927 0 1.664-.689 1.783-1.708M20.188 8.082A1 1 0 0 0 19.782 8h-.015c-.735.012-1.56.75-1.993 1.866-.519 1.335-.28 2.7.538 3.052q.196.082.406.082c.739 0 1.575-.742 2.011-1.866.516-1.335.273-2.7-.54-3.052h0zM11 6.992a3.6 3.6 0 0 0-.04-.725C10.757 4.97 9.913 4 9.028 4a1.24 1.24 0 0 0-.758.265M16.456 6.733c.214-1.376-.375-2.594-1.32-2.722A1 1 0 0 0 14.974 4c-.885 0-1.728.97-1.93 2.267-.214 1.376.375 2.594 1.32 2.722q.081.01.162.011c.885 0 1.73-.974 1.93-2.267M5.69 12.918c.816-.352 1.054-1.719.536-3.052C5.79 8.742 4.955 8 4.217 8q-.211 0-.407.082c-.816.352-1.054 1.719-.536 3.052C3.71 12.258 4.545 13 5.283 13q.211 0 .407-.082M3 3l18 18" />
  </svg>
);
export default SvgPawOff;
