Ext.define('GSCarList.view.CarListings',{
	extend:'Ext.dataview.component.ListItem',
	xtype: 'cardetails',
	requires: [
        'GSCarList.view.RotatingCarousel'
    ],
	config:{
		layout:{type:'hbox'},
		height:100,
		items:[
        	
			/*{
				xtype: 'image',
				itemId:'itemImage',
				//src:'src',
				width:160
				
			},*/
			{
				xtype:'rotatingcarousel',
				itemId:'imgCarousel',
				width:160
			},
			{
        		xtype:'component',
				cls:'carList',
        		model:'GSCarList.model.CarModel',
        		tpl:'{name}<br>{modelyear}',
				//flex:1,
				padding:'0 0 0 4'
				//flex:3
        	}
        ]
	},
	updateRecord:function(record){
		var allItems = this.getItems();
		for(var count=0;count<this.getItems().length;count++){
			this.getAt(count).setRecord(record);
		}
		var srcs = Ext.decode(record.get('src'));
		//this.down('#itemImage').setSrc(srcs[0]);
		console.log(this.down('#imgCarousel').getItems().length);
		if(this.down('#imgCarousel').getItems().length == 1){
			for(var count=0;count<srcs.length;count++){
				this.down('#imgCarousel').add({xtype:'image',src:srcs[count]});
			}
		}
	}
	
});