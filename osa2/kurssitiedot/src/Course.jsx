const Part = (props) => {

    return (
        <p>
            {props.part.name} {props.part.exercises}
        </p>
    )

}

const Header = (props) => {

    return (
        <h1>
            {props.course.name}
        </h1>
    )
}

const Total = (props) => {

    const exercisesAmount = props.parts[0].exercises + props.parts[1].exercises + props.parts[2].exercises

    return (
        <div>
            Number of exercises {exercisesAmount}
        </div>
    )

}

const Content = (props) => {

    return (
        <div>
            <Part part={props.parts[0]} />
            <Part part={props.parts[1]} />
            <Part part={props.parts[2]} />
        </div>
    )

}
