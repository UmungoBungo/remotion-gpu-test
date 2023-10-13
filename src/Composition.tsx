import {
	AbsoluteFill,
	useCurrentFrame,
	spring,
	interpolate,
	Easing,
	staticFile,
	OffthreadVideo,
} from 'remotion';
import {loadFont} from '@remotion/google-fonts/PlusJakartaSans';

const {fontFamily} = loadFont();

const vid1 = staticFile('/1.mov');

export const MyComposition = () => {
	return (
		<AbsoluteFill className="bg-gradient-to-r from-indigo-950 to-slate-50">
			<h1
				className="absolute bottom-0 right-0 text-7xl font-bold tracking-tight text-default logo-style p-8 bg-white/50 rounded-tl-3xl border-8 border-black"
				style={{
					fontFamily,
				}}
			>
				GPU TESTING
			</h1>
			<div className="w-full flex justify-between items-center py-10 px-20 border-b-8 border-black">
				<div className="flex text-xl">
					<span
						className="mr-10 text-4xl font-extrabold"
						style={{
							fontFamily,
						}}
					>
						Blur:{' '}
					</span>
					<div className="space-x-4 flex blur-lg">
						<div className="w-8 rounded h-8 bg-orange-500" />
						<div className="w-8 rounded h-8 bg-orange-500" />
						<div className="w-8 rounded h-8 bg-orange-500" />
						<div className="w-8 rounded h-8 bg-orange-500" />
						<div className="w-8 rounded h-8 bg-orange-500" />
					</div>
				</div>
				<div className="flex text-xl">
					<span
						className="mr-10 text-4xl font-extrabold"
						style={{
							fontFamily,
						}}
					>
						Shadow:{' '}
					</span>
					<div className="space-x-4 flex">
						<div className="w-8 rounded h-8 bg-black shadow-xl shadow-orange-500" />
						<div className="w-8 rounded h-8 bg-black shadow-xl shadow-orange-500" />
						<div className="w-8 rounded h-8 bg-black shadow-xl shadow-orange-500" />
						<div className="w-8 rounded h-8 bg-black shadow-xl shadow-orange-500" />
						<div className="w-8 rounded h-8 bg-black shadow-xl shadow-orange-500" />
					</div>
				</div>
			</div>
			<OffthreadVideo src={vid1} className="h-full min-w-full object-cover" />
		</AbsoluteFill>
	);
};
