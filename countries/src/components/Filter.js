const Filter = ({value, onChange}) => {
    return (
        <div>
            find countries 
            <form>
                <input type='text' value={value} onChange={onChange}/>
            </form>
        </div>
    )
}

export default Filter