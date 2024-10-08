import React from "react"
import ReactDOM from "react-dom/client"
import Header from "./components/Header"
import Main from "./components/Main"
import Footer from "./components/Footer"

const root = ReactDOM.createRoot(document.getElementById("root"))
root.render(<App/>)

function App(){
    return (
        <>
        <Header/>
        <Main/>
        <Footer/>
        </>
    )
}




/* Challenge: 

This webpage was created by inserting HTML elements into the DOM with vanilla JS. Your task is to convert the JS into React JSX and render it to the page with React. Here's what we want: 

        1. The page should be rendered by a single functional React component, which is composed of 
           other functional components and elements, written in JSX.
        
        2. The final result should be indistinguishable from the current page (unless you're doing 
           a bonus challenge).
        
        3. All of the current JS should be deleted by the end. 
        
        4. The code should be modular and well-organized.
*/






