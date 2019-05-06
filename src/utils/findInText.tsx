import React from 'react';
import reactStringReplace from 'react-string-replace';

const findInText = (text: string, substr: string) => {
	if (substr) {
		return (
			reactStringReplace(text, substr, (match: string, i: number) => (
				<span
					key={i}
					style={{
						backgroundColor: '#FFC500',
					}}
				>
					{match}
				</span>
			))
		);
	}

	return text;
};

export default findInText;
