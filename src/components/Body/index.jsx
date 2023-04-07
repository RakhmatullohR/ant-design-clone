import React from "react";
import { Container, Wrapper, Title, Status, ChartContainer } from "./style";
import StudentStatus from './StudentsStatus'
import { data } from '../../data/studentStatus'
import Charts from './Charts'
import PieChart from './PieChart'
import Table from './Table'
import { tableData, header } from '../../data/table'
function App() {
	return (
		<Container>
			<Title>DIREKTOR DASHBOARD</Title>
			<Wrapper>
				<Status>
					{
						data.map((item) => (
							<StudentStatus key={item.id} data={item} status={item.status} last={item.id === 4} />
						))
					}
				</Status>
				<ChartContainer>
					<ChartContainer.Left>
						<Charts />
					</ChartContainer.Left>
					<ChartContainer.Right>
						<PieChart />
					</ChartContainer.Right>
				</ChartContainer>
				<Table data={tableData} header={header} />
			</Wrapper>
		</Container>
	);
}

export default App;
