import { useState } from "react";
import axios from "axios";
import { Link, useNavigate } from "react-router-dom";
import styles from "./styles.module.css";

const Main = () => {
	const [data, setData] = useState({
		email: "",
	});
	const [error, setError] = useState("");
	const navigate = useNavigate();

	const handleLogout = () => {
		localStorage.removeItem("token");
		window.location.reload();
	};

	const handleChange = ({ currentTarget: input }) => {
		setData({ ...data, [input.name]: input.value });
	};

	const startNewGame = async (e) => {
		navigate("/game");
	};

	const viewGames = async (e) => {
		navigate("/game");
	};
	
	return (
		<div className={styles.main_container}>
		
				<button className={styles.blue_btn}>
							Tic Tac Toe
				</button>
				<button className={styles.white_btn} onClick={handleLogout}>
					Logout
				</button>

			<nav className={styles.main_form_container}>
			<form className={styles.form_container} onSubmit={startNewGame}>
						<h1>Play New Game</h1>
						<input
							type="text"
							placeholder="email"
							name="email"
							onChange={handleChange}
							value={data.email}
							required
							className={styles.input}
						/>
						{error && <div className={styles.error_msg}>{error}</div>}
						<button type="submit" className={styles.green_btn} >
							Start Game
						</button>
						<button type="submit" className={styles.green_btn} onClick={viewGames}>
							View Previous Games
						</button>
						
					</form>

			</nav>
			
		</div>

		



		
	);
};

export default Main;
