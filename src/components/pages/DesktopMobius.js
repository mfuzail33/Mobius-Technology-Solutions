import { useRef, useState } from "react";
import LogoMp4 from "../../assets/images/logoAnimation.mp4"

const DesktopMobius = () => {
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
                top: 0,
                left: 0,
                right: 0,
                bottom: 0,
                position: 'absolute'
            }}
        >
            <video
                ref={videoRef}
                autoPlay
                muted
                onEnded={handleVideoEnded}
                style={{
                    position: "absolute",
                    top: 0,
                    left: 0,
                    right: 0,
                    bottom: 0,
                    width: "100%",
                    height: "100%",
                    objectFit: "cover",
                    zIndex: 0,
                    opacity: 0.8,
                }}
            >
                <source src={LogoMp4} type="video/mp4" />
            </video>
        </div>
    )
}

export default DesktopMobius;