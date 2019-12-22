import React from "react";
import ReactDOM from "react-dom";
import * as serviceWorker from "./serviceWorker";
import App from "./components/pages/App";
import { BrowserRouter as Router } from "react-router-dom";
import { createGlobalStyle } from "styled-components/macro";
import AvenirNext from "fonts/AvenirNext.otf";
import AvenirNextBold from "fonts/AvenirNextBold.otf";
import { colors } from "styles/css-variables";

const GlobalStyles = createGlobalStyle`
	@font-face {
		font-family: AvenirNext;
		src: url(${AvenirNext});
	}
	@font-face {
		font-family: AvenirNextBold;
		src: url(${AvenirNextBold});
	}

	[data-reactroot] 
		{height: 100% !important; }

	html, body, #app, #app>div {
  background: ${colors.black};
		height: 100%
	}

	body {
		margin: 0;
		padding: 0;
		font-family: 'Avenir Next', sans-serif;
		font-size: 16px;
		letter-spacing: 0.05em;
	}

	div#root {
		height: 100%;
	}
`;

ReactDOM.render(
  <Router>
    <>
      <GlobalStyles />
      <App />
    </>
  </Router>,
  document.getElementById("root")
);

serviceWorker.unregister();
