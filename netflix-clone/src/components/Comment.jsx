import React from 'react'
import { ListGroup } from "react-bootstrap"

const Comment =(props)=> {
  return (
    <ListGroup.Item className="d-flex flex-column">
    <div className="d-flex align-items-center">
        <span className="font-weight-bold mr-1">{props.c.rate} / 5 </span>
        
    </div>
    <span>{props.c.comment}</span>
</ListGroup.Item>
  )
}

export default Comment