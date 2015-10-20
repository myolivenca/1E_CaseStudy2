using System.Web;
using System.Web.Optimization;

namespace _1E_CaseStudy2
{
    public class BundleConfig
    {
        // For more information on Bundling, visit http://go.microsoft.com/fwlink/?LinkId=254725
        public static void RegisterBundles(BundleCollection bundles)
        {
            bundles.Add(new ScriptBundle("~/bundles/vendor").Include(
                         "~/Scripts/Vendor/jquery-{version}.js",
                         "~/Scripts/Vendor/jquery-ui-{version}.js",
                         "~/Scripts/Vendor/isotope.js",
                         "~/Scripts/Vendor/nicescroll.js"));

            bundles.Add(new ScriptBundle("~/bundles/plugins").Include(
                       "~/Scripts/Plugins/AlertsToaster/1.1.0/ec_alertstoaster.js",
                       "~/Scripts/_main.js"));

            bundles.Add(new ScriptBundle("~/bundles/angular").Include(
                      "~/Structure/App/angular.1.3.16.js",
                      "~/Structure/App/angular-resource.js",
                      "~/Structure/App/angular.easypiechart.js",
                      "~/Structure/App/app.module.js",
                      "~/Structure/App/Navigation/navigation.js",
                      "~/Structure/App/Charts/charts.js"));

            bundles.Add(new StyleBundle("~/bundles/css").Include(
                        "~/Structure/Main.css"));

        }
    }
}