import React from "react";
import "./Programs.css";
import { programsData } from "../../data/programsData";
import RightArrow from '../../assets/rightArrow.png';
const Programs = () => {
  return (
    <div className="Programs" id="programs">
      {/* program header */}
      <div className="program-header">
        <span className="stroke-text">Explore our</span>
        <span>Program</span>
        <span className="stroke-text">to shape you</span>
      </div>
      <div className="program-categories">
      
        {programsData.map((program,index) => 
          <div className="category" key={index}>
            {program.image}
            <span>{program.heading}</span>
            <span>{program.details}</span>
            <div className="join-now"><img src={RightArrow} alt="" /></div>
          </div>
        )}
      </div>
    </div>
  );
};

export default Programs;
