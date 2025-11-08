//importiamo link da react
import { Link } from "react-router-dom";

export default function SingleTravel(props) {
	const { trav } = props;

	return (
		<div className="col-5 col-md-5 col-lg-3 border rounded-3 mt-2 box-travel text-center">
			<Link to={`/users/${trav.id}`}>
			<img className="box-img rounded-3 pb-2" src={trav.img} alt={trav.destinazione} />
 				{/* <section className="p-3 fs-5"> */}
					<h3 className="d-inline me-2">{trav.destinazione}</h3>
					<span className="d-inline fst-italic">{trav.nazione}</span>
					<p className="mt-2 mb-1">{trav.luogoDiCulto}</p>
					<p className="mb-0"><i>{trav.dataInizio}</i> - <span>{trav.dataFine}</span></p>
 				{/* </section> */}
 			</Link>
		</div>
	);
}