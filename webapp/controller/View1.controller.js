sap.ui.define([
    "sap/ui/core/mvc/Controller"
], (Controller) => {
    "use strict";

    return Controller.extend("zfioritest.controller.View1", {
        onInit() {
        },
        onButtonPress:function(oEvent){
            // var oButton = oEvent.getSource();
            // oButton.setText("Clicked!");
            sap.m.MessageToast.show("Button clicked!");
        }
    });
});