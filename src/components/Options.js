import React from 'react';
import './css/EnquiryForm.css';
import { serviceAssets } from './Enquiry';
import { Link } from 'react-router-dom';

class Options extends React.Component{
	constructor(){
		super();
		this.state = {
			services:["Website Design Services","Email Marketing","Youtube Marketing","Social Media","SEO","Blog","Website Content","Payments","PodCast","Viral","Digital","Online"],
			currentImageIndexes:{},
		};
		this.intervals = {};
	}
	
	componentDidMount(){
		this.state.services.forEach((service) => {
			this.setState((prevState) => ({
				currentImageIndexes : { ...prevState.currentImageIndexes,[service]:0 }
			}));
			this.intervals[service] = setInterval(() => this.nextImage(service),3000);
		});
	}
	componentWillUnmount(){
		Object.values(this.intervals).forEach(clearInterval);
	}
	nextImage = (service) => {
		const images = serviceAssets[service]?.images || [];
		this.setState((prevState) => ({
			currentImageIndexes:{
				...prevState.currentImageIndexes,
				[service]: (prevState.currentImageIndexes[service] + 1) % images.length
			}
		}));
	};
	render(){
		const { services, currentImageIndexes } = this.state;
		return(
			<>
				<div id='DM-title'>
					<h3>Digital Marketing</h3>
				<div className='options-container'>
				{services.map((service,index) => {
					const images = serviceAssets[service]?.images || [];
					const currentIndex = currentImageIndexes[service] || 0;
					
					return (
					<div className='option-card' key={index}>
						<img src={images[currentIndex]} alt={service}/>
						<Link to={`/preview/${service.replace(/\s+/g, '-')}`}>
							<button id='option-btn'>{service}</button>
						</Link>
					</div>
					);
					
				})}
				</div>
				</div>
			</>
		);
	}
};
export default Options;