const Header = ({coursename}) => {
    return (
        <h1>{coursename}</h1>
    )
}

const Content = ({courseparts}) => {
    console.log(courseparts)
}

const Course = ({ course }) => {
    console.log(course.name)
    return (
        <div>
            <Header coursename={course.name}/>
            <Content courseparts={course.parts}/>
        </div>
    )
}

export default Course