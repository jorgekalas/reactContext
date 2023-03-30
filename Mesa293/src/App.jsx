import "./App.css";
import React, { useState } from "react";
import LanguageContext, { languages } from "./context";
import Navbar from "./components/Navbar";
import Body from "./components/Body";

function App() {
	const [language, setLanguage] = useState(languages.english);

	const handleChangeLA = () => {
		language === languages.english && setLanguage(languages.spanish);
		language === languages.spanish && setLanguage(languages.english);
	};

	return (
		<div className="App">
			<>
				{/* SUGERENCIA: Agregue el Provider de LanguageContext */}
				<LanguageContext.Provider value={{language, handleChangeLA}}>
					<Navbar />
					<Body />
				</LanguageContext.Provider>
			</>
		</div>
	);
}

export default App;
