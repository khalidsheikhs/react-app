type ButtonProps = {
  children: React.ReactNode
  onClick?: () => void
}

function Button({ children, onClick }: ButtonProps) {
  return (
    <button className="bg-primary text-white px-4 py-2 rounded-lg" onClick={onClick}>
      {children}
    </button>
  )
}

export default Button