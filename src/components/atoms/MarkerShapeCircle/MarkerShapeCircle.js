export default function MarkerShapeCircle(props) {
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
      <path d="M 25 25 m -15, 0 a 15,15 0 1,0 30,0 a 15,15 0 1,0 -30,0" />
    </svg>
  )
}
