import React, { Component } from 'react';
import { withRouter } from 'react-router-dom';
import { Card, InputBase} from '@material-ui/core';
import { getNote} from '../services/notesServices';
import DeleteForeverIcon from '@material-ui/icons/DeleteForever';
import RestoreFromTrashIcon from '@material-ui/icons/RestoreFromTrash';

export class getTrashComponent extends Component {
	constructor(props) {
		super(props);
		this.state = {
			noteId: '',
			color: '',
			notes: [],
			openNote: false,
			title: '',
			description: ''
		};
	}
	handleTitle = (event) => {
		let title = event.target.value;
		this.setState({
			title: title
		});
		console.log('title is ', this.state.title);
	};
	handleDescription = (event) => {
		let description = event.target.value;
		this.setState({
			description: description
		});
		console.log('description is ', this.state.description);
	};

	componentDidMount() {
		this.getAllNotes();
	}
	getAllNotes = () => {
		getNote()
			.then((result) => {
				this.setState({
					notes: result.data.data.data
				});
				console.log('all notes data ', this.state.notes);
			})
			.catch((err) => {
				console.log('Erroe occur while taking all notes', err);
			});
    }
    
	handleCardClick = () => {
		console.log('triggered');
	}

	displayRef = (value) => {
		console.log('ref value in getnote', value);
		this.setState({
			notes: [ ...this.state.notes, value ]
		});
	}

	render() {
		return (
			<div className="get-container">
				{this.state.notes.map((data) => {
					console.log('create note final data', data);
					return (
						data.isArchived === false &&
						data.isDeleted === true && (
							<div className="get-Whole-Card">
								<div className="get-card-effect">
									<Card
										className="get-cards1"
										onClick={this.handleCardClick}
										style={{
											boxShadow:
												'3px 2px 9px 2px rgba(0,0,0,0.2), 1px 1px 2px 1px rgba(0,0,0,0.14), 3px 2px 3px 2px rgba(0,0,0,0.12)',
											borderRadius: '15px',
											padding: '1em',
											margin: '5px',
											borderradius: '14px',
											backgroundColor: data.color,

											transform: this.props.shiftDrawer ? 'translate(80px,0)' : null}}>
										<div className="get-cardDetails" onClick={this.handleClickOpen}>
											<InputBase
												value={data.title}
												multiline
												onClick={() =>
													this.handleUpdate(
														data.title,
														data.id,
														data.color,
														data.description
													)}
											/>
											<InputBase
												value={data.description}
												multiline
												onClick={() =>
													this.handleUpdate(
														data.title,
														data.id,
														data.color,
														data.description
													)}
											/>
										</div>
										<div className="get_Note_Icon">
											<div>
												<DeleteForeverIcon className="iconEffect" />
											</div>
											<div>
												<RestoreFromTrashIcon className="iconEffect" />
											</div>
                                        </div>
                                        
									</Card>
								</div>
							</div>
						)
					);
				})}
			</div>
		);
	}
}

export default withRouter(getTrashComponent);
