import React from "react";
import { Page } from "../../../../components/Pages";
import {
	Space,
	H1,
	Input,
	Select,
	Textarea,
	H2,
	ToggleInput,
	RangeSlider,
} from "../../../../components/Layout";
import { CodeBlock } from "../../../../components/CodeBlock";
import { DocNav, DocNavWrapper } from "../../../../components/DocNav";

const inputTextCode = `<input type="text" placeholder="Placeholder" />`;
const inputTextErrorCode = `<input type="text" class="error" placeholder="Placeholder" />`;
const inputTextSuccessCode = `<input type="text" class="success" placeholder="Placeholder"/>`;
const inputTextDisabledCode = `<input type="text" placeholder="Placeholder" disabled />`;
const inputTextLabelCode = `<label for="sample">Label</label>
<input type="text" placeholder="Placeholder" id="sample" />`;

const inputTextBigCode = `<input type="text" class="big" placeholder="Placeholder" />`;
const inputTextErrorBigCode = `<input type="text" class="big error" placeholder="Placeholder" />`;
const inputTextSuccessBigCode = `<input type="text" class="big success" placeholder="Placeholder" />`;
const inputTextDisabledBigCode = `<input type="text" class="big" placeholder="Placeholder" disabled />`;
const inputTextLabelBigCode = `<label for="sample">Label</label>
<input type="text" class="big" placeholder="Placeholder" id="sample" />`;

const selectCode = `<select>
	<option value="1">Sample 1</option>
	<option value="2">Sample 2</option>
	<option value="3">Sample 3</option>
</select>`;
const selectErrorCode = `<select class="error">
	<option value="1">Sample 1</option>
	<option value="2">Sample 2</option>
	<option value="3">Sample 3</option>
</select>`;
const selectSuccessCode = `<select class="success">
	<option value="1">Sample 1</option>
	<option value="2">Sample 2</option>
	<option value="3">Sample 3</option>
</select>`;
const selectDisabledCode = `<select disabled>
	<option value="1">Sample 1</option>
	<option value="2">Sample 2</option>
	<option value="3">Sample 3</option>
</select>`;

const selectBigCode = `<select class="big">
	<option value="1">Sample 1</option>
	<option value="2">Sample 2</option>
	<option value="3">Sample 3</option>
</select>`;
const selectErrorBigCode = `<select class="error big">
	<option value="1">Sample 1</option>
	<option value="2">Sample 2</option>
	<option value="3">Sample 3</option>
</select>`;
const selectSuccessBigCode = `<select class="success big">
	<option value="1">Sample 1</option>
	<option value="2">Sample 2</option>
	<option value="3">Sample 3</option>
</select>`;
const selectBigDisabledCode = `<select class="big" disabled>
	<option value="1">Sample 1</option>
	<option value="2">Sample 2</option>
	<option value="3">Sample 3</option>
</select>`;

const textareaCode = `<textarea>Placeholder</textarea>`;
const textareaErrorCode = `<textarea class="error">Placeholder</textarea>`;
const textareaSuccessCode = `<textarea class="success">Placeholder</textarea>`;
const textareaDisabledCode = `<textarea disabled>Placeholder</textarea>`;

const textareaBigCode = `<textarea class="big">Placeholder</textarea>`;
const textareaErrorBigCode = `<textarea class="error big">Placeholder</textarea>`;
const textareaSuccessBigCode = `<textarea class="success big">Placeholder</textarea>`;
const textareaBigDisabledCode = `<textarea class="big">Placeholder</textarea>`;

const checkboxCode = `<div class="radio-check-wrapper">
	<input type="checkbox" id="sample-check">
	<label for="sample-check">Checkbox</label>
</div>`;
const checkboxCheckedCode = `<div class="radio-check-wrapper">
	<input type="checkbox" id="sample-check" checked>
	<label for="sample-check">Checkbox</label>
</div>`;
const checkboxDisabledCode = `<div class="radio-check-wrapper">
	<input type="checkbox" id="sample-check" disabled>
	<label for="sample-check">Checkbox</label>
</div>`;

const checkboxBigCode = `<div class="radio-check-wrapper big">
	<input type="checkbox" id="sample-check" class="big">
	<label for="sample-check">Checkbox</label>
</div>`;
const checkboxCheckedBigCode = `<div class="radio-check-wrapper big">
	<input type="checkbox" id="sample-check" class="big" checked>
	<label for="sample-check">Checkbox</label>
</div>`;
const checkboxBigDisabledCode = `<div class="radio-check-wrapper big">
	<input type="checkbox" id="sample-check" class="big" disabled>
	<label for="sample-check">Checkbox</label>
</div>`;

const radioCode = `<div class="radio-check-wrapper">
	<input type="radio" id="sample-radio">
	<label for="sample-radio">Radio</label>
</div>`;
const radioCheckedCode = `<div class="radio-check-wrapper">
	<input type="radio" id="sample-radio" checked>
	<label for="sample-radio">Radio</label>
</div>`;
const radioDisabledCode = `<div class="radio-check-wrapper">
	<input type="radio" id="sample-radio" disabled>
	<label for="sample-radio">Radio</label>
</div>`;

const radioBigCode = `<div class="radio-check-wrapper big">
	<input type="radio" id="sample-radio" class="big">
	<label for="sample-radio">Radio</label>
</div>`;
const radioCheckedBigCode = `<div class="radio-check-wrapper big">
	<input type="radio" id="sample-radio" class="big" checked>
	<label for="sample-radio">Radio</label>
</div>`;
const radioBigDisabledCode = `<div class="radio-check-wrapper big">
	<input type="radio" id="sample-radio" class="big" disabled>
	<label for="sample-radio">Radio</label>
</div>`;

const toggleCode = `<div class="toggle-input-wrapper">
	<div class="toggle-input-inner">
		<input type="checkbox" id="sample-toggle" />
		<div class="toggle-input-slider"></div>
	</div>
	<label for="sample-toggle">Toggle</label>
</div>`;
const toggleCheckedCode = `<div class="toggle-input-wrapper">
	<div class="toggle-input-inner">
		<input type="checkbox" id="sample-toggle" checked />
		<div class="toggle-input-slider"></div>
	</div>
	<label for="sample-toggle">Toggle</label>
</div>`;
const toggleDisabledCode = `<div class="toggle-input-wrapper">
	<div class="toggle-input-inner">
		<input type="checkbox" id="sample-toggle" disabled />
		<div class="toggle-input-slider"></div>
	</div>
	<label for="sample-toggle">Toggle</label>
</div>`;

const toggleBigCode = `<div class="toggle-input-wrapper big">
	<div class="toggle-input-inner">
		<input type="checkbox" id="sample-toggle" class="big" />
		<div class="toggle-input-slider"></div>
	</div>
	<label for="sample-toggle">Toggle</label>
</div>`;
const toggleCheckedBigCode = `<div class="toggle-input-wrapper big">
	<div class="toggle-input-inner">
		<input type="checkbox" id="sample-toggle" class="big" checked />
		<div class="toggle-input-slider"></div>
	</div>
	<label for="sample-toggle">Toggle</label>
</div>`;
const toggleBigDisabledCode = `<div class="toggle-input-wrapper big">
	<div class="toggle-input-inner">
		<input type="checkbox" id="sample-toggle" class="big" disabled />
		<div class="toggle-input-slider"></div>
	</div>
	<label for="sample-toggle">Toggle</label>
</div>`;

const rangeCode = `<input type="range" />`;
const rangeBigCode = `<input type="range" class="big" />`;
const rangeDisabledCode = `<input type="range" class="big" disabled />`;

const inputTextLabelFullWidthCode = `<label for="sample">Label</label>
<input type="text" placeholder="Placeholder" id="sample" class="full-width" />`;
const inputTextLabelFullWidthBigCode = `<label for="sample">Label</label>
<input type="text" class="big full-width" placeholder="Placeholder" id="sample" />`;
const selectFullWidthCode = `<select class="full-width">
	<option value="1">Sample 1</option>
	<option value="2">Sample 2</option>
	<option value="3">Sample 3</option>
</select>`;
const selectBigFullCode = `<select class="big full-width">
	<option value="1">Sample 1</option>
	<option value="2">Sample 2</option>
	<option value="3">Sample 3</option>
</select>`;
const textareaFullCode = `<textarea class="full-width">Placeholder</textarea>`;
const textareaBigFullCode = `<textarea class="big full-width">Placeholder</textarea>`;

function Index() {
	return (
		<Page title="Sass Inputs">
			<Space xs={20} lg={40} />
			<H1 size="hero1">Sass Inputs</H1>
			<Space xs={10} lg={30} />
			<p>
				The input styles are defined in <strong>inputs.scss</strong>.
				All form inputs take the default style of the Cherry design
				system. You can change the variants of the inputs by using class
				names.
			</p>
			<Space size={1} />
			<CodeBlock
				language="html"
				value={inputTextCode}
				description={<Input type="text" placeholder="Placeholder" />}
			/>
			<Space size={10} />
			<CodeBlock
				language="html"
				value={inputTextErrorCode}
				description={
					<Input type="text" placeholder="Placeholder" error />
				}
			/>
			<Space size={10} />
			<CodeBlock
				language="html"
				value={inputTextSuccessCode}
				description={
					<Input type="text" placeholder="Placeholder" success />
				}
			/>
			<Space size={10} />
			<CodeBlock
				language="html"
				value={inputTextLabelCode}
				description={
					<Input
						type="text"
						placeholder="Placeholder"
						label="Label"
						id="label1"
					/>
				}
			/>
			<Space size={10} />
			<CodeBlock
				language="html"
				value={inputTextBigCode}
				description={
					<Input type="text" placeholder="Placeholder" size="big" />
				}
			/>
			<Space size={10} />
			<CodeBlock
				language="html"
				value={inputTextErrorBigCode}
				description={
					<Input
						type="text"
						placeholder="Placeholder"
						error
						size="big"
					/>
				}
			/>
			<Space size={10} />
			<CodeBlock
				language="html"
				value={inputTextSuccessBigCode}
				description={
					<Input
						type="text"
						placeholder="Placeholder"
						success
						size="big"
					/>
				}
			/>
			<Space size={10} />
			<CodeBlock
				language="html"
				value={inputTextLabelBigCode}
				description={
					<Input
						type="text"
						placeholder="Placeholder"
						label="Label"
						size="big"
						id="label2"
					/>
				}
			/>
			<Space size={10} />
			<CodeBlock
				language="html"
				value={selectCode}
				description={
					<Select>
						<option value="1">Sample 1</option>
						<option value="2">Sample 2</option>
						<option value="3">Sample 3</option>
					</Select>
				}
			/>
			<Space size={10} />
			<CodeBlock
				language="html"
				value={selectErrorCode}
				description={
					<Select error>
						<option value="1">Sample 1</option>
						<option value="2">Sample 2</option>
						<option value="3">Sample 3</option>
					</Select>
				}
			/>
			<Space size={10} />
			<CodeBlock
				language="html"
				value={selectSuccessCode}
				description={
					<Select success>
						<option value="1">Sample 1</option>
						<option value="2">Sample 2</option>
						<option value="3">Sample 3</option>
					</Select>
				}
			/>
			<Space size={10} />
			<CodeBlock
				language="html"
				value={selectBigCode}
				description={
					<Select size="big">
						<option value="1">Sample 1</option>
						<option value="2">Sample 2</option>
						<option value="3">Sample 3</option>
					</Select>
				}
			/>
			<Space size={10} />
			<CodeBlock
				language="html"
				value={selectErrorBigCode}
				description={
					<Select error size="big">
						<option value="1">Sample 1</option>
						<option value="2">Sample 2</option>
						<option value="3">Sample 3</option>
					</Select>
				}
			/>
			<Space size={10} />
			<CodeBlock
				language="html"
				value={selectSuccessBigCode}
				description={
					<Select success size="big">
						<option value="1">Sample 1</option>
						<option value="2">Sample 2</option>
						<option value="3">Sample 3</option>
					</Select>
				}
			/>
			<Space size={10} />
			<CodeBlock
				language="html"
				value={textareaCode}
				description={<Textarea placeholder="Placeholder" />}
			/>
			<Space size={10} />
			<CodeBlock
				language="html"
				value={textareaErrorCode}
				description={<Textarea placeholder="Placeholder" error />}
			/>
			<Space size={10} />
			<CodeBlock
				language="html"
				value={textareaSuccessCode}
				description={<Textarea placeholder="Placeholder" success />}
			/>
			<Space size={10} />
			<CodeBlock
				language="html"
				value={textareaBigCode}
				description={<Textarea placeholder="Placeholder" size="big" />}
			/>
			<Space size={10} />
			<CodeBlock
				language="html"
				value={textareaErrorBigCode}
				description={
					<Textarea placeholder="Placeholder" error size="big" />
				}
			/>
			<Space size={10} />
			<CodeBlock
				language="html"
				value={textareaSuccessBigCode}
				description={
					<Textarea placeholder="Placeholder" success size="big" />
				}
			/>
			<Space size={10} />
			<CodeBlock
				language="html"
				value={checkboxCode}
				description={
					<Input type="checkbox" label="Checkbox" id="sample-2" />
				}
			/>
			<Space size={10} />
			<CodeBlock
				language="html"
				value={checkboxCheckedCode}
				description={
					<Input
						type="checkbox"
						label="Checkbox"
						id="sample-3"
						defaultChecked
					/>
				}
			/>
			<Space size={10} />
			<CodeBlock
				language="html"
				value={checkboxBigCode}
				description={
					<Input
						type="checkbox"
						label="Checkbox"
						id="sample-4"
						size="big"
					/>
				}
			/>
			<Space size={10} />
			<CodeBlock
				language="html"
				value={checkboxCheckedBigCode}
				description={
					<Input
						type="checkbox"
						label="Checkbox"
						id="sample-5"
						size="big"
						defaultChecked
					/>
				}
			/>
			<Space size={10} />
			<CodeBlock
				language="html"
				value={radioCode}
				description={<Input type="radio" label="Radio" id="sample-6" />}
			/>
			<Space size={10} />
			<CodeBlock
				language="html"
				value={radioCheckedCode}
				description={
					<Input
						type="radio"
						label="Radio"
						id="sample-7"
						defaultChecked
					/>
				}
			/>
			<Space size={10} />
			<CodeBlock
				language="html"
				value={radioBigCode}
				description={
					<Input
						type="radio"
						label="Radio"
						id="sample-8"
						size="big"
					/>
				}
			/>
			<Space size={10} />
			<CodeBlock
				language="html"
				value={radioCheckedBigCode}
				description={
					<Input
						type="radio"
						label="Radio"
						id="sample-9"
						size="big"
						defaultChecked
					/>
				}
			/>
			<Space size={10} />
			<CodeBlock
				language="html"
				value={toggleCode}
				description={
					<ToggleInput
						type="checkbox"
						name="slide-1"
						label="Toggle"
						id="slide1"
					/>
				}
			/>
			<Space size={10} />
			<CodeBlock
				language="html"
				value={toggleCheckedCode}
				description={
					<ToggleInput
						type="checkbox"
						name="slide-2"
						label="Toggle"
						id="slide-2"
						defaultChecked
						onChange={() => {}}
					/>
				}
			/>
			<Space size={10} />
			<CodeBlock
				language="html"
				value={toggleBigCode}
				description={
					<ToggleInput
						type="checkbox"
						name="slide-1-big"
						label="Toggle"
						id="slide-1-big"
						size="big"
					/>
				}
			/>
			<Space size={10} />
			<CodeBlock
				language="html"
				value={toggleCheckedBigCode}
				description={
					<ToggleInput
						type="checkbox"
						name="slide-2-big"
						label="Toggle"
						id="slide-2-big"
						size="big"
						defaultChecked
						onChange={() => {}}
					/>
				}
			/>
			<Space size={10} />
			<CodeBlock
				language="html"
				value={rangeCode}
				description={<RangeSlider />}
			/>
			<Space size={10} />
			<CodeBlock
				language="html"
				value={rangeBigCode}
				description={<RangeSlider size="big" />}
			/>
			<Space size={10} />
			<CodeBlock
				language="html"
				value={rangeDisabledCode}
				description={<RangeSlider size="big" disabled />}
			/>
			<Space size={10} />
			<CodeBlock
				language="html"
				value={inputTextDisabledCode}
				description={
					<Input type="text" placeholder="Placeholder" disabled />
				}
			/>
			<Space size={10} />
			<CodeBlock
				language="html"
				value={inputTextDisabledBigCode}
				description={
					<Input
						type="text"
						placeholder="Placeholder"
						disabled
						size="big"
					/>
				}
			/>
			<Space size={10} />
			<CodeBlock
				language="html"
				value={selectDisabledCode}
				description={
					<Select disabled>
						<option value="1">Sample 1</option>
						<option value="2">Sample 2</option>
						<option value="3">Sample 3</option>
					</Select>
				}
			/>
			<Space size={10} />
			<CodeBlock
				language="html"
				value={selectBigDisabledCode}
				description={
					<Select disabled size="big">
						<option value="1">Sample 1</option>
						<option value="2">Sample 2</option>
						<option value="3">Sample 3</option>
					</Select>
				}
			/>
			<Space size={10} />
			<CodeBlock
				language="html"
				value={textareaDisabledCode}
				description={<Textarea placeholder="Placeholder" disabled />}
			/>
			<Space size={10} />
			<CodeBlock
				language="html"
				value={textareaBigDisabledCode}
				description={
					<Textarea placeholder="Placeholder" disabled size="big" />
				}
			/>
			<Space size={10} />
			<CodeBlock
				language="html"
				value={checkboxDisabledCode}
				description={
					<Input
						type="checkbox"
						label="Checkbox"
						id="sample-x"
						disabled
					/>
				}
			/>
			<Space size={10} />
			<CodeBlock
				language="html"
				value={checkboxBigDisabledCode}
				description={
					<Input
						type="checkbox"
						label="Checkbox"
						id="sample-xx"
						disabled
						size="big"
					/>
				}
			/>
			<Space size={10} />
			<CodeBlock
				language="html"
				value={radioDisabledCode}
				description={
					<Input type="radio" label="Radio" id="sample-xx" disabled />
				}
			/>
			<Space size={10} />
			<CodeBlock
				language="html"
				value={radioBigDisabledCode}
				description={
					<Input
						type="radio"
						label="Radio"
						id="sample-xxx"
						disabled
						size="big"
					/>
				}
			/>
			<Space size={10} />
			<CodeBlock
				language="html"
				value={toggleDisabledCode}
				description={
					<ToggleInput
						type="checkbox"
						label="Toggle"
						id="toggle-1-disabled"
						disabled
					/>
				}
			/>
			<Space size={10} />
			<CodeBlock
				language="html"
				value={toggleBigDisabledCode}
				description={
					<ToggleInput
						type="checkbox"
						label="Toggle"
						id="toggle-1-disabled"
						disabled
						size="big"
					/>
				}
			/>
			<Space size={20} />
			<H2>Full Width</H2>
			<Space size={10} />
			<CodeBlock
				language="html"
				value={inputTextLabelFullWidthCode}
				description={
					<Input
						type="text"
						placeholder="Placeholder"
						label="Label"
						id="label1"
						fullWidth
					/>
				}
			/>
			<Space size={10} />
			<CodeBlock
				language="html"
				value={inputTextLabelFullWidthBigCode}
				description={
					<Input
						type="text"
						placeholder="Placeholder"
						label="Label"
						size="big"
						id="label2"
						fullWidth
					/>
				}
			/>
			<Space size={10} />
			<CodeBlock
				language="html"
				value={selectFullWidthCode}
				description={
					<Select fullWidth>
						<option value="1">Sample 1</option>
						<option value="2">Sample 2</option>
						<option value="3">Sample 3</option>
					</Select>
				}
			/>
			<Space size={10} />
			<CodeBlock
				language="html"
				value={selectBigFullCode}
				description={
					<Select size="big" fullWidth>
						<option value="1">Sample 1</option>
						<option value="2">Sample 2</option>
						<option value="3">Sample 3</option>
					</Select>
				}
			/>
			<Space size={10} />
			<CodeBlock
				language="html"
				value={textareaFullCode}
				description={<Textarea fullWidth placeholder="Placeholder" />}
			/>
			<Space size={10} />
			<CodeBlock
				language="html"
				value={textareaBigFullCode}
				description={
					<Textarea fullWidth size="big" placeholder="Placeholder" />
				}
			/>
			<Space size={20} />
			<DocNavWrapper>
				<DocNav
					href="/docs/code/sass/buttons"
					as="/docs/code/sass/buttons"
					prev
				>
					Sass Buttons
				</DocNav>
				<DocNav
					href="/docs/code/sass/spacing"
					as="/docs/code/sass/spacing"
					next
				>
					Sass Spacing
				</DocNav>
			</DocNavWrapper>
		</Page>
	);
}

export default Index;
