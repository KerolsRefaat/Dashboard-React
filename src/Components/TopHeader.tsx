import { Header } from "antd/es/layout/layout";
import {Row,Col,Input,} from "antd";
import {SearchOutlined,BellOutlined,MoreOutlined,GlobalOutlined } from "@ant-design/icons";
import ToggleBtn from "./ToggleBtn";
import "../Styles/Search.css";

const TopHeader = () => {
const apple=<svg width="31" height="41" viewBox="0 0 41 41" fill="none" xmlns="http://www.w3.org/2000/svg" xmlnsXlink="http://www.w3.org/1999/xlink">
<circle cx="20.5" cy="20.5" r="20" fill="url(#pattern0)"/>
<defs>
<pattern id="pattern0" patternContentUnits="objectBoundingBox" width="1" height="1">
<use xlinkHref="#image0_10_426" transform="scale(0.025)"/>
</pattern>
<image id="image0_10_426" width="40" height="40" xlinkHref="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACgAAAAoCAYAAACM/rhtAAAACXBIWXMAAAsTAAALEwEAmpwYAAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAAOPSURBVHgBxZhbSJNhGMef2UFilafSBMuJBNJkJQkd2ApM0puQutDLXSh0EYRXIhi0DSKCKHVEtjAciFcdbr1xOaN5NbwYY+Cg5dhKpjKNDSnZnp53m7Zs7nu/b+/sBz9F9x7++w7vSQXKOEJeJg3kBVJHniSPkioyRn4lw+Rn8iPpIhGKDAszQkYzncmRhR0nNVAE6si3ZFJBsFy+IatAEHfIb4KCZRsgb0EBlJKvihBst48h/dzKooz8pLTTlpYWHB0dxd7eXt467zMXhItDkH7zFIUbHBzERCKBjP7+fjl1WUiuKzmiNNzQ0BBm09jYKLeNp1LhjErDlZaWYjQa3Qlnt9tRYVs39gp3CtJvlqKGOzo6dsJ5vV6sq6tTGtBPHtsOdSAr4AvyOiikubkZ1Go1TExMQF9fH6ytrYFCKkk1OZ39z0ZQeOWK5E+ylgUryQR8ALxfr7ISTCYTzM/PQzgcBrfbDWNjY6DVanfKGAwGGB4ehmAwCFtbW7C6ugozMzNgNBp5uzlM3tv+4yC5wvPNOjs7kTrDvVhcXMSlpSXMh8vlwqqqKp6rGIHMsHONJ5xGo8FYLIYisFqtvLearZLgIU9hj8eDInA6nVhWVsYb8D4LOC1VsL29HUUQCASwurpazstiZy/JaZCgq6sLRGA2myESicipomUBz0iV0ul0IIK5uTmQSS0LqJYqVVFRASJgw45MqllAlCpVUlICIigvLweZqFjPP6RKLS8vgwhaW1tBJt9ZwBWpUn6/H0QwMDAAMgmyxQIbqM/lK1VTUyPkTW5oaACVSgWzs7O8VZzsB5uH845HNP8izakoCpvNhvX19Tzj4F0WUM9REB0OB4qkra2NJ+B5FpCtHCQ34nSLURRsRuEI9yX7Xj+RqkDPDtLSCkXAuduzZAc8SyakKun1ekwmk1gIPp+PJ9wvyHFEMs5RES0WCyplfX09tWzj6McKOTgB6RMpyQYmJydzBgiFQqkNUzwe/+cztlfu7u7mCRcgj8Me3OQJyJ5HWvanrsjGxgZOTU1hU1PTX5/39PTgwsICbm5upn6zJRtP2+QlkOAZZ0PF0AwcsOnvw38I9xJkwA5y3u1juNfwZ4fJDdtRPdqHcBYokNtQwJFIHj2QnmaFwJbUNhBzBByH9KHlYSgCGvI5cI6XuwyRJpB5Ni376DWLi+QV8ipZnwnPTsjYlLmSCeQl3aSD9IECfgP48kirItcdewAAAABJRU5ErkJggg=="/>
</defs>
</svg>

    return (
    <Row justify="space-between" align={"middle"} style={{ paddingLeft: "50px", paddingRight: "50px", background: "white", width: "100%",}}>
      
      <Col span={4}>
        <div style={{ width: "25%" }}>
          <h1 style={{ margin: "0" }}>Consultants</h1>
          <h1 style={{ margin: "0" }}>Valley</h1>
        </div>
      </Col>

      <Col span={8}>
        <Input
          style={{
            padding: "9px",
            width: "100%",
            backgroundColor: "#f5f5f5",
            border: "1px solid #e4e0e0 ",
            borderRadius: "10px",
          }}
          prefix={<SearchOutlined style={{ fontSize: "16px", border: "0px" }}/>}
          placeholder={"Search"}
        />
      </Col>

      <Col span={7} >
        <Row justify={"space-between"} align={"middle"}>
            
        <ToggleBtn/>
        <GlobalOutlined style={{fontSize:"17px", margin:" 0",cursor:"pointer"}}/>
        <div style={{position:"relative"}}>
        <BellOutlined style={{fontSize:"17px",cursor:"pointer",}}/>
        <svg style={{padding:"3px",position:"absolute",height:"5px",width:"5px",right:" -17%",top:"-10%",background:"red",borderRadius:"50%"}} width="15" height="16" viewBox="0 0 5 6" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M4.46875 5.25V6H0.65625V5.35547L2.50781 3.33594C2.71094 3.10677 2.87109 2.90885 2.98828 2.74219C3.10547 2.57552 3.1875 2.42578 3.23438 2.29297C3.28385 2.15755 3.30859 2.02604 3.30859 1.89844C3.30859 1.71875 3.27474 1.5612 3.20703 1.42578C3.14193 1.28776 3.04557 1.17969 2.91797 1.10156C2.79036 1.02083 2.63542 0.980469 2.45312 0.980469C2.24219 0.980469 2.0651 1.02604 1.92188 1.11719C1.77865 1.20833 1.67057 1.33464 1.59766 1.49609C1.52474 1.65495 1.48828 1.83724 1.48828 2.04297H0.546875C0.546875 1.71224 0.622396 1.41016 0.773438 1.13672C0.924479 0.860677 1.14323 0.641927 1.42969 0.480469C1.71615 0.316406 2.0612 0.234375 2.46484 0.234375C2.84505 0.234375 3.16797 0.298177 3.43359 0.425781C3.69922 0.553385 3.90104 0.734375 4.03906 0.96875C4.17969 1.20312 4.25 1.48047 4.25 1.80078C4.25 1.97786 4.22135 2.15365 4.16406 2.32812C4.10677 2.5026 4.02474 2.67708 3.91797 2.85156C3.8138 3.02344 3.6901 3.19661 3.54688 3.37109C3.40365 3.54297 3.24609 3.71745 3.07422 3.89453L1.84375 5.25H4.46875Z" fill="white"/>
        </svg>
        </div>
       

       <span style={{marginTop: "2%",cursor:"pointer"}}>
       {apple}
       </span>
       <Col >
        <div style={{padding:"1% 0%"}}>
            <p style={{fontSize:"16px" , fontWeight:"bold", marginBottom:"0px",cursor:"pointer"}}>Google</p>
            <p style={{fontSize:"14px" ,fontWeight:"500", color:"#616161", marginTop:"5px" ,cursor:"pointer"}}>Business Account</p>
        </div>
       </Col>
       <Col>

       </Col>

        </Row>
        </Col>
        <MoreOutlined style={{ fontSize:"24px", color:"#222222",cursor:"pointer"}}/>


      <Header style={{ padding: 0, background: "white", height: "113px" }}></Header>
    </Row>
  );
};

export default TopHeader;
