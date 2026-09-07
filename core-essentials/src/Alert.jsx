import './Alert.css'

export const Alert = ({title, type = "success"}) => {
    const alertClass = type === "error" ? "alert-red" : "alert-green"

    return <>
        <div className={`alert ${alertClass}`}>{title}</div>
    </>
}