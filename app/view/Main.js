Ext.define('GSCarList.view.Main', {
    extend: 'Ext.tab.Panel',
    xtype: 'main',
    requires: [
        'Ext.TitleBar',
        'GSCarList.store.CarStore',
        'GSCarList.view.CarListings',
        'GSCarList.util.PositionMap'
    ],
    config: {
        tabBarPosition: 'bottom',
        items: [
            {
                title: 'Welcome',
                iconCls: 'home',
                layout:{type:'vbox'},
                styleHtmlContent: true,
                scrollable: true,

                items: [{
                    docked: 'top',
                    xtype: 'titlebar',
                    height:50,
                    title: 'Welcome to Sencha Touch 2'
                },
                {
                    xtype:'list',
                    flex:1,
                    defaultType:'cardetails',
                    store:Ext.create('GSCarList.store.CarStore')
                }]
            }
        ]
    }
});
