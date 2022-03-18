import { useState } from "react";

function Employee (){

    const [data, setData] = useState([]);
    const [emp, setEmp] = useState("");

    const loadEmployee = async() => {
        const response = await fetch("/api/employees");
        const data = await response.json();
        setData(data);
    }

    const submitEmp = async() => {
        const response = await fetch("/api/employees", {
            method:"POST",
            body:JSON.stringify(emp),
            headers:{
                "Content-Type":"application/json"
            }
        })
        const data = await response.json();
        console.log(data);
    }
    return(
        <div>
            <input type="text" value={emp} onChange={e=>setEmp(e.target.value)} />
            <button onClick={submitEmp}>Submit Employee</button>
            <button onClick={loadEmployee}>Load Employees Data</button>
            {data.map((value, index)=>{
                return(
                    <div key={index}>
                        <h1>{value.name}</h1>
                    </div>
                )
            })}
        </div>
    )
}

export default Employee