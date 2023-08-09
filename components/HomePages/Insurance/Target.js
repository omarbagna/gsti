import React from 'react';
import Link from 'next/link';
import Image from 'next/image';

import manWithSon from '@/public/images/man-with-son.png';

const Target = () => {
	return (
		<div className="goal-area ptb-100">
			<div className="container">
				<div className="row align-items-center">
					<div className="col-lg-6 col-md-12">
						<div className="goal-content style-two">
							<span className="sub-title">We Protect You</span>
							<h2 className="nunito-font">
								Travel with ease and peace of mind with Travel Insurance
							</h2>
							<ul className="overview-list">
								<li data-aos="fade-up" data-aos-duration="1200">
									<i className="flaticon-draw-check-mark"></i>
									We protect your interest while on the move
								</li>
								<li
									data-aos="fade-up"
									data-aos-duration="1200"
									data-aos-delay="100">
									<i className="flaticon-draw-check-mark"></i>
									We have a long history of keeping our promises
								</li>
								<li
									data-aos="fade-up"
									data-aos-duration="1200"
									data-aos-delay="200">
									<i className="flaticon-draw-check-mark"></i>
									Travel insurance: for all that&apos;s ahead
								</li>
							</ul>
							<div
								className="btn-box"
								data-aos="fade-up"
								data-aos-duration="1200"
								data-aos-delay="300">
								<Link href="/form/get-quote">
									<a className="btn-style-one dark-green-color">
										Get a Quote <i className="bx bx-chevron-right"></i>
									</a>
								</Link>
							</div>
						</div>
					</div>
					<div
						className="col-lg-6 col-md-12"
						data-aos="fade-up"
						data-aos-duration="1200">
						<div className="goal-image style-two">
							<Image src={manWithSon} alt="man-with-son-image" />
						</div>
					</div>
				</div>
			</div>
		</div>
	);
};

export default Target;
