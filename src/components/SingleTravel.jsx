//importiamo link da react
import { Link } from "react-router-dom";

export default function SingleTravel(props) {
	const { trav } = props;

	return (
		<div className="col-5">
			<Link to={`/users/${trav.id}`}>
				<div className="bg-secondary p-3 fs-5">
					<h3 className="d-inline me-2">{trav.destinazione}</h3>
					<span className="d-inline fst-italic">{trav.nazione}</span>
					<p className="mt-2 mb-1">{trav.luogoDiCulto}</p>
					<p className="mb-0"><i>{trav.dataInizio}</i> - <span>{trav.dataFine}</span></p>
				</div>
			</Link>
		</div>
	);
}