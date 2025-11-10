import partecipanti from "../data/partecipanti";
import SinglePerson from "./SinglePerson";

const PersonList = ({ search }) => {
	const query = (search || "").toLowerCase().trim();
	const filteredPersons = partecipanti.filter((t) =>
		`${t.nome} ${t.cognome}`.toLowerCase().includes(query),
	);

	return (
		<div className="container-wide">
			{filteredPersons.length === 0 ? (
				<p>Nessun partecipante trovato corrispondente alla tua ricerca.</p>
			) : (
				filteredPersons.map((person) => (
					<SinglePerson key={person.id} person={person} />
				))
			)}
		</div>
	);
};

export default PersonList;
