// Please see documentation at https://learn.microsoft.com/aspnet/core/client-side/bundling-and-minification
// for details on configuring this project to bundle and minify static web assets.

// Write your JavaScript code.

var adminManager = new ActiveXObject('Microsoft.ApplicationHost.WritableAdminManager');
adminManager.CommitPath = "MACHINE/WEBROOT/APPHOST/Contoso";

var directoryBrowseSection = adminManager.GetAdminSection("system.webServer/directoryBrowse",
   "MACHINE/WEBROOT/APPHOST/Contoso");
directoryBrowseSection.Properties.Item("enabled").Value = true;
directoryBrowseSection.Properties.Item("showFlags").Value = "Date, Time, Size, Extension";

adminManager.CommitChanges();
