export default function capitalize(text: string) {
	return `${text[0].toUpperCase()}${text.substr(1)}`;
}
