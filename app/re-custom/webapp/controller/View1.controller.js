sap.ui.define([
    "sap/ui/core/mvc/Controller",
    "sap/m/MessageToast",
    "sap/m/MessageBox",
    "sap/ui/model/json/JSONModel",
    "sap/m/Dialog",
    "sap/m/List",
    "sap/m/StandardListItem",
    "sap/m/Button"
], function (Controller, MessageToast, MessageBox, JSONModel, Dialog, List, StandardListItem, Button) {
    "use strict";

    // return Controller.extend("real.estate.custom.recustom.controller.View1", {
    //     // updated with static data:
    //     onInit: function () {
    //         // Define static data for Buildings and Units
    //         const staticData = {
    //             Buildings: [
    //                 { ID: "1a2b3c4d", name: "Building A", location: "Downtown" },
    //                 { ID: "2b1c4d5e", name: "Building B", location: "Uptown" }
    //             ],
    //             Units: [
    //                 { ID: "unit1", buildingID: "1a2b3c4d", name: "Unit 101", status: "available" },
    //                 { ID: "unit2", buildingID: "1a2b3c4d", name: "Unit 102", status: "reserved" },
    //                 { ID: "unit3", buildingID: "2b1c4d5e", name: "Unit 201", status: "available" }
    //             ]
    //         };

    //         // Create a JSON model with the static data
    //         const oModel = new JSONModel(staticData);
    //         this.getView().setModel(oModel);
    //     },

    //     onFileChange: function (oEvent) {
    //         const file = oEvent.getParameter("files")[0];
    //         if (!file) return;
    //         const reader = new FileReader();
    //         reader.onload = (e) => {
    //             const image = this.byId("siteMapImage");
    //             image.setSrc(e.target.result);
    //             image.setVisible(true);
    //             // Attach native click event
    //             setTimeout(() => {
    //                 const domRef = image.getDomRef();
    //                 if (domRef && !domRef._clickAttached) {
    //                     domRef.addEventListener("click", this.onImageClick.bind(this));
    //                     domRef._clickAttached = true;
    //                 }
    //             }, 200);
    //         };
    //         reader.readAsDataURL(file);
    //     },

    //     onUploadPress: function () {
    //         const oFileUploader = this.byId("fileUploader");
    //         if (!oFileUploader.getValue()) {
    //             MessageToast.show("Please choose an image first.");
    //             return;
    //         }
    //         // Trigger the file upload (already handled by onFileChange)
    //         MessageToast.show("Image uploaded successfully.");
    //     },

    //     onImageClick: function (event) {
    //         const domRef = event.currentTarget;
    //         const rect = domRef.getBoundingClientRect();

    //         const x = event.clientX - rect.left;
    //         const y = event.clientY - rect.top;

    //         const percentX = (x / rect.width) * 100;
    //         const percentY = (y / rect.height) * 100;

    //         console.log(`Clicked at: X: ${percentX.toFixed(2)}%, Y: ${percentY.toFixed(2)}%`);

    //         // Define regions corresponding to buildings
    //         const regions = [
    //             {
    //                 name: "Building A",
    //                 buildingID: "1a2b3c4d",
    //                 xMin: 10, xMax: 30,
    //                 yMin: 20, yMax: 40
    //             },
    //             {
    //                 name: "Building B",
    //                 buildingID: "2b1c4d5e",
    //                 xMin: 40, xMax: 60,
    //                 yMin: 10, yMax: 30
    //             }
    //         ];

    //         const clickedRegion = regions.find(r =>
    //             percentX >= r.xMin && percentX <= r.xMax &&
    //             percentY >= r.yMin && percentY <= r.yMax
    //         );

    //         if (clickedRegion) {
    //             // Show units in a popup
    //             this.showUnitsPopup(clickedRegion.buildingID, clickedRegion.name);
    //             MessageToast.show(`Selected ${clickedRegion.name}`);
    //         } else {
    //             MessageToast.show("No building at this point.");
    //         }
    //     },

    //     onBuildingSelect: function (oEvent) {
    //         const selectedContext = oEvent.getParameter("listItem").getBindingContext();
    //         const buildingID = selectedContext.getProperty("ID");
    //         const buildingName = selectedContext.getProperty("name");

    //         // Show units in a popup
    //         this.showUnitsPopup(buildingID, buildingName);
    //     },

    //     showUnitsPopup: function (buildingID, buildingName) {
    //         // Filter units for the selected building
    //         const oModel = this.getView().getModel();
    //         const allUnits = oModel.getProperty("/Units");
    //         const selectedUnits = allUnits.filter(unit => unit.buildingID === buildingID);

    //         // Create a JSON model for the popup
    //         const unitModel = new JSONModel({ Units: selectedUnits });
            
    //         // Create a list for the units
    //         const oList = new List({
    //             mode: "SingleSelectMaster",
    //             selectionChange: (oEvent) => {
    //                 console.log("Unit selected from popup");
    //                 const selectedUnit = oEvent.getParameter("listItem").getBindingContext("unitModel").getObject();
    //                 console.log("Selected unit:", selectedUnit);
    //                 this.onUnitSelect(selectedUnit, oDialog, oList, buildingName, unitModel);
    //             },
    //             items: {
    //                 path: "unitModel>/Units",
    //                 template: new StandardListItem({
    //                     title: "{unitModel>name}",
    //                     description: "{unitModel>status}",
    //                     highlight: "{= ${unitModel>status} === 'reserved' ? 'Error' : 'Success' }",
    //                     type: "Active"
    //                 })
    //             }
    //         });

    //         // Create a dialog
    //         const oDialog = new Dialog({
    //             title: `Units in ${buildingName}`,
    //             content: oList,
    //             beginButton: new Button({
    //                 text: "Close",
    //                 press: () => oDialog.close()
    //             }),
    //             afterClose: () => oDialog.destroy()
    //         });

    //         // Set the model for the dialog
    //         oDialog.setModel(unitModel, "unitModel");
    //         oDialog.open();
    //     },

    //     onUnitSelect: function (unit, dialog, unitList, buildingName, unitModel) {
    //         // Create a list of actions for the selected unit
    //         const oActionList = new List({
    //             mode: "SingleSelectMaster",
    //             selectionChange: (oEvent) => {
    //                 const selectedAction = oEvent.getParameter("listItem").getTitle();
    //                 this.handleUnitAction(selectedAction, unit, dialog, unitList, buildingName, unitModel);
    //             },
    //             items: [
    //                 new StandardListItem({
    //                     title: "Create Reservation",
    //                     type: "Active"
    //                 }),
    //                 new StandardListItem({
    //                     title: "Go to Payment",
    //                     type: "Active"
    //                 })
    //             ]
    //         });

    //         // Update the dialog to show the actions list
    //         dialog.setTitle(`Actions for ${unit.name}`);
    //         dialog.removeAllContent();
    //         dialog.addContent(oActionList);

    //         // Add a Back button to return to the units list
    //         dialog.setEndButton(new Button({
    //             text: "Back",
    //             press: () => {
    //                 // Restore the units list
    //                 dialog.setTitle(`Units in ${buildingName}`);
    //                 dialog.removeAllContent();
    //                 dialog.addContent(unitList);
    //                 dialog.setEndButton(null); // Remove the Back button
    //             }
    //         }));
    //     },

    //     handleUnitAction: function (action, unit, dialog, unitList, buildingName, unitModel) {
    //         if (action === "Create Reservation") {
    //             MessageToast.show(`Reservation for ${unit.name} created (static)`);
    //             // Update the unit status to reserved
    //             const oModel = this.getView().getModel();
    //             const allUnits = oModel.getProperty("/Units");
    //             const unitIndex = allUnits.findIndex(u => u.ID === unit.ID);
    //             if (unitIndex !== -1) {
    //                 allUnits[unitIndex].status = "reserved";
    //                 oModel.setProperty("/Units", allUnits);
    //                 // Update the unitModel to reflect the change in the popup
    //                 const popupUnits = unitModel.getProperty("/Units");
    //                 const popupUnitIndex = popupUnits.findIndex(u => u.ID === unit.ID);
    //                 if (popupUnitIndex !== -1) {
    //                     popupUnits[popupUnitIndex].status = "reserved";
    //                     unitModel.setProperty("/Units", popupUnits);
    //                 }
    //             }
    //             // Return to the units list
    //             dialog.setTitle(`Units in ${buildingName}`);
    //             dialog.removeAllContent();
    //             dialog.addContent(unitList);
    //             dialog.setEndButton(null);
    //         } else if (action === "Go to Payment") {
    //             MessageToast.show(`Navigating to payment for ${unit.name} (static)`);
    //             // Return to the units list
    //             dialog.setTitle(`Units in ${buildingName}`);
    //             dialog.removeAllContent();
    //             dialog.addContent(unitList);
    //             dialog.setEndButton(null);
    //         }
    //     }
          
    // });

    // new with db:
   
    return Controller.extend("real.estate.custom.recustom.controller.View1", {
        onInit: function () {
            // OData model is set in manifest.json
        },

        onFileChange: function (oEvent) {
            const file = oEvent.getParameter("files")[0];
            if (!file) return;
            const reader = new FileReader();
            reader.onload = (e) => {
                const image = this.byId("siteMapImage");
                image.setSrc(e.target.result);
                image.setVisible(true);
                setTimeout(() => {
                    const domRef = image.getDomRef();
                    if (domRef && !domRef._clickAttached) {
                        domRef.addEventListener("click", this.onImageClick.bind(this));
                        domRef._clickAttached = true;
                    }
                }, 200);
            };
            reader.readAsDataURL(file);
        },

        onUploadPress: function () {
            const oFileUploader = this.byId("fileUploader");
            if (!oFileUploader.getValue()) {
                MessageToast.show("Please choose an image first.");
                return;
            }
            MessageToast.show("Image uploaded successfully.");
        },

        onImageClick: function (event) {
            const domRef = event.currentTarget;
            const rect = domRef.getBoundingClientRect();

            const x = event.clientX - rect.left;
            const y = event.clientY - rect.top;

            const percentX = (x / rect.width) * 100;
            const percentY = (y / rect.height) * 100;
            const oModel = this.getView().getModel();
            if (!oModel) {
                MessageToast.show("Error: OData model is not properly initialized.");
                console.error("OData model is not initialized:", oModel);
                return;
            }

            // Create a list binding for the Buildings entity
            const oListBinding = oModel.bindList("/Buildings");

            // Fetch the buildings
            oListBinding.requestContexts().then((aContexts) => {
                // Map the contexts to a regions array
                this._regions = aContexts.map(oContext => {
                    const oBuilding = oContext.getObject();
                    return {
                        name: oBuilding.name,
                        buildingID: oBuilding.ID,
                        xMin: oBuilding.xMin,
                        xMax: oBuilding.xMax,
                        yMin: oBuilding.yMin,
                        yMax: oBuilding.yMax
                    };
                });
                console.log(`Clicked at: X: ${percentX.toFixed(2)}%, Y: ${percentY.toFixed(2)}%`);

                // Use the regions fetched from the backend
                if (!this._regions) {
                    MessageToast.show("Regions not yet loaded. Please wait.");
                    return;
                }
                const clickedRegion = this._regions.find(r =>
                    percentX >= r.xMin && percentX <= r.xMax &&
                    percentY >= r.yMin && percentY <= r.yMax
                );

                if (clickedRegion) {
                    this.showUnitsPopup(clickedRegion.buildingID, clickedRegion.name);
                    MessageToast.show(`Selected ${clickedRegion.name}`);
                } else {
                    MessageToast.show("No building at this point.");
                }
                console.log("Regions fetched from backend:", this._regions);
            }).catch((oError) => {
                MessageToast.show("Error fetching regions. Please ensure the backend service is running.");
                console.error("Error fetching regions:", oError);
            });
        },

        onBuildingSelect: function (oEvent) {
            const selectedContext = oEvent.getParameter("listItem").getBindingContext();
            const buildingID = selectedContext.getProperty("ID");
            const buildingName = selectedContext.getProperty("name");
            this.showUnitsPopup(buildingID, buildingName);
        },

        showUnitsPopup: function (buildingID, buildingName) {
            // Get the OData model
            const oModel = this.getView().getModel();

            // Debug: Verify the model
            if (!oModel) {
                MessageToast.show("Error: OData model is not properly initialized.");
                console.error("OData model is not initialized:", oModel);
                return;
            }

            // Create a list binding for the units of the selected building
            const oListBinding = oModel.bindList(`/Buildings('${buildingID}')/units`);

            // Request the contexts (which will fetch the units)
            oListBinding.requestContexts().then((aContexts) => {
                // Extract the unit data from the contexts
                const selectedUnits = aContexts.map(oContext => oContext.getObject());
                if (selectedUnits.length === 0) {
                    MessageToast.show(`No units found for ${buildingName}.`);
                    return;
                }

                // Create a JSON model for the popup
                const unitModel = new sap.ui.model.json.JSONModel({ Units: selectedUnits });

                // Create a list to display units
                const oList = new List({
                    mode: "SingleSelectMaster",
                    selectionChange: (oEvent) => {
                        const selectedUnit = oEvent.getParameter("listItem").getBindingContext("unitModel").getObject();
                        this.onUnitSelect(selectedUnit, oDialog, oList, buildingName, unitModel);
                    },
                    items: {
                        path: "unitModel>/Units",
                        template: new StandardListItem({
                            title: "{unitModel>name}",
                            description: "Status: {unitModel>status}",
                            highlight: "{= ${unitModel>status} === 'reserved' ? 'Error' : 'Success' }",
                            type: "Active"
                        })
                    }
                });

                // Create a dialog to show the units
                const oDialog = new Dialog({
                    title: `Units in ${buildingName}`,
                    content: oList,
                    beginButton: new Button({
                        text: "Close",
                        press: () => oDialog.close()
                    }),
                    afterClose: () => oDialog.destroy()
                });

                // Set the model for the dialog
                oDialog.setModel(unitModel, "unitModel");
                oDialog.open();
            }).catch((oError) => {
                MessageToast.show("Error loading units. Please ensure the backend service is running.");
                console.error("Error fetching units:", oError);
            });
        },

        onUnitSelect: function (unit, dialog, unitList, buildingName, unitModel) {
            const oActionList = new List({
                mode: "SingleSelectMaster",
                selectionChange: (oEvent) => {
                    const selectedAction = oEvent.getParameter("listItem").getTitle();
                    this.handleUnitAction(selectedAction, unit, dialog, unitList, buildingName, unitModel);
                },
                items: [
                    new StandardListItem({ title: "Create Reservation", type: "Active" }),
                    new StandardListItem({ title: "Go to Payment", type: "Active" })
                ]
            });

            dialog.setTitle(`Actions for ${unit.name}`);
            dialog.removeAllContent();
            dialog.addContent(oActionList);

            dialog.setEndButton(new Button({
                text: "Back",
                press: () => {
                    dialog.setTitle(`Units in ${buildingName}`);
                    dialog.removeAllContent();
                    dialog.addContent(unitList);
                    dialog.setEndButton(null);
                }
            }));
        },

        handleUnitAction: function (action, unit, dialog, unitList, buildingName, unitModel) {
            const oModel = this.getView().getModel();
            if (!oModel || !oModel.submitBatch) {
                MessageToast.show("Error: OData model is not properly initialized for updates.");
                console.error("OData model is not initialized or does not support updates:", oModel);
                return;
            }

            if (action === "Create Reservation") {
                // Create a context binding for the unit
                const oContextBinding = oModel.bindContext(`/Units('${unit.ID}')`, null, { $$updateGroupId: oModel.getUpdateGroupId() });

                // Ensure the binding is resolved and get the bound context
                oContextBinding.initialize();
                const oContext = oContextBinding.getBoundContext();

                // Check if the context is resolved
                if (!oContext) {
                    MessageToast.show("Error: Unable to resolve unit context for update.");
                    console.error("Context not resolved:", oContextBinding);
                    return;
                }

                // Update the status using setProperty
                oContext.setProperty("status", "reserved");

                // Submit the changes in a batch
                oModel.submitBatch(oModel.getUpdateGroupId()).then(() => {
                    MessageToast.show(`Reservation for ${unit.name} created`);
                    // Update the local JSON model for the popup
                    const popupUnits = unitModel.getProperty("/Units");
                    const popupUnitIndex = popupUnits.findIndex(u => u.ID === unit.ID);
                    if (popupUnitIndex !== -1) {
                        popupUnits[popupUnitIndex].status = "reserved";
                        unitModel.setProperty("/Units", popupUnits);
                    }
                    // Reset the dialog
                    dialog.setTitle(`Units in ${buildingName}`);
                    dialog.removeAllContent();
                    dialog.addContent(unitList);
                    dialog.setEndButton(null);
                }).catch((oError) => {
                    MessageToast.show("Error creating reservation. Please check the backend.");
                    console.error("Error updating unit:", oError);
                    // Revert the status in the local model if the update fails
                    const popupUnits = unitModel.getProperty("/Units");
                    const popupUnitIndex = popupUnits.findIndex(u => u.ID === unit.ID);
                    if (popupUnitIndex !== -1) {
                        popupUnits[popupUnitIndex].status = unit.status;
                        unitModel.setProperty("/Units", popupUnits);
                    }
                });
            } else if (action === "Go to Payment") {
                MessageToast.show(`Navigating to payment for ${unit.name}`);
                dialog.setTitle(`Units in ${buildingName}`);
                dialog.removeAllContent();
                dialog.addContent(unitList);
                dialog.setEndButton(null);
            }
        }
    });
});



