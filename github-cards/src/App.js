import axios from "axios";
import React, { Component } from "react";
import Data from "./components/Data";
import SearchUsers from "./components/SearchUsers";

export default class App extends Component {
	state = {
		gitHubData: [],
		currentUser: "drslaughterrex",
		followers: [],
	};

	componentDidMount() {
		axios
			.get("https://api.github.com/users/drslaughterrex")
			.then((res) => {
				this.setState({
					gitHubData: res.data,
				});
				console.log(res.data);
			})
			.catch((err) => {
				console.log("ERROR:", err);
			});

		axios
			.get("https://api.github.com/users/drslaughterrex/followers")
			.then((res) => {
				this.setState({
					followers: res.data,
				});
				console.log("Followers:", res.data);
			})
			.catch((err) => {
				console.log("ERROR:", err);
			});
	}

	componentDidUpdate(prevState) {
		if (prevState.currentUser !== this.state.currentUser) {
			axios
				.get(`https://api.github.com/users/${this.state.currentUser}`)
				.then((res) => {
					this.setState({
						gitHubData: res.data,
					});
				});
		}
	}

	currentUserState = (searchedUser) => {
		this.setState({
			currentUser: searchedUser,
		});
	};

	render() {
		const { gitHubData, followers } = this.state;
		return (
			<div>
				<Data gitHubData={gitHubData} followers={followers} />
				<SearchUsers searchedUser={this.currentUserState} />
			</div>
		);
	}
}
