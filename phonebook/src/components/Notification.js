const Notification = ({message}) => {
    if (message.message === '') {
        return null
    }
    return (
        <div className={message.style}>
            {message.message}
        </div>
    )
}

export default Notification