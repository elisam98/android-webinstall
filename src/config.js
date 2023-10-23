export default {
    OS_NAME: process.env.VUE_APP_OS_NAME,
    ACCENT_COLOR: "#0366d6",
    SUPPORTED_DEVICES: [
        {
            name: "Pixel 4",
            model: "flame",
        },
        {
            name: "Pixel 5a",
            model: "barbet",
        },
        {
            name: "Pixel 3",
            model: "blueline",
        },
        {
            name: "Pixel 2 XL",
            model: "taimen",
        },
        {
            name: "Pixel 2",
            model: "walleye",
        },
        {
            name: "Pixel 4a",
            model: "sunfish",
        },
    ],
    RELEASE_VARIANTS: {
        full: {
            description: "Full update",
            suffix: "",
        },
    },
};
