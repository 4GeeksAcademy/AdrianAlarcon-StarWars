import React, { useContext } from "react";
import { images } from "../utils";
import { useNavigate } from "react-router-dom";
import { Context } from "../store/appContext";

export const CharacterCard = ({ body }) => {
    const { store, actions } = useContext(Context);
    const navigate = useNavigate();

    const imageName = body.name.replaceAll(" ", "_");
    const imageName2 = imageName.replaceAll("/", "-");
    const imagePath = images[imageName2];

    const handleClick = async (id) => {
        console.log(id);
        await actions.setSelectedCharacter(id);
        await actions.getCharacterInfo();
        navigate("/singleCharacter");
    }

    return (
        <div className="card" onClick={() => handleClick(body.uid) }>
            <img src={imagePath} className="card-img-top" alt={body.name} />
            <div className="card-body">
                <h5 className="card-title text-black">{body.name}</h5>
            </div>
        </div>
    );
};

