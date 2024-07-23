import React from "react";
import "../../node_modules/bootstrap/dist/css/bootstrap.min.css";
import "../../node_modules/bootstrap/dist/js/bootstrap.bundle.min.js";
import "../index.css";
import leet from "../images/leetcode.png";
import forces from "../images/forces.png";
import rank from "../images/hackerrank.png";
import codeChef from "../images/codechef.png";
import gfg from "../images/gfg.png";
import Charts from "./Charts";
// import ArrowRightIcon from '@mui/icons-material/ArrowRight';

const colors=["#ccc","#ccc", "#ccc" ,"#ccc","#7f7","#7f7","#77ddbb","#77ddbb","#aaaaff","#aaaaff","#aaf","#f8f","#f8f","yellow","yellow"];



const Leetcode = (props) => {
  const { user,cf ,cfuser} = props;
  const leetdata = [
    ["Level", "Count", { role: "style" }],
    ["Easy", Number(user.easySolved), "green"], 
    ["Medium", Number(user.mediumSolved), "darkorange"], 
    ["Hard", Number(user.hardSolved), "red"]
  ];
  const cfdata=[
    ["Rating", "Count", { role: "style" }],
  ];
 
  let cfTotal =0;
  for(let i =800;i<=4000;i+=100){
      cfTotal+=cf.get(i);
      if(cf.get(i)>0){
         cfdata.push([i,cf.get(i),colors[(i-800)/100]]);
      }
  }
  // window.onresize = function(){ window.location.reload(); }
  return (
    <>
    <div className="cp">
      <div className="" id="cp-container">
        
          <div className="cp1">
            <div className="icon">
              <img src={leet} alt="leetcode" />
              <h2><a style={{textDecoration:"none"}} href="https://leetcode.com/u/Ajay_Bind/">Leetcode</a></h2>
            </div>
            <ul>
              <li>Total problem solved: <strong>{user.totalSolved}</strong></li>
              <li>
                Total Easy Solved: <strong>{user.easySolved}/
                {user.totalEasy}</strong>
              </li>
              <li>
                Total Medium Solved: <strong>{user.mediumSolved}/
                {user.totalMedium}</strong>
              </li>
              <li>
                Total Hard Solved: <strong>{user.hardSolved}/
                {user.totalHard}</strong>
              </li>
              <li>
                Global Problem Count Ranking: <strong>{user.ranking}</strong>
              </li>
            </ul>
            <div className="charts">
            <Charts data={leetdata}/>
            </div>
           
          </div>

          <div className="cp2">
            <div className="icon">
              <img src={forces} alt="codeforces" />
              <h2><a style={{textDecoration:"none"}}  href="https://codeforces.com/profile/Ajay_Bind">Codeforces</a></h2>
            </div>
            <ul className="cfdata">
              <li> Rating: <b>{cfuser.rating}</b></li>
              <li>
                Max Rating: <b>{cfuser.maxRating}</b>
            </li>
            <li>
                Rank:<b> {cfuser.rank}</b>
              </li>
              <li>
              Max Rank: <b>{cfuser.maxRank}</b>
              </li>
              <li>
              Total Problems: <b>{cfTotal}</b>
              </li>
            </ul>
            <div className="charts">
                <Charts data={cfdata}/>
            </div>
          </div>
          
          <div className="cp4">
            <div className="icon">
              <img src={gfg} alt="geeksforgeeks" />
              <h2 className="gfg">GeeksforGeeks</h2>
            </div>
            <div className="prof">
                <a target="blank" href="https://www.geeksforgeeks.org/user/adarshbind61/">
                <button className="profbtn btn btn-outline-light">Profile</button>
                </a>
            </div>
          </div>

          <div className="cp5">
            <div className="icon">
              <img src={codeChef} alt="codechef" />
              <h2 className="chef">CodeChef</h2>
            </div>
            <div className="prof">
                <a target="blank" href="https://www.codechef.com/users/ajay_bind">
                <button className="profbtn btn btn-outline-light">Profile</button>
                </a>
            </div>
          </div>

          <div className="cp3">
            <div className="icon">
              <img src={rank} alt="hackerrank" />
              <h2 className="hacker">Hackerrank</h2>
            </div>
            <div className="prof">
                <a target="blank" href="https://www.hackerrank.com/profile/adarshbind61">
                <button className="profbtn btn btn-outline-light">Profile</button>
                </a>
            </div>
          </div>
        </div>

        <div className="clear"></div>
        </div>
    </>
  );
};

export default Leetcode;
