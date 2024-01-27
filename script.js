const btn = document.querySelector('button'),
	btns = document.querySelectorAll('button'),
	overlay = document.querySelector('.overlay')
let i = 0
const deleteElement = e => {
	console.log(e.currentTarget)
	console.log(e.type)
	console.log(i)
	// e.target.remove()
	i++
	// if (i === 3) {
	// 	btn.removeEventListener('click', deleteElement)
	// }
}
// btn.addEventListener('click', deleteElement)
// overlay.addEventListener('click', deleteElement)
const link = document.querySelector('a')
link.addEventListener('click', e => {
	e.preventDefault()
	console.log(e.target)
})
btns.forEach(bt => bt.addEventListener('click', deleteElement, { once: true }))

//? ------------------- lesson from video 46.  -----------------------------------
// console.log(document.body)
// console.log(document.head)
//*  All HTML page
// console.log(document.documentElement)

//*  All children node from Body (like example)
console.log(document.body.childNodes)
// console.log(document.body.childElementCount)
// console.log(document.body.firstChild)
// console.log(document.body.firstElementChild)
// console.log(document.body.lastChild)
// console.log(document.querySelector('#current').parentNode)
// console.log(document.querySelector('#current').parentNode.parentNode)
// console.log(document.querySelector('#current').parentElement)

//?  Getting Data attributes
// console.log(
// 	document.querySelector('[data-current="3"]').nextSibling.nextSibling
// )
// console.log(document.querySelector('[data-current="3"]').nextElementSibling)
// console.log(document.querySelector('[data-current="3"]').previousElementSibling)

//*? !!!!!  Geting all NODES without text "\n\t\t"
for (let node of document.body.childNodes) {
	if (node.nodeName == '#text') {
		continue
	}
	console.log(node)
}
const an_obj = { 100: 'a', 2: 'b', 7: 'c' }
console.log(Object.values(an_obj))
console.log(Object.keys(an_obj))

//? ----- Recursion --== lesson from video 47.  ---------------    Recursion.  --------------------
function pow(x, n) {
	//debugger
	//let res = 1
	// for (let i = 0; i < n; i++) {
	// 	res *= x
	// }
	if (n === 1) {
		//debugger
		return x
	} else return x * pow(x, n - 1)
	//debugger
}
// console.log(pow(2, 2)) // 4
console.log(pow(2, 3)) // 8
// console.log(pow(2, 4)) // 16

//?    Calculate average progress All students ======+++++++++++++++++++++++++++++

let students = {
	js: [
		{
			name: 'John',
			progress: 100,
		},
		{
			name: 'Ivan',
			progress: 60,
		},
	],

	html: {
		basic: [
			{
				name: 'Peter',
				progress: 20,
			},
			{
				name: 'Ann',
				progress: 18,
			},
		],

		pro: [
			{
				name: 'Sam',
				progress: 10,
			},
		],

		semi: {
			students: [
				{
					name: 'Test',
					progress: 101,
				},
			],
		},
	},
}

function getTotalProgressByIteration(data) {
	let students = 0
	let total = 0
	for (let course of Object.values(data)) {
		if (Array.isArray(course)) {
			students += course.length
			for (let i = 0; i < course.length; i++) {
				total += course[i].progress
			}
		} else
			for (let subCourse of Object.values(course)) {
				students += subCourse.length
				for (let i = 0; i < subCourse.length; i++) {
					total += subCourse[i].progress
				}
			}
	}

	return total / students
}
console.log(getTotalProgressByIteration(students))

function getTotalProgressByRecursion(data) {
	/* //* База Рекур будет массив потому что мы на нем останавливаемся, когда его находим 
	//*   т.к. получаем нужные данные для вычесления*/
	if (Array.isArray(data)) {
		let total = 0
		for (let i = 0; i < data.length; i++) {
			total += data[i].progress
		}
		// put both total & data.length into Arr & return like arr!! very smart
		return [total, data.length]
	} else {
		// in this brunch will be only Objects
		let total = [0, 0]
		for (let subData of Object.values(data)) {
			const subDataArray = getTotalProgressByRecursion(subData)
			total[0] += subDataArray[0]
			total[1] += subDataArray[1]
		}
		return total
	}
}
const result = getTotalProgressByRecursion(students)
console.log(result)
console.log(result[0] / result[1])

// !  Gpt Chat
function getTotalProgressByRecursionGPT(data) {
	let studentsCount = 0
	let totalProgress = 0

	function calculateProgress(course) {
		if (Array.isArray(course)) {
			studentsCount += course.length
			for (let i = 0; i < course.length; i++) {
				totalProgress += course[i].progress
			}
		} else {
			for (let subCourse of Object.values(course)) {
				calculateProgress(subCourse)
			}
		}
	}

	calculateProgress(data)

	return totalProgress / studentsCount
}

console.log(getTotalProgressByRecursionGPT(students))

function factorial(n) {
	if (Number.isInteger(n) && n >= 1) {
		return n * factorial(n - 1)
	} else return 1
}
console.log(factorial(1.5))
console.log(factorial(0.1))
console.log(factorial(-0))
console.log(factorial('5'))
console.log(factorial(3))
console.log(factorial(6))
console.log(Number.isInteger(''))

function factorial(n) {
	if (typeof n !== 'number' || !Number.isInteger(n)) {
		return "Data isn't correct, please check again !"
	}

	if (n >= 1) {
		return n * factorial(n - 1)
	} else {
		return 1
	}

	// Более короткий вариант, который вы можете встретить
	// Но не учитывает отрицательные значения
	return n ? n * factorial(n - 1) : 1
}

console.log(factorial(1.5))
console.log(factorial(0.1))
console.log(factorial('5'))
console.log(factorial(3))
console.log(factorial(6))
