import { useRef, useState } from "react";
import LogoMp4 from "../../assets/images/logoAnimation.mp4";

const MobileMobius = () => {
    const videoRef = useRef(null);
    const [rotate, setRotate] = useState(false);

    const handleVideoEnded = () => {
        if (videoRef.current) {
            videoRef.current.pause();
            setRotate(true)
        }
    };

    return (
        <div
            style={{
                animation: rotate ? 'rotateLogo 16s linear infinite' : 'none',
                top: "50%",
                left: "50%",
                position:'absolute'
            }}
        >
            <video
                ref={videoRef}
                autoPlay
                muted
                onEnded={handleVideoEnded}
                style={{
                    position: "absolute",
                    top: "50%",
                    left: "50%",
                    transform: "translate(-50%, -50%) rotate(90deg)",
                    width: "100vh",
                    height: "100vw",
                    objectFit: "cover",
                    zIndex: 0,
                    opacity: 0.8,
                    "@media (orientation: portrait)": {
                        width: "100vw",
                        height: "100vh"
                    },
                }}
            >
                <source src={LogoMp4} type="video/mp4" />
            </video>
        </div>
    );
}

export default MobileMobius;