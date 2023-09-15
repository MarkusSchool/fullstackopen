const Header = ({coursename}) => {
    return (
        <h1>{coursename}</h1>
    )
}

const Course = ({ course }) => {
    console.log(course.name)
    return (
        <div>
            <Header coursename={course.name}/>
        </div>
    )
}

export default Course