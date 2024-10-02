import React, { useRef, useEffect } from "react";
import { useMediaQuery } from 'react-responsive';

const Cursor = () => {
    const cursorRef = useRef(null);
    const trailRef = useRef(null);
    const isMobile = useMediaQuery({ maxWidth: 768 })

    useEffect(() => {
        const cursor1 = cursorRef.current;
        const trail = trailRef.current;
        document.addEventListener("mousemove", (e) => {
            const { clientX, clientY } = e;
            cursor1.style.left = clientX + "px";
            cursor1.style.top = clientY + "px";
            trail.style.left = clientX - 25 + "px"; // Adjust for cursor size
            trail.style.top = clientY - 25 + "px"; // Adjust for cursor size
        });
    }, []);

    return (
        <>
            <div className="circle x1"></div>
            <div className="circle x2"></div>
            <div className="circle x3"></div>
            <div className="circle x4"></div>
            <div className="circle x5"></div>
            <div
                ref={cursorRef}
                className="cursor1"
                style={{ position: "fixed", background: "transparent" }}
            ></div>
            <div
                ref={trailRef}
                className="trail"
                style={{
                    position: "fixed",
                    width: "50px",
                    height: "50px",
                    borderRadius: "50%",
                    background: "rgba(255, 255, 255, 0.5)", // Adjust the opacity and color as needed
                    pointerEvents: "none", // Ensure the trail doesn't interfere with mouse events
                    display: isMobile ? "none" : "flex"
                }}
            ></div>
        </>
    )
}

export default Cursor;