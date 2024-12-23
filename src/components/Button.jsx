export default function Button({type, label}){
  return (
          <button className={type!=="cancel" ? "defaulButton": "cancelButton"}>
              {label}
              </button>
  )
}