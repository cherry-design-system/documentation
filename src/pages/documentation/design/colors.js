import React from "react";
import { Page } from "../../../components/Pages";
import { Space, H1, Link, Col, Row } from "../../../components/Layout";
import { ColorBox, ColorBoxContainer } from "../../../components/ColorBox";

function Index({ posts = [] }) {
	return (
		<Page
			title="Design Colors"
			description="Cherry includes a default color palette, that is a great starting point if you don't have your own specific branding in mind."
		>
			<Space xsSize={20} lgSize={40} />
			<H1 size="hero1">Design Colors</H1>
			<Space xsSize={10} lgSize={30} />
			<p>
				Cherry includes a default color palette, that is a great
				starting point if you don't have your own specific branding in
				mind.
			</p>
			<Space size={10} />
			<hr />
			<Space size={10} />
			<Row>
				<Col xs={12} lg={4}>
					<ColorBox name="Primary Light" value="#FDA4AF" />
					<Space size={20} />
				</Col>
				<Col xs={12} lg={4}>
					<ColorBox name="Secondary Light" value="#7DD3FC" />
					<Space size={20} />
				</Col>
				<Col xs={12} lg={4}>
					<ColorBox name="Tertiary Light" value="#D8B4FE" />
					<Space size={20} />
				</Col>
			</Row>
			<Row>
				<Col xs={12} lg={4}>
					<ColorBox name="Primary" value="#F43F5E" />
					<Space size={20} />
				</Col>
				<Col xs={12} lg={4}>
					<ColorBox name="Secondary" value="#0EA5E9" />
					<Space size={20} />
				</Col>
				<Col xs={12} lg={4}>
					<ColorBox name="Tertiary" value="#A855F7" />
					<Space size={20} />
				</Col>
			</Row>
			<Row>
				<Col xs={12} lg={4}>
					<ColorBox name="Primary Dark" value="#9F1239" />
					<Space xsSize={20} lgSize={10} />
				</Col>
				<Col xs={12} lg={4}>
					<ColorBox name="Secondary Dark" value="#075985" />
					<Space xsSize={20} lgSize={10} />
				</Col>
				<Col xs={12} lg={4}>
					<ColorBox name="Tertiary Dark" value="#6B21A8" />
					<Space xsSize={10} lgSize={10} />
				</Col>
			</Row>
			<hr />
			<ColorBoxContainer>
				<ColorBox name="Dark" value="#000000" />
				<ColorBox name="Light" value="#FFFFFF" border />
			</ColorBoxContainer>
			<ColorBoxContainer>
				<ColorBox name="Gray Light" value="#E5E7EB" />
				<ColorBox name="Gray" value="#9CA3AF" />
				<ColorBox name="Gray Dark" value="#4B5563" />
			</ColorBoxContainer>
			<ColorBoxContainer>
				<ColorBox name="Success" value="#28A745" />
				<ColorBox name="Error" value="#DC3545" />
				<ColorBox name="Warning" value="#FFC107" />
				<ColorBox name="Info" value="#17A2B8" />
			</ColorBoxContainer>
			<Space xsSize="none" lgSize={10} />
		</Page>
	);
}

export default Index;
