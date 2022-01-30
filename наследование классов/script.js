// 1. Создать класс House, инстанс которого иммет поля
// adress: {city:, street:, number:}
// apartments: Apartment[]
// maxApartments: number
// метод addApartment который принимает объект Apartment
// и добавляет его в массив apartments
// добавлять квартир больше чем maxApartments - запрещено
// добавлять квартиру без владельца запрещено
// добавлять квартиру без номера - запрещено
// нельзя добавлять квартиру если квартира с таким номером уже существует
// в массиве.
// Создать класс Apartment, интсанс которого имеет поля
// apartmentNumber: number
// owner: string // по умолчанию - пустая строка
// и метод setOwner('Vasya')
// [
//     {apartmentNumber:2, owner:'Vasya'},
//     {apartmentNumber:3, owner:'Petya'}

// class Apartment {
// 	constructor (numberApart){
// 		this.apartmentNumber = numberApart;
// 		this.owner = '';
// 	}
// 	setOwner(owner){
// 		this.owner += owner;
// 	}
// }

// let kv1 = new Apartment (1);
// kv1.setOwner (`Vasya`);
// let kv2 = new Apartment (2);
// kv2.setOwner (`Fedya`);
// let kv3 = new Apartment (2);
// kv3.setOwner (`Olga`);
// let kv4 = new Apartment (4);
// kv4.setOwner (`Vitya`);
// console.log(kv1);
// console.log(kv2);
// console.log(kv3);
// console.log(kv4);


// class House {
// 	constructor(city, street, number, maxApartments){
// 		this.city = city;
// 		this.street = street;
// 		this.number = number;
// 		this.apartments = [];
// 		this.maxApartments = maxApartments;
// 	}
// 	addApartment(object){
// 		if (this.apartments.length < this.maxApartments 
// 			&&	object.owner !== ``
// 			&& !this.apartments.some( ({apartmentNumber}) => apartmentNumber === object.apartmentNumber)) {
// 		this.apartments.push(object);
// 		}	
// 	}
// }

// let dom1 = new House (`Gomel`, `Osipova`, 7, 3);
// dom1.addApartment (kv1);
// dom1.addApartment (kv2);
// dom1.addApartment (kv3);
// dom1.addApartment (kv4);

// console.log(dom1);


// ________________________________________________________________________________________________________________________

// 2. Создать класс Device, который имеет параметр isOn (по 
//     умолчанию false), метод callSmbd, который принимает имя 
//     вызываемого абонента и метод switchDevice, который 
//     переключает параметр isOn. Позвонить абоненту можно 
//     только тогда, когда параметр isOn == true, иначе вывести 
//     сообщение, что звонок невозможен. Необходимо также 
//     создать классы Smartphone(принимает имя и диагональ 
//     экрана(не может быть больше 8)) и Tablet(принимает имя и 
//     диагональ экрана (не может быть меньше 8)), которые 
//     наследуют от класса Device


// class Device {
// 	isOn = false;
// 	callSmbd (nameUser) {
// 		this.isOn === true ? console.log(`calling ${nameUser}`) : console.log(`Eror: isOn false`);
// 	}
// 	switchDevice (){
// 		this.isOn = !this.isOn;
// 	}
// }

// class Smartphone extends Device {
// 	constructor (name, screenDiagonal){
// 		super();
// 		this.name = name;
// 		this.screenDiagonal = (screenDiagonal < 8) ? screenDiagonal : 8;
// 	}
// }

// class Tablet extends Device{
// 	constructor (name, screenDiagonal){
// 		super();
// 		this.name = name;
// 		this.screenDiagonal = ( screenDiagonal > 8) ? screenDiagonal : 8;
// 	}
// }

// const mob = new Smartphone (`Samsung`, 9);
// console.table(mob);
// mob.callSmbd(`Vitya`);
// mob.switchDevice();
// mob.callSmbd(`Vitya`);

// ________________________________________________________________________________________________________________________

// 3. Создать класс Battery, который инициализирует поля type,
// energy (заряд, по умолчанию 100). Создать класс Device, 
// который принимает параметр batteryType и метод
// insertBattery, который принимает два параметра (две 
// батарейки). Создать класс Gamepad, который наследует от 
// Device. Класс Gamepad должен содержать поле model, поле 
// isConnected (boolean) и методы connectTo(), который 
// принимает название другого девайса и выводит сообщение 
// типа “gamepadModel connected to TV”, метод disconnect(), 
// который отключает Gamepad и метод play(), который 
// отнимает 10 зарядов от каждой батареи. Если хотя бы одно 
// поле batteryType у Device и type у Battery не совпадают, то 
// вывести сообщение что батарейки не вставлены. 
// Подключить один девайс к другому можно только если есть 
// 2 батарейки. Подключить Gamepad можно только если 
// isConnected == false. Если заряд батареек == 0, то метод 
// play вернет сообщение с требованием замены батареек



// class Battery {
// 	constructor (type) {
// 		this.type = type;
// 		this.energy = 100;
// 	}
// }

// const b1 = new Battery ('AAA');
// const b2 = new Battery ('AAA');
// const b3 = new Battery ('BBB');

// class Device {
// 	constructor(batteryType){
// 		this.batteryType = batteryType;
// 		this.btrs = []
// 	}
// 	insertBattery (bat1, bat2) {
// 		if (this.batteryType !== bat1 
// 			|| this.batteryType !==bat2){
// 				console.log(`${bat1} or ${bat2} not equal batteryType`);
// 			} else {
// 				this.btrs.push(bat1, bat2);
// 			}
// 	}
// }

// class Gamepad extends Device {
// 	constructor(model, ...arg){
// 		super (...arg);
// 		this.model = model;
// 	}
// 	isConnected = false;

// 	connectTo (nameDevice){
// 		 if (!this.isConnected 
// 		 && this.isAllBatteriesCharged()){
// 		isConnected = true;
// 		console.log(`${this.model} connected to ${nameDevice}`)
// 			}
// 	}
// 	disconnect (){
// 		isConnected = false;
// 		console.log(`Disconnected`)
// 	}

//     play () {
//         if (this.btrs.length > 1 
//             && this.isAllBatteriesCharged() ) {
//             console.log('you play game!');
//             this.btrs = this.btrs.map((btr) => ({
//                 ...btr,
//                 energy: btr.energy <= 0 ? 0 : btr.energy - 10
//             }))
//         } else {
//             console.error('you cant play due to batteries, change them!');
//         }
//     }

// 	isAllBatteriesCharged () {
//         return this.btrs.every(({energy}) => energy > 0 );
//     }
// }

// const ps5gamepad = new Gamepad('ps5', 'AAA');

// ps5gamepad.insertBattery(b1,b2);
// ps5gamepad.connectTo('ps5');
// ps5gamepad.disconnect();
// ps5gamepad.connectTo('xbox');
// ps5gamepad.play();
// ps5gamepad.play();
// ps5gamepad.play();
// ps5gamepad.play();
// ps5gamepad.play();
// ps5gamepad.play();
// ps5gamepad.play();
// ps5gamepad.play();
// ps5gamepad.play();
// ps5gamepad.play();
// ps5gamepad.play();
// ps5gamepad.play();
// ps5gamepad.play();
// ps5gamepad.play();
// ________________________________________________________________________________________________________________________

// создать класс Lada 
// инстанс лады должен обладать полями 
// model (строго определнный набор) (сокрытый статик)
// ['vesta', 'xray', 'niva', 'granta', 'priora']
// new Lada ('x5', 24000, 1990) ===>>> {model:'vesta'}
// price число, не может быть ниже 0 
// yearOfProduction число 
// у всех лад должно быть вычисляемое свойтво age 
// age не должен быть доступен для ЗАПИСИ

	// class Lada {
	// 	static #models =  ['vesta', 'xray', 'niva', 'granta', 'priora'];
	// 	static addModel = function (model) {
    //     	this.#models.push(model);
    // 	}

	// 	#price = 0;
	// 	#yearOfProduction = 0; 

	// 	constructor (model,price, yearOfProduction){
	// 		this.model = (Lada.#models.includes(model)) ? model :  Lada.#models[0]; 
	// 		this.#price = (price > 0) ? price : 0;
	// 		this.#yearOfProduction = yearOfProduction;
	// 	}

	// 	get age(){
	// 		let date = new Date().getFullYear();
	// 		return ( date - this.#yearOfProduction);  
	// 	}
	
	// 	get price () {
    //     	return this.#price + '$';
    // 	}

	// 	set price (price) {
    //     	this.#price = price < 0 ? this.#price : price;
   	//  	}
	// }

	// Lada.addModel (`kalina`);
	// const lada = new Lada('kalina', -3, 1990);
	// console.log(lada);
	// console.log(lada.age);
	// lada.price = 10;
	// lada.price = -20;
	// console.log(lada.price);

// ________________________________________________________________________________________________________________________
// Если 0  или vesta нас не устраивает, то можно пользоваться throw try..catch..


// создать класс Lada 
// инстанс лады должен обладать полями 
// model (строго определнный набор) (сокрытый статик)
// ['vesta', 'xray', 'niva', 'granta', 'priora']
// new Lada ('x5', 24000, 1990) ===>>> {model:'vesta'}
// price число, не может быть ниже 0 
// yearOfProduction число 
// у всех лад должно быть вычисляемое свойтво age 
// age не должен быть доступен для ЗАПИСИ


// class ModelError extends Error{};
// class PriceEror extends Error{};

// class Lada {
// 	static #models =  ['vesta', 'xray', 'niva', 'granta', 'priora'];
// 	static addModel = function (model) {
//         this.#models.push(model);
//     }

// 	#price = 0;
// 	#year = 0; 

// 	constructor (model, price, year) {
// 		if (Lada.#models.includes(model)) {
// 			this.model = model;
// 		} else {
// 			const myEror =  new ModelError(`no ${model} model exist`);
// 			throw myEror;
// 		}
// 		if (price > 0 ) {
// 			this.#price = price;
// 		} else {
// 			throw new PriceEror (`price can't be equal 0`);
// 		}

// 		this.#year = year;
// 	}

// 		get age(){
// 			let date = new Date().getFullYear();
// 			return ( date - this.#year);  
// 		}
	
// 		get price () {
//         	return this.#price + '$';
//     	}

// 		set price (price) {
//         	this.#price = price < 0 ? this.#price : price;
//    	 	}
// 	}

// 	const price = +prompt('enter your price');
// 	let lada;

// 	try {
// 		lada = new Lada (`X5`, price, 1990);
// 	} catch (err) {
// 		console.log(err);
// 		if (err instanceof PriceEror) {
// 			lada = new Lada (`vesta`, -price, 1990);
// 		} else if (err instanceof ModelError) {
// 			lada = new Lada (`vesta`, price, 1990);
// 		} else {
// 			throw err;
// 		}
// 	} finally {
// 		console.log(lada)
// 	};
	// ________________________________________________________________________________________________________________________

	// Создать класс Shop, инстанс которого обладает полем
// shopItems - массив объектов типа shopItem
// У инстанса класса Shop должен быть метод setSales(discountPercent),
// который устанавливает всем shopItem'ам isOnSale = true,
// а также снижает цену на discountPercent процентов.
// У инстанса также должен быть метод purchaseItem(itemName)
// которое находит в массиве shopItems, необходимый shopItem и уменьшает его
// количество на 1.
// Если количество shopItem равно нулю, то нужно выбросить ошибку о том, что
// айтемов больше нет в наличии. Обработайте эту ошибку и выведите в консоль
// сообщение что айтем нельзя заказать тк он закончился.
// У инстанса Shop также должно быть поле totalProfit - число (общее
// количество заработанных денег), в которое складывается
// цена каждого проданного айтема.

// Создать класс ShopItem, инстанс которого должен обладать полями
// itemName - название товара
// price - цена товара (не может быть меньше нуля, используйте сеттер)
// amount - количество товара (не может быть меньше нуля, используйте сеттер)
// isOnSale - булево значение

// Создать класс Clothes - который наследует от ShopItem
// инстанс должен обладать дополнительными полями
// size - строка характеризующая размер (может принимать значения только 'S', 'M', 'L', 'XL', обрабатывать
// сеттером, иначе выбрасывать ошибку)
// material - строка характеризующая материал
// color - строка цвета
// Класс Clothes, должен обладать статическим методом .changeColor(cloth, color)
// который принимает инстанс этого класса и цвет, метод меняет инстансу цвет на color;

// Создать класс TV который наследует от ShopItem
// инстанс должен обладать дополнительными полями
// diagonal - число
// withSmartTV - булево значение
// Оба поля должны быть недоступны для изменения, но доступны для чтения
// т.е. значения этих полей устанавливаются только в конструкторе, дальше сеттерами
// запрещаем их изменять

// Создать инстанс Shop и прокинуть в него несколько инстансов TV и Clothes
// проверить все методы на работоспособность

// class Price extends Error {};
// class NumberOfProductEror extends Error {};
// class SizeClothesEror extends Error {};
// class BooleanEror extends Error {};

// class ShopItem {
// 	constructor (nameProduct, priceProduct, numberOfProduct){
// 		this.nameProduct = nameProduct;
// 		this.numberOfProduct = (numberOfProduct > 0) ? numberOfProduct : 0;
// 		if (priceProduct > 0 ) {
// 			this._priceProduct =  priceProduct;
// 		} else {
// 			throw new Price(`Price can't be lower than zero`)
// 		}
// 		this.isOnSale = false;
// 	}

// 	get price(){
// 		return `${this._priceProduct}$`;
// 	}

// 	set price(price) {
// 		if(price > 0 ){
// 			this._priceProduct = price;
// 		}
// 	}
// }


// class Clothes extends ShopItem {
// 	static #sizes = ['S', 'M', 'L', 'XL'];
// 	static changeColor = function (cloth, color) {
// 		cloth.#color = color;
// 	};

// 	#material;
// 	#color;
// 	#size;
	
// 	constructor (size, material, color,  ...arg){
// 		super(...arg);
// 		if(Clothes.#sizes.includes(size)){
// 			this.#size = size;
// 		} else {
// 			throw new SizeClothesEror(`size ${size} can't be like that`);
// 		}
// 		this.#material = material;
// 		this.#color = color;
// 	}

// 	set size(valueSize) {
// 		if(Clothes.#sizes.includes(valueSize)) {
// 			this.#size = valueSize;
// 		} else {
// 			throw new SizeClothesEror(`size ${valueSize} can't be like that`);
// 		}
// 	}
// 	get size() {
// 		return `size:${this.#size}`;   											//* не забывай console.log чтобы получить результат
// 	}
// } 	
// 																				//todo посмотреть  try {	let ... = } catch {}
// let jeans = new Clothes(`M`, `denim`, `blue`, `jeans`, 45, 3);      
// jeans.size = `L`;
// let sneakers = new Clothes (`S`, `rubber`, `green`, `sneakers`, 50, 2);
// // console.table(sneakers);
// Clothes.changeColor (sneakers, `orange`);
// // console.table(sneakers);
// // console.log(sneakers.size);

// class TV extends ShopItem {
// 	#diagonal = 0;
// 	#withSmartTV;

// 	constructor(diagonal,withSmartTV, ...arg) {
// 		super(...arg);
// 		this.#diagonal = diagonal;
// 		if (typeof (withSmartTV) === `boolean` ) {
// 		this.#withSmartTV = withSmartTV;
// 		} else {
// 			throw new BooleanEror (`${this.#withSmartTV} it's not boolean`);
// 		}
// 	}
// 	get diagonal() { 																//* не забывай console.log чтобы получить результат
// 		return `diagonal:${this.#diagonal}''`;
// 	}
// 	get withSmartTV() {
// 		if(this.#withSmartTV === false) {
// 			return (`don't have smart TV`)
// 		} else {
// 			return (`have smart TV`)
// 		}																			//* не забывай console.log чтобы получить результат
// 	}
// }
// 																					//todo  посмотреть try {	let ... = } catch {}											
// let samsung = new TV (40, false, `samsungTV`, 150, 5);
// let sony = new TV (65, true, `sonyTV` , 200, 2);
// let sony1 = new TV (65, true, `sonyTV` , 200, 2);
// // console.log(samsung);
// // console.log(sony);
// // console.log(sony.diagonal);
// // console.log(sony.withSmartTV);

// class Shop {
// 	#totalProfit = 0;

// 	constructor () {
// 		this.shopItems = [];
// 	}
// 	addItem(item){
// 		if(!this.shopItems.some( ({nameProduct}) => nameProduct === item.nameProduct)){
// 			this.shopItems.push(item);
// 		}
// 	}

// 	setSales(discountPercent) {
// 		this.shopItems.forEach((item) => {
// 			item.isOnSale = true;
// 			item._priceBeforeSale = item._priceProduct;
// 			item._priceProduct *= (100 - discountPercent)/100;
// 		})
// 	}

// 	offSales () {
// 		this.shopItems.forEach((item) => {
// 			item.isOnSale = false;
// 			item._priceProduct = item._priceBeforeSale;
// 		})
// 	}

// 	purchaseItem (itemName) {
// 		this.shopItems.forEach((item) => {
// 			if( item.nameProduct === itemName && item.numberOfProduct > 0){
// 				item.numberOfProduct--;
// 				this.#totalProfit += item._priceProduct;
// 			} else if (item.nameProduct === itemName &&  item.numberOfProduct <= 0) {
// 				throw new NumberOfProductEror (`${item.nameProduct} out of stock!`);
// 			}
// 		})
// 	}
// }

// const shop1 = new Shop ();
// shop1.addItem (sneakers);
// shop1.addItem (sony);
// shop1.addItem (samsung);
// shop1.addItem (sony1);
// shop1.addItem (jeans);
// // console.log(shop1)
// shop1.setSales (30);
// // console.log(shop1)
// shop1.purchaseItem (`sneakers`);
// shop1.purchaseItem (`sneakers`);
// console.log(shop1);


// // try {
// // 	purchaseItem  																					 //TODO ДОПИСАТЬ!
// // } catch (error) {
// // 	if (error instanceof NumberOfProductEror) {
// // 		console.log (`no more ${this.nameProduct}`)
// // 	} else throw error;
// // }

