// TravelList.jsx
import viaggi from "../data/viaggi";
import SingleTravel from "./SingleTravel";

const TravelList = ({ search }) => {
	const query = (search || "").toLowerCase().trim();
	const filteredViaggi = viaggi.filter((t) =>
		`${t.nazione} ${t.destinazione}`.toLowerCase().includes(query),
	);

	return (
		<div className="container-wide d-flex flex-wrap gap-5 p-0 justify-content-center align-items-stretch">
			{filteredViaggi.length === 0 ? (
				<p>Nessun viaggio trovato corrispondente alla tua ricerca.</p>
			) : (
				filteredViaggi.map((trav) => <SingleTravel key={trav.id} trav={trav} />)
			)}
		</div>
	);
};

export default TravelList;
