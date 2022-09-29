import { observer } from "mobx-react";
import store from "../src/store";
import PokemonRow from "./PokemonRow";

function PokemonTable() {
	return (
		<table width="100%">
			<thead>
				<tr>
					<th>Name</th>
					<th>Type</th>
				</tr>
			</thead>
			<tbody>
				{store.filteredPokemon.slice(0, 20).map((pokemon) => (
					<PokemonRow pokemon={pokemon} key={pokemon.id} onClick={(pkmn) => store.setSelectedItem(pkmn)} />
				))}
			</tbody>
		</table>
	);
}

export default observer(PokemonTable);
