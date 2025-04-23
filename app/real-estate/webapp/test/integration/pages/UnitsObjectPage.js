sap.ui.define(['sap/fe/test/ObjectPage'], function(ObjectPage) {
    'use strict';

    var CustomPageDefinitions = {
        actions: {},
        assertions: {}
    };

    return new ObjectPage(
        {
            appId: 'real.estate.realestate',
            componentId: 'UnitsObjectPage',
            contextPath: '/Buildings/units'
        },
        CustomPageDefinitions
    );
});