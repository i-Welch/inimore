import * as h from "hyperscript";

function createElement(tagName: string, attributes: Object, ...children) {
	const test = h(tagName,
		children,
		attributes
	);

	return test;
}

export default ({
	content1,
	headingContent,
}: {content1: string, headingContent: string}) =>
<div id="firstDiv" className="divsClass">
	{content1}
	<h1 id="h1Identifier">
		{headingContent}
	</h1>
</div>