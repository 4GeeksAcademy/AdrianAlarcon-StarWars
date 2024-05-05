import React, { useContext } from "react";
import { Context } from "../store/appContext";
import { MdDelete } from "react-icons/md";
import { images } from "../utils";
import { useNavigate } from "react-router-dom";

export const FavRow = ({ body }) => {
    const { store,actions } = useContext(Context);
    const navigate = useNavigate();

    const charactersList = store.characters;
    const character = charactersList.find((c) => c.uid === body.id);
    const characterName = character ? character.name : "Personaje desconocido";

    const imageName = character.name.replaceAll(" ", "_");
    const imageName2 = imageName.replaceAll("/", "-");
    const imagePath = images[imageName2];

    const handleNavClick = async (id, image) => {
        await actions.setSelectedCharacter(id, image);
        await actions.getCharacterInfo();
        navigate("/singleCharacter");
    };

    const handleDeleteClick = () => {
        actions.deleteFromFav();
    };

    return (
        <div className="dropdown-item d-flex align-items-center">
            <span onClick={() => handleNavClick(body.id, imagePath)}>{characterName}</span>
            <MdDelete className="ms-auto text-danger" onClick={() => handleDeleteClick()} />
        </div>
    );

};
