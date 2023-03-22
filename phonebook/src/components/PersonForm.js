const PersonForm = ({newName, handleInputChange, addName}) => {
    return (
        <form>
            <div>
                name: <input value={newName} onChange={handleInputChange('name')}/>
            </div>
            <div>
                number: <input onChange={handleInputChange('number')}/>
            </div>
            <div>
                <button type="submit" onClick={addName}>add</button>
            </div>
        </form>
    )
}

export default PersonForm