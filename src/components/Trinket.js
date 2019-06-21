import React from "react";
import {Route, NavLink} from 'react-router-dom';
import Description from './Description';
import Shipping from './Shipping';

export default function(props) {
  const item = props.data.find(i => String(i.id) === props.match.params.id);

  if (!item) {
    return <div>Loading...</div>
  }

  return (
    <div className="item-wrapper">
      <div className="item-header">
        <div className="image-wrapper">
          <img src={item.imageUrl} alt={item.name} />
        </div>

        <div className="item-title-wrapper">
          <h2>{item.name}</h2>
          <h4>${item.price}</h4>
        </div>
      </div>

      <nav className = 'trinket-nav'>
        <NavLink to = {`/trinket/${props.match.params.id}`} exact>Description</NavLink>
        <NavLink to = {`/trinket/${props.match.params.id}/shipping`} exact>Shipping</NavLink>
      </nav>

      <Route path = '/trinket/:id/shipping' render = {() => <Shipping shipping = {item.shipping}/>} />
      <Route exact path = '/trinket/:id' render = {() => <Description description = {item.description}/>} />
    </div>
  );
}
