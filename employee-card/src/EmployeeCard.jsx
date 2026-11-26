function EmployeeCard ({name,designation,salary}){
    return (
        <>
            <div>
                <h2>{name}</h2>
                <p>{designation}</p>
                <p>Salary : ₹{salary}</p>
            </div>
        </>
    )
}
export default EmployeeCard