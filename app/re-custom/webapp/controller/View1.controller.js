// sap.ui.define([
//     "sap/ui/core/mvc/Controller"
// ], (Controller) => {
//     "use strict";

//     return Controller.extend("real.estate.custom.recustom.controller.View1", {
//         onInit() {
//         }
//     });
// });

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

    return Controller.extend("real.estate.custom.recustom.controller.View1", {
        // worked image only
        // onFileChange: function (oEvent) {
        //     const file = oEvent.getParameter("files")[0];
        //     if (!file) return;
        //     const reader = new FileReader();
        //     reader.onload = (e) => {
        //         const image = this.byId("siteMapImage");
        //         image.setSrc(e.target.result);
        //         image.setVisible(true);
        //         // attach native click event
        //         setTimeout(() => {
        //             const domRef = image.getDomRef();
        //             if (domRef && !domRef._clickAttached) {
        //                 domRef.addEventListener("click", this.onImageClick.bind(this));
        //                 domRef._clickAttached = true;
        //             }
        //         }, 200);
        //     };
        //     reader.readAsDataURL(file);
        // },

        // onImageClick: function (event) {
        //     const domRef = event.currentTarget;
        //     const rect = domRef.getBoundingClientRect();

        //     const x = event.clientX - rect.left;
        //     const y = event.clientY - rect.top;

        //     const percentX = (x / rect.width) * 100;
        //     const percentY = (y / rect.height) * 100;

        //     console.log(`Clicked at: X: ${percentX.toFixed(2)}%, Y: ${percentY.toFixed(2)}%`);

        //     // Sample regions (defined as percentage bounds)
        //     const regions = [
        //         {
        //             name: "Villa A",
        //             price: "1.2M USD",
        //             status: "Available",
        //             xMin: 10, xMax: 30,
        //             yMin: 20, yMax: 40
        //         },
        //         {
        //             name: "Villa B",
        //             price: "1.5M USD",
        //             status: "Sold",
        //             xMin: 40, xMax: 60,
        //             yMin: 10, yMax: 30
        //         }
        //     ];

        //     const clickedRegion = regions.find(r =>
        //         percentX >= r.xMin && percentX <= r.xMax &&
        //         percentY >= r.yMin && percentY <= r.yMax
        //     );

        //     if (clickedRegion) {
        //         //       sap.m.MessageBox.information(`📍 ${clickedRegion.name}
        //         //   💰 Price: ${clickedRegion.price}
        //         //   📦 Status: ${clickedRegion.status}`);
        //         //     } else {
        //         //       sap.m.MessageToast.show("No unit info at this point.");
        //         //     }
        //         MessageBox.information(
        //             `📍 ${clickedRegion.name}\n💰 Price: ${clickedRegion.price}\n📦 Status: ${clickedRegion.status}`
        //         );
        //     } else {
        //         MessageToast.show("No unit info at this point.");
        //     }
        // },

        //------------------------------------
        // List:
       
        // onInit: function () {
        //     const oModel = this.getView().getModel();
        //     console.log(oModel);
            
        //     if (!oModel) {
        //       console.error("Model is not defined. Check manifest.json.");
        //       return;
        //     }
        //     oModel.read("/Buildings", {
        //       success: (oData) => {
        //         console.log("Buildings data:", oData);
        //       },
        //       error: (oError) => {
        //         console.error("Error reading Buildings:", oError);
        //       }
        //     });
        //   },
          
        //   onBuildingSelect: function (oEvent) {
        //     const selectedContext = oEvent.getParameter("listItem").getBindingContext();
        //     const buildingID = selectedContext.getProperty("ID");
          
        //     const oModel = this.getView().getModel();
        //     oModel.read(`/Building('${buildingID}')/units`, {
        //       success: (data) => {
        //         console.log(data);
                
        //         const unitModel = new sap.ui.model.json.JSONModel({ SelectedBuildingUnits: data.value });
        //         this.getView().setModel(unitModel);
        //       }
        //     });
        //   },
          
        //   onUnitSelect: function (oEvent) {
        //     const unit = oEvent.getParameter("listItem").getBindingContext().getObject();
        //     sap.m.ActionSheet({
        //       title: `Actions for ${unit.name}`,
        //       buttons: [
        //         new sap.m.Button({ text: "Create Reservation", press: () => {/* logic */} }),
        //         new sap.m.Button({ text: "Go to Payment", press: () => {/* logic */} })
        //       ]
        //     }).openBy(oEvent.getParameter("listItem"));
        //   }

        // updated with static data:
        onInit: function () {
            // Define static data for Buildings and Units
            const staticData = {
                Buildings: [
                    { ID: "1a2b3c4d", name: "Building A", location: "Downtown" },
                    { ID: "2b1c4d5e", name: "Building B", location: "Uptown" }
                ],
                Units: [
                    { ID: "unit1", buildingID: "1a2b3c4d", name: "Unit 101", status: "available" },
                    { ID: "unit2", buildingID: "1a2b3c4d", name: "Unit 102", status: "reserved" },
                    { ID: "unit3", buildingID: "2b1c4d5e", name: "Unit 201", status: "available" }
                ]
            };

            // Create a JSON model with the static data
            const oModel = new JSONModel(staticData);
            this.getView().setModel(oModel);
        },

        onFileChange: function (oEvent) {
            const file = oEvent.getParameter("files")[0];
            if (!file) return;
            const reader = new FileReader();
            reader.onload = (e) => {
                const image = this.byId("siteMapImage");
                image.setSrc(e.target.result);
                image.setVisible(true);
                // Attach native click event
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
            // Trigger the file upload (already handled by onFileChange)
            MessageToast.show("Image uploaded successfully.");
        },

        onImageClick: function (event) {
            const domRef = event.currentTarget;
            const rect = domRef.getBoundingClientRect();

            const x = event.clientX - rect.left;
            const y = event.clientY - rect.top;

            const percentX = (x / rect.width) * 100;
            const percentY = (y / rect.height) * 100;

            console.log(`Clicked at: X: ${percentX.toFixed(2)}%, Y: ${percentY.toFixed(2)}%`);

            // Define regions corresponding to buildings
            const regions = [
                {
                    name: "Building A",
                    buildingID: "1a2b3c4d",
                    xMin: 10, xMax: 30,
                    yMin: 20, yMax: 40
                },
                {
                    name: "Building B",
                    buildingID: "2b1c4d5e",
                    xMin: 40, xMax: 60,
                    yMin: 10, yMax: 30
                }
            ];

            const clickedRegion = regions.find(r =>
                percentX >= r.xMin && percentX <= r.xMax &&
                percentY >= r.yMin && percentY <= r.yMax
            );

            if (clickedRegion) {
                // Show units in a popup
                this.showUnitsPopup(clickedRegion.buildingID, clickedRegion.name);
                MessageToast.show(`Selected ${clickedRegion.name}`);
            } else {
                MessageToast.show("No building at this point.");
            }
        },

        onBuildingSelect: function (oEvent) {
            const selectedContext = oEvent.getParameter("listItem").getBindingContext();
            const buildingID = selectedContext.getProperty("ID");
            const buildingName = selectedContext.getProperty("name");

            // Show units in a popup
            this.showUnitsPopup(buildingID, buildingName);
        },

        showUnitsPopup: function (buildingID, buildingName) {
            // Filter units for the selected building
            const oModel = this.getView().getModel();
            const allUnits = oModel.getProperty("/Units");
            const selectedUnits = allUnits.filter(unit => unit.buildingID === buildingID);

            // Create a JSON model for the popup
            const unitModel = new JSONModel({ Units: selectedUnits });
            
            // Create a list for the units
            const oList = new List({
                mode: "SingleSelectMaster",
                selectionChange: (oEvent) => {
                    console.log("Unit selected from popup");
                    const selectedUnit = oEvent.getParameter("listItem").getBindingContext("unitModel").getObject();
                    console.log("Selected unit:", selectedUnit);
                    this.onUnitSelect(selectedUnit, oDialog, oList, buildingName, unitModel);
                },
                items: {
                    path: "unitModel>/Units",
                    template: new StandardListItem({
                        title: "{unitModel>name}",
                        description: "{unitModel>status}",
                        highlight: "{= ${unitModel>status} === 'reserved' ? 'Error' : 'Success' }",
                        type: "Active"
                    })
                }
            });

            // Create a dialog
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
        },

        onUnitSelect: function (unit, dialog, unitList, buildingName, unitModel) {
            // Create a list of actions for the selected unit
            const oActionList = new List({
                mode: "SingleSelectMaster",
                selectionChange: (oEvent) => {
                    const selectedAction = oEvent.getParameter("listItem").getTitle();
                    this.handleUnitAction(selectedAction, unit, dialog, unitList, buildingName, unitModel);
                },
                items: [
                    new StandardListItem({
                        title: "Create Reservation",
                        type: "Active"
                    }),
                    new StandardListItem({
                        title: "Go to Payment",
                        type: "Active"
                    })
                ]
            });

            // Update the dialog to show the actions list
            dialog.setTitle(`Actions for ${unit.name}`);
            dialog.removeAllContent();
            dialog.addContent(oActionList);

            // Add a Back button to return to the units list
            dialog.setEndButton(new Button({
                text: "Back",
                press: () => {
                    // Restore the units list
                    dialog.setTitle(`Units in ${buildingName}`);
                    dialog.removeAllContent();
                    dialog.addContent(unitList);
                    dialog.setEndButton(null); // Remove the Back button
                }
            }));
        },

        handleUnitAction: function (action, unit, dialog, unitList, buildingName, unitModel) {
            if (action === "Create Reservation") {
                MessageToast.show(`Reservation for ${unit.name} created (static)`);
                // Update the unit status to reserved
                const oModel = this.getView().getModel();
                const allUnits = oModel.getProperty("/Units");
                const unitIndex = allUnits.findIndex(u => u.ID === unit.ID);
                if (unitIndex !== -1) {
                    allUnits[unitIndex].status = "reserved";
                    oModel.setProperty("/Units", allUnits);
                    // Update the unitModel to reflect the change in the popup
                    const popupUnits = unitModel.getProperty("/Units");
                    const popupUnitIndex = popupUnits.findIndex(u => u.ID === unit.ID);
                    if (popupUnitIndex !== -1) {
                        popupUnits[popupUnitIndex].status = "reserved";
                        unitModel.setProperty("/Units", popupUnits);
                    }
                }
                // Return to the units list
                dialog.setTitle(`Units in ${buildingName}`);
                dialog.removeAllContent();
                dialog.addContent(unitList);
                dialog.setEndButton(null);
            } else if (action === "Go to Payment") {
                MessageToast.show(`Navigating to payment for ${unit.name} (static)`);
                // Return to the units list
                dialog.setTitle(`Units in ${buildingName}`);
                dialog.removeAllContent();
                dialog.addContent(unitList);
                dialog.setEndButton(null);
            }
        }
          
    });
});



// onAfterRendering: function () {
        //     const oImage = this.byId("previewImage");
        //     const oDomRef = oImage.getDomRef();
        //     if (oDomRef && !oDomRef._clickAttached) {
        //         oDomRef.addEventListener("click", this.onImageClick.bind(this));
        //         oDomRef._clickAttached = true; // prevent multiple bindings
        //     }
        // },
        // onUploadPress: function () {
        //     var oFileUploader = new sap.ui.unified.FileUploader({
        //         uploadUrl: "",
        //         change: function (oEvent) {
        //             var oFile = oEvent.getParameter("files")[0];
        //             if (oFile) {
        //                 var reader = new FileReader();
        //                 reader.onload = function (e) {
        //                     var imageData = e.target.result;
        //                     this.byId("previewImage").setSrc(imageData);
        //                     this.byId("previewImage").setVisible(true);
        //                 }.bind(this);
        //                 reader.readAsDataURL(oFile);
        //             }
        //         }.bind(this)
        //     });
        //     oFileUploader.openFileDialog();
        // },


