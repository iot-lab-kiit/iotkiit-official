'use client';
import dynamic from 'next/dynamic';
import { CSSProperties } from 'react';

// lottie-react touches `document` at module load, which crashes SSR/prerender.
// Loading it through next/dynamic with ssr:false guarantees it is only ever
// imported in the browser, never on the server.
const Lottie = dynamic(() => import('lottie-react'), { ssr: false });

interface Props {
 animationData: unknown;
 style: CSSProperties;
}

const LottiePlayer = ({ animationData, style }: Props) => (
 <Lottie
 animationData={animationData}
 loop
 autoplay
 style={style}
 rendererSettings={{ preserveAspectRatio: 'xMidYMid slice' }}
 />
);

export default LottiePlayer;
