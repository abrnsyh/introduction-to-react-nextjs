import styled from "@emotion/styled";
import PokemonTable from "../components/PokemonTable";
import PokemonInfo from "../components/PokemonInfo";
import PokemonFilter from "../components/PokemonFilter";
import CssBaseLine from "@mui/material/CssBaseline";
import store from "../src/store";

const Title = styled.h1`
	text-align: center;
`;

const TwoColumnLayout = styled.div`
	display: grid;
	grid-template-columns: 70% 30%;
	grid-column-gap: 1rem;
`;

const Container = styled.div`
	margin: auto;
	width: 800px;
	padding-top: 1rem;
`;

export default function Home() {
	return (
		<Container>
			<CssBaseLine />
			<Title>pokemon search</Title>
			<TwoColumnLayout>
				<div>
					<PokemonFilter />
					<PokemonTable />
				</div>
				<PokemonInfo />
			</TwoColumnLayout>
		</Container>
	);
}
