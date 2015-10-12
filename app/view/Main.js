Ext.define('GSCarList.view.Main', {
    extend: 'Ext.tab.Panel',
    xtype: 'main',
    requires: [
        'Ext.TitleBar',
        'GSCarList.store.CarStore'
    ],
    //layout: 'vbox',
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
                    //height:200,
                    itemTpl:'<br><div style="">{name}</div>',
                    store:Ext.create('GSCarList.store.CarStore')
                }]
            }
        ]
    }
});
