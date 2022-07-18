const getState = ({ getStore, getActions, setStore }) => {
	return {
		store: {
			contacts: []
		},
		actions: {
			getContacts: () => {
				fetch("https://assets.breatheco.de/apis/fake/contact/agenda/c-chimie")
				.then((response) => response.json())
				.then((data) => setStore({contacts: data}));
			},
			addContact: (data) => {
				fetch("https://assets.breatheco.de/apis/fake/contact/", {
					method: "POST",
					headers: {
						"Content-Type": "application/json",
					},
					body: JSON.stringify(data),
				})
				.then((response) => response.json())
				.then((info) => {
					let previous = getStore().contacts
					setStore({
						contacts: [...previous, info]
					})
				})
			},
			editContact: (data,contactId) => {
				fetch(`https://assets.breatheco.de/apis/fake/contact/${contactId}`, {
					method: "PUT",
					headers: {
						"Content-Type": "application/json",
					},
					body: JSON.stringify(data),
				})
				.then((response) => response.json())
				.then((info) => {
					let previous = getStore().contacts
					let filter = previous.filter((item) => item.id != info.id)
					setStore({
						contacts: [...filter, info]
					})
				})
			},
			deleteContact: (id) => {
				fetch(`https://assets.breatheco.de/apis/fake/contact/${id}`, {
					method: "DELETE",
					headers: {
						"Content-Type": "application/json",
					}})
					.then(response => {
						let previous = getStore().contacts
					let filter = previous.filter((item) => item.id != id)
					setStore({
						contacts: filter
					})
					})
			},
			// Use getActions to call a function within a fuction
			exampleFunction: () => {
				getActions().changeColor(0, "green");
			},
			loadSomeData: () => {
				/**
					fetch().then().then(data => setStore({ "foo": data.bar }))
				*/
			},
			changeColor: (index, color) => {
				//get the store
				const store = getStore();

				//we have to loop the entire demo array to look for the respective index
				//and change its color
				const demo = store.demo.map((elm, i) => {
					if (i === index) elm.background = color;
					return elm;
				});

				//reset the global store
				setStore({ demo: demo });
			}
		}
	};
};

export default getState;
