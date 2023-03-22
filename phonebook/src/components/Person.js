const Person = ({person, deleteName}) => {
    return (
        <div>
            {person.name} {person.number}
            <button type="submit" onClick={deleteName}>delete</button>
        </div>
    )
}


export default Person