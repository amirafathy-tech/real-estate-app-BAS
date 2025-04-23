sap.ui.define(['sap/fe/test/ObjectPage'], function(ObjectPage) {
    'use strict';

    var CustomPageDefinitions = {
        actions: {},
        assertions: {}
    };

    return new ObjectPage(
        {
            appId: 'real.estate.realestate1',
            componentId: 'BuildingsObjectPage',
            contextPath: '/Buildings'
        },
        CustomPageDefinitions
    );
});