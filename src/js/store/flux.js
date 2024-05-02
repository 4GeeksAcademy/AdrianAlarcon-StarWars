const getState = ({ getStore, getActions, setStore }) => {
	return {
		store: {
			characters: [],
		},
		actions: {
			getCharacters: async () => {
				fetch("https://www.swapi.tech/api/people/")
					.then(res => res.json())
					.then(data => {
						const { results } = data;
						setStore({ characters: results });
						console.log(results);
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
