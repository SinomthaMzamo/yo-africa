import React, { useState } from 'react';

import Sidebar from './Sidebar'
import Board from './Board'

const Dashboard = () => {
	const style = {display: "flex", paddingTop:"250px", };
	const [view, setView] = useState("landing");

	// Handler to update the view state
	const handleViewChange = (newView) => {
	    setView(newView);
	};

	return(
		<>
			<div style={style}>
				<Sidebar onViewChange={handleViewChange} />
				<Board view={view} />
			</div>
		</>
	);
};


export default Dashboard;


