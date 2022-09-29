import { observer } from "mobx-react";
import store from "../src/store";

function PokemonInfo() {
	return store.selectedItem ? (
		<div>
			<h1>{store.selectedItem.name.english}</h1>
			<table>
				<tbody>
					{Object.keys(store.selectedItem.base).map((key) => (
						<tr key={key}>
							<td>{key}</td>
							<td>{store.selectedItem.base[key]}</td>
						</tr>
					))}
				</tbody>
			</table>
		</div>
	) : null;
}

export default observer(PokemonInfo);
