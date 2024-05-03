import React, { useState, useEffect, useContext } from "react";

import { Context } from "../store/appContext";

import "../../styles/single.css";

export const SingleCharacter = () => {
	const { store, actions } = useContext(Context);
	const [fullName, setFullName] = useState();

	const info = store.infoCharacter;
	console.log("dentor de la view",info);

	return (
		<div className="container">
			<div className="bg-warning">
				{info.name}
			</div>
		</div>
	);
};
