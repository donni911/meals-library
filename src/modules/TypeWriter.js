import gsap from "gsap";

import { TextPlugin } from "gsap/TextPlugin.js";
import shuffle from "./shuffle";

gsap.registerPlugin(TextPlugin);

const addSymbol = (target) => {
    return gsap.to(target, {
        opacity: 0,
        repeat: -1,
        yoyo: true,
        duration: 0.5,
        ease: "power2.inOut",
    });
};

const typeWriter = (el, data, duration = 1) => {
    //main timeline
    let tlMaster = gsap.timeline({ repeat: -1 });

    switch (typeof data) {
        case "object":
            return shuffle(data).forEach((word) => {
                let tlText = gsap.timeline({
                    repeat: 1,
                    yoyo: true,
                    repeatDelay: 2,
                });

                tlText.to(el, {
                    text: word,
                    duration: duration,
                    ease: "linear",
                });

                tlMaster.add(tlText);
            });
        default:
            return gsap.to(el, {
                text: data,
                duration: duration,
                yoyo: true,
                ease: "linear",
                repeat: -1,
                repeatDelay: 2,
            });
    }
};

export { typeWriter, addSymbol };
