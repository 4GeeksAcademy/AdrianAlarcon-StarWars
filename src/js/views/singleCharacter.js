import React, { useState, useEffect, useContext } from "react";

import { Context } from "../store/appContext";
import "../../styles/single.css";
import { images } from "../utils";

export const SingleCharacter = () => {
	const { store, actions } = useContext(Context);
	const info = store.infoCharacter;
	console.log(store.characterImg);
	return (
		<div className="container">
			<div className="row bg-warning">
				<div className="card mb-3" >
					<div className="row no-gutters">
						<div className="col-md-4">
							<img src={store.characterImg}/> 
						</div>
						<div className="col-md-8">
							<div className="card-body">
								<h5 className="card-title">Card title</h5>
								<p className="card-text">This is a wider card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.</p>
								<p className="card-text"><small className="text-muted">Last updated 3 mins ago</small></p>
							</div>
						</div>
					</div>
				</div>
			</div>
			<div className="row bg-success">
				<h1>Adios</h1>
			</div>
		</div>
	);
};
