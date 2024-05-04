import React, { useContext } from "react";
import { Context } from "../store/appContext";

export const FavRow = () => {
    const { store, actions } = useContext(Context);

    const info = store.fav;
    
    return (
        <a className="dropdown-item" href="#">asd</a>
    );
};

