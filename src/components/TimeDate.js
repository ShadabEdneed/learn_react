import React from 'react'

const TimeDate = () => {

    let currentDtae = new Date();
    currentDtae = currentDtae.getHours();
    let getTime = ""
    const stylecss = {}

    if(currentDtae > 1 && currentDtae < 12){
        getTime="Good Morning";
        stylecss.color = "red";
    }else if( currentDtae >= 12 && currentDtae < 20){
        getTime="Good afterNoon";
        stylecss.color="blue";
    }else if(currentDtae >= 20 && currentDtae <= 24){
        getTime="Good Night";
        stylecss.color = "green"
    }


    const Name = "Mohd shadab saifi"
  const date = new Date().toLocaleDateString();
  const time = new Date().toLocaleTimeString();
  return (
    <div className='container'>
        <h1 contentEditable="true">Hello <span style={stylecss}>{getTime}</span> <br/> I'm {Name} </h1>
        <h3>Date {date}</h3>
        <h3>Time {time}</h3>
     </div>
  )
}

export default TimeDate