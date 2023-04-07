import React from "react";
import { Container, Wrapper } from "./style";
import Sidebar from '../../components/Sidebar'
import Navbar from '../../components/Navbar'
import Body from '../../components/Body'
function App() {
	return (
		<Container>
			<Sidebar />
			<Wrapper>
				<Navbar />
				<Body />
			</Wrapper>
		</Container>
	);
}

export default App;
