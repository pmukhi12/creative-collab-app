import React from "react";
import { Card } from "react-bootstrap";

// import query
function Event({setSelectedEvent}) {
return <Card onClick={()=>setSelectedEvent(null)} >Event</Card>
}

export default Event;

