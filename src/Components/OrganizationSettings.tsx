import { Button, Col, Input, Row, TimePicker } from "antd"
import { Content } from "antd/es/layout/layout"
import {DownOutlined ,SearchOutlined } from "@ant-design/icons";
import WorkingDaysDropdown from "./WorkingDaysDropdown"
import OrganizationDropDown from "./OrganizationDropdown"
import CalendarYears from "./CalendarYears"
import TimeZoneDropdown from "./TimeZoneDropdown";
import "../Styles/OrganizationSettings.css";
import HolidaysSchedule from "./HolidaysSchedule";


const OrganizationSettings=()=>{

return(
    <Content style={{margin: "24px 0px",marginRight:" 3%",padding: 24,paddingTop: "0px",width: "80%",background: "white",borderRadius: "15px"}}>
            
            <h2>Organization Settings</h2> 
            <hr style={{backgroundColor:"#EDEDED",height:"1px",border:"none"}} />

            <Row justify={"space-between"} align={"middle"}style={{backgroundColor: "#222222",width: "100%",height: "5%",padding: "0px 18px",borderRadius: "5px"}}>
              <Col>
                <h3 style={{ color: "white" }}>Organization</h3>
              </Col>
              <Col>
                <OrganizationDropDown/>
              </Col>
            </Row>

            <p style={{ fontSize: "16px", color: "#B3B3B3" }}>Business Operating Days</p>

            <Row justify={"space-between"} align={"top"} style={{ margin: "2% 0" }}>
              <Col>
                <Row justify={"space-between"} align={"middle"}>
                  <input type="checkbox" id="Monday"  value="Monday"/>
                  <label htmlFor="Monday" style={{ marginLeft:"2px", fontWeight: "600" }}>Monday</label>
                </Row>
              </Col>

              <Col>
                <Row justify={"space-between"} align={"middle"}>
                  <input type="checkbox" id="Tuesday"  value="Tuesday"/>
                  <label htmlFor="Tuesday" style={{ marginLeft:"2px", fontWeight: "600" }}>Tuesday</label>
                </Row>
              </Col>

              <Col>
                <Row justify={"space-between"} align={"middle"}>
                  <input type="checkbox" id="Wednesday"  value="Wednesday"/>
                  <label htmlFor="Wednesday" style={{ marginLeft:"2px", fontWeight: "600" }}>Wednesday</label>
                </Row>
              </Col>

              <Col>
                <Row justify={"space-between"} align={"middle"}>
                  <input type="checkbox" id="Thursday"  value="Thursday"/>
                  <label htmlFor="Thursday" style={{ marginLeft:"2px", fontWeight: "600" }}>Thursday</label>
                </Row>
              </Col>

              <Col>
                <Row justify={"space-between"} align={"middle"}>
                  <input type="checkbox" id="Friday"  value="Friday"/>
                  <label htmlFor="Friday" style={{ marginLeft:"2px", fontWeight: "600" }}>Friday</label>
                </Row>
              </Col>

              <Col>
                <Row justify={"space-between"} align={"middle"}>
                  <input type="checkbox" id="Saturday"  value="Saturday"/>
                  <label htmlFor="Saturday" style={{ marginLeft:"2px", fontWeight: "600" }}>Saturday</label>
                </Row>
              </Col>

              <Col>
                <Row justify={"space-between"} align={"middle"}>
                  <input type="checkbox" id="Sunday"  value="Sunday"/>
                  <label htmlFor="Sunday" style={{ marginLeft:"2px", fontWeight: "600" }}>Sunday</label>
                </Row>
              </Col>
            </Row>

            <Row justify={"space-between"} align={"top"}>

              <Col >
               <p style={{ fontSize: "16px", color: "#B3B3B3" }}>
                First Day of the Business Week
              </p>
              </Col>

              <Col >

              <div style={{paddingTop:"6%"}}>
                <p style={{ fontSize: "12px", color: "#B3B3B3" }}> First Day of the Week</p>

                  <WorkingDaysDropdown/>
              </div>
              
              </Col>

            </Row>

            <Row justify={"space-between"} align={"top"}>
              <Col>
              <p style={{ fontSize: "16px", color: "#B3B3B3" }}>
                Business Operating Hours
              </p>
              </Col>
              
              <Col >
                  <Row style={{width:"22.8em",paddingTop:"4%",marginBottom:"5%"}} justify={"space-between"} align={"middle"}>
                    <Col>
                    <p style={{ fontSize: "12px", color: "#B3B3B3" }}> Business Day Start Time</p>
                    </Col>
                    <Col>
                    <p style={{ fontSize: "12px", color: "#B3B3B3" }}> Business Day End Time</p>
                    </Col>
                  </Row>

                  <Row className="businessDay" justify={"space-between"} align={"middle"}>
                    <Col>
                    <TimePicker suffixIcon={<DownOutlined/> } style={{cursor:"pointer",boxShadow:"none",borderBottom:"1px solid #d9d9d9",borderRight:"0px", borderLeft:"0px", borderTop:"0px", borderRadius:"0px", marginRight:"15px", padding:"0px"}} use12Hours format="h:mm a"/>
                    </Col>
                    <Col>
                    <TimePicker suffixIcon={<DownOutlined /> } style={{cursor:"pointer",boxShadow:"none",borderBottom:"1px solid #d9d9d9",borderRight:"0px", borderLeft:"0px", borderTop:"0px", borderRadius:"0px", padding:"0px"}} use12Hours format="h:mm a"/>
                    </Col>
                  </Row>
              </Col>

            </Row>

            <Row justify={"space-between"} align={"top"} >

              <Col >
              <p style={{ fontSize: "16px", color: "#B3B3B3" }}>
                Business Operating Timezone
              </p>
              </Col>

              <Col style={{paddingTop:"1%"}} >
                <p style={{ fontSize: "12px", color: "#B3B3B3" }}> Timezone</p>
              <TimeZoneDropdown/>
              </Col>

            </Row>

            <Row justify={"space-between"} align={"middle"} style={{backgroundColor: "#222222",width: "100%",height: "5%",padding: "0px 18px",borderRadius: "5px",margin:"3% 0%"}}>
              <Col>
                <Row align={"middle"} >
                  <h3 style={{ color: "white", marginRight:"15px"}}>Public Holidays Schedule</h3>
                  <span style={{ color: "#B3B3B3", fontSize:"16px" }}>Total # of Days (10)</span>
                </Row>
              </Col>
              <Col>
                {/* dropdown */}
                <Row align={"middle"} >
                  <h3 style={{ color: "white", marginRight:"15px"}}>Calendar Year:</h3>
                  <CalendarYears/>
                </Row>
              </Col>
            </Row>

            <Row justify={"space-between"} align={"middle"}>
              <Col span={14}>
                  <Input
                    style={{
                      padding: "10px",
                      height: "5%",
                      width: "53%",
                      backgroundColor: "#f5f5f5",
                      border: "1px solid #e4e0e0 ",
                      borderRadius: "10px",
                      }}
                      prefix={<SearchOutlined style={{ fontSize: "16px", border: "0px" , paddingRight:"5%" }}/>}
                      placeholder={"Search"}
                  />
                  <Button className="newBtn" style={{height:"3em", width:"7.5em", marginLeft:"2.5%", borderRadius:"10px",backgroundColor:"#222222"}}>New</Button>
                  <Button className="deleteBtn" style={{height:"3em", width:"7.5em", marginLeft:"1.5%", borderRadius:"10px",backgroundColor:"white", border:"3px solid #222222"}}>Delete</Button>
              </Col>

              <Col>
                <Button className="deleteBtn" style={{height:"3em", width:"15.5em", borderRadius:"10px",backgroundColor:"white", border:"3px solid #222222"}}>Import Public Holidays</Button>
              </Col>
            </Row>
            <Row style={{marginTop:"2%"}}>
            <HolidaysSchedule/>
            </Row>
          </Content>
)
}

export default OrganizationSettings