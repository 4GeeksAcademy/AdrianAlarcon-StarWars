const getState = ({ getStore, getActions, setStore }) => {
	return {
		store: {
			characters: [],
			planets: [],
			vehicles: [],
			selectedCharacter: "",
			characterImg:"",
			planetImg:"",
			vehicleImg:"",
			selectedPlanet: "",
			selectedVehicle: "",
			infoCharacter: {},
			infoPlanet: {},
			infoVehicle: {}
		},
		actions: {

			setSelectedCharacter: (id,img) => {
				setStore({ selectedCharacter: id });
				setStore({characterImg:img})
			},
			setSelectedPlanet: (id,img) => {
				setStore({ selectedPlanet: id });
			},
			setSelectedVehicle: (id,img) => {
				setStore({ selectedVehicle: id });
			},

			getCharacters: async () => {
				fetch("https://www.swapi.tech/api/people/")
					.then(res => res.json())
					.then(data => {
						const { results } = data;
						setStore({ characters: results });
					})
					.catch(err => console.error(err))
			},
			getPlanets: async () => {
				fetch("https://www.swapi.tech/api/planets/")
					.then(res => res.json())
					.then(data => {
						const { results } = data;
						setStore({ planets: results });
					})
					.catch(err => console.error(err))
			},
			getVehicles: async () => {
				fetch("https://www.swapi.tech/api/vehicles/")
					.then(res => res.json())
					.then(data => {
						const { results } = data;
						setStore({ vehicles: results });
					})
					.catch(err => console.error(err))
			},

			getCharacterInfo: async () => {
				console.log("dentro metodo")
				const id = getStore().selectedCharacter;
				fetch(`https://www.swapi.tech/api/people/${id}`)
					.then(res => res.json())
					.then(data => {
						const { result } = data;
						const info = result.properties;
						setStore({ infoCharacter: info })
						console.log("dentro de getchinfo", getStore().infoCharacter);
					})
					.catch(err => console.error(err))
			},
			getPlanetInfo: async () => {
				const id = getStore().selectedCharacter;
				fetch(`https://www.swapi.tech/api/planets/${id}`)
					.then(res => res.json())
					.then(data => {
						const { result } = data;
						const info = result.properties;
						setStore({ infoPlanet: info })
						console.log(getStore().infoCharacter);
					})
					.catch(err => console.error(err))
			},
			getVehiclesInfo: async () => {
				const id = getStore().selectedCharacter;
				fetch(`https://www.swapi.tech/api/vehicles/${id}`)
					.then(res => res.json())
					.then(data => {
						const { result } = data;
						const info = result.properties;
						setStore({ infoVehicle: info })
						console.log(infoCharacter);
					})
					.catch(err => console.error(err))
			}

		}
	};
};

export default getState;
