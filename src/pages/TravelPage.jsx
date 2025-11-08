import { useParams } from "react-router-dom";
import PersonList from "../components/PersonList";

const TravelPage = () => {
	const { id } = useParams();

	return (
		<>
			<div className="container-wide d-flex flex-wrap gap-3 justify-content-center">
				<h1 className="pt-3">Partecipanti al viaggio</h1>
				<PersonList />
			</div>
		</>
	);
};

export default TravelPage;
