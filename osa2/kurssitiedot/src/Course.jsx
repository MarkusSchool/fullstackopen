const Header = ({ coursename }) => {
    return (
        <h1>{coursename}</h1>
    )
}

const Part = (props) => {

    return (
        <p>
            {props.part.name} {props.part.exercises}
        </p>
    )

}

const Content = ({ courseparts }) => {
    console.log(courseparts)
    courseparts.map((part => console.log(part.name))) // get all part names
    return (
        <div>

        </div>
    )
}

const Total = ({ courseparts }) => {
    const totalExercises = courseparts.reduce((total, part) => total + part.exercises, 0);
    console.log('total exercises:', totalExercises)
}

const Course = ({ course }) => {
    console.log(course.name)
    return (
        <div>
            <Header coursename={course.name} />
            <Content courseparts={course.parts} />
            <Total courseparts={course.parts} />
        </div>
    )
}

export default Course