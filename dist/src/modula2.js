'use strict';

Object.defineProperty(exports, "__esModule", {
	value: true
});
exports.default = modula2;
function modula2(str) {
	var translation = str;
	//si la palabra es un palindromo ninguna cuenta y se intercala mayusculas y minusculas
	var reverseStr = function reverseStr(str) {
		return str.split('').reverse().join('');
	};

	var minMay = function minMay(str) {
		return str.split('').map(function (s) {
			return str.indexOf(s) % 2 == 0 ? s.toUpperCase() : s.toLowerCase();
		}).join('');
	};

	if (str == reverseStr(str)) {
		return minMay(str);
	}
	//si la palabra termina el ar, se le quitan esos dos caracteres
	if (str.toLowerCase().endsWith('ar')) {
		translation = str.slice(0, -2);
	}
	//si la palabra inicia con z se le añade pe al final
	if (str.toLowerCase().startsWith('z')) {
		translation = translation + "pe";
	}
	//si la palabra traducida tiene 10 o mas letras se debe partir a la mitad con un -
	var len = translation.length;
	if (len >= 10) {
		var firstHalf = translation.slice(0, Math.round(len / 2));
		var secondHalf = translation.slice(Math.round(len / 2));
		translation = firstHalf + "-" + secondHalf;
	}
	return translation;
}