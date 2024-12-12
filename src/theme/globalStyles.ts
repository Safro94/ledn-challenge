import { createGlobalStyle } from 'styled-components'

export const GlobalStyle = createGlobalStyle`
	* {
		font-family: 'Source Sans Pro', sans-serif;
		margin: 0;
		padding: 0;
		box-sizing: border-box;
		outline: none;
	}

	html,
	body,
	#root {
		height: 100%;
	}

	body {
		margin: 0;
		font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', 'Roboto', 'Oxygen',
			'Ubuntu', 'Cantarell', 'Fira Sans', 'Droid Sans', 'Helvetica Neue',
			sans-serif;
		-webkit-font-smoothing: antialiased;
		-moz-osx-font-smoothing: grayscale;
	}

	code {
		font-family: source-code-pro, Menlo, Monaco, Consolas, 'Courier New',
			monospace;
	}

	ul {
		list-style: none;
	}

	a {
		text-decoration: none;
	}
`
