
import React, { useState} from "react";

export default function ProdAttr(props){
    const [click, setClick] = useState(false)

    return(
    <>
        {props.item.type ==="text" ?
            <React.Fragment key={props.index} >
                {props.index===0 && <h2 className="attributes-name"> {props.item.name} </h2>}
                <p onClick={() => (props.onClick(), setClick(!click))} className={true && "clicked"}> {props.x.value}  </p>
            </React.Fragment>
        :
            <div 
                style={{backgroundColor: props.x.value, width:32, height:32 }} 
                onClick ={props.onClick}
                key={props.index}
            >
            </div>
        }
    </>
    )

}