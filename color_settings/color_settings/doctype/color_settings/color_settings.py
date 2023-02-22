# Copyright (c) 2023, Yousuf and contributors
# For license information, please see license.txt

from __future__ import unicode_literals
import frappe
from frappe.model.document import Document
from frappe.utils import cint
from color_settings.api import get_frappe_version
from frappe.installer import update_site_config
from frappe.model.document import Document

class ColorSettings(Document):
	
	def validate(self):
		if cint(get_frappe_version()) >= 13:
			if self.branding_app_name:
				frappe.db.set_value("Website Settings","Website Settings","app_name",self.branding_app_name)
			else:
				if "erpnext" in frappe.get_installed_apps():
					frappe.db.set_value("System Settings","System Settings","app_name","ERPNext")
				else:
					frappe.db.set_value("System Settings","System Settings","app_name","Frappe")

		if frappe.db.exists("DocType","Navbar Settings") and self.application_logo:
			frappe.db.set_value("Navbar Settings","Navbar Settings","app_logo",self.application_logo)
			frappe.db.set_value("Website Settings","Website Settings","app_logo",self.favicon_logo)
			frappe.db.set_value("Website Settings","Website Settings","splash_image",self.favicon_logo)
			frappe.db.set_value("Website Settings","Website Settings","favicon",self.favicon_logo)
			# frappe.db.set_value("Navbar Settings","Navbar Settings","logo_width",self.header_logo_width)
			self.app_logo_set = 1
			update_site_config("app_logo_url",self.application_logo)
			frappe.clear_cache()
		if self.app_logo_set and not self.application_logo:
			frappe.db.set_value("Navbar Settings","Navbar Settings","app_logo","")
			frappe.db.set_value("Website Settings","Website Settings","favicon","")
			frappe.db.set_value("Website Settings","Website Settings","splash_image","")
			frappe.db.set_value("Website Settings","Website Settings","app_logo","")
			# frappe.db.set_value("Navbar Settings","Navbar Settings","logo_width",self.header_logo_width)
			self.app_logo_set = 0
			update_site_config("app_logo_url",False)
			frappe.clear_cache()
   
		if not self.application_logo:
			app_logo =frappe.get_hooks("app_logo_url")[1]
			frappe.errprint(app_logo)
			frappe.db.set_value("Navbar Settings","Navbar Settings","app_logo",app_logo)
			update_site_config("app_logo_url",False)
			frappe.clear_cache()
   
		if not self.favicon_logo:
			app_logo_f =frappe.get_hooks("app_logo_url")[1]
	  
			frappe.db.set_value("Website Settings","Website Settings","favicon",app_logo_f)
			frappe.db.set_value("Website Settings","Website Settings","splash_image",app_logo_f)
			frappe.db.set_value("Website Settings","Website Settings","app_logo",app_logo_f)
			frappe.errprint(frappe.get_hooks("app_logo_url")[1])
			update_site_config("app_logo_url",False)
   
			frappe.clear_cache()
