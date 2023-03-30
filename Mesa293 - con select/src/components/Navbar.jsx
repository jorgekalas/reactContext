import React, { useContext, useState } from "react";
import "../App.css";
import LanguageContext from "../context";

const Navbar = () => {
	// DICA: Descomente esse bloco de código, quando "App.jsx" tiver um provider
	// COnsejo: Descomentar este bloque de código, cuando "App.jsx" ya tenga un proveedor
	
    const[selectedValue, setSelectedValue] = useState("EN");
    
    const { language, handleChangeLA } = useContext(LanguageContext);

    const onSelectChange = (e) => {
        setSelectedValue(e.target.value)
    }

    handleChangeLA(selectedValue);

    console.log(selectedValue)

	return (
		<div className="navbar">
			{/* CONSEJO: Renderizar la información traida del contexto de forma dinamica */}
			<p>{language.text.home}</p>
			<p>
				{language.text.current} : {language.id}
			</p>
			{/* <button onClick={}>{language.text.button}</button> */}

			<label for="language-select">Change Language:</label>
			<select onChange={onSelectChange} id="language-select">
				<option value="ES">Spanish</option>
				<option value="EN" selected>English</option>
				<option value="PTBR">Portuguese</option>
			</select>
		</div>
	);
};

export default Navbar;
