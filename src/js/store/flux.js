const getState = ({ getStore, getActions, setStore }) => {
	return {
		store: {
			characters: [],
			planets: [],
			vehicles: [],
			selectedCharacter: "",
			selectedPlanets: "",
			selectedVehicles: "",
		},
		actions: {
			setSelectedCharacter: (id) => {
				setStore({ selectedCharacter: id });
			},
			setSelectedPlanets: (id) => {
				setStore({ selectedPlanets: id }); 
			},
			setSelectedVehicles: (id) => {
				setStore({ selectedVehicles: id }); 
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

			getCharactersInfo: async (id) => {
				fetch(`https://www.swapi.tech/api/people/${id}`)
					.then(res => res.json())
					.then(data => {
						const { result } = data;
						const prevCharacterStore = getStore().characters || [];
						setStore({ characters: [...prevCharacterStore, { properties: result.properties, description: result.description, uid: result.uid }] })
						console.log(result);
					})
					.catch(err => console.error(err))
			}
		}
	};
};

export default getState;
