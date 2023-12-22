const Button = (props) => {
  const {children, onClick = () => {}} = props

  return (
    <button className="px-3 py-2 rounded-md text-white bg-green-700 hover:bg-green-800" onClick={onClick}>
      {children}
    </button>
  )
}

export default Button