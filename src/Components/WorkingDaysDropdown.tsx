import { Select, } from "antd";
const WorkingDaysDropdown=()=>{

      const handleChange = (value: string) => {
        console.log(`selected ${value}`);
      };
    return(
        
        <div  className="weekDays">
        <Select
       defaultValue="Monday"
       style={{
           minHeight: "30px",
           minWidth: "23em",
           padding: "0px",
           borderRadius:"0px",
           borderColor:"#22222",
           borderBottom:"1px solid"
         }}
       onChange={handleChange}
       options={[
         { value: 'Monday', label: 'Monday' },
         { value: 'Tuesday', label: 'Tuesday' },
         { value: 'Wednesday', label: 'Wednesday' },
       ]}
     />
        </div>
      

           )
}
export default WorkingDaysDropdown;