import React from "react";
import { CarouselItem } from "./CarouselItem";



export const Carousel =() =>{
    const items =[

        {
            description: "dsdsds",
            icon: require("./image/the-founder.jpg")
        },
        {
            description: "dsdsds",
            icon: require("./image/the-founder.jpg")
        },
        {
            description: "dsdsds",
            icon: require("./image/the-founder.jpg")
        }



        
    ]


    return <div className="carousel"> 
    <div className="inner">
    {items.map((item)=>{
        return < CarouselItem item ={item}/>;
    })}
    
    </div>
    </div>
};