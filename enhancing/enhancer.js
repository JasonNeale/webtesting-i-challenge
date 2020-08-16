// a repair(item) method that accepts an item object and returns a new item 
// with the durability restored to 100. This method is the simplest of the 
// three and would be a good starting point on this project.

function repair(item) {
	item.durability = 100
	return { ...item }
}

// a success(item) method that accepts an item object and returns a new item 
// object modified according to the rules defined by the client for enhancement success.

function succeed(item) {
	if (item.enhancement >= 20) return { ...item }

	item.enhancement = item.enhancement + 1
	return { ...item }
}

// a fail(item) method that accepts an item object and returns a new item 
// object modified according to the rules defined by the client for enhancement failure.

function fail(item) {
	item.enhancement <= 15
		? (item.durability = item.durability - 5)
		: (item.durability = item.durability - 10)

	item.enhancement > 16
		? (item.enhancement = item.enhancement - 1)
		: item.enhancement

	return { ...item }
}

// Add a get() method to the enhancer object that takes an item and returns a new item 
// with the name property modified according to the following rules:
// -if the enhancement level is 0, the the name is not modified.
// -if the enhancement level is greater than 0, change the name to include the enhancement 
// level, preceded by a plus sign ( + ), between square brackets before the item's name. 
// Example: the name of a "Iron Sword" enhanced to 7 would be "[+7] Iron Sword".

function get(item) {
	item.enhancement > 0
		? (item.name = `[+${item.enhancement}] ${item.name}`)
		: item.name

	return { ...item }
}


module.exports = {
	succeed,
	fail,
	repair,
	get
}