const Header = ({ coursename }) => {
    return (
        <h1>{coursename}</h1>
    );
}

const Part = ({ part }) => {
    return (
        <p>
            {part.name} {part.exercises}
        </p>
    );
}

const Content = ({ courseparts }) => {
    return (
        <div>
            {courseparts.map((part) => (
                <Part key={part.id} part={part} />
            ))}
        </div>
    );
}

const Total = ({ courseparts }) => {
    const totalExercises = courseparts.reduce((total, part) => total + part.exercises, 0);
    return (
        <p>Total of {totalExercises} exercises</p>
    );
}

const Course = ({ course }) => {
    return (
        <div>
            <Header coursename={course.name} />
            <Content courseparts={course.parts} />
            <Total courseparts={course.parts} />
        </div>
    );
}

export default Course;