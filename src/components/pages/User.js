const User = (propes) => {

    const { obj } = propes;
    console.log(obj, " obj")
    return (
        <div>
            User Data Found
            {/* <p>name: {obj.name}</p>
            <p>age: {obj.age}</p> */}
        </div>
    )
}

export default User;