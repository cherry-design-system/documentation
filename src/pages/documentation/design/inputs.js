import React from "react";
import { Page } from "../../../components/Pages";
import {
	Space,
	H1,
	Link,
	Box,
	Row,
	Col,
	Input,
	Select,
	Textarea,
} from "../../../components/Layout";

function Index({ posts = [] }) {
	return (
		<Page title="Design Inputs">
			<Space xsSize={20} lgSize={40} />
			<H1 size="hero1">Design Inputs</H1>
			<Space xsSize={10} lgSize={30} />
			<p>
				Cherry includes form styles for all the default HTML inputs.
				Input text, phone, number, email, password, checkbox, radio,
				select and textarea. The input texts, textareas and selects
				include 2 different statuses: error and success.
			</p>
			<Space size={10} />
			<Row>
				<Col xs={12} lg={4}>
					<Input type="text" placeholder="Placeholder" />
					<Space size={20} />
				</Col>
				<Col xs={12} lg={4}>
					<Input type="text" placeholder="Placeholder" error />
					<Space size={20} />
				</Col>
				<Col xs={12} lg={4}>
					<Input type="text" placeholder="Placeholder" success />
					<Space size={20} />
				</Col>
				<Col xs={12} lg={4}>
					<Input type="text" placeholder="Placeholder" size="big" />
					<Space size={20} />
				</Col>
				<Col xs={12} lg={4}>
					<Input
						type="text"
						placeholder="Placeholder"
						error
						size="big"
					/>
					<Space size={20} />
				</Col>
				<Col xs={12} lg={4}>
					<Input
						type="text"
						placeholder="Placeholder"
						success
						size="big"
					/>
					<Space size={20} />
				</Col>
				<Col xs={12} lg={4}>
					<Select>
						<option value="1">Sample 1</option>
						<option value="2">Sample 2</option>
						<option value="3">Sample 3</option>
					</Select>
					<Space size={20} />
				</Col>
				<Col xs={12} lg={4}>
					<Select error>
						<option value="1">Sample 1</option>
						<option value="2">Sample 2</option>
						<option value="3">Sample 3</option>
					</Select>
					<Space size={20} />
				</Col>
				<Col xs={12} lg={4}>
					<Select success>
						<option value="1">Sample 1</option>
						<option value="2">Sample 2</option>
						<option value="3">Sample 3</option>
					</Select>
					<Space size={20} />
				</Col>
				<Col xs={12} lg={4}>
					<Select size="big">
						<option value="1">Sample 1</option>
						<option value="2">Sample 2</option>
						<option value="3">Sample 3</option>
					</Select>
					<Space size={20} />
				</Col>
				<Col xs={12} lg={4}>
					<Select error size="big">
						<option value="1">Sample 1</option>
						<option value="2">Sample 2</option>
						<option value="3">Sample 3</option>
					</Select>
					<Space size={20} />
				</Col>
				<Col xs={12} lg={4}>
					<Select success size="big">
						<option value="1">Sample 1</option>
						<option value="2">Sample 2</option>
						<option value="3">Sample 3</option>
					</Select>
					<Space size={20} />
				</Col>
				<Col xs={12} lg={4}>
					<Textarea type="text" placeholder="Placeholder" />
					<Space size={20} />
				</Col>
				<Col xs={12} lg={4}>
					<Textarea type="text" placeholder="Placeholder" error />
					<Space size={20} />
				</Col>
				<Col xs={12} lg={4}>
					<Textarea type="text" placeholder="Placeholder" success />
					<Space size={20} />
				</Col>
				<Col xs={12} lg={4}>
					<Textarea
						type="text"
						placeholder="Placeholder"
						size="big"
					/>
					<Space size={20} />
				</Col>
				<Col xs={12} lg={4}>
					<Textarea
						type="text"
						placeholder="Placeholder"
						error
						size="big"
					/>
					<Space size={20} />
				</Col>
				<Col xs={12} lg={4}>
					<Textarea
						type="text"
						placeholder="Placeholder"
						success
						size="big"
					/>
					<Space size={20} />
				</Col>

				<Col xs={12} lg={4}>
					<Input
						type="checkbox"
						placeholder="Placeholder"
						label="Checkbox"
						id="check-1"
					/>
					<Space size={20} />
				</Col>
				<Col xs={12} lg={4}>
					<Input
						type="checkbox"
						placeholder="Placeholder"
						label="Checkbox"
						id="check-2"
						checked
					/>
					<Space size={20} />
				</Col>
				<Col xs={12} lg={4}>
					<Input
						type="checkbox"
						placeholder="Placeholder"
						label="Checkbox"
						disabled
					/>
					<Space size={20} />
				</Col>
				<Col xs={12} lg={4}>
					<Input
						type="radio"
						name="test1"
						placeholder="Placeholder"
						label="Radio"
						id="radio-1"
					/>
					<Space size={20} />
				</Col>
				<Col xs={12} lg={4}>
					<Input
						type="radio"
						name="test1"
						placeholder="Placeholder"
						label="Radio"
						id="radio-2"
						checked
					/>
					<Space size={20} />
				</Col>
				<Col xs={12} lg={4}>
					<Input
						type="radio"
						name="test1"
						placeholder="Placeholder"
						label="Radio"
						disabled
					/>
					<Space size={20} />
				</Col>

				<Col xs={12} lg={4}>
					<Input type="text" placeholder="Placeholder" disabled />
					<Space size={20} />
				</Col>
				<Col xs={12} lg={4}>
					<Select disabled>
						<option value="1">Sample 1</option>
						<option value="2">Sample 2</option>
						<option value="3">Sample 3</option>
					</Select>
					<Space size={20} />
				</Col>
				<Col xs={12} lg={4}>
					<Textarea type="text" placeholder="Placeholder" disabled />
					<Space size={20} />
				</Col>
				<Col xs={12} lg={4}>
					<Input type="text" placeholder="Placeholder" big disabled />
					<Space size={20} />
				</Col>
				<Col xs={12} lg={4}>
					<Select big disabled>
						<option value="1">Sample 1</option>
						<option value="2">Sample 2</option>
						<option value="3">Sample 3</option>
					</Select>
					<Space size={20} />
				</Col>
				<Col xs={12} lg={4}>
					<Textarea
						type="text"
						placeholder="Placeholder"
						big
						disabled
					/>
					<Space size={20} />
				</Col>
			</Row>
		</Page>
	);
}

export default Index;
