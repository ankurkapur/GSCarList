Ext.define('GSCarList.store.CarStore',{
	extend: 'Ext.data.Store',
	requires: [
		'Ext.data.Store',
		'GSCarList.model.CarModel'	
	],
	model: 'GSCarList.model.CarModel',
	data:[
		{Id:1,name:'Mazda 3',modelyear:'2012'},
		{Id:2,name:'Honda Accord',modelyear:'2013'}
	]
});