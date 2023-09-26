import { Button, Dropdown, MenuProps, Row, Space } from "antd";
import { DownOutlined} from "@ant-design/icons";
import { useState } from "react";

const TimeZoneDropdown=()=>{
    const [timeZone,setTimeZone]=useState("0")
    const handleMenuClick: MenuProps["onClick"] = (e) => {
        console.log("click", e.key);
        setTimeZone(e.key);
      };
    const flags=[ {
        label: "(GMT+2) Egypt",
        key: 0,
        icon: <img width="24" height="24" src="https://img.icons8.com/color/48/egypt.png" alt="egypt"/>,
      },
      {
        label: "(GMT+3) Saudi Arabia",
        key: 1,
        icon: <img width="24" height="24" src="https://img.icons8.com/fluency/48/saudi-arabia.png" alt="saudi-arabia"/>,
      },
      {
        label: "(GMT+3) Kuwait",
        key: 2,
        icon: <img width="24" height="24" src="https://img.icons8.com/color/48/kuwait.png" alt="kuwait"/>,
      },
        {
            label: "(GMT+4) United Arab Emirates",
            key: 3,
            icon: <img width="24" height="24" src="https://img.icons8.com/color/48/united-arab-emirates.png" alt="united-arab-emirates"/>,
          },];

    const items: MenuProps["items"] = [
        {
          label: "(GMT+2) Egypt",
          key: 0,
          icon: <img width="24" height="24" src="https://img.icons8.com/color/48/egypt.png" alt="egypt"/>,
        },
        {
            label: "(GMT+3) Saudi Arabia",
            key: 1,
            icon: <img width="24" height="24" src="https://img.icons8.com/fluency/48/saudi-arabia.png" alt="saudi-arabia"/>,
          },
          {
            label: "(GMT+3) Kuwait",
            key: 2,
            icon: <img width="24" height="24" src="https://img.icons8.com/color/48/kuwait.png" alt="kuwait"/>,
          },
          {
            label: "(GMT+4) United Arab Emirates",
            key: 3,
            icon: <img width="24" height="24" src="https://img.icons8.com/color/48/united-arab-emirates.png" alt="united-arab-emirates"/>,
          },
      ];

      const menuProps = {
        items,
        onClick: handleMenuClick,
        selectable: true,
        defaultSelectedKeys: ["0"],
        
      };

    return(

        <Dropdown menu={menuProps} className="Timezone" trigger={['click']} >
        <Button
          style={{
            borderTop: "0px",
            borderRight:"0px",
            borderLeft:"0px",
            minHeight: "30px",
            minWidth: "100%",
            padding: "0px",
            borderRadius:"0px",
            borderColor:"#22222",
          }}
        >
          <Space>
            <Row style={{width:"22.7em"}} align={"middle"}>
            {
                flags[parseInt(timeZone)].icon
            }
            <span style={{ marginLeft:"10px", fontSize: "16px", fontWeight: "600"}}>{flags[parseInt(timeZone)].label}</span>
                
            </Row>

            <DownOutlined style={{position:"absolute",right:"0px"}} />

          </Space>
        </Button>
      </Dropdown> 

    )
}
export default TimeZoneDropdown;