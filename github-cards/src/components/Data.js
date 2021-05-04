import React from "react";

export default function Data(props) {
	const { gitHubData, followers } = props;

	return (
		<div className="user">
			<div class="data">
				<h1 className="rainbow">Github User</h1>
				<img src={gitHubData.avatar_url} alt="" />
				<div className="name">
					<p>Name: </p>
					{gitHubData.name}
				</div>
				<div className="username">
					<p>Username: </p>
					{gitHubData.login}
				</div>
				<div className="location">
					<p>Location: </p>
					{gitHubData.location}
				</div>
				<div className="bio">
					<p>Bio: </p>
					{gitHubData.bio}
				</div>
				<div className="following">
					<p>Following: </p>
					{gitHubData.following}
				</div>
			</div>
			<div className="followers">
				{followers &&
					followers.map((follows) => {
						return (
							<>
								<h2>Follower</h2>
								<img src={follows.avatar_url} alt="" />
								<div className="name">
									<p>Name: </p>
									{follows.name}
								</div>
								<div className="username">
									<p>Username: </p>
									{follows.login}
								</div>
								<div className="location">
									<p>Location: </p>
									{follows.location}
								</div>
								<div className="bio">
									<p>Bio: </p>
									{follows.bio}
								</div>
								<div className="following">
									<p>Following: </p>
									{follows.following}
								</div>
							</>
						);
					})}
			</div>
		</div>
	);
}
