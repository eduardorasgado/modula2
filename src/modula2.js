export default function modula2 (str) {
	let translation = str
	//si la palabra es un palindromo ninguna cuenta y se intercala mayusculas y minusculas
	const reverseStr = (str) => str.split('').reverse().join('')

	const minMay = (str) => str.split('').map(s => str.indexOf(s) % 2 == 0 ? s.toUpperCase() : s.toLowerCase()).join('')

	if (str == reverseStr(str)) {
		return minMay(str)
	}
	//si la palabra termina el ar, se le quitan esos dos caracteres
	if (str.toLowerCase().endsWith('ar')) {
		translation = str.slice(0, -2)
	}
	//si la palabra inicia con z se le añade pe al final
	if (str.toLowerCase().startsWith('z')) {
		translation = translation+"pe"
	}
	//si la palabra traducida tiene 10 o mas letras se debe partir a la mitad con un -
	var len = translation.length
	if (len >= 10) {
		const firstHalf = translation.slice(0,Math.round(len/2))
		const secondHalf = translation.slice(Math.round(len/2))
		translation = firstHalf+"-"+secondHalf
	}
	return translation
}