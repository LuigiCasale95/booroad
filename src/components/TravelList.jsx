import viaggi from "../data/viaggi";

import SingleTravel from "./SingleTravel";

const TravelList = () => {
	return (
		<div className="container-wide d-flex flex-wrap gap-5 p-0 justify-content-center align-items-stretch">
			{viaggi.map((trav) => (
				<SingleTravel key={trav.id} trav={trav} />
			))}
		</div>
	);
};

export default TravelList;
