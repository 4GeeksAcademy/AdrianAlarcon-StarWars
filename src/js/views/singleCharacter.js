import React, { useState, useEffect, useContext } from "react";

import { Context } from "../store/appContext";
import "../../styles/single.css";
import { images } from "../utils";

export const SingleCharacter = () => {
	const { store, actions } = useContext(Context);
	const info = store.infoCharacter;
	console.log(store.characterImg);
	return (
		<div className="container mt-4 ">
			<div className="row altura bg-white"> {/* Fila principal */}
                <div className="col-md-7 p-0"> {/* Eliminar padding */}
                    <img
                        src={store.characterImg}
                        alt="Character"
                        className="limited-image" // Imagen con ancho completo
                    />
                </div>
                <div className="col-md-5 d-flex align-items-center justify-content-center"> {/* Centrar el contenido */}
                    <div className="text-center">
                        <h5>Character Information</h5>
                        <p>Descripción o detalles del personaje.</p>
                        <p>
                            <small className="text-muted">Última actualización hace 3 minutos</small>
                        </p>
                    </div>
                </div>
            </div>

			{/* Sección adicional para más información */}
			<div className="row bg-success mt-3"> {/* Nueva fila para secciones adicionales */}
				<div className="col-md-6"> {/* Primer segmento para información adicional */}
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
