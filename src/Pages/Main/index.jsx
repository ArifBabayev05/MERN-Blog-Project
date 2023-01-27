import Hero from "../../components/HeroSection/Hero";
import Info from "../../components/MiniInfoSection/Info";
import Navbar from "../../Layouts/Navbar/Navbar";
import styles from "./styles.module.css";

const Main = () => {
	const handleLogout = () => {
		localStorage.removeItem("token");
		window.location.reload();
	};

	return (
		<div className={styles.main_container}>
			<Navbar/>
			<Hero/>
			<Info/>
			
		</div>
	);
};

export default Main;
