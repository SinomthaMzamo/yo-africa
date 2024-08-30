import './index.css'

const Bootstrap = () => {
	return(
		<>
			<div className='wrapper'>
				<aside>
					<div className="d-flex">
						<button id='toggle-btn' type='button'>
							<i className='lni lni-grid-alt'></i>
						</button>
						<div className='sidebar-logo'>
							<a href='#'>Yo Dashboard</a>
						</div>
						<ul className='sidebar-nav'>
							<li className='sidebar-item'>
								<a className='sidebar-link' href='#'>
									<i className='lni lni-user'></i>
									<span>Profile</span>
								</a>
							</li>
							<li className='sidebar-item'>
								<a className='sidebar-link' href='#'>
									<i className='lni lni-agenda'></i>
									<span>Task</span>
								</a>
							</li>
							<li class="sidebar-item">
			                    <a href="#" class="sidebar-link collapsed has-dropdown" data-bs-toggle="collapse"
			                        data-bs-target="#auth" aria-expanded="false" aria-controls="auth">
			                        <i class="lni lni-protection"></i>
			                        <span>Auth</span>
			                    </a>
			                    <ul id="auth" class="sidebar-dropdown list-unstyled collapse" data-bs-parent="#sidebar">
			                        <li class="sidebar-item">
			                            <a href="#" class="sidebar-link">Login</a>
			                        </li>
			                        <li class="sidebar-item">
			                            <a href="#" class="sidebar-link">Register</a>
			                        </li>
			                    </ul>
			                </li>
			                <li class="sidebar-item">
			                    <a href="#" class="sidebar-link">
			                        <i class="lni lni-popup"></i>
			                        <span>Notification</span>
			                    </a>
			                </li>
			                <li class="sidebar-item">
			                    <a href="#" class="sidebar-link">
			                        <i class="lni lni-cog"></i>
			                        <span>Setting</span>
			                    </a>
			                </li>
						</ul>
						<div class="sidebar-footer">
			                <a href="#" class="sidebar-link">
			                    <i class="lni lni-exit"></i>
			                    <span>Logout</span>
			                </a>
			            </div>
					</div>
				</aside>
			</div>
		</>
	);
};


export default Bootstrap;