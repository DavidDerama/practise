/**
Challenge: 

Part 1: Create a page of your own using a custom Page component

It should return an ordered list with the reasons why you're
excited to be learning React :)

Render your list to the page

 */

import React from "react"
import ReactDOM from "react-dom"



function ListEl(){
    return (
        <ol>
            <li>TEST</li>
            <li>TEST</li>
            <li>TEST</li>
        </ol>
    )
}


ReactDOM.render(
    <ListEl/>
, document.getElementById("root"))