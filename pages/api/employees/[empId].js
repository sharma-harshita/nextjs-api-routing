import { employees } from "../../../data/employee";

export default function handler(req, res){
    const {empId} = req.query;
    const emp = employees.filter(value => value.id === parseInt(empId));
    res.status(200).json(emp);
}