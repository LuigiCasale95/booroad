import TravelList from "../components/TravelList";

const HomePage = () => {
	return (
		<>
			<div className="container-wide">
				<h1>Viaggi disponibili</h1>
				<TravelList />
			</div>
		</>
	);
};

export default HomePage;
