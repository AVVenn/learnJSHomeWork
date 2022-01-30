let number = +prompt(`Введите число человек`); //25
let deadNumber = +prompt(`Каждый s умрет`); //3
let arr = [];
for (let i = 1; i <= number; i++) {
    arr.push(i);  // arr = [1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20,21,22,23,24,25];
}
function recursion () {
	let arr2 = [];
	let lenght = arr.length;
	for (let i = 0; i < arr.length; i++) { 
			let resultSplice = arr.splice(i,deadNumber-1);
			if (resultSplice.length > 0 
				&& resultSplice.length <= deadNumber-2 ){ 
					arr2.unshift(resultSplice);
				}  else if (resultSplice.length > 0 ) { 
				arr2.push(resultSplice);
				} 
	}
	if (Math.floor( lenght / deadNumber) < Math.round( lenght / deadNumber)) {
		let vremenno = arr2.splice(arr.length, 1);
		arr2.unshift(vremenno.flat());
	}
	arr = arr2.flat();
	if (lenght < deadNumber) {
		return console.log(arr);
	} else {
	recursion();
	}
}
recursion ();
