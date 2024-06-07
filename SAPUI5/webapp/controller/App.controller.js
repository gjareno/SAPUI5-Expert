sap.ui.define([
    "sap/ui/core/mvc/Controller",
    "sap/m/MessageToast"
],
    /**
     * @param {typeof sap.ui.core.mvc.Controller} Controller
     * @param {typeof sap.m.MessageToast} MessageToast
     */
    function (Controller, MessageToast, Models, ResourceModel) {
        "use strict";
        return Controller.extend("logaligroup.SAPUI5.controller.App", {
            onInit: function() {

            },

            onShowHello: function() {
                //read text from i18n model
                var oBundle = this.getView().getModel("i18n").getResourceBundle();
                //read property from data model
                var sRecepient = this.getView().getModel().getProperty("/recipient/name");
                //El segundo parámetro se reemplaza en {0} y ya lo devuelve armado
                var sMsg = oBundle.getText("helloMsg", [sRecepient]);
                MessageToast.show(sMsg);
            }
        });
    });