import React, { useState } from 'react';
import "./App.css"

export default function App() {
  const box=[]
    for(let i = 1;i<=16;i++){
        box?.push({id:i,active:false,number:null})
    }
  const [boxes,setBoxes]= useState([...box])
  const [queue,setQueue]=useState([])
  const [number,setNumber]=useState(1)





  function setBox(id){
    let rid = null;

    if(queue?.find(q=>q === id)){
      return
    }

    if(queue?.length >= 2){
      rid = queue[0]
      setQueue(queue=>[...queue,id].filter(q=>q !== rid))
      
      
    }
    else{
      setQueue(queue=>[...queue,id])
    }
    setBoxes(boxes=>{
      return boxes?.map(box=>{
        if(rid !== null && box?.id === rid)return {...box,active:false}
        if(box?.id === id)return {...box,active:true,number:number}
        return box
      })
    })
    setNumber(prev=>prev+1)
    
  }



  return (
    <div className='container'>
      <h1>Matrix Game</h1>
       <div className='boxes'>
      {
        boxes?.map(box=>{
          return <div className={box?.active ? "red-box":"box"} onClick={()=>setBox(box?.id)} key={box?.id}>
            {
              box?.number?`#Box : ${box?.number}`:""
            }
          </div>
        })
      }
    </div>
    </div>
   
  )
}
