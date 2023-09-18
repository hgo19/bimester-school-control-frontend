import { DumpSvgType } from './types'

const colors = {
  'grade-red': '#ff5964',
  'grade-yellow': '#ffff99',
  'grade-green': '#05ff00'
}

export default function ChartSvg({ fillColor }: DumpSvgType) {
  const colorToFill = colors[fillColor]

  return (
    <svg
      width="18"
      height="18"
      viewBox="0 0 18 18"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M4.98293 7.77692V13.355"
        stroke={colorToFill}
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M8.73032 5.10727V13.3555"
        stroke={colorToFill}
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M12.416 10.7246V13.3553"
        stroke={colorToFill}
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M0.717705 9.25683C0.717705 3.17174 2.72129 1.14279 8.73031 1.14279C14.7393 1.14279 16.7429 3.17174 16.7429 9.25683C16.7429 15.3419 14.7393 17.3709 8.73031 17.3709C2.72129 17.3709 0.717705 15.3419 0.717705 9.25683Z"
        stroke={colorToFill}
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  )
}
