$(function()
{
  providers = ["23andme",
"500px",
"assembla",
"behance",
"bitbucket",
"bitly",
"box",
"cheddar",
"dailymile",
"dailymotion",
"deezer",
"deviantart",
"disqus",
"dropbox",
"eventbrite",
"facebook",
"fitbit",
"flickr",
"foursquare",
"freebase",
"github",
"google_adexchange",
"google_adsense",
"google_affiliate_network",
"google_analytics",
"google_apps",
"google_audit",
"google_bigquery",
"google_blogger",
"google_books",
"google_calendar",
"google_cloud",
"google_contact",
"google_dfareporting",
"google_documents",
"google_drive",
"google_enterprise_licence_manager",
"google_fusiontables",
"google_groups",
"google_latitude",
"google-logo",
"google_maps",
"google_play",
"google_plus",
"google",
"google_prediction",
"google_shopping",
"google_site",
"google_tasks",
"google_urlshortener",
"imgur",
"instagram",
"linkedin",
"live",
"mailchimp",
"meetup",
"miso",
"ohloh",
"orkut",
"plurk",
"runkeeper",
"salesforce",
"skyrock",
"soundcloud",
"stackexchange",
"trello",
"tripit",
"tumblr",
"twitter",
"uservoice",
"vimeo",
"wordpress",
"yammer",
"youtube"];

  sample_providers = ["facebook", "twitter", "github", "stackexchange", "soundcloud", "youtube", "tumblr", "instagram", "linkedin"];
  provider = sample_providers[0];
	
	$('#connectTo').html(provider);
  
  $("#provider_actions, #result").hide();
  
  provider_actions = $('#provider_actions')
  provider_actions.hide();

  $.each(sample_providers, function(index, value)
  {
    img = "http://oauth-io.github.io/oauth-js/images/providers/" + value + ".png";
    $('#providers-menu').append("<li><img style='float: left;position:absolute;margin-left:4px;' src='" + img + "' width='28'/><a href='#' style='text-transform:capitalize;padding:5px 0 5px 35px;'>" + value + "</a></li>");
  });


  $.each(providers, function(index, value)
  {
    var img = "http://oauth-io.github.io/oauth-js/images/providers/" + value + ".png"; 
    var providers_container;
    
    if (index % 8 == 0)
      $('#providers').append("<div class='row'></div>");      
    
    value = value.replace(/_/g, ' ')
    $('#providers').append("<img data-toggle='tooltip' title data-original-title='" + value + "' style='margin: 4px;' src='" + img + "' width='28'/>");          
""
  });

  $('#providers img').tooltip();

  $('#providers-menu li').click(function(e)
  {              
    e.preventDefault();
    if (!provider_actions.is(':visible'))
      provider_actions.fadeIn();
    
    provider = $(this).find('a').text();
    $('#connectTo').html(provider);
    $('#provider').html(provider);  
  });

  $('#provider_actions .btn-group button').click(function(e)
  {       
    $("#result").hide();
    option = $(this).text();
    $('#provider').html(provider);
    update_code(option, provider);
  });

});