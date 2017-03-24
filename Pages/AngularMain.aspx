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
	<base href="/dev/angular1/Pages/AngularMain.aspx/">
	<!-- <base href="/dev/angular1/"> -->
<link rel="stylesheet" type="text/css" href="<asp:Literal runat="server" Text="<%$SPUrl:~site/SiteAssets/css/main.css%>"/>">
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

<div  ng-app="myApp" lang="eng">
	<div class="view-animate-container">
		 <ui-view></ui-view>
	</div>
</div>
	    <style type="text/css">
	    .form-invalid
	    {
	        border: 1px solid red !important;
	    }
			</style>
			<script>
				function WebForm_OnSubmit() {
					return false;
				}
			</script>

			<script type="text/javascript" src="<asp:Literal runat="server" Text="<%$SPUrl:~site/SiteAssets/scripts/vendor.bundle.js%>" />"></script>
			<script type="text/javascript" src="<asp:Literal runat="server" Text="<%$SPUrl:~site/SiteAssets/scripts/main.bundle.js%>" />"></script>
			<!-- <script src="//angular-ui.github.io/bootstrap/ui-bootstrap-tpls-0.10.0.js"></script> -->
</asp:Content>
