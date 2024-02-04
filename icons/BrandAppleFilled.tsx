import * as React from "react";
import Svg, { Path } from "react-native-svg";
import type { SvgProps } from "react-native-svg";
const SvgBrandAppleFilled = ({
  size = 24,
  stroke = 2,
  color = "currentColor",
}: {
  size: number,
  stroke: number,
  color: string,
}) => (
  <Svg
    xmlns="http://www.w3.org/2000/svg"
    width={size}
    height={size}
    fill="none"
    stroke={color}
    strokeLinecap="round"
    strokeLinejoin="round"
    strokeWidth={stroke}
    className="icon icon-tabler icon-tabler-brand-apple-filled"
    {...props}
  >
    <Path stroke="none" d="M0 0h24v24H0z" />
    <Path
      fill="currentColor"
      stroke="none"
      d="m15.079 5.999.239.012c1.43.097 3.434 1.013 4.508 2.586a1 1 0 0 1-.344 1.44c-.05.028-.372.158-.497.217a4 4 0 0 0-.722.431c-.614.461-.948 1.009-.942 1.694.01.885.339 1.454.907 1.846.208.143.436.253.666.33.126.043.426.116.444.122a1 1 0 0 1 .662.942C20 18.24 16.96 22 14.714 22c-.79 0-1.272-.091-1.983-.315l-.098-.031c-.463-.146-.702-.192-1.133-.192-.52 0-.863.06-1.518.237l-.197.053c-.575.153-.964.226-1.5.248C5.536 22 3 16.907 3 12.928c0-3.87 1.786-6.92 5.286-6.92q.444.002.909.128c.403.107.774.26 1.296.508.787.374.948.44 1.009.44h.016c.03-.003.128-.047 1.056-.457 1.061-.467 1.864-.685 2.746-.616l-.24-.012zM14 1a1 1 0 0 1 1 1 3 3 0 0 1-3 3 1 1 0 0 1-1-1 3 3 0 0 1 3-3"
    />
  </Svg>
);
export default SvgBrandAppleFilled;
