
function Reverse_Sentence(str) 
{
	// <em>Check input</em>
	if(!str || str.length < 2 ||
			typeof str!== 'string') {
		return 'Not valid';
	}	
	// <em>Take empty array revArray</em>
	const revArray = [];
	const length = str.length - 1;
	// <em>Looping from the end</em>
	for(let i = length; i >= 0; i--) {
		revArray.push(str[i]);
	}	
	// <em>Joining the array elements</em>
	return revArray.join('');
}
console.log(Reverse_Sentence('This is a sunny day '));