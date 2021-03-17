import pizzaMenuList from './pizzasMenu.json';

let lastPizzas = [
	'cap',
	'cap',
	'onions',
	'gavay',
	'cap',
	'tonno',
	'tonno',
	'vegeterian',
	'king_one',
];

export const getPizzaInfo = (lastPizzas) => {
	const counter = {};
	lastPizzas.forEach((p) => {
		counter[p] = counter[p] ? (counter[p] += 1) : 1;
	});
	const sorted = Object.entries(counter).sort((a, b) => b[1] - a[1]);
	const result = sorted.map((el) => el[0]).slice(0, 5);

	const ingridientsCounter = {};

	Object.keys(counter).forEach((key) => {
		const data = pizzaMenuList[key];
		Object.keys(data).forEach((key) => {
			ingridientsCounter[key] = ingridientsCounter[key]
				? (ingridientsCounter[key] += data[key])
				: 1;
		});
	});

	const sortedIngridients = Object.entries(ingridientsCounter).sort((a, b) => b[1] - a[1]);
	const ingridientsResult = sortedIngridients.map((el) => el[0]);

	const mainResult = {
		popular: result,
		ingridients: ingridientsResult,
	};
	return mainResult;
};

