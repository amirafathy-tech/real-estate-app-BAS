sap.ui.require(
    [
        'sap/fe/test/JourneyRunner',
        'real/estate/realestate/test/integration/FirstJourney',
		'real/estate/realestate/test/integration/pages/BuildingsList',
		'real/estate/realestate/test/integration/pages/BuildingsObjectPage',
		'real/estate/realestate/test/integration/pages/UnitsObjectPage'
    ],
    function(JourneyRunner, opaJourney, BuildingsList, BuildingsObjectPage, UnitsObjectPage) {
        'use strict';
        var JourneyRunner = new JourneyRunner({
            // start index.html in web folder
            launchUrl: sap.ui.require.toUrl('real/estate/realestate') + '/index.html'
        });

       
        JourneyRunner.run(
            {
                pages: { 
					onTheBuildingsList: BuildingsList,
					onTheBuildingsObjectPage: BuildingsObjectPage,
					onTheUnitsObjectPage: UnitsObjectPage
                }
            },
            opaJourney.run
        );
    }
);