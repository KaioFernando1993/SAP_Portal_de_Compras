/*global QUnit*/

sap.ui.define([
	"portal-app/controller/PurchasingPortal.controller"
], function (Controller) {
	"use strict";

	QUnit.module("PurchasingPortal Controller");

	QUnit.test("I should test the PurchasingPortal controller", function (assert) {
		var oAppController = new Controller();
		oAppController.onInit();
		assert.ok(oAppController);
	});

});
