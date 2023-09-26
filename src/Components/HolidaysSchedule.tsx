import React, { useState } from 'react';
import {  Col, Row, Table } from 'antd';
import type { ColumnsType } from 'antd/es/table';
import {MoreOutlined } from "@ant-design/icons";
import "../Styles/HolidaysSchedule.css"

interface DataType {
  key: React.Key;
  title: string;
  date: string;
  createdBy: string;
}

const names=["Mohamed Ail","Ahmed Mohamed","Karim Rafaat","Tarek Ali","Khaled Omar"];


const columns: ColumnsType<DataType> = [
  {
    title: "Holiday Title",
    dataIndex: 'title',    
    render(value,record,index){
        return(
            <>
            { (index===0) ?(<p style={{color:"#C1C1C1",fontSize:"14px",marginTop:"6px",position:"absolute",paddingLeft:"2px",top:"-41%"}}>Type</p>):("")}

            <p style={{fontWeight:600,fontSize:"16px",margin:"0px"}}>Gregorian New Year</p>
            <p style={{color:"#C1C1C1",fontSize:"14px",marginTop:"1px",marginBottom:"0px"}}>Federal Holiday</p>
            </>
        )
    }
  },
  {
    title: 'Start Date',
    dataIndex: 'date',
    render(value,record,index){
        return(
            <>
            { (index===0) ?(<p style={{color:"#C1C1C1",fontSize:"14px",marginTop:"6px",position:"absolute",paddingLeft:"2px",top:"-41%"}}>Duration</p>):("")}

            <p style={{fontWeight:600,fontSize:"16px",margin:"0px"}}>01/01/2023</p>
            <p style={{color:"#C1C1C1",fontSize:"14px",marginTop:"1px",marginBottom:"0px"}}>1</p>
            </>
        )
    }
  },
  {
    title: 'Created by',
    dataIndex: 'createdBy',
    render(value,record,index) {
        return (
            <>
            
               { (index===0) ?(<p style={{color:"#C1C1C1",fontSize:"14px",marginTop:"6px",position:"absolute",paddingLeft:"2px",top:"-41%"}}>Created On</p>):("")}
            
            
                    <Row justify={"space-between"} align={"middle"}>
                    <Col>
                    <p style={{fontWeight:600,fontSize:"16px",margin:"0px"}}>{names[index]}</p>
                    <p style={{color:"#C1C1C1",fontSize:"14px",marginTop:"1px",marginBottom:"0px"}}>MM/DD/YY, 4:00 PM</p>
                    </Col>
                    <Col>
                    { (index===0) ?(<MoreOutlined style={{ position:"absolute",top:"-272%",width:"30px",height:"30px",padding:"4px",fontSize:"24px",cursor:"pointer",backgroundColor: "white",borderRadius:"50%"}}/>):("")}
                <MoreOutlined style={{ width:"30px",height:"30px",padding:"4px",fontSize:"24px",cursor:"pointer",backgroundColor: "rgb(245, 245, 245)",borderRadius:"50%"}}/>
                    </Col>
                </Row>
                   
           
    
    </>
        );
    }
  },
];

const data: DataType[] = [];
for (let i = 0; i < 5; i++) {
  data.push({
    key: i,
    title: ``,
    date: "",
    createdBy: ``,
  });
}

const HolidaysSchedule=()=>{

    const [selectedRowKeys, setSelectedRowKeys] = useState<React.Key[]>([]);
  
  
    const onSelectChange = (newSelectedRowKeys: React.Key[]) => {
      console.log('selectedRowKeys changed: ', newSelectedRowKeys);
      setSelectedRowKeys(newSelectedRowKeys);
    };
  
    const rowSelection = {
      selectedRowKeys,
      onChange: onSelectChange,
    };
  
    return (
      <div style={{width:"100%", display:"block"}} >
        <Table bordered={false} style={{width:"100%"}} pagination={false} rowSelection={rowSelection} columns={columns} dataSource={data} />
      </div>
    );
  };

export default HolidaysSchedule;