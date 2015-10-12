Ext.define('GSCarList.store.CarStore',{
	extend: 'Ext.data.Store',
	requires: [
		'Ext.data.Store',
		'GSCarList.model.CarModel'	
	],
	model: 'GSCarList.model.CarModel',
	data:[
		{name:'Mazda 3'},
		{name:'Honda Accord'}
	]
});