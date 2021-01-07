function Icon({ ...props }) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="20"
      height="21"
      fill="none"
      viewBox="0 0 20 21"
    >
      <path
        fill="#58636D"
        d="M10 6.966c.917 0 1.667-.784 1.667-1.742S10.917 3.483 10 3.483s-1.667.783-1.667 1.741c0 .958.75 1.742 1.667 1.742zm0 1.74c-.917 0-1.667.785-1.667 1.742 0 .958.75 1.742 1.667 1.742s1.667-.784 1.667-1.742c0-.957-.75-1.741-1.667-1.741zm0 5.225c-.917 0-1.667.784-1.667 1.741 0 .958.75 1.742 1.667 1.742s1.667-.784 1.667-1.742c0-.957-.75-1.741-1.667-1.741z"
      ></path>
    </svg>
  )
}

export default Icon