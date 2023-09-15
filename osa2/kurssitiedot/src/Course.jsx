const Course = ({ course }) => {
    console.log(course.parts[1])
    return (
        <div>
            <h1>
                {course.parts[1].name}
            </h1>
        </div>
    )
}

export default Course