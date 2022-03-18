import { employees } from "../../../data/employee"

export default function handler(req,res){
    console.log(req.body);
    if (req.method==="GET") {
        res.status(200).json(employees);
    } 
    else if (req.method==="POST"){
        const newEmp = {
            id:Date.now(),
            name:req.body
        }
        employees.push(newEmp)
        res.status(200).json(newEmp)
    }
}

