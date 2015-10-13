Ext.define('GSCarList.model.CarModel',{
	extend: 'Ext.data.Model',
	requires : [
		'Ext.data.Model'
	],
	config: {
        fields: [
            {name:'Id',type:'int'},
            {name: 'name', type: 'string'},
            {name: 'modelyear', type: 'string'}
        ]
    }
});