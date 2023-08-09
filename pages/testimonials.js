import React from 'react';
import Navbar from '@/components/Layout/Navigations/Navbar4';
import TestimonialOne from '@/components/Testimonials/TestimonialOne';
import TestimonialTwo from '@/components/Testimonials/TestimonialTwo';
import TestimonialThree from '@/components/Testimonials/TestimonialThree';
import TestimonialFour from '@/components/Testimonials/TestimonialFour';
import TestimonialFive from '@/components/Testimonials/TestimonialFive';
import TestimonialSix from '@/components/Testimonials/TestimonialSix';
import TestimonialSeven from '@/components/Testimonials/TestimonialSeven';
import FooterFour from '@/components/Layout/Footer/FooterFour';

const Testimonials = () => {
	return (
		<>
			<Navbar />
			<div className="page-title-area">
				<div className="container">
					<div className="page-title-content">
						<span className="sub-title red-light-color">Feedback</span>
						<h1>Our Latest Testimonials</h1>
					</div>
				</div>
			</div>
			<TestimonialOne />
			<TestimonialTwo />
			<TestimonialThree />
			<div className="border-tb" />
			<TestimonialFour />
			<TestimonialFive />
			<TestimonialSix />
			<TestimonialSeven />
			<FooterFour />
		</>
	);
};

export default Testimonials;
