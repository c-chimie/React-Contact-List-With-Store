import React from "react";
import PropTypes from "prop-types";
import { Link } from "react-router-dom";
import { useContext } from "react";
import { Context } from "../store/appContext";

const ContactCard = (props) => {
	const { store, actions } = useContext(Context);
	return (
		<li className="list-group-item">
			<div className="row w-100">
				<div className="col-12 col-sm-6 col-md-3 px-0">
					<img
						src="http://placekitten.com/150/150"
						alt="Mike Anamendolla"
						className="rounded-circle mx-auto d-block img-fluid"
					/>
				</div>
				<div className="col-12 col-sm-6 col-md-9 text-center text-sm-left">
					<div className=" float-right">
						<Link to={`/editContact/${props.obj.id}`}>
						<button className="btn">
							<i className="fas fa-pencil-alt mr-3"></i>
						</button>
						</Link>
						<button onClick={() => actions.deleteContact(props.obj.id)} className="btn">
							<i className="fas fa-trash-alt"></i>
						</button>
					</div>
					<label className="name lead">{props.obj.full_name}</label>
					<br />
					<i className="fas fa-map-marker-alt text-muted mr-3"></i>
					<span className="text-muted">{props.obj.address}</span>
					<br />
					<span
						className="fa fa-phone fa-fw text-muted mr-3"
						data-toggle="tooltip"
						title=""
						data-original-title="(870) 288-4149"></span>
					<span className="text-muted small">{props.obj.phone}</span>
					<br />
					<span
						className="fa fa-envelope fa-fw text-muted mr-3"
						data-toggle="tooltip"
						data-original-title=""
						title=""></span>
					<span className="text-muted small text-truncate">
						{props.obj.email}
					</span>
				</div>
			</div>
		</li>
	);
};
ContactCard.propTypes = {
	obj: PropTypes.object,
};
export default ContactCard;
