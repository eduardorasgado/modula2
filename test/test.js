const expect = require('chai').expect
const modula2 = require('..').default

describe('#modula2', function () {
	it('Si la palabra termina con ar se le quitan estas dos letras', function () {
		const translation = modula2("Programar")
		expect(translation).to.equal("Program")
	})
	it('Si la palabra inicia con z se le añade pe al final', function () {
		const translation = modula2("Zorra")
		const translation2 = modula2("Zarpar")
		expect(translation).to.equal("Zorrape")
		expect(translation2).to.equal("Zarppe")
	})
	it('Si la palabra traducida tiene 10 o mas letras se debe partir a la mitad con un -', function () {
		const translation = modula2("abecedario")
		expect(translation).to.equal("abece-dario")
	})
	it('Si la palabra es un palindromo ninguna cuenta y se intercala mayusculas y minusculas', function () {
		const translation = modula2("sometemos")
		expect(translation).to.equal("SoMeTeMoS")
	})
})