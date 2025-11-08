import { useParams } from "react-router-dom";
import PersonList from "../components/PersonList";

const TravelPage = () => {
	const { id } = useParams();

	return (
		<>
			<div>
				<h1>Partecipanti al viaggio</h1>
				<PersonList />
			</div>
		</>
	);
};

export default TravelPage;
