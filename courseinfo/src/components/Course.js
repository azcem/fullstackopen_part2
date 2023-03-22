const Header = ({ course }) => <h1>{course}</h1>

const Total = ({ sum }) => <p>Number of exercises {sum}</p>

const Part = ({ part }) => 
  <p>
    {part.name} {part.exercises}
  </p>

const Content = ({ parts }) => {
  return (
    <>
      {parts.map(part => <Part part={part} key={part.id}/>)}
    </>
  )
}

const Course = ({course}) => {
  return(
  <>
    <Header course={course.name}/>
    <Content parts={course.parts}/>
    <Total sum={course.parts.reduce((sum, a) => sum + a.exercises, 0)}/>
  </>
  )
}
export default Course