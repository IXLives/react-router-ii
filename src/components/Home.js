import React from "react";

export default function(props) {
  const randomTrinket = () => {
    const randomId = Math.floor(Math.random() * props.data.length)
    props.history.push(`/trinket/${randomId}`)
  }

  return (
  <div>
    <h3>Welcome!</h3>
    <button className = 'randomButton' onClick = {randomTrinket}>Random Trinket</button>
  </div>
 
  );

}
