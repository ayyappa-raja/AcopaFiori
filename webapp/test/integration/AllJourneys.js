/*global QUnit*/

jQuery.sap.require("sap.ui.qunit.qunit-css");
jQuery.sap.require("sap.ui.thirdparty.qunit");
jQuery.sap.require("sap.ui.qunit.qunit-junit");
QUnit.config.autostart = false;

// We cannot provide stable mock data out of the template.
// If you introduce mock data, by adding .json files in your webapp/localService/mockdata folder you have to provide the following minimum data:
// * At least 3 ProductSet in the list

sap.ui.require([
	"sap/ui/test/Opa5",
	"Git/Test/ZGitTest1/test/integration/pages/Common",
	"sap/ui/test/opaQunit",
	"Git/Test/ZGitTest1/test/integration/pages/App",
	"Git/Test/ZGitTest1/test/integration/pages/Browser",
	"Git/Test/ZGitTest1/test/integration/pages/Master",
	"Git/Test/ZGitTest1/test/integration/pages/Detail",
	"Git/Test/ZGitTest1/test/integration/pages/NotFound"
], function (Opa5, Common) {
	"use strict";
	Opa5.extendConfig({
		arrangements: new Common(),
		viewNamespace: "Git.Test.ZGitTest1.view."
	});

	sap.ui.require([
		"Git/Test/ZGitTest1/test/integration/MasterJourney",
		"Git/Test/ZGitTest1/test/integration/NavigationJourney",
		"Git/Test/ZGitTest1/test/integration/NotFoundJourney",
		"Git/Test/ZGitTest1/test/integration/BusyJourney",
		"Git/Test/ZGitTest1/test/integration/FLPIntegrationJourney"
	], function () {
		QUnit.start();
	});
});