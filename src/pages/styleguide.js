import React from "react";
import { css } from "@emotion/react";
import Image from "next/image";
import { Prism as SyntaxHighlighter } from "react-syntax-highlighter";
import ReactMarkdown from "react-markdown";
import { materialDark } from "react-syntax-highlighter/dist/cjs/styles/prism";

import { Page } from "../components/Pages";
import {
	Container,
	Row,
	Col,
	Space,
	H1,
	Button,
	Input,
	Select,
	Textarea,
} from "../components/Layout";

const markdown = `Here is some JavaScript code:
 
~~~jsx
console.log('It works!')
const CodeBlock = ({ language, value }) => {
	return (
		<SyntaxHighlighter showLineNumbers={true} language={language}>
			{value}
		</SyntaxHighlighter>
	);
};
~~~
`;

const CodeBlock = ({ language, value }) => {
	return (
		<SyntaxHighlighter
			showLineNumbers={true}
			language={language}
			style={materialDark}
		>
			{value}
		</SyntaxHighlighter>
	);
};

function Index({ posts = [] }) {
	return (
		<Page title="Styleguide" description="Hello world">
			<Container>
				<Space xsSize={20} lgSize={150} />
				<Row gutterLg="medium">
					<Col xs={12} lg={8}>
						<H1 size="hero1">A design system to build the web.</H1>
						<p>
							Cherry is the foundation for your design system,
							from design to code. With examples of
							implementations in modern front-end technologies.
							Customizable and scalable, ready to be used
							out-of-the-box.
						</p>
						<Button>Hello</Button>
						<br />
						<br />
						<Button variant="secondary">Hello</Button>
						<br />
						<br />
						<Button variant="tertiary">Hello</Button>
						<br />
						<br />
						<Button disabled>Hello</Button>
						<br />
						<br />
						<Button frame>Hello</Button>
						<br />
						<br />
						<Button frame variant="secondary">
							Hello
						</Button>
						<br />
						<br />
						<Button frame variant="tertiary">
							Hello
						</Button>
						<br />
						<br />
						<Button frame disabled>
							Hello
						</Button>
						<br />
						<br />
						<Button size="big">Hello</Button>
						<br />
						<br />
						<Button variant="secondary" size="big">
							Hello
						</Button>
						<br />
						<br />
						<Button variant="tertiary" size="big">
							Hello
						</Button>
						<br />
						<br />
						<Button disabled size="big">
							Hello
						</Button>
						<br />
						<br />
						<Button frame size="big">
							Hello
						</Button>
						<br />
						<br />
						<Button frame variant="secondary" size="big">
							Hello
						</Button>
						<br />
						<br />
						<Button frame variant="tertiary" size="big">
							Hello
						</Button>
						<br />
						<br />
						<Button frame disabled size="big">
							Hello
						</Button>
						<br />
						<br />
						<Input />
						<br />
						<br />
						<Input disabled />
						<br />
						<br />
						<Input error />
						<br />
						<br />
						<Input placeholder="Error" success />
						<br />
						<br />
						<Input
							placeholder="Error"
							type="checkbox"
							label="Test"
							id="test"
						/>
						<br />
						<br />
						<Input
							placeholder="Error"
							type="checkbox"
							label="Big"
							id="testbig"
							size="big"
						/>
						<br />
						<br />
						<Input
							placeholder="Error"
							type="checkbox"
							label="Test"
							id="test3c"
							disabled
						/>
						<br />
						<br />
						<Input
							placeholder="Error"
							type="radio"
							label="Test"
							id="test2a"
							name="testa"
						/>
						<br />
						<br />
						<Input
							placeholder="Error"
							type="radio"
							label="Test"
							id="test3b"
							name="test2"
						/>
						<br />
						<br />
						<Input
							placeholder="Error"
							type="radio"
							label="Test"
							id="test3bc"
							name="test2"
							size="big"
						/>
						<br />
						<br />
						<Input
							placeholder="Error"
							type="radio"
							label="Test"
							id="test323"
							name="test2"
							size="big"
						/>
						<br />
						<br />
						<Select>
							<option value="1">1</option>
							<option value="2">2</option>
							<option value="3">3</option>
						</Select>
						<br />
						<br />
						<Select disabled>
							<option value="1">1</option>
							<option value="2">2</option>
							<option value="3">3</option>
						</Select>
						<br />
						<br />
						<Select size="big">
							<option value="1">1</option>
							<option value="2">2</option>
							<option value="3">3</option>
						</Select>
						<br />
						<br />
						<Textarea size="big" value="Hello world" />
						<br />
						<br />
					</Col>
					<Col xs={12} lg={4} textAlign="center">
						<Image
							src="/img/illustration.png"
							alt="Cherry home page illustration"
							width={267.92}
							height={314}
						/>
					</Col>
				</Row>
				<Space xsSize={20} lgSize={150} />
				<ReactMarkdown
					escapeHtml={true}
					source={markdown}
					renderers={{ code: CodeBlock }}
				/>
				<Space xsSize={20} lgSize={150} />
			</Container>
		</Page>
	);
}

export default Index;
