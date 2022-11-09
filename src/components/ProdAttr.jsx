
import React, { useState} from "react";

export default function ProdAttr(props){
   

    return(
    <>
        {props.item && props.item.type ==="text" ?
            
            <React.Fragment key={props.index} >
                {props.index===0 && <h2 className="attributes-name"> {props.item.name} </h2>}
                    <input type="radio" value={props.x.value} id={props.x.value+props.item.name} name="attr" onClick={(e)=> props.onClick(e.target.value)}/>
                    <label  htmlFor={props.x.value+props.item.name}> {props.x.value}  </label>   
            </React.Fragment>

        :   
        <React.Fragment>
            <input type="radio" value={props.x.value} id={props.x.value} name="attr" onClick={(e)=> props.onClick(e.target.value)}/>
            <label  htmlFor={props.x.value} className="label"> 
                <div 
                    style={{backgroundColor: props.x.value, width:32, height:32 }} 
                    onClick ={props.onClick}
                    key={props.index}
                >
                </div>
            </label>
        </React.Fragment>
      
        }
    </>
    )

}