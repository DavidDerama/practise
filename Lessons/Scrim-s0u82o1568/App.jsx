import React from "react"
import Message from "./components/Message"
import Header from "./components/Header"
import Footer from "./components/Footer"

export default function App() {
	const passCode = "1001"

	const [userInput, setUserInput] = React.useState({
		charOne: "",
		charTwo: "",
		charThree: "",
		charFour: "",
	})
	
	const [verified, setVerified] = React.useState(undefined)
	
	function handleChange(event){
		const {name, value} = event.target
		setUserInput(prev => ({...prev, [name] : value}))
	}
	
	function handelSubmit(event){
		event.preventDefault()
		const inputPassCode = parseInt(Object.values(userInput).join(""))
		inputPassCode === parseInt(passCode) ? setVerified(true) : setVerified(false)
	}

/* Challenge

	The verification code form doesn't yet check the user's input. Your job is to finish setting it up as follows: 
	
		1. When the user types a character in one of the password inputs, the corresponding 
		   property of the userInput state object should be updated, while preserving the other properties. Note that the property names and the names of the inputs match each other (charOne, charTwo, etc.)
		   
		2. When the user clicks the submit button, a submit handling function should prevent the 
		   page from refreshing and check if the combination of the four characters stored in userInput equals the passCode value (declared on line 7 above).
		   
		3. If they match, the verified state value should be set to true. Otherwise, it should 
		   be set to false. 
		   
		4. Your code should be as DRY as possible!
*/

	return (
		<div className="wrapper">
			<Header />

			<form onSubmit={handelSubmit}>
			
				<Message status={verified} />

				<div>
					<input
						required
						type="password"
						name="charOne"
						onChange={handleChange}
						value={userInput.charOne}
					/>

					<input 
						required 
						type="password" 
						name="charTwo" 
						maxLength="1" 
						onChange={handleChange}
						value={userInput.charTwo}
					/>

					<input 
						required 
						type="password" 
						name="charThree" 
						maxLength="1" 
						onChange={handleChange}
						value={userInput.charThree}
					/>

					<input 
						required 
						type="password" 
						name="charFour" 
						maxLength="1" 
						onChange={handleChange}
						value={userInput.charFour}
					/>
					
				</div>

				<button disabled={verified}>Submit</button>
			</form>

			<Footer />
		</div>
	)
}
