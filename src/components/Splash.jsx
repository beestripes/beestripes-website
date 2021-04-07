import React, { useEffect, useState } from 'react';
import { SplashLogo } from './SplashLogo';
import { motion } from "framer-motion";

const steps = {
	'enter': {
		initial: { opacity: 0.0 },
		animate: { opacity: 1 },
		transition: { duration: 0.75 },
	},
	'exit': {
		initial: { opacity: 1 },
		animate: { opacity: 0 },
		transition: { duration: 0.5 },
	}
}

export const Splash = ({ onComplete = () => null }) => {
	const [animationProps, setAnimationProps] = useState(steps['enter']);

	useEffect(() => {
		setTimeout(() => {
			setAnimationProps(steps['exit']);
			setTimeout(() => {
				onComplete();
			}, 500);
		}, 1500);
	}, []);

	return (
		<div {...animationProps} className={'absolute top-0 bottom-0 left-0 right-0 z-10'} style={{background: 'black'}}>
			<motion.div {...animationProps} className={'absolute top-0 bottom-0 left-0 right-0'}>
				<SplashLogo />
			</motion.div>
		</div>
	)
}
