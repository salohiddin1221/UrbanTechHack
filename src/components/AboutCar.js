import React from "react";
import { CarData } from "../data/CarData";
import img from "./assets/damas.jpg";
import "./aboutCarStyle.css";
const AboutCar = () => {
     return (
          <div className="aboutCar-container">
               <div className="about-car-top">
                    <div className="car-image">
                         <img src={img} alt="" />
                    </div>
                    <div className="top-text">
                         <h1>Model: {CarData[0].model}</h1>
                         <h1>Turgan manzili: {CarData[0].address}</h1>
                         <h1>Telefon Raqam: {CarData[0].phone}</h1>
                         <h1>Avtomobil Raqami: {CarData[0].carNumber}</h1>
                         <h1>Dorilar Ro'yxati:</h1>
                         <ul>
                              {CarData[0].drugs.map((drug, index) => (
                                   <li key={index + 1}>{drug.name}</li>
                              ))}
                         </ul>
                         <h1>Navbatchi Shifokorlar:</h1>
                         <ul>
                              {CarData[0].carDoctors.map((doctor, index) => (
                                   <li key={index + 1}>
                                        {doctor.name} {doctor.surname}
                                   </li>
                              ))}
                         </ul>
                    </div>
               </div>
          </div>
     );
};

export default AboutCar;
