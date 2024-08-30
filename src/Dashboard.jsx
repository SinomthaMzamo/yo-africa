import React, { useState } from 'react';

import NavBar from './NavBar';
import Sidebar from './Sidebar'
import Board from './Board'

const Dashboard = () => {
	const style = {display: "flex", paddingBottom:"55px", minWidth:'95vw'};
	const [view, setView] = useState("landing");

	// Handler to update the view state
	const handleViewChange = (newView) => {
	    setView(newView);
	};

	return(
		<>
			<div style={style}>
				<NavBar feature="services" features={["library", "locator", "symptom tracker"]}/>
				<Sidebar onViewChange={handleViewChange} />
				<Board view={view} />
			</div>
		</>
	);
};


export default Dashboard;


