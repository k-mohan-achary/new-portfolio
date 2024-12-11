export default {
    // background: {
    //     color: {
    //         value: "#1d1d1d",
    //     },
    // },
    /** Change Code to Add Back ground Image Code  */
    background: {
        image: "url('https://live.staticflickr.com/65535/51105464410_9e65a29622_c.jpg')",  // Replace with your image URL
        size: "cover",  // This ensures the image covers the entire background
        position: "center",  // This centers the image
        repeat: "no-repeat"  // This prevents the image from repeating
    },
    
    fpsLimit: 120,
    interactivity: {
        events: {
            onClick: {
                enable: true,
                mode: "push",
            },
            onHover: {
                enable: true,
                mode: "repulse",
            },
            resize: true,
        },
        modes: {
            push: {
                quantity: 4,
            },
            repulse: {
                distance: 200,
                duration: 0.4,
            },
        },
    },
    particles: {
        color: {
            value: "#ffdd40",
        },
        links: {
            color: "#ffdd40",
            distance: 150,
            enable: true,
            opacity: 0.5,
            width: 1,
        },
        move: {
            direction: "none",
            enable: true,
            outModes: {
                default: "bounce",
            },
            random: false,
            speed: 6,
            straight: false,
        },
        number: {
            density: {
                enable: true,
                area: 800,
            },
            value: 80,
        },
        opacity: {
            value: 0.5,
        },
        shape: {
            type: "circle",
        },
        size: {
            value: { min: 1, max: 5 },
        },
    },
    detectRetina: true,
};