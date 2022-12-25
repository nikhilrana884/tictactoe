import { useState } from "react";
import axios from "axios";
import { Link, useNavigate } from "react-router-dom";
import styles from "./styles.module.css";
import Square from "./Square";
import Board from "./Board";

const Game = () => {
	
	return (
		<div className={styles.board_container}>
			<Board />
		</div>
	);
};

export default Game;
