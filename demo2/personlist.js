var vm = new Vue({
	el: "#app",
	data: {
		newPerson: {
			name: '',
			age: 0,
			sex: 'Male'
		},
		people: [{
			name: 'Will',
			age: 24,
			sex: 'Male'
		}, {
			name: 'Lynn',
			age: 23,
			sex: 'Female'
		}]
	},
	methods: {
		createPerson: function(){
			this.people.push(this.newPerson);
			this.newPerson = {name:'', age:0, sex:'Male'};
		},
		delectPerson: function(index) {
			this.people.splice(index, 1);
		}
	}
})