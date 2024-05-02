import React, { useContext } from "react";
import { images } from "../utils";

export const GenericCard = ({ body }) => {
    const imageName = body.name.replace(" ", "_");
    const imagePath = images[imageName];

    return (
        <div className="card">
            <img src={imagePath} className="card-img-top" alt={body.name} />
            <div className="card-body">
                <h5 className="card-title text-black">{body.name}</h5>
            </div>
        </div>
    );
};

