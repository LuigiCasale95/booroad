import { useState } from "react";
import { useNavigate } from "react-router-dom";
import viaggi from "../data/viaggi";
export default function TravelFormPage() {
	const navigate = useNavigate();
	const [formData, setFormData] = useState({
		id: viaggi[viaggi.length - 1].id + 1,
		destinazione: "",
		nazione: "",
		img: "",
		dataInizio: "",
		dataFine: "",
		luogoDiCulto: "",
	});

	function handleFormData(e) {
		const value = e.target.value;
		setFormData({ ...formData, [e.target.name]: value });
	}

	function formSubmit(e) {
		e.preventDefault();
		viaggi.push(formData);
		console.log(viaggi);

		navigate(-1);
	}

	return (
		<><div className="container">
			<form className="mt-5" onSubmit={""}>
				<div className="mb-3">
					<label className="form-label">Città</label>
					<input
						name="destinazione"
						value={""}
						onChange={""}
						type="name"
						className="form-control"
						aria-describedby="emailHelp" />
				</div>
				<div className="mb-3">
					<label className="form-label">Immagine</label>
					<input
						name="destinazione"
						value={""}
						onChange={""}
						type="text"
						className="form-control"
						aria-describedby="emailHelp" />
				</div>
				<div className="mb-3">
					<label className="form-label">Nazione</label>
					<input
						type="name"
						className="form-control"
						aria-describedby="emailHelp" />
				</div>
				<div className="mb-3">
					<label className="form-label">Luogo di culto</label>
					<input
						type="name"
						className="form-control"
						aria-describedby="emailHelp" />
				</div>
				<div className="mb-3">
					<label className="form-label">Data di inizio</label>
					<input
						type="name"
						className="form-control"
						aria-describedby="emailHelp" />
				</div>
				<div className="mb-3">
					<label className="form-label">Data di Fine</label>
					<input
						type="name"
						className="form-control"
						aria-describedby="emailHelp" />
				</div>
				<button type="submit" className="btn btn-success">
					Submit
				</button>
			</form>
		</div>
				
			</>
	);
}
