import React, { useState, useContext } from "react";
import { Link } from "react-router-dom";
import { Context } from "../store/appContext.js";

const AddContact = () => {
	const { store, actions } = useContext(Context);
	const [name, setName] = useState("");
	const [email, setEmail] = useState("");
	const [phone, setPhone] = useState("");
	const [address, setAddress] = useState("");
	console.log(name);
	return (
		<div className="container">
			<div>
				<h1 className="text-center mt-5">Add a new contact</h1>
				<form>
					<div className="form-group">
						<label>Full Name</label>
						<input
							type="text"
							className="form-control"
							placeholder="Full Name"
							onChange={(event) => setName(event.target.value)}
						/>
					</div>
					<div className="form-group">
						<label>Email</label>
						<input
							type="email"
							className="form-control"
							placeholder="Enter email"
							onChange={(event) => setEmail(event.target.value)}
						/>
					</div>
					<div className="form-group">
						<label>Phone</label>
						<input
							type="phone"
							className="form-control"
							placeholder="Enter phone"
							onChange={(event) => setPhone(event.target.value)}
						/>
					</div>
					<div className="form-group">
						<label>Address</label>
						<input
							type="text"
							className="form-control"
							placeholder="Enter address"
							onChange={(event) => setAddress(event.target.value)}
						/>
					</div>
					<Link to="/">
					<button
						type="button"
						className="btn btn-primary form-control"
						onClick={() => {
							actions.addContact({
								full_name: name,
								email: email,
								agenda_slug: "c-chimie",
								address: address,
								phone: phone,
							})
							setEmail("")
							setPhone("")
							setName("")
							setAddress("")
						}
						}>
						save
					</button>
					</Link>
				</form>
			</div>
		</div>
	);
};

export default AddContact;