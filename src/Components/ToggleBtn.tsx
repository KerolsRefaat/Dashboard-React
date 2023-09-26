import {Switch} from "antd";
import "../Styles/ToggleBtn.css"
import { useState } from "react";

const ToggleBtn=()=>{
    const [open, setOpen] = useState(true);
    const[theme,setTheme]=useState("Light")
    const onChange = (checked: boolean) => {
      setOpen(checked);

      if(open)
        setTheme("Dark")
    else{
        setTheme("Light")
    }


    };
return(
    <>

    <span style={{fontWeight:"bold"}}>{theme}
    <Switch onChange={onChange} checked={open} style={{ margin: 16 , width:"70px" }}  />
    </span>
    </>
)
}

export default ToggleBtn