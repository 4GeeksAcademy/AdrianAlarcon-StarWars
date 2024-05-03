import React, { useEffect, useContext } from "react";
import "../../styles/home.css";
import { Link } from "react-router-dom";
import { Context } from "../store/appContext";
import { CharacterCard } from "../component/characterCard";
import { PlanetCard } from "../component/planetCard";
import { VehicleCard } from "../component/vehicleCard";

export const Home = () => {
	const { store, actions } = useContext(Context);

	return (
		<div className="container page-content">
			<div className="row text-white mt-3">
				<h2>Characters</h2>
			</div>
			<div className="text-white mt-3 d-flex horizontal-scroll">
				{store.characters.map((character, index) => (
					<CharacterCard key={index} body={character}></CharacterCard>
				))}
			</div>
			<div className="row text-white mt-3">
				<h2>Planets</h2>
			</div>
			<div className="text-white mt-3 d-flex horizontal-scroll">
				{store.planets.map((planets, index) => (
					<PlanetCard key={index} body={planets}></PlanetCard>
				))}
			</div>
			<div className="row text-white mt-3">
				<h2>Vehicles</h2>
			</div>
			<div className="text-white mt-3 d-flex horizontal-scroll">
				{store.vehicles.map((vehicles, index) => (
					<VehicleCard key={index} body={vehicles}></VehicleCard>
				))}
			</div>
		</div>
	)
};
