import { useState } from "react"
import Dropdownlist from "./Dropdownlist"


function Topbar() {
  const [ newdropdownlist, setnewdropdownlist ]= useState(
    [
      {
        name: "LIVE CLASSES",
        list1: " Zen Class Live online Classes",
        details1: "LIVE Online Intension Program + 100% Placement Support",
        list2: "Full Stack Development Program(FSD)",
        details2: "Learn Javascript, HTML, CSS, Java, Data Structure, MongoDB & more",
        list3: "IIT-M Advance Proramming & Data Science Programs",
        details3: "Learn Python, Machine Learning, NLP, Tableau, PowerBI & more",
        list4: "Automation & Testing Program",
        details4: "Learn Selenium, Python, Java, Jenkins, Jmeter, API Testing & more",
        list5: "Explore More Programs",
        details5: "",
      },
      {
        name: "PRACTICE",
        list1: "CODEKATS",
        details1: "Sharpen your coding skills, prepare for interviews",
        list2: "WEBKATA",
        details2: "Build Basic Frontend and Backend Development skills",
        list3: "IDE-Online Compiler",
        details3: "Run and test your code in any Programming language",
        list4: "",
        details4: "",
        list5: "",
        details5: ""
      },
      {
        name: "RESOURCES",
        list1: "REWARDS",
        details1: "",
        list2: "REFERRAL",
        details2: "",
        list3: "FORUM SUPPORTS",
        details3: "",
        list4: "BLOGS",
        details4: "",
        list5: "",
        details5: ""

      },
      {
        name: "OUR PRODUCTS",
        list1: "Hackerkid",
        details1: "Coding classes platform for k-12 children",
        list2: "GUVI for corporates",
        details2: "Meet your hiring needs at ease",
        list3: "",
        details3: "",
        list4: "",
        details4: "",
        list5: "",
        details5: ""

      }

    ]
  )
console.log(newdropdownlist);
  return (
    <>
      <nav className="navbar navbar-expand-lg bg-body-tertiary">
        <div className="container-fluid p-6">
          <img className="navbar-brand" src="https://www.guvi.in/blog/wp-content/uploads/2022/04/Guvi-blog-logo.png">
          </img>
          <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavDropdown" aria-controls="navbarNavDropdown" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse d-flex justify-content-end" id="navbarNavDropdown">
            <ul className="navbar-nav">
              <li className="nav-item">
                <a className="nav-link active" aria-current="page" href="#">COURSES</a>
              </li>
              
              {newdropdownlist.map((list) => {
                 return (
                  <Dropdownlist
                    key={list.name}
                    setnewdropdownlist={setnewdropdownlist}
                    {...list}
                  />
                 );            
                   })}
           </ul>
        </div>
      </div>
    </nav >
        </>
    );
}

export default Topbar