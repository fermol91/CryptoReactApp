import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { useParams } from 'react-router';
import './CoinDetail.css';
import CoinCard from '../../components/CardComponents/CoinCard';
import Spinner from '../../components/Spinner/Spinner';
//import Counter from '../../components/Counter/Counter';


const CharacterDetail = () => {
	const [character, setCharacter] = useState([]);
	const [isLoading, setIsLoading] = useState(true);

	// console.log(character);

	let id = useParams();

	let userID = id.id;

	// console.log(userID);

	useEffect(() => {
		axios(`https://api.coingecko.com/api/v3/coins/markets?vs_currency=USD&order=market_cap_desc&per_page=100&page=1/${userID}`).then((res) =>
			setCharacter(res.data)
		);
		setTimeout(() => {
			setIsLoading(false);
		}, 1000);
	}, [userID]);
    
    
    //ESTO ES PARA EL COUNTER
	/*function onAdd (params) {
		console.log("onAdd")
	}*/

	return (
		<div className='CharacterList-Container'>
			{isLoading ? (
				<Spinner />
			) : (
				<div className='CharacterList-detail'>
					
							<div>
								<CoinCard data={character} />
								
							</div>
						
					
				</div>
			)}
		</div>
	);
};

export default CharacterDetail;


//<Counter onAdd={onAdd}/>