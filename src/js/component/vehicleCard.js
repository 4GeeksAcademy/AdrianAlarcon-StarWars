import React, { useContext } from "react";
import { images } from "../utils";
import { useNavigate } from "react-router-dom";
import { Context } from "../store/appContext";

export const VehicleCard = ({ body }) => {
    const { actions } = useContext(Context);
    const navigate = useNavigate();

    const imageName = body.name.replaceAll(" ", "_");
    const imageName2 = imageName.replaceAll("/", "-");
    const imagePath = images[imageName2];

    const handleClick = async (id, image) => {
        await actions.setSelectedVehicle(id, image);
        await actions.getVehicleInfo();
        navigate("/singleVehicle");
    }

    return (
        <div className="card" onClick={() => handleClick(body.uid, imagePath)}>
            <img src={imagePath} className="card-img-top" alt={body.name} />
            <div className="card-body">
                <h5 className="card-title text-black">{body.name}</h5>
            </div>
        </div>
    );
};

