import React, { useContext } from "react";
import { images } from "../utils";
import { useNavigate } from "react-router-dom";
import { Context } from "../store/appContext";
import { GrFavorite } from "react-icons/gr";


export const PlanetCardFav = ({ body }) => {
    const { actions } = useContext(Context);
    const navigate = useNavigate();

    const imageName = body.name.replaceAll(" ", "_");
    const imageName2 = imageName.replaceAll("/", "-");
    const imagePath = images[imageName2];

    const handleClick = async (id, image) => {
        await actions.setSelectedPlanet(id, image);
        await actions.getPlanetInfo();
        navigate("/singlePlanet");
    }

    return (
        <div className="card">
            <img src={imagePath} className="card-img-top" alt={body.name} onClick={() => handleClick(body.uid, imagePath)} />
            <div className="card-body" onClick={() => handleClick(body.uid, imagePath)}>
                <h5 className="card-title text-black">{body.name}</h5>
            </div>
            <button className="btn btn-warning"><GrFavorite /></button>
        </div>
    );
};

