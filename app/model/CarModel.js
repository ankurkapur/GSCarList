Ext.define('GSCarList.model.CarModel',{
	extend: 'Ext.data.Model',
	requires : [
		'Ext.data.Model'
	],
	config: {
        fields: [
            'id',
            {name: 'name', type: 'string'}
        ]
    }
});