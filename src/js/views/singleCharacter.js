import React, { useState, useEffect, useContext } from "react";

import { Context } from "../store/appContext";
import "../../styles/single.css";

export const SingleCharacter = () => {
	const { store } = useContext(Context);
	const info = store.infoCharacter;
	console.log(store.characterImg);
	return (
		<div className="container mt-4 ">
			<div className="row altura bg-white">
				<div className="col-md-7 p-0">
					<img
						src={store.characterImg}
						alt="Character"
						className="limited-image"
					/>
				</div>
				<div className="col-md-5 d-flex align-items-center justify-content-center">
					<div className="text-center">
						<h4 className="fw-bold">{info.name}</h4>
						<p className="ms-3 me-3">
							This is {info.name}, a notable character from the Star Wars universe.
							He stands {info.height} cm tall and weighs {info.mass} kg. His hair is {info.hair_color} in color,
							his skin is {info.skin_color}, and his eyes are {info.eye_color}. 
							 {info.name} was born in the year {info.birth_year}, and his gender is {info.gender}.
						</p>
					</div>
				</div>
			</div>


			<div className="row bg-success mt-3">
				<div className="col-md-6">
					<h2>Información adicional</h2>
					<p>Detalles extra sobre el personaje.</p>
				</div>
				<div className="col-md-6"> {/* Segundo segmento */}
					<h2>Más contenido</h2>
					<p>Contenido relacionado o secciones adicionales.</p>
				</div>
			</div>
		</div>
	);
};
