Ext.define('GSCarList.store.CarStore',{
	extend: 'Ext.data.Store',
	requires: [
		'Ext.data.Store',
		'GSCarList.model.CarModel'	
	],
	model: 'GSCarList.model.CarModel',
	data:[
		{Id:1,name:'Mazda 3',modelyear:'2012',
		src:
		'["http://images.mazdausa.com/MusaWeb/musa2/images/vlp/panels/M3S/gallery/default.jpg","http://images.mazdausa.com/MusaWeb/musa2/images/vlp/panels/M3S/gallery/large/2016-Mazda-3-sedan-back_lg.jpg","http://images.mazdausa.com/MusaWeb/musa2/images/vlp/panels/M3S/gallery/large/2016-Mazda-3-sedan_2_lg.jpg"]'},
		{Id:2,name:'Honda Accord',modelyear:'2013',
		src:'["http://automobiles.honda.com/handlers/resize-image.ashx?w=1076&h=605&q=70&fn=/images/2016/accord-sedan/exterior-gallery-new/2016-honda-accord-sedan-aluminum-hood.jpg","http://automobiles.honda.com/handlers/resize-image.ashx?w=1076&h=605&q=70&fn=/images/2016/accord-sedan/exterior-gallery-new/2016-honda-accord-sedan-grille.jpg","http://automobiles.honda.com/handlers/resize-image.ashx?w=1076&h=605&q=70&fn=/images/2016/accord-sedan/exterior-gallery-new/2016-honda-accord-sedan-new-taillights-design.jpg"]'}
	]
});