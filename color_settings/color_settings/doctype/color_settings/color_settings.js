// Copyright (c) 2023, Yousuf and contributors
// For license information, please see license.txt

frappe.ui.form.on('Color Settings', {
	after_save: function(frm) {
		frappe.ui.toolbar.clear_cache();
	}
});
