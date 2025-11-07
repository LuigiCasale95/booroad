import viaggi from "../data/viaggi";

import SingleTravel from "./SingleTravel";

const TravelList = () => {
	return (
		<div className="container-wide d-flex flex-wrap gap-3 justify-content-center">
			{viaggi.map((trav) => (
				<SingleTravel key={trav.id} trav={trav} />
			))}
		</div>
	);
};

export default TravelList;
