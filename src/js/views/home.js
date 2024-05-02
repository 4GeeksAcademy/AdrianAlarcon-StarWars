import React, { useEffect, useContext } from "react";
import "../../styles/home.css";
import { Link } from "react-router-dom";
import { Context } from "../store/appContext";
import { GenericCard } from "../component/genericCard";

export const Home = () => {
	const { store, actions } = useContext(Context);

	return (
		<div className="container">
			<div className="row text-white mt-3">
				<h2>Characters</h2>
			</div>
			<div className="row text-white mt-3 d-flex-column">
				{store.characters.map((character, index) => (
					<GenericCard key={index} body={character}></GenericCard>
					// <p key={index}>{character.name}</p>
				))}
			</div>
			<div className="row text-white mt-3">
				<h2>Planets</h2>
			</div>
			<div className="row text-white mt-3">
				{ /** listado planets */}
			</div>
			<div className="row text-white mt-3">
				<h2>Vehicles</h2>
			</div>
			<div className="row text-white mt-3">
				{ /** listado vehicles */}
			</div>
		</div>
	)
};
