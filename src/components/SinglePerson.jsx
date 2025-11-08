import { useState } from "react";

export default function SinglePerson({ person }) {
	const [isOpen, setIsOpen] = useState(false);

	function showDetails() {
		setIsOpen(!isOpen);
	}

	return (
		<div
			onClick={showDetails}
			className="gap-3 mb-3 p-3 bg-light border rounded"
		>
			<h2>
				{person.nome} {person.cognome}
			</h2>
			{isOpen && (
				<div>
					<h5>Email: {person.email}</h5>
					<h5>Telefono: {person.telefono}</h5>
					<h5>CF: {person.CF}</h5>
				</div>
			)}
		</div>
	);
}
