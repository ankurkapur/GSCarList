Ext.define('GSCarList.view.CarListings',{
	extend:'Ext.dataview.component.ListItem',
	xtype: 'cardetails',
	config:{
		layout:{type:'hbox',align:'strech'},
		type1:'{name}',
		type2:'{modelyear}',
        items:[
        	{
        		xtype:'component',
        		model:'GSCarList.model.CarModel',
        		listeners:{
        			'tap':function(e,options){
        				console.log('clicked');
        				e.stopPropagation();
        			}
        		}
        		//tpl:'{name}'//<br>{modelyear}'
        	}
        ]
	},
	updateRecord:function(record){
		var allItems = this.getItems();
		//for(var count=0;count<this.getItems().length;count++){
		//	if(count == 0){
			console.log(record.get('Id'));
		if(record.get('Id') == 1){
				this.getAt(0).setTpl(this.getType1());
			}else{
				this.getAt(0).setTpl(this.getType2());
			}
			this.getAt(0).setRecord(record);
		
	}
	/*applyCaptionPanel:function(config){
		console.log(config);
		return Ext.create('Ext.Component',config);
	},
	updateCaptionPanel:function(value){
		this.add(value);
		//this.add(Ext.create('Ext.Component',{html:'Yo Yo'}));
	}*/
});