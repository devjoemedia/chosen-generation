import React, { useEffect, useState } from "react";
import Read from "./Read";
import "./PrayerRequestSingle.css";
import axios from '../axios'
import { useParams } from "react-router";

function PrayerRequestSingle() {
  const [prayer, setPrayer] = useState([]);
  const {id} = useParams()
  
  useEffect(() => {
    async function fetchData() {
      const { data } = await axios.get(`/prayer-requests/${id}`);
      setPrayer(data.data);
      return data;
    }

    fetchData();
  }, [prayer,id]);
  return <Read from="prayer-request" prayerData={prayer} />; 
}

export default PrayerRequestSingle;
 
