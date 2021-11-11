export default function MarkerShapePin(props) {
  return (
    <svg
      width={50}
      height={50}
      baseProfile="tiny"
      xmlns="http://www.w3.org/2000/svg"
      overflow="inherit"
      viewBox="0 0 50 50"
      fill="currentColor"
      stroke="currentColor"
      {...props}
    >
      <path d="M25.015 2.4c-7.8 0-14.121 6.204-14.121 13.854C10.894 23.906 25.015 49 25.015 49s14.122-25.094 14.122-32.746c0-7.65-6.325-13.854-14.122-13.854z" />
    </svg>
  )
}
