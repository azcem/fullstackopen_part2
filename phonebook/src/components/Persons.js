import Person from "./Person";

const Persons = ({persons, deleteName}) => {
    return persons.map(person => <Person person={person} deleteName={deleteName(person.id)} key={person.id}/>)
}

export default Persons