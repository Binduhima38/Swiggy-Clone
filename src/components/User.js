const UserData = (props) => {
    const {Title,Description} = props
    return (   
        <div>
        <h1>{Title}</h1>
        <h2>{Description}</h2>
        </div>
    )
}
export default UserData;