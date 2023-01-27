import styles from "./styles.module.css";

const Main = () => {
	const handleLogout = () => {
		localStorage.removeItem("token");
		window.location.reload();
	};

	return (
		<div className={styles.main_container}>
			<nav className={styles.navbar}>
				<h1>Authentication</h1>
				{/* <p>{localStorage.getItem("token")}</p> */}
				<div style={{"display":'flex'}}>
					<p style={{"color":'white'}}>{localStorage.getItem("userData")}</p>
					<button className={styles.white_btn} onClick={handleLogout}>
						Logout
					</button>
				</div>
			</nav>
		</div>
	);
};

export default Main;
