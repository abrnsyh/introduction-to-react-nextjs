import { makeObservable, observable, computed } from "mobx";

class Store {
	pokemonList = require("../src/pokemon.json");

	filter = "";

	selectedItem = null;

	constructor() {
		makeObservable(this, {
			pokemonList: observable,
			filter: observable,
			selectedItem: observable,
			filteredPokemon: computed,
		});
	}

	get filteredPokemon() {
		return this.pokemonList.filter((pokemon) => pokemon.name.english.toLowerCase().includes(this.filter.toLowerCase()));
	}

	setPokemonList(pokemonList) {
		this.pokemonList = pokemonList;
	}

	setFilter(filter) {
		this.filter = filter;
	}

	setSelectedItem(selectedItem) {
		this.selectedItem = selectedItem;
	}
}

const store = new Store();

export default store;
