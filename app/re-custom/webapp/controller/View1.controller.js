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
    "sap/m/MessageBox"
], function (Controller, MessageToast, MessageBox) {
    "use strict";

    return Controller.extend("real.estate.custom.recustom.controller.View1", {
        onFileChange: function (oEvent) {
            const file = oEvent.getParameter("files")[0];
            if (!file) return;
            const reader = new FileReader();
            reader.onload = (e) => {
                const image = this.byId("siteMapImage");
                image.setSrc(e.target.result);
                image.setVisible(true);
                // attach native click event
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

        onImageClick: function (event) {
            const domRef = event.currentTarget;
            const rect = domRef.getBoundingClientRect();

            const x = event.clientX - rect.left;
            const y = event.clientY - rect.top;

            const percentX = (x / rect.width) * 100;
            const percentY = (y / rect.height) * 100;

            console.log(`Clicked at: X: ${percentX.toFixed(2)}%, Y: ${percentY.toFixed(2)}%`);

            // Sample regions (defined as percentage bounds)
            const regions = [
                {
                    name: "Villa A",
                    price: "1.2M USD",
                    status: "Available",
                    xMin: 10, xMax: 30,
                    yMin: 20, yMax: 40
                },
                {
                    name: "Villa B",
                    price: "1.5M USD",
                    status: "Sold",
                    xMin: 40, xMax: 60,
                    yMin: 10, yMax: 30
                }
            ];

            const clickedRegion = regions.find(r =>
                percentX >= r.xMin && percentX <= r.xMax &&
                percentY >= r.yMin && percentY <= r.yMax
            );

            if (clickedRegion) {
                //       sap.m.MessageBox.information(`📍 ${clickedRegion.name}
                //   💰 Price: ${clickedRegion.price}
                //   📦 Status: ${clickedRegion.status}`);
                //     } else {
                //       sap.m.MessageToast.show("No unit info at this point.");
                //     }
                MessageBox.information(
                    `📍 ${clickedRegion.name}\n💰 Price: ${clickedRegion.price}\n📦 Status: ${clickedRegion.status}`
                );
            } else {
                MessageToast.show("No unit info at this point.");
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


