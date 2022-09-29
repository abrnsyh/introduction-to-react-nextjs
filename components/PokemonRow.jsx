import Link from "next/link";
import Button from "@mui/material/Button";
import PropTypes from "prop-types";
import PokemonType from "../src/PokemonType";

function PokemonRow({ pokemon, onClick }) {
	return (
		<tr>
			<td>
				<Link href={`/pokemon/${pokemon.id}`}>
					<a>{pokemon.name.english}</a>
				</Link>
			</td>
			<td>{pokemon.type.join(", ")}</td>
			<td>
				<Button variant="contained" color="primary" type="button" onClick={() => onClick(pokemon)}>
					More Information
				</Button>
			</td>
		</tr>
	);
}

PokemonRow.propTypes = {
	pokemon: PokemonType,
	onClick: PropTypes.func.isRequired,
};

PokemonRow.defaultProps = {
	pokemon: [],
};

export default PokemonRow;
