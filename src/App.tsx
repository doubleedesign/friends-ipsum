import { useState, useEffect, FormEvent } from 'react';
import { quotes } from './quotes';
import { StyledPageWrapper, StyledHeader, StyledFooter } from './components/StyledLayout';
import { StyledForm, StyledLabel, StyledFormField, StyledButton } from './components/StyledForm';
import { StyledOutput } from './components/StyledOutput';

function App() {
	const [content, setContent] = useState<string[][]>();

	function getRandomNumber(min: number, max: number) {
		return Math.random() * (max - min) + min;
	}

	function getRandomIndex(array: any[]) {
		return Math.floor(Math.random() * array.length);
	}

	function getRandomQuotes(qty: number) {
		const items: string[] = [];

		for(let i = 0; i < qty; i++) {
			const index = getRandomIndex(quotes);
			items.push(quotes[index] + ' ');
		}

		return items;
	}

	function buildParagraphs(qty: number) {
		const output: string[][] = [];

		for(let i = 0; i < qty; i++) {
			output.push(getRandomQuotes(getRandomNumber(2, 7)));
		}

		setContent(output);
	}

	const generate = (event: FormEvent<HTMLFormElement>) => {
		event.preventDefault();
		const data: HTMLFormControlsCollection = event.currentTarget.elements;
		// @ts-ignore
		buildParagraphs(data.paragraphCount.value);
	};

	useEffect(() => {
		buildParagraphs(3);
	}, []);

	return (
		<StyledPageWrapper>
			<StyledHeader>
				<h1>Central Perk <span>Ipsum</span></h1>
			</StyledHeader>
			<main className="App">
				<StyledForm onSubmit={generate}>
					<StyledLabel htmlFor="paragraphCount">Paragraphs</StyledLabel>
					<StyledFormField id="paragraphCount" type="number" min="1" max="5" name="paragraphCount" defaultValue="3"/>
					<StyledButton type="submit">Generate</StyledButton>
				</StyledForm>
				<StyledOutput>
					{content && content.map((paragraph) => {
						return <p>{paragraph}</p>;
					})}
				</StyledOutput>
			</main>
			<StyledFooter>
				<small>By Leesa Ward.
					<a href="https://www.github.com/doubleedesign" target="_blank">View on GitHub</a>.
					Inspired by <a href="http://fillerama.io/" target="_blank">Fillerama</a>.</small>
				<small>Image: <a href="https://commons.wikimedia.org/wiki/File:Central_Perk_set.jpg">Gga2015</a>, <a href="https://creativecommons.org/licenses/by-sa/4.0">CC BY-SA 4.0</a>, via Wikimedia Commons</small>.
			</StyledFooter>
		</StyledPageWrapper>
	);
}

export default App;
