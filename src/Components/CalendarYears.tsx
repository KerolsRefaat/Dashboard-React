import { Select } from "antd"

const CalendarYears=()=>{
    const handleChange = (value: string) => {
        console.log(`selected ${value}`);
      };
    return( 
    <div className="Organizations">
    <Select
   defaultValue="2023"
   style={{
    borderRadius: "5px",
    minHeight: "30px",
    width: "6em",
    padding: "0px",
     }}
   onChange={handleChange}
   options={[
     { value: '2023', label: '2023' },
     { value: '2022', label: '2022' },
     { value: '2021', label: '2021' },
   ]}
 />
    </div>
    )
}

export default CalendarYears;