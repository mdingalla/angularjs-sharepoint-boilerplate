<%@ Page language="C#"   Inherits="Microsoft.SharePoint.Publishing.PublishingLayoutPage,Microsoft.SharePoint.Publishing,Version=15.0.0.0,Culture=neutral,PublicKeyToken=71e9bce111e9429c" meta:webpartpageexpansion="full" meta:progid="SharePoint.WebPartPage.Document" %>
<%@ Register Tagprefix="SharePointWebControls" Namespace="Microsoft.SharePoint.WebControls" Assembly="Microsoft.SharePoint, Version=15.0.0.0, Culture=neutral, PublicKeyToken=71e9bce111e9429c" %> <%@ Register Tagprefix="WebPartPages" Namespace="Microsoft.SharePoint.WebPartPages" Assembly="Microsoft.SharePoint, Version=15.0.0.0, Culture=neutral, PublicKeyToken=71e9bce111e9429c" %> <%@ Register Tagprefix="PublishingWebControls" Namespace="Microsoft.SharePoint.Publishing.WebControls" Assembly="Microsoft.SharePoint.Publishing, Version=15.0.0.0, Culture=neutral, PublicKeyToken=71e9bce111e9429c" %> <%@ Register Tagprefix="PublishingNavigation" Namespace="Microsoft.SharePoint.Publishing.Navigation" Assembly="Microsoft.SharePoint.Publishing, Version=15.0.0.0, Culture=neutral, PublicKeyToken=71e9bce111e9429c" %>
<asp:Content ContentPlaceholderID="PlaceHolderAdditionalPageHead" runat="server">
	<SharePointWebControls:CssRegistration name="<% $SPUrl:~sitecollection/Style Library/~language/Themable/Core Styles/pagelayouts15.css %>" runat="server"/>
	<PublishingWebControls:EditModePanel runat="server">
		<!-- Styles for edit mode only-->
		<SharePointWebControls:CssRegistration name="<% $SPUrl:~sitecollection/Style Library/~language/Themable/Core Styles/editmode15.css %>"
			After="<% $SPUrl:~sitecollection/Style Library/~language/Themable/Core Styles/pagelayouts15.css %>" runat="server"/>
	</PublishingWebControls:EditModePanel>
	<SharePointWebControls:FieldValue id="PageStylesField" FieldName="HeaderStyleDefinitions" runat="server"/>


	<link rel="stylesheet" type="text/css" href="<asp:Literal runat="server" Text="<%$SPUrl:~sitecollection/SiteAssets/lib/googlefont.css%>"/>">
	<link rel="stylesheet" type="text/css" href="<asp:Literal runat="server" Text="<%$SPUrl:~sitecollection/SiteAssets/lib/bootstrap/bootstrap.min.css%>" />">
	<!-- <link rel="stylesheet" type="text/css" href="<asp:Literal runat="server" Text="<%$SPUrl:~sitecollection/SiteAssets/lib/bootstrap/bootstrap-theme.css%>" />"> -->
	<link rel="stylesheet" type="text/css" href="<asp:Literal runat="server" Text="<%$SPUrl:~sitecollection/SiteAssets/lib/fontawesome/css/font-awesome.min.css%>" />">
	<link rel="stylesheet" type="text/css" href="<asp:Literal runat="server" Text="<%$SPUrl:~sitecollection/SiteAssets/lib/angularjs-toaster/toaster.min.css%>" />">
	<link rel="stylesheet" type="text/css" href="<asp:Literal runat="server" Text="<%$SPUrl:~sitecollection/SiteAssets/lib/chosen/chosen.min.css%>" />">
	<link rel="stylesheet" type="text/css" href="<asp:Literal runat="server" Text="<%$SPUrl:~sitecollection/SiteAssets/lib/sweetalert/sweetalert.css%>" />">
	<style>
	#pageTitle {
	 margin: 0 !important;
	}
	</style>
</asp:Content>
<asp:Content ContentPlaceholderID="PlaceHolderPageTitle" runat="server">
	AngularJS - SharePoint
	<SharePointWebControls:FieldValue id="PageTitle" FieldName="Title" runat="server"/>
</asp:Content>


<asp:Content ContentPlaceholderID="PlaceHolderSearchArea" runat="server">
<div id="dashSearchBox">
	<div class="form-group label-static is-empty">
	</div>
</div>
</asp:Content>
<asp:Content ContentPlaceholderID="PlaceHolderPageTitleInTitleArea" runat="server">
<span><a href="../">AngularJS + SharePoint</a></span>
	<SharePointWebControls:FieldValue FieldName="Title" runat="server"/>
</asp:Content>
<asp:Content ContentPlaceHolderId="PlaceHolderTitleBreadcrumb" runat="server">
	<SharePointWebControls:ListSiteMapPath runat="server" SiteMapProviders="CurrentNavigationSwitchableProvider" RenderCurrentNodeAsLink="false" PathSeparator="" CssClass="s4-breadcrumb" NodeStyle-CssClass="s4-breadcrumbNode" CurrentNodeStyle-CssClass="s4-breadcrumbCurrentNode" RootNodeStyle-CssClass="s4-breadcrumbRootNode" NodeImageOffsetX=0 NodeImageOffsetY=289 NodeImageWidth=16 NodeImageHeight=16 NodeImageUrl="/_layouts/15/images/fgimg.png?rev=23" HideInteriorRootNodes="true" SkipLinkText=""/> </asp:Content>
<asp:Content ContentPlaceholderID="PlaceHolderMain" runat="server">
	<div class="article article-body">
		<PublishingWebControls:EditModePanel runat="server" CssClass="edit-mode-panel title-edit">
			<SharePointWebControls:TextField runat="server" FieldName="Title"/>
		</PublishingWebControls:EditModePanel>
		<div class="article-content">
			<PublishingWebControls:RichHtmlField FieldName="PublishingPageContent" HasInitialFocus="True" MinimumEditHeight="400px" runat="server"/>
		</div>
		<PublishingWebControls:EditModePanel runat="server" CssClass="edit-mode-panel roll-up">
			<PublishingWebControls:RichImageField FieldName="PublishingRollupImage" AllowHyperLinks="false" runat="server" />
			<asp:Label text="<%$Resources:cms,Article_rollup_image_text15%>" CssClass="ms-textSmall" runat="server" />
		</PublishingWebControls:EditModePanel>
	</div>

	<!-- people pickers js -->
<!-- Load third party scripts required by the people picker -->
<script src="/_layouts/15/1033/strings.js"></script>
<script  src="/_layouts/15/SP.UI.Controls.js"></script>
<script  src="/_layouts/15/clienttemplates.js"></script>
<script src="/_layouts/15/clientforms.js"></script>
<script src="/_layouts/15/clientpeoplepicker.js"></script>
<script src="/_layouts/15/autofill.js"></script>
<script src="/_layouts/15/sp.RequestExecutor.js"></script>
<!--
-->
<!-- <script type="text/javascript" src="<asp:Literal runat="server" Text="<%$SPUrl:~sitecollection/SiteAssets/scripts/jquery-1.12.3.min.js%>" />"></script> -->
<!-- <script type="text/javascript" src="/SiteAssets/lib/core-js/client/shim.min.js"></script>
<script type="text/javascript" src="/SiteAssets/scripts/spservices/jquery.SPServices-2014.02.js"></script>
<script type="text/javascript" src="/SiteAssets/scripts/angular.min.js"></script>
<script type="text/javascript" src="/SiteAssets/scripts/angular-animate.js"></script>
<script type="text/javascript" src="/SiteAssets/scripts/angular-sanitize.min.js"></script>
<script type="text/javascript" src="/SiteAssets/scripts/angular-resource.min.js"></script>
<script type="text/javascript" src="/SiteAssets/scripts/angular-route.min.js"></script>
<script type="text/javascript" src="/SiteAssets/lib/ng-file-upload/ng-file-upload-shim.min.js"></script>
<script type="text/javascript" src="/SiteAssets/lib/ng-file-upload/ng-file-upload-all.min.js"></script>
<script type="text/javascript" src="/SiteAssets/scripts/angular-filter.min.js"></script>
<script type="text/javascript" src="/SiteAssets/scripts/moment.js"></script>
<script type="text/javascript" src="/SiteAssets/scripts/checklist-model.js"></script>
<script type="text/javascript" src="/SiteAssets/scripts/config.peoplepicker.js"></script>
<script type="text/javascript" src="/SiteAssets/scripts/bootstrap.min.js"></script>
<script type="text/javascript" src="/SiteAssets/scripts/angularjs-toaster/toaster.min.js"></script>

<script type="text/javascript" src="/SiteAssets/lib/lodash/lodash.min.js"></script>
<script type="text/javascript" src="/SiteAssets/lib/ng-office-ui-fabric/ngOfficeUiFabric.min.js"></script>
<script type="text/javascript" src="/SiteAssets/lib/angular-smart-table/smart-table.min.js"></script>
<script type="text/javascript" src="/SiteAssets/lib/chartjs/Chart.min.js"></script>
<script type="text/javascript" src="/SiteAssets/lib/angular-chart/angular-chart.min.js"></script>
<script type="text/javascript" src="/SiteAssets/lib/chosen/chosen-jquery.js"></script>
<script type="text/javascript" src="/SiteAssets/lib/chosen/angular-chosen2.min.js"></script>
<script type="text/javascript" src="/SiteAssets/lib/sweetalert/sweetalert.min.js"></script>
<script type="text/javascript" src="/SiteAssets/lib/sweetalert/angular-sweetalert.min.js"></script> -->
<!-- <script type="text/javascript" src="/SiteAssets/lib/bootstrap-material-design/js/material.min.js%>" />"></script>
<script type="text/javascript" src="/SiteAssets/lib/bootstrap-material-design/js/ripples.min.js%>" />"></script> -->
<!-- <script type="text/javascript" src="/SiteAssets/lib/es6-promise/es6-promise.min.js"></script>
<script type="text/javascript" src="/SiteAssets/lib/whatwg-fetch/fetch.js"></script>
<script type="text/javascript" src="/SiteAssets/lib/sp-pnp-js/dist/pnp.min.js"></script> -->


<!-- <script type="text/javascript" src="/SiteAssets/app/app.js"></script> -->


<!-- Optional theme -->
<div  ng-app="myApp">
<toaster-container></toaster-container>
<!-- <back-top scroll-speed=600 button-theme="light" button-text="Take me back"></back-top> -->
<div class="view-animate-container">
	 <div ng-view class="view-animate"></div>
 </div>
	<div class="m-app-loading" ng-animate-children>
		<style type="text/css">
			div.m-app-loading {
				position: fixed ;
			}

			div.m-app-loading div.animated-container {
				background-color: #333333 ;
				bottom: 0px ;
				left: 0px ;
				opacity: 1.0 ;
				position: fixed ;
				right: 0px ;
				top: 0px ;
				z-index: 999999 ;
			}

			/* Used to initialize the ng-leave animation state. */
			div.m-app-loading div.animated-container.ng-leave {
				opacity: 1.0 ;
				transition: all linear 200ms ;
					-webkit-transition: all linear 200ms ;
			}

			/* Used to set the end properties of the ng-leave animation state. */
			div.m-app-loading div.animated-container.ng-leave-active {
				opacity: 0 ;
			}

			div.m-app-loading div.messaging {
				color: #FFFFFF ;
				font-family: monospace ;
				left: 0px ;
				margin-top: -37px ;
				position: absolute ;
				right: 0px ;
				text-align: center ;
				top: 50% ;
			}

			div.m-app-loading h1 {
				font-size: 26px ;
				line-height: 35px ;
				margin: 0px 0px 20px 0px ;
			}

			div.m-app-loading p {
				font-size: 18px ;
				line-height: 14px ;
				margin: 0px 0px 0px 0px ;
			}

		</style>
		<!-- BEGIN: Actual animated container. -->
		<div class="animated-container">
			<div class="messaging">
				<h1>
					AngularJS + SharePoint App
				</h1>
				<p>
					Loading...
				</p>
			</div>
		</div>
		<!-- END: Actual animated container. -->
	</div>

	    <style type="text/css">
	    .form-invalid
	    {
	        border: 1px solid red !important;
	    }
			</style>
			<script>
				// $.material.init();

				function WebForm_OnSubmit() {
					return false;
				}
				// $(document).ready(function() {
				// 	$('form').unbind('submit');
				// })

			</script>

			<script type="text/javascript" src="<asp:Literal runat="server" Text="<%$SPUrl:~sitecollection/SiteAssets/lib/jquery-1.12.3.min.js%>" />"></script>
			<script type="text/javascript" src="<asp:Literal runat="server" Text="<%$SPUrl:~sitecollection/SiteAssets/lib/moment.js%>" />"></script>
			<script type="text/javascript" src="<asp:Literal runat="server" Text="<%$SPUrl:~sitecollection/SiteAssets/lib/lodash.min.js%>" />"></script>

			<script type="text/javascript" src="<asp:Literal runat="server" Text="<%$SPUrl:~sitecollection/SiteAssets/lib/angular/angular.min.js%>" />"></script>
			<script type="text/javascript" src="<asp:Literal runat="server" Text="<%$SPUrl:~sitecollection/SiteAssets/lib/angular/angular-filter.min.js%>" />"></script>
			<script type="text/javascript" src="<asp:Literal runat="server" Text="<%$SPUrl:~sitecollection/SiteAssets/lib/angular/angular-animate.js%>" />"></script>
			<script type="text/javascript" src="<asp:Literal runat="server" Text="<%$SPUrl:~sitecollection/SiteAssets/lib/angular/angular-sanitize.min.js%>" />"></script>
			<script type="text/javascript" src="<asp:Literal runat="server" Text="<%$SPUrl:~sitecollection/SiteAssets/lib/angular/angular-resource.min.js%>" />"></script>
			<script type="text/javascript" src="<asp:Literal runat="server" Text="<%$SPUrl:~sitecollection/SiteAssets/lib/angular/angular-route.min.js%>" />"></script>
			<script type="text/javascript" src="<asp:Literal runat="server" Text="<%$SPUrl:~sitecollection/SiteAssets/lib/angularjs-toaster/toaster.min.js%>" />"></script>
			<script type="text/javascript" src="<asp:Literal runat="server" Text="<%$SPUrl:~sitecollection/SiteAssets/lib/bootstrap/bootstrap.min.js%>" />"></script>
			<script type="text/javascript" src="<asp:Literal runat="server" Text="<%$SPUrl:~sitecollection/SiteAssets/lib/core-js/client/shim.min.js%>"  />"></script>
			<script type="text/javascript" src="<asp:Literal runat="server" Text="<%$SPUrl:~sitecollection/SiteAssets/lib/spservices/jquery.SPServices-2014.02.js%>" />"></script>
			<script type="text/javascript" src="<asp:Literal runat="server" Text="<%$SPUrl:~sitecollection/SiteAssets/lib/ng-file-upload/ng-file-upload-shim.min.js%>" />"></script>
			<script type="text/javascript" src="<asp:Literal runat="server" Text="<%$SPUrl:~sitecollection/SiteAssets/lib/ng-file-upload/ng-file-upload-all.min.js%>" />"></script>

			<script type="text/javascript" src="<asp:Literal runat="server" Text="<%$SPUrl:~sitecollection/SiteAssets/lib/checklist-model.js%>" />"></script>
			<script type="text/javascript" src="<asp:Literal runat="server" Text="<%$SPUrl:~sitecollection/SiteAssets/lib/config.peoplepicker.js%>" />"></script>
			<script type="text/javascript" src="<asp:Literal runat="server" Text="<%$SPUrl:~sitecollection/SiteAssets/lib/ui-bootstrap-tpls-1.3.3.min.js%>" />"></script>

			<script type="text/javascript" src="<asp:Literal runat="server" Text="<%$SPUrl:~sitecollection/SiteAssets/lib/ng-office-ui-fabric/ngOfficeUiFabric.min.js%>" />"></script>
			<!-- <script type="text/javascript" src="<asp:Literal runat="server" Text="<%$SPUrl:~sitecollection/SiteAssets/lib/angular-smart-table/smart-table.min.js%>" />"></script> -->
			<script type="text/javascript" src="<asp:Literal runat="server" Text="<%$SPUrl:~sitecollection/SiteAssets/lib/chartjs/Chart.min.js%>" />"></script>
			<script type="text/javascript" src="<asp:Literal runat="server" Text="<%$SPUrl:~sitecollection/SiteAssets/lib/angular-chart/angular-chart.min.js%>" />"></script>
			<script type="text/javascript" src="<asp:Literal runat="server" Text="<%$SPUrl:~sitecollection/SiteAssets/lib/chosen/chosen-jquery.js%>" />"></script>
			<script type="text/javascript" src="<asp:Literal runat="server" Text="<%$SPUrl:~sitecollection/SiteAssets/lib/chosen/angular-chosen2.min.js%>" />"></script>
			<script type="text/javascript" src="<asp:Literal runat="server" Text="<%$SPUrl:~sitecollection/SiteAssets/lib/sweetalert/sweetalert.min.js%>" />"></script>
			<script type="text/javascript" src="<asp:Literal runat="server" Text="<%$SPUrl:~sitecollection/SiteAssets/lib/sweetalert/angular-sweetalert.min.js%>" />"></script>
			<!-- <script type="text/javascript" src="<asp:Literal runat="server" Text="<%$SPUrl:~sitecollection/SiteAssets/lib/bootstrap-material-design/js/material.min.js%>" />"></script>
			<script type="text/javascript" src="<asp:Literal runat="server" Text="<%$SPUrl:~sitecollection/SiteAssets/lib/bootstrap-material-design/js/ripples.min.js%>" />"></script> -->

			<script type="text/javascript" src="<asp:Literal runat="server" Text="<%$SPUrl:~sitecollection/SiteAssets/lib/es6-promise/es6-promise.min.js%>"  />"></script>
			<script type="text/javascript" src="<asp:Literal runat="server" Text="<%$SPUrl:~sitecollection/SiteAssets/lib/whatwg-fetch/fetch.js%>"  />"></script>
			<script type="text/javascript" src="<asp:Literal runat="server" Text="<%$SPUrl:~sitecollection/SiteAssets/lib/sp-pnp-js/dist/pnp.min.js%>"  />"></script>

			<script type="text/javascript" src="<asp:Literal runat="server" Text="<%$SPUrl:~site/SiteAssets/app/app.js%>" />"></script>
			<script type="text/javascript" src="<asp:Literal runat="server" Text="<%$SPUrl:~site/SiteAssets/app/controller.js%>" />"></script>
			<!-- <script type="text/javascript" src="<asp:Literal runat="server" Text="<%$SPUrl:~site/SiteAssets/app/services.js%>" />"></script> -->
			<script type="text/javascript" src="<asp:Literal runat="server" Text="<%$SPUrl:~site/SiteAssets/app/directives.js%>" />"></script>

</asp:Content>
