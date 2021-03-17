import React, { useEffect, useState } from "react";
import { useParams } from "react-router";
import Read from "./Read";
import axios from "../axios";

function MessageSingle() {
  const [message, setMessage] = useState([]);
  const { id } = useParams();

  useEffect(() => {
    async function fetchData() {
      const { data } = await axios.get(`/messages/${id}`);
      setMessage(data.data);
      return data;
    }

    fetchData();
  }, [message, id]);

  return <Read from="messages" messageData={message} />;
}

export default MessageSingle;
