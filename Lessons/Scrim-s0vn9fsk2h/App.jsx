import React from "react"
import Header from "./components/Header"

export default function App() {
    
    const [userInput, setUserInput] = React.useState("")
    const [trackingReports, setTrackingReports] = React.useState([])
    
    const infractionMessage = "🚨🚨🚨 INFRACTION DETECTED! 🚨🚨🚨"
    
    if (trackingReports.length > 0) {
        if (trackingReports[trackingReports.length - 1].infractionDetected) {
            console.log(infractionMessage)
        }
    }

  function getTimeStamp() {
    const timeStamp = new Date()
    return (
      timeStamp.toLocaleTimeString([], {
        hour: "2-digit",
        minute: "2-digit",
        second: "2-digit",
        hour12: false,
      }) +
      "." +
      (timeStamp.getMilliseconds() / 1000).toFixed(3).slice(-3)
    )
  }
  
/* Challenge 

This company wants to spy on its employees. Your task is to help them do the following:

    1. Every time the user types in the textarea, the userInput and trackingReports states should 
       both be updated. 
       
            a. The value of userInput should be a string equaling whatever the user has typed in 
               the textarea (with one exception, discussed in task 2 below). 
            
            b. For the trackingReports state array, any previously-existing objects in the array 
               should be preserved, and a new object should be added to the end of the array. This object should contain three properties:
                    
             Property		 	          Value 				  
		    	╷----------------------╷-------------------------------------------╷
		      |  timeStamp           |  return value of getTimeStamp function    |
		    	|----------------------|-------------------------------------------|
		    	|  employeeInput       |  All of the current input in the textarea |
		    	|----------------------|-------------------------------------------|
		    	|  infractionDetected  |  If employeeInput contains the string     |
          |                      |  "Evil Corp.", true — otherwise, false	   |	
		    	¯¯¯¯¯¯¯¯¯¯¯¯¯¯¯¯¯¯¯¯¯¯¯¯¯¯¯¯¯¯¯¯¯¯¯¯¯¯¯¯¯¯¯¯¯¯¯¯¯¯¯¯¯¯¯¯¯¯¯¯¯¯¯¯¯¯¯¯
           
    2. If the user writes the string "Evil Corp." (in title case), the string should automatically 
       be replaced with "Good Corp." in both the userInput state and the textarea. 
       
    3. Test out the app by writing "Evil Corp. test" in the textarea. If you complete these tasks 
       correctly, you should get a console.log message every time you type a letter, and the messages should be like the ones in the sampleOutput.md file.
       
    4. You only need to write code below! None of the code above or elsewhere in the project should 
       be changed.
*/






React.useEffect(() => {
  if(userInput.includes("Evil Corp.")){
    setUserInput(prev => {
      const userInputArr = prev.split(" ")
      const userInputEdit =  userInputArr.map(word => {
        return word === "Evil" ? "Good" : word
      }).join(" ")
      setUserInput(userInputEdit)
      
    })
  }
}, [userInput])

function handleChange(e){
  const {value} = e.target
  setUserInput(value)
  setTrackingReports(prev => {
  return [...prev, {timeStamp: getTimeStamp(), employeeInput: userInput, infractionDetected: userInput.includes("Evil Corp.")}]
})
}


  return (
    <div>
      <Header />
      <textarea placeholder="Write your report here..." onChange={handleChange} value={userInput}/>
    </div>
  )
}