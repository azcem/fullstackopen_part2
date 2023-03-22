import { useState, useEffect } from 'react'
import Filter from './components/Filter'
import PersonForm from './components/PersonForm'
import Persons from './components/Persons'
import personsService from './services/persons'
import Notification from './components/Notification'

const App = () => {

  const [persons, setPersons] = useState([])
  const [newName, setNewName] = useState('')
  const [newNumber, setNewNumber] = useState('')
  const [search, setSearch] = useState('')
  const [message, setMessage] = useState({message: '', style: 'notification'})

  useEffect(() => {
    personsService
    .getAll()
    .then(persons => setPersons(persons))
  }, [])

  const handleInputChange = (type) => {
    if (type === 'name') return (event) => setNewName(event.target.value)
    else return (event) => setNewNumber(event.target.value)
  }
  

  const addName = (event) => {
    event.preventDefault()
    const newPerson = {name: newName, number: newNumber}
    if (persons.map(person => person.name).indexOf(newName) !== -1) {
      if (!window.confirm(`${newName} is already added to the phonebook, replace old number with the new one?`)) return
      const id = persons.filter(person => person.name === newName)[0].id
      personsService
      .update(id, newPerson)
      .then(personData => setPersons(persons.map(person => person.id === id? personData : person)))
      .catch(error => {
        handleMessage(`${newName} has already been deleted`, 'error')
      })
      handleMessage(`${newName} updated`)
    } else {
      personsService
      .create(newPerson)
      .then(person => setPersons(persons.concat(person)))
      handleMessage(`${newName} Added`)
    }
  }

  const handleSearch = (event) => {
    setSearch(event.target.value)
  }

  const handleDelete = (id) => {
    const deleteName = (event) => {
      const name = persons.filter(person => person.id === id)[0].name
      if (!window.confirm(`Delete ${name}?`)) return
      event.preventDefault()
      personsService
      .deletePerson(id)
      .then(status => {
        if (status === 200) setPersons(persons.filter(person => person.id !== id))
      })
      handleMessage(`${name} deleted`)
    }
    return deleteName
  }

  const handleMessage = (message, style='notification') => {
    setMessage({message, style})
    setTimeout(() => setMessage({message: '', style}), 2000)
  }

  const regex = new RegExp(search, 'i')
  const personsToShow = search === '' ? persons : persons.filter(person => regex.test(person.name))


  return (
    <div>
      <h2>Phonebook</h2>
      <Notification message={message}/>
      <Filter searchState={search} onChange={handleSearch}/>
      <h3>Add new</h3>
      <PersonForm addName={addName} newName={newName} handleInputChange={handleInputChange}/>
      <h3>Numbers</h3>
      <Persons persons={personsToShow} deleteName={handleDelete}/>
    </div>
  )
}

export default App