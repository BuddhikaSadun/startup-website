import React from "react";

function About({ about }) {
  return (
    <div className="p-40 border rounded-xl shadow-md bg-white m-5">
      <h2>{about.title}</h2>
      <p>{about.content}</p>
    </div>
  );
}

export default About;
