const getState = ({ getStore, getActions, setStore }) => {
	return {
		store: {
			selectedCharacter: {
				uid: "",
				name: "",
				url: ""
			},

			infoSelectedCharacter: {
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

			selectedPlanet: {
				uid: "",
				name: "",
				url: ""
			},

			infoSelectedPlanet: {
				diameter: "",
				rotation_period: "",
				orbital_period: "",
				gravity: "",
				population: "",
				climate: "",
				terrain: "",
				surface_water: "",
				created: "",
				edited: "",
				name: "",
				url: ""
			},

			selectedVehicle: {
				uid: "",
				name: "",
				url: ""
			},

			infoSelectedVehicle: {
				model: "",
				vehicle_class: "",
				manufacturer: "",
				cost_in_credits: "",
				length: "",
				crew: "",
				passengers: "",
				max_atmosphering_speed: "",
				cargo_capacity: "",
				consumables: "",
				films: [],
				pilots: [],
				created: "",
				edited: "",
				name: "",
				url: ""
			}
		},
		actions: {

		}
	};
};

export default getState;
