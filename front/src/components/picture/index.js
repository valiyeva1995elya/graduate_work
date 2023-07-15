import React from 'react'
import { useEffect, useState } from "react";
import { useParams, useNavigate } from "react-router-dom";
import { Link } from "react-router-dom";

export default function Picture() {
    const universityId = useParams();
    const [university, setUniversity] = useState(Object);
    const navigate = useNavigate();
    const BASE_URL = "http://localhost:8080";

    const getUniversity = async (id) => {
        await fetch(BASE_URL + `/universities/${id}`)
          .then((res) => res.json())
          .then(
            (result) => {
              
              setUniversity(result);
            },
            (error) => {
              
              console.log(error);
            }
          );
      };


  useEffect(() => {
    if (universityId) {
      getUniversity(universityId.id);
    }
  }, [universityId]);
  return (
    <div style={{width: "100vw", height: "100vh", display: "flex", justifyContent: "center", alignItems: "center", backgroundColor:"black", cursor:"pointer"}} >
        
        <img src={university.img} alt="" style={{width: "80%", height: "auto"}} onClick={() => navigate(`/university/${university._id}`)} />
    </div>
  )
}
