import React, { useState } from 'react';
import MyCard from './Card';
import Cards, { Card } from 'react-swipe-card';
import data from './data';
const Main = () => {
	return (
		<div className='main'>
			{/* <Cards className='master-root'> */}
			{data.map((item) => (
				// <Card>
				<MyCard name={item.name} heading={item.heading} body={item.body} />
				// </Card>
			))}
			{/* </Cards> */}
		</div>
	);
};

export default Main;
