// Copyright (c) 2023, Yousuf and contributors
// For license information, please see license.txt

frappe.ui.form.on('Color Settings', {
	// validate: function(frm) {
	// 	console.log("goio")

	// 	frappe.ui.toolbar.clear_cache();
	// 	frm.reload_doc()
	// },
	// refresh:function(frm){
	// 	console.log("goo")
	// },
	after_save: function(frm) {
		// if(frm.doc.__islocal){
		frappe.ui.toolbar.clear_cache();
		// frm.refresh()
		// frm.reload_doc()

		// }
	}
});
