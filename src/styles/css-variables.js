import { css, keyframes } from "styled-components";

// Fonts
export const avenir = "'Avenir Next', sans-serif";
export const titan = " 'Titan One', cursive;";
export const merriweather = "'Merriweather', serif;";

//colors
export { default as colors } from "./colors";

// Responsive design
export const phoneMediaQuery = "max-width: 768px";
export const tabletMediaQuery = "max-width: 957px";
export const smallDesktopMediaQuery = "max-width: 1200px";
export const desktopMediaQuery = "min-width: 1200px";

export const media = {
  phone: (...args) => css`
    @media (${phoneMediaQuery}) {
      ${css(...args)};
    }
  `,
  tablet: (...args) => css`
    @media (${tabletMediaQuery}) {
      ${css(...args)};
    }
  `,
  smallDesktop: (...args) => css`
    @media (${smallDesktopMediaQuery}) {
      ${css(...args)};
    }
  `,
  desktop: (...args) => css`
    @media (${desktopMediaQuery}) {
      ${css(...args)};
    }
  `
};

export const show = keyframes`
    0% {
        display: none;
        opacity: 0;
    }
    1% {
        display: flex;
        opacity: 0;
    }
    100% {
        opacity: 1;
    }
`;

export const fadeIn = keyframes`
    0% {
    background: rgba(0,0,0,.0);
    }
    100% {
    background: rgba(0,0,0,.7);
    }
`;

export const fadeInDown = keyframes`
	from {
			opacity: 0;
			transform: translateY(24px);
		}
		to {
			opacity: 1;
			transform: translate(0px);
		}
`;

export const scaleUp = keyframes`
    0% {
        transform: scale(.8) translateY(1000px);
        opacity: 0;
    }
    100% {
        transform: scale(1) translateY(0px);
        opacity: 1;
    }
`;

export const scaleBack = keyframes`
    0% {
        transform: scale(1);
    }
    100% {
        transform: scale(.85);
    }
`;

export const quickScaleDown = keyframes`
    0% {
        transform:scale(1);
    }
    99.9% {
        transform:scale(1);
    }
    100% {
        transform:scale(0);
    }
`;

export const fadeOut = keyframes`
    0% {
        background: rgba(0,0,0,.7);
    }
    100% {
        background: rgba(0,0,0,.0);
    }
`;

export const scaleDown = keyframes`
    0% {
        transform: scale(1) translateY(0px);
        opacity: 1;
    }
    100% {
        transform: scale(.8) translateY(1000px);
        opacity: 0;
    }
`;

export const scaleForward = keyframes`
    0% {
        transform: scale(.85);
    }
    100% {
        transform: scale(1);
    }
`;
export const spinAround = keyframes`
	from {
		-webkit-transform: rotate(0);
		transform: rotate(0)
	}

	to {
		-webkit-transform: rotate(359deg);
		transform: rotate(359deg)
	}

`;

export const slideInLeft = keyframes`
	100% { left: 0; }
`;

export const slideOutLeft = keyframes`

`;
