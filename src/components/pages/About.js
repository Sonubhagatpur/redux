import User from "./User";

const About = () => {
    const obj = {
        name: "sonu singh",
        age: 22,
    }
    return (
        <div>
            About
            < User obj={obj} />
        </div>
    )
}

export default About;