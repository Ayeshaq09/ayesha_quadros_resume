import React from "react";
import { FaLinkedin } from "react-icons/fa";
import { AiOutlineMail } from "react-icons/ai";
import pic from "./pic.jpeg";

const PersonalData = ({ name, emailid, phoneno, linkedinid }) => {
  return (
    <>
      <div className="top-row">
        <h1>{name}</h1>
        <hr className="white-border" />
        <div className="pic">
          <img src={pic} alt="profile-picture" />
        </div>

        <div>
          <AiOutlineMail className="email-icon" />
          <p className="inline">{emailid}&nbsp;|&nbsp;</p>
          <p className="inline">{phoneno}</p>
        </div>
        <FaLinkedin className="in-icon" />
        <p className="in-para">{linkedinid}</p>
      </div>
    </>
  );
};

export default PersonalData;
