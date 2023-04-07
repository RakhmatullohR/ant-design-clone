import React, { useState, useEffect } from "react";
import {
	Container, Element, SubElement, SubItem, Wrapper
} from "./style";
import { Routes } from '../../utils/sidebar'
import { useHistory } from 'react-router-dom';

function App({ location: { pathname } }) {
	const isActive = (path) => window.location.pathname.includes(path);
	const history = useHistory();
	const filteredData = Routes.filter(({ hidden }) => hidden === false);
	const [active, setActive] = useState(true);
	useEffect(() => {
		pathname === '/dashboard' || pathname === '/docs' || pathname === "/resources" ? setActive(true) : setActive(false);
	}, [pathname])
	return (
		<Container active={active}>
			{
				filteredData.map(({ path, title, children }, index) =>
					children.length ?
						<Wrapper key={`${index + 1}`}>
							<SubItem
								key={`${index + 1}`}
								active={isActive(path)}
								onClick={() => history.push(path)}
							>
								{title}
							</SubItem>
							{
								children.map((child, index) => (
									<SubElement
										collapsed={isActive(path)}
										key={`${index + 1}`}
										active={isActive(child.path)}
										onClick={() => history.push(path + child.path)}
									>
										- 	{child.title}
									</SubElement>
								))
							}
						</Wrapper>
						:
						<Element
							key={`${index + 1}`}
							active={isActive(path)}
							onClick={() => history.push(path)}
						>
							{title}
						</Element>
				)
			}
		</Container>
	);
}

export default App;
