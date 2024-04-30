const getState = ({ getStore, getActions, setStore }) => {
	return {
		store: {
			selectedCharacter: {
				uid: "",
				name: "",
				url: ""
			},
			infoSelectedCharacter: {
				result: {
					height: "",
					mass: "",
					hair_color: "",
					skin_color: "",
					eye_color: "",
					birth_year: "",
					gender: "",
					created: "",
					edited: "",
					name: "",
					homeworld: "",
					url: ""
				},
				description: ""
			},
			selectedPlanet: {

			},
			infoSelectedPlanet: {

			},
			selectedVehicle: {

			},
			infoSelectedVehicle: {

			}
		},
		actions: {

		}
	};
};

export default getState;
