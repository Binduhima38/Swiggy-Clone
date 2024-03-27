import UserData from "./User";
import UserDataWithClass from "./UserWithClassBase";
const About = () => {
    return (
        <div>
            <UserData Title={'This is function based component'} Description={'Funtion based component practice'}/>
            <UserDataWithClass Title={'This is class based component'} Description={'class based component practice'}/>
        </div>
    )
}

export default About;