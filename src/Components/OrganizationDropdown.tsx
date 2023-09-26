import { Select } from "antd";

const OrganizationDropDown=()=>{
    const handleChange = (value: string) => {
        console.log(`selected ${value}`);
      };

    return(
      <div className="Organizations">
        <Select
       defaultValue="Microsoft (Default Organization)"
       style={{
        borderRadius: "5px",
        minHeight: "30px",
        minWidth: "22em",
        padding: "0px",
         }}
       onChange={handleChange}
       options={[
         { value: 'Microsoft (Default Organization)', label: 'Microsoft (Default Organization)' },
         { value: 'Google 2nd Generation', label: 'Google 2nd Generation' },
         { value: 'Twitter', label: 'Twitter' },
       ]}/>
      </div>       
    )
}

export default OrganizationDropDown;