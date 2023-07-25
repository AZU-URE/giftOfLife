import {
	ArrowBackIosOutlined,
	ArrowForwardIosOutlined,
} from "@mui/icons-material";
import { useState, useRef } from "react";
import DonorCard from "./DonorCard";
import { BsFillArrowRightCircleFill } from 'react-icons/bs'
import { useNavigate } from "react-router-dom";
//   import "./list.scss";


const List = () => {
	const [isMoved, setIsMoved] = useState(false);
	const [slideNumber, setSlideNumber] = useState(0);
	const navigate = useNavigate()
	const viewAllDonors = () => {
		// console.log("donors");
		navigate('/donors')
	}

	const listRef = useRef();

	const handleClick = (dir) => {
		setIsMoved(true);
		let distance = listRef.current.getBoundingClientRect().x - 50;
		console.log(dir, distance);
		if (dir === "left" && slideNumber > 0) {
			// setSlideNumber = (x) => {x+1}
			setSlideNumber(slideNumber - 2);
			console.log(distance);
			listRef.current.style.transform = `translateX(${-10 * slideNumber + 20}rem )`;
		} else if (dir === "right" && slideNumber < 5) {
			listRef.current.style.transform = `translateX(${-10 * slideNumber - 20}rem)`;
			setSlideNumber(slideNumber + 2);
		}
	};

	return (

		<div className="list my-12 px-24">
			<p className='w-full text-center text-4xl font-dmSans font-medium mb-16'><span className='text-mainGreen'>Our</span>  Donors</p>
			<div className="wrapper flex justify-between max-w-full items-center w-full overflow-hidden">
				<ArrowBackIosOutlined
					className="sliderArrow"
					onClick={() => handleClick("left")}
					style={{ display: !isMoved && "none" }}
				/>
				<div className="center flex-1 overflow-x-hidden">
					<div className="container flex w-fit justify-between gap-8 transition duration-300" ref={listRef}>
						<DonorCard index={0} />
						<DonorCard index={1} />
						<DonorCard index={2} />
						<DonorCard index={3} />
						<DonorCard index={4} />
						<DonorCard index={5} />
						<DonorCard index={6} />
						<DonorCard index={7} />
						<DonorCard index={8} />
						<DonorCard index={9} />
						<DonorCard index={10} />
						<DonorCard index={11} />
						<DonorCard index={12} />
						<DonorCard index={13} />
						<DonorCard index={14} />
						<DonorCard index={15} />
						<DonorCard index={16} />
						<DonorCard index={17} />
						<DonorCard index={18} />
					</div>
				</div>
				<ArrowForwardIosOutlined
					className="sliderArrow"
					onClick={() => handleClick("right")}
				/>
			</div>
			<button className='bg-mainGreen rounded-full hover:bg-teal-800 text-white p-4 mt-8 font-medium text-lg border-white border-[1px] mx-auto flex items-center space-x-4' onClick={viewAllDonors}> <p>Check Out More</p> <BsFillArrowRightCircleFill style={{ fontSize: "24px", style: "bold" }} className='' /> </button>
		</div>
	);
};

export default List;
