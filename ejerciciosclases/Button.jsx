const Button = ({label, bg}) => <button style = {{backgroundColor: bg}} onClick={() => console.log('click')}>{label}</button>
export default Button