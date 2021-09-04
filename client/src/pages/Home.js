import React, { useState } from "react";
import EventContainer from "../components/EventContainer";
import { QUERY_EVENTS } from "../utils/queries";
import { useQuery } from "@apollo/client";
import Event from "../components/Event";

const Home = () => {
  const [selectedEvent, setSelectedEvent] = useState(null);

  const { loading, data } = useQuery(QUERY_EVENTS);

  return (
    <div className="container">
      {selectedEvent ? <Event setSelectedEvent ={setSelectedEvent} data={data} loading={loading}/> :  <EventContainer data={data} loading={loading} setSelectedEvent= {setSelectedEvent}/>}
    </div>
  );
};

export default Home;
