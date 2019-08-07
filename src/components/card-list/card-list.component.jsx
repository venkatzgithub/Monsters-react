import React from 'react';
import {Card} from '../card/card.component';
import './card-list.styles.css';
export const Cardlist = (props)=>{
    console.log(props);
return <div className="card-list">
{props.monster.map(monster=><Card key={monster.id} monster={monster}> </Card>)}</div>; };