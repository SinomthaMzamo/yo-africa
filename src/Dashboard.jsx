import Sidebar from './Sidebar'
import Board from './Board'

const Dashboard = () => {
	const style = {display: "flex", };

	return(
		<>
			<div style={style}>
				<Sidebar/>
				<Board/>
			</div>
		</>
	);
};


export default Dashboard;