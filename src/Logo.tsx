import { SVGAttributes } from "react"

interface LogoProps extends SVGAttributes<HTMLOrSVGElement> {}

export function Logo(props: LogoProps) {
  return (
    <svg
      width={163}
      height={163}
      viewBox="0 0 163 163"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <path
        d="M137.531 71.313c0 30.944-35.656 76.406-56.031 76.406s-56.031-45.462-56.031-76.406a56.031 56.031 0 11112.062 0v0z"
        stroke="#F33535"
        strokeWidth={10.1875}
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M66.219 94.234A20.376 20.376 0 0145.844 73.86v-2.546a5.093 5.093 0 015.093-5.094 20.375 20.375 0 0120.376 20.375v2.547a5.094 5.094 0 01-5.094 5.093v0zM112.062 66.219a5.093 5.093 0 015.094 5.094v2.546a20.375 20.375 0 01-20.375 20.375 5.094 5.094 0 01-5.094-5.093v-2.547a20.375 20.375 0 0120.375-20.375zM71.313 117.156h20.374"
        stroke="#F33535"
        strokeWidth={10.1875}
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  )
}
