import React from "react";
import { Page } from "../../../../components/Pages";
import {
	Space,
	H1,
	H2,
	TableOverflow,
	H3,
	Row,
	Col,
	Box,
	H4,
} from "../../../../components/Layout";
import { CodeBlock } from "../../../../components/CodeBlock";

const gridCode = `<!--- Grid Container -->
<div class="container">
	<!--- Grid Row -->
	<div class="row">
		<!--- Grid Columns -->
		<div class="col-xs-6 col-lg-4">
			<div>Child 1</div>
		</div>
		<div class="col-xs-6 col-lg-4">
			<div>Child 2</div>
		</div>
		<div class="col-xs-12 col-lg-4">
			<div>Child 3</div>
		</div>
	</div>
</div>`;

function Index({ posts = [] }) {
	return (
		<Page title="Sass Grid">
			<Space xsSize={20} lgSize={40} />
			<H1 size="hero1">Sass Grid</H1>
			<Space xsSize={10} lgSize={30} />
			<p>
				Cherry grid system uses a series of containers, rows, and
				columns to layout and align content. It’s built with flexbox and
				is fully responsive. Below is an example and an in-depth look at
				how the grid comes together.
			</p>
			<Space size={10} />
			<CodeBlock
				language="html"
				value={gridCode}
				description={
					<>
						<H3 size="h6">🖥 Desktop</H3>
						<Space size={20} />
						<Row>
							<Col xs={4}>
								<Box>
									<p>
										<small>Child 1</small>
									</p>
								</Box>
							</Col>
							<Col xs={4}>
								<Box>
									<p>
										<small>Child 2</small>
									</p>
								</Box>
							</Col>
							<Col xs={4}>
								<Box>
									<p>
										<small>Child 3</small>
									</p>
								</Box>
							</Col>
						</Row>
						<Space size={20} />
						<H4 size="h6">📱 Mobile</H4>
						<Space size={20} />
						<Row>
							<Col xs={6}>
								<Box>
									<p>
										<small>Child 1</small>
									</p>
								</Box>
							</Col>
							<Col xs={6}>
								<Box>
									<p>
										<small>Child 2</small>
									</p>
								</Box>
								<Space size={20} />
							</Col>
							<Col xs={12}>
								<Box>
									<p>
										<small>Child 3</small>
									</p>
								</Box>
							</Col>
						</Row>
					</>
				}
			/>
			<Space size={20} />
			<H2 size="h3">Container and generic classes</H2>
			<p>
				Below you can find the main container class name as well as
				global classes for aligning text.
			</p>
			<TableOverflow>
				<table>
					<tr>
						<th>Description</th>
						<th>Class Name</th>
					</tr>
					<tr>
						<td>Main container</td>
						<td>.container</td>
					</tr>
					<tr>
						<td>Extend container width to max allowed</td>
						<td>.container.fluid</td>
					</tr>
					<tr>
						<td>Align text to right</td>
						<td>.text-align-right</td>
					</tr>
					<tr>
						<td>Align text to center</td>
						<td>.text-align-center</td>
					</tr>
					<tr>
						<td>Align text to left</td>
						<td>.text-align-left</td>
					</tr>
				</table>
			</TableOverflow>
			<Space size={20} />
			<H2 size="h3">Row classes</H2>
			<p>
				Below you can find the class names available for the row
				container.
			</p>
			<TableOverflow>
				<table>
					<tr>
						<th>Description</th>
						<th>Class Name</th>
					</tr>
					<tr>
						<td>Row container for the columns</td>
						<td>.row</td>
					</tr>
					<tr>
						<td>Default gutter space for the Row container </td>
						<td>.gutter-default</td>
					</tr>
					<tr>
						<td>Medium gutter space for the Row container </td>
						<td>.gutter-medium</td>
					</tr>
					<tr>
						<td>Big gutter space for the Row container </td>
						<td>.gutter-big</td>
					</tr>
					<tr>
						<td>Default row gutter for XS media query</td>
						<td>.gutter-xs-default</td>
					</tr>
					<tr>
						<td>Medium row gutter for XS media query</td>
						<td>.gutter-xs-medium</td>
					</tr>
					<tr>
						<td>Big row gutter for XS media query</td>
						<td>.gutter-xs-big</td>
					</tr>
					<tr>
						<td>Default row gutter for SM media query</td>
						<td>.gutter-sm-default</td>
					</tr>
					<tr>
						<td>Medium row gutter for SM media query</td>
						<td>.gutter-sm-medium</td>
					</tr>
					<tr>
						<td>Big row gutter for SM media query</td>
						<td>.gutter-sm-big</td>
					</tr>
					<tr>
						<td>Default row gutter for MD media query</td>
						<td>.gutter-md-default</td>
					</tr>
					<tr>
						<td>Medium row gutter for MD media query</td>
						<td>.gutter-md-medium</td>
					</tr>
					<tr>
						<td>Big row gutter for MD media query</td>
						<td>.gutter-md-big</td>
					</tr>
					<tr>
						<td>Default row gutter for LG media query</td>
						<td>.gutter-lg-default</td>
					</tr>
					<tr>
						<td>Medium row gutter for LG media query</td>
						<td>.gutter-lg-medium</td>
					</tr>
					<tr>
						<td>Big row gutter for LG media query</td>
						<td>.gutter-lg-big</td>
					</tr>
					<tr>
						<td>Default row gutter for XL media query</td>
						<td>.gutter-xl-default</td>
					</tr>
					<tr>
						<td>Medium row gutter for XL media query</td>
						<td>.gutter-xl-medium</td>
					</tr>
					<tr>
						<td>Big row gutter for XL media query</td>
						<td>.gutter-xl-big</td>
					</tr>
					<tr>
						<td>Default row gutter for XXL media query</td>
						<td>.gutter-xxl-default</td>
					</tr>
					<tr>
						<td>Medium row gutter for XXL media query</td>
						<td>.gutter-xxl-medium</td>
					</tr>
					<tr>
						<td>Big row gutter for XXL media query</td>
						<td>.gutter-xxl-big</td>
					</tr>
					<tr>
						<td>Default row gutter for XXXL media query</td>
						<td>.gutter-xxxl-default</td>
					</tr>
					<tr>
						<td>Medium row gutter for XXXL media query</td>
						<td>.gutter-xxxl-medium</td>
					</tr>
					<tr>
						<td>Big row gutter for XXXL media query</td>
						<td>.gutter-xxxl-big</td>
					</tr>
				</table>
			</TableOverflow>
			<Space size={20} />
			<H2 size="h3">Columns classes</H2>
			<p>All column class names are listed below.</p>
			<TableOverflow>
				<table>
					<tr>
						<th>Description</th>
						<th>Class Name</th>
					</tr>
					<tr>
						<td>1 Column layout</td>
						<td>.col-1</td>
					</tr>
					<tr>
						<td>2 Columns layout</td>
						<td>.col-2</td>
					</tr>
					<tr>
						<td>3 Columns layout</td>
						<td>.col-3</td>
					</tr>
					<tr>
						<td>4 Columns layout</td>
						<td>.col-4</td>
					</tr>
					<tr>
						<td>5 Columns layout</td>
						<td>.col-5</td>
					</tr>
					<tr>
						<td>6 Columns layout</td>
						<td>.col-6</td>
					</tr>
					<tr>
						<td>7 Columns layout</td>
						<td>.col-7</td>
					</tr>
					<tr>
						<td>8 Columns layout</td>
						<td>.col-8</td>
					</tr>
					<tr>
						<td>9 Columns layout</td>
						<td>.col-9</td>
					</tr>
					<tr>
						<td>10 Columns layout</td>
						<td>.col-10</td>
					</tr>
					<tr>
						<td>11 Columns layout</td>
						<td>.col-11</td>
					</tr>
					<tr>
						<td>12 Columns layout</td>
						<td>.col-12</td>
					</tr>
					<tr>
						<td>Auto Column layout</td>
						<td>.col-auto</td>
					</tr>
					<tr>
						<td>Order column as first</td>
						<td>.col-order-first</td>
					</tr>
					<tr>
						<td>Order column as last</td>
						<td>.col-order-last</td>
					</tr>

					<tr>
						<td>1 Column layout on XS</td>
						<td>.col-xs-1</td>
					</tr>
					<tr>
						<td>2 Columns layout on XS</td>
						<td>.col-xs-2</td>
					</tr>
					<tr>
						<td>3 Columns layout on XS</td>
						<td>.col-xs-3</td>
					</tr>
					<tr>
						<td>4 Columns layout on XS</td>
						<td>.col-xs-4</td>
					</tr>
					<tr>
						<td>5 Columns layout on XS</td>
						<td>.col-xs-5</td>
					</tr>
					<tr>
						<td>6 Columns layout on XS</td>
						<td>.col-xs-6</td>
					</tr>
					<tr>
						<td>7 Columns layout on XS</td>
						<td>.col-xs-7</td>
					</tr>
					<tr>
						<td>8 Columns layout on XS</td>
						<td>.col-xs-8</td>
					</tr>
					<tr>
						<td>9 Columns layout on XS</td>
						<td>.col-xs-9</td>
					</tr>
					<tr>
						<td>10 Columns layout on XS</td>
						<td>.col-xs-10</td>
					</tr>
					<tr>
						<td>11 Columns layout on XS</td>
						<td>.col-xs-11</td>
					</tr>
					<tr>
						<td>12 Columns layout on XS</td>
						<td>.col-xs-12</td>
					</tr>
					<tr>
						<td>Auto Column layout on XS</td>
						<td>.col-xs-auto</td>
					</tr>
					<tr>
						<td>Order column as first on XS</td>
						<td>.col-xs-order-first</td>
					</tr>
					<tr>
						<td>Order column as last on XS</td>
						<td>.col-xs-order-last</td>
					</tr>

					<tr>
						<td>1 Column layout on SM</td>
						<td>.col-sm-1</td>
					</tr>
					<tr>
						<td>2 Columns layout on SM</td>
						<td>.col-sm-2</td>
					</tr>
					<tr>
						<td>3 Columns layout on SM</td>
						<td>.col-sm-3</td>
					</tr>
					<tr>
						<td>4 Columns layout on SM</td>
						<td>.col-sm-4</td>
					</tr>
					<tr>
						<td>5 Columns layout on SM</td>
						<td>.col-sm-5</td>
					</tr>
					<tr>
						<td>6 Columns layout on SM</td>
						<td>.col-sm-6</td>
					</tr>
					<tr>
						<td>7 Columns layout on SM</td>
						<td>.col-sm-7</td>
					</tr>
					<tr>
						<td>8 Columns layout on SM</td>
						<td>.col-sm-8</td>
					</tr>
					<tr>
						<td>9 Columns layout on SM</td>
						<td>.col-sm-9</td>
					</tr>
					<tr>
						<td>10 Columns layout on SM</td>
						<td>.col-sm-10</td>
					</tr>
					<tr>
						<td>11 Columns layout on SM</td>
						<td>.col-sm-11</td>
					</tr>
					<tr>
						<td>12 Columns layout on SM</td>
						<td>.col-sm-12</td>
					</tr>
					<tr>
						<td>Auto Column layout on SM</td>
						<td>.col-sm-auto</td>
					</tr>
					<tr>
						<td>Order column as first on SM</td>
						<td>.col-sm-order-first</td>
					</tr>
					<tr>
						<td>Order column as last on SM</td>
						<td>.col-sm-order-last</td>
					</tr>

					<tr>
						<td>1 Column layout on MD</td>
						<td>.col-md-1</td>
					</tr>
					<tr>
						<td>2 Columns layout on MD</td>
						<td>.col-md-2</td>
					</tr>
					<tr>
						<td>3 Columns layout on MD</td>
						<td>.col-md-3</td>
					</tr>
					<tr>
						<td>4 Columns layout on MD</td>
						<td>.col-md-4</td>
					</tr>
					<tr>
						<td>5 Columns layout on MD</td>
						<td>.col-md-5</td>
					</tr>
					<tr>
						<td>6 Columns layout on MD</td>
						<td>.col-md-6</td>
					</tr>
					<tr>
						<td>7 Columns layout on MD</td>
						<td>.col-md-7</td>
					</tr>
					<tr>
						<td>8 Columns layout on MD</td>
						<td>.col-md-8</td>
					</tr>
					<tr>
						<td>9 Columns layout on MD</td>
						<td>.col-md-9</td>
					</tr>
					<tr>
						<td>10 Columns layout on MD</td>
						<td>.col-md-10</td>
					</tr>
					<tr>
						<td>11 Columns layout on MD</td>
						<td>.col-md-11</td>
					</tr>
					<tr>
						<td>12 Columns layout on MD</td>
						<td>.col-md-12</td>
					</tr>
					<tr>
						<td>Auto Column layout on MD</td>
						<td>.col-md-auto</td>
					</tr>
					<tr>
						<td>Order column as first on MD</td>
						<td>.col-md-order-first</td>
					</tr>
					<tr>
						<td>Order column as last on MD</td>
						<td>.col-md-order-last</td>
					</tr>

					<tr>
						<td>1 Column layout on LG</td>
						<td>.col-lg-1</td>
					</tr>
					<tr>
						<td>2 Columns layout on LG</td>
						<td>.col-lg-2</td>
					</tr>
					<tr>
						<td>3 Columns layout on LG</td>
						<td>.col-lg-3</td>
					</tr>
					<tr>
						<td>4 Columns layout on LG</td>
						<td>.col-lg-4</td>
					</tr>
					<tr>
						<td>5 Columns layout on LG</td>
						<td>.col-lg-5</td>
					</tr>
					<tr>
						<td>6 Columns layout on LG</td>
						<td>.col-lg-6</td>
					</tr>
					<tr>
						<td>7 Columns layout on LG</td>
						<td>.col-lg-7</td>
					</tr>
					<tr>
						<td>8 Columns layout on LG</td>
						<td>.col-lg-8</td>
					</tr>
					<tr>
						<td>9 Columns layout on LG</td>
						<td>.col-lg-9</td>
					</tr>
					<tr>
						<td>10 Columns layout on LG</td>
						<td>.col-lg-10</td>
					</tr>
					<tr>
						<td>11 Columns layout on LG</td>
						<td>.col-lg-11</td>
					</tr>
					<tr>
						<td>12 Columns layout on LG</td>
						<td>.col-lg-12</td>
					</tr>
					<tr>
						<td>Auto Column layout on LG</td>
						<td>.col-lg-auto</td>
					</tr>
					<tr>
						<td>Order column as first on LG</td>
						<td>.col-lg-order-first</td>
					</tr>
					<tr>
						<td>Order column as last on LG</td>
						<td>.col-lg-order-last</td>
					</tr>

					<tr>
						<td>1 Column layout on XL</td>
						<td>.col-xl-1</td>
					</tr>
					<tr>
						<td>2 Columns layout on XL</td>
						<td>.col-xl-2</td>
					</tr>
					<tr>
						<td>3 Columns layout on XL</td>
						<td>.col-xl-3</td>
					</tr>
					<tr>
						<td>4 Columns layout on XL</td>
						<td>.col-xl-4</td>
					</tr>
					<tr>
						<td>5 Columns layout on XL</td>
						<td>.col-xl-5</td>
					</tr>
					<tr>
						<td>6 Columns layout on XL</td>
						<td>.col-xl-6</td>
					</tr>
					<tr>
						<td>7 Columns layout on XL</td>
						<td>.col-xl-7</td>
					</tr>
					<tr>
						<td>8 Columns layout on XL</td>
						<td>.col-xl-8</td>
					</tr>
					<tr>
						<td>9 Columns layout on XL</td>
						<td>.col-xl-9</td>
					</tr>
					<tr>
						<td>10 Columns layout on XL</td>
						<td>.col-xl-10</td>
					</tr>
					<tr>
						<td>11 Columns layout on XL</td>
						<td>.col-xl-11</td>
					</tr>
					<tr>
						<td>12 Columns layout on XL</td>
						<td>.col-xl-12</td>
					</tr>
					<tr>
						<td>Auto Column layout on XL</td>
						<td>.col-xl-auto</td>
					</tr>
					<tr>
						<td>Order column as first on XL</td>
						<td>.col-xl-order-first</td>
					</tr>
					<tr>
						<td>Order column as last on XL</td>
						<td>.col-xl-order-last</td>
					</tr>

					<tr>
						<td>1 Column layout on XXL</td>
						<td>.col-xxl-1</td>
					</tr>
					<tr>
						<td>2 Columns layout on XXL</td>
						<td>.col-xxl-2</td>
					</tr>
					<tr>
						<td>3 Columns layout on XXL</td>
						<td>.col-xxl-3</td>
					</tr>
					<tr>
						<td>4 Columns layout on XXL</td>
						<td>.col-xxl-4</td>
					</tr>
					<tr>
						<td>5 Columns layout on XXL</td>
						<td>.col-xxl-5</td>
					</tr>
					<tr>
						<td>6 Columns layout on XXL</td>
						<td>.col-xxl-6</td>
					</tr>
					<tr>
						<td>7 Columns layout on XXL</td>
						<td>.col-xxl-7</td>
					</tr>
					<tr>
						<td>8 Columns layout on XXL</td>
						<td>.col-xxl-8</td>
					</tr>
					<tr>
						<td>9 Columns layout on XXL</td>
						<td>.col-xxl-9</td>
					</tr>
					<tr>
						<td>10 Columns layout on XXL</td>
						<td>.col-xxl-10</td>
					</tr>
					<tr>
						<td>11 Columns layout on XXL</td>
						<td>.col-xxl-11</td>
					</tr>
					<tr>
						<td>12 Columns layout on XXL</td>
						<td>.col-xxl-12</td>
					</tr>
					<tr>
						<td>Auto Column layout on XXL</td>
						<td>.col-xxl-auto</td>
					</tr>
					<tr>
						<td>Order column as first on XXL</td>
						<td>.col-xxl-order-first</td>
					</tr>
					<tr>
						<td>Order column as last on XXL</td>
						<td>.col-xxl-order-last</td>
					</tr>

					<tr>
						<td>1 Column layout on XXXL</td>
						<td>.col-xxxl-1</td>
					</tr>
					<tr>
						<td>2 Columns layout on XXXL</td>
						<td>.col-xxxl-2</td>
					</tr>
					<tr>
						<td>3 Columns layout on XXXL</td>
						<td>.col-xxxl-3</td>
					</tr>
					<tr>
						<td>4 Columns layout on XXXL</td>
						<td>.col-xxxl-4</td>
					</tr>
					<tr>
						<td>5 Columns layout on XXXL</td>
						<td>.col-xxxl-5</td>
					</tr>
					<tr>
						<td>6 Columns layout on XXXL</td>
						<td>.col-xxxl-6</td>
					</tr>
					<tr>
						<td>7 Columns layout on XXXL</td>
						<td>.col-xxxl-7</td>
					</tr>
					<tr>
						<td>8 Columns layout on XXXL</td>
						<td>.col-xxxl-8</td>
					</tr>
					<tr>
						<td>9 Columns layout on XXXL</td>
						<td>.col-xxxl-9</td>
					</tr>
					<tr>
						<td>10 Columns layout on XXXL</td>
						<td>.col-xxxl-10</td>
					</tr>
					<tr>
						<td>11 Columns layout on XXXL</td>
						<td>.col-xxxl-11</td>
					</tr>
					<tr>
						<td>12 Columns layout on XXXL</td>
						<td>.col-xxxl-12</td>
					</tr>
					<tr>
						<td>Auto Column layout on XXXL</td>
						<td>.col-xxxl-auto</td>
					</tr>
					<tr>
						<td>Order column as first on XXXL</td>
						<td>.col-xxxl-order-first</td>
					</tr>
					<tr>
						<td>Order column as last on XXXL</td>
						<td>.col-xxxl-order-last</td>
					</tr>
				</table>
			</TableOverflow>
			<Space size={20} />
		</Page>
	);
}

export default Index;
