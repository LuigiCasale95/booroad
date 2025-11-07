//importiamo link da react
import { Link } from "react-router-dom";

export default function SingleTravel(props) {
	const { trav } = props;

	return (
		<div className="col-5">
			<Link to={`/users/${trav.id}`}>
				<div className="bg-secondary">
					<p>{trav.destinazione}</p>
					<p>{trav.nazione}</p>
					<p>{trav.dataInizio}</p>
					<p>{trav.dataFine}</p>
					<p>{trav.luogoDiCulto}</p>
				</div>
			</Link>
		</div>
	);
}
