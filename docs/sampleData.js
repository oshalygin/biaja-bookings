/* eslint-disable */
// import cheerio from 'cheerio';
// const data = `<!DOCTYPE html>
// <!--[if lt IE 7 ]><html class="ie ie6" lang="en"> <![endif]-->
// <!--[if IE 7 ]><html class="ie ie7" lang="en"> <![endif]-->
// <!--[if IE 8 ]><html class="ie ie8" lang="en"> <![endif]-->
// <!--[if IE ]><html class="ie" lang="en"> <![endif]-->
// <!--[if (gte IE 9)|!(IE)]><!--><html lang="en"> <!--<![endif]-->
// <head>

//   <title>Ja Rule Tour Dates 2017 - Upcoming Ja Rule Concert Dates and Tickets | Bandsintown</title>

// <meta content="Ja Rule" property="og:title" />
// <meta content="Get notified by email, mobile, or Facebook whenever Ja Rule announces a concert in your area." property="og:description" />

// <meta content="http://www.bandsintown.com/JaRule" property="og:url" />

// <meta content="https://s3.amazonaws.com/bit-photos/large/5378170.jpeg" property="og:image" />

// <meta content="app" name="twitter:card" />

// <meta content="Bandsintown Concerts" name="twitter:app:name:iphone" />
// <meta content="471394851" name="twitter:app:id:iphone" />
// <meta content="bitcon://deeplink?artist_name=Ja+Rule&amp;controller=ArtistDetailViewController" name="twitter:app:url:iphone" />

// <meta content="Bandsintown Concerts" name="twitter:app:name:ipad" />
// <meta content="471394851" name="twitter:app:id:ipad" />
// <meta content="bitcon://deeplink?artist_name=Ja+Rule&amp;controller=ArtistDetailViewController" name="twitter:app:url:ipad" />

// <meta content="Bandsintown Concerts" name="twitter:app:name:googleplay" />
// <meta content="com.bandsintown" name="twitter:app:id:googleplay" />
// <meta content="bitintent://www.bandsintown.com/androidapp?artist=Ja+Rule" name="twitter:app:url:googleplay" />

// <meta content="Bandsintown Concerts" property="al:iphone:app_name" />
// <meta content="471394851" property="al:iphone:app_store_id" />
// <meta content="bitcon://deeplink?artist_name=Ja+Rule&amp;controller=ArtistDetailViewController" property="al:iphone:url" />

// <meta content="Bandsintown Concerts" property="al:ipad:app_name" />
// <meta content="471394851" property="al:ipad:app_store_id" />
// <meta content="bitcon://deeplink?artist_name=Ja+Rule&amp;controller=ArtistDetailViewController" property="al:ipad:url" />

// <meta content="Bandsintown Concerts" property="al:ios:app_name" />
// <meta content="471394851" property="al:ios:app_store_id" />
// <meta content="bitcon://deeplink?artist_name=Ja+Rule&amp;controller=ArtistDetailViewController" property="al:ios:url" />

// <meta content="Bandsintown Concerts" property="al:android:app_name" />
// <meta content="com.bandsintown" property="al:android:package" />
//             <meta content="bitintent://www.bandsintown.com/androidapp?artist=Ja+Rule" property="al:android:url" />

//     <meta content="photo" name="twitter:card" />

//   <meta content="Ja Rule Tour Dates" name="twitter:title" />
//   <meta content="https://s3.amazonaws.com/bit-photos/large/5378170.jpeg" name="twitter:image" />

//   <link rel="alternate" media="only screen and (max-width: 640px)" href="http://m.bandsintown.com/JaRule"/>

//   <meta name="verify-v1" content="nNUDuDWUA6zEmbVtd9Ao2VqvHfC9+fSnx9QZR5YD7oY=" />
//         <meta name="description" content="Get tickets to see Ja Rule live. Explore the 2017 tour dates schedule for Ja Rule. Download the Bandsintown app to never miss a show" />
//         <meta name="keywords" content="Bandsintown,Ja Rule" />
//         <meta http-equiv="Content-Type" content="text/html; charset=utf-8" />

//   <link rel="canonical" href="http://www.bandsintown.com/JaRule" />
//         <link rel="shortcut icon" href="/favicon.ico" />
//         <link rel="icon" href="/favicon.ico" />
//         <link href="/JaRule/rss" rel="alternate" title="RSS" type="application/rss+xml" />

//   <!-- Begin comScore Tag -->
// <script>
//   var _comscore = _comscore || [];
//   _comscore.push({ c1: "2", c2: "6772046" });
//   (function() {
//     var s = document.createElement("script"), el = document.getElementsByTagName("script")[0]; s.async = true;
//     s.src = (document.location.protocol == "https:" ? "https://sb" : "http://b") + ".scorecardresearch.com/beacon.js";
//     el.parentNode.insertBefore(s, el);
//   })();
// </script>
// <noscript>
//   <img src="http://b.scorecardresearch.com/p?c1=2&c2=6772046&cv=2.0&cj=1" />
// </noscript>
// <!-- End comScore Tag -->

//   <!--[if lt IE 9]>
//     <script src="//html5shim.googlecode.com/svn/trunk/html5.js"></script>
//   <![endif]-->

//   <link rel="shortcut icon" href="/favicon.ico">
//   <link href="https://d38hmgjgf0kofx.cloudfront.net/stylesheets/packaged/web.min.css?1507674293" media="screen" rel="stylesheet" type="text/css" />

//         <script src="https://d38hmgjgf0kofx.cloudfront.net/javascripts/packaged/shared.min.js?1507674293" type="text/javascript"></script>
//         <script src="https://d38hmgjgf0kofx.cloudfront.net/javascripts/packaged/web.min.js?1507674293" type="text/javascript"></script>

//   <script type="text/javascript">
//   BIT.baseUrl = BIT.base_url = "http://www.bandsintown.com";
//   BIT.secureBaseUrl = "https://www.bandsintown.com";

//               </script>
// <script type="text/javascript">
//   $(document).delegate("body", "facebook:ready", function() {

//     FB.getLoginStatus(function(response) { if(response.authResponse) { BIT.FB.Permissions.load(); } });
//   });

//   BIT.extend("FB", {"appId":"123966167614127","canvasUrl":"https://apps.facebook.com/concertsbybit/facebook","signed_request":null,"page_id":"","namespace":"concertsbybit","locale":"en_US"});

//   BIT.extend("Models.User", { defaultRadius: 75 });
// </script>

// </head>

// <body class="artist-container">
//   <div class="wrapper">
//     <div id="fb-root"></div>
// <script type="text/javascript">
//   (function() {
//     var e = document.createElement('script');
//         e.async = true;
//         e.src = document.location.protocol + "//connect.facebook.net/en_US/sdk.js";
//     document.getElementById('fb-root').appendChild(e);
//   }());

//   $(document).ready(function(){
//     function facebookReady(){
//       FB.init({
//         appId: "123966167614127",
//         status: true,
//         cookie: true,
//         xfbml: true,
//         channelUrl: "http://www.bandsintown.com/channel.html",
//         oauth: true,
//         version: "v2.1"
//       });
//       $("body").trigger("facebook:ready");
//     }

//     if(window.FB) {
//       facebookReady();
//     } else {
//       window.fbAsyncInit = facebookReady;
//     }
//   });
// </script>

//     <header>
//   <div id="logo">
//     <a href="http://www.bandsintown.com/" class="left"><img alt="Bandsintown Logo" height="35" src="https://d38hmgjgf0kofx.cloudfront.net/images/logo.png?1507674293" width="375" /></a>

//     <div class="header-buttons right">
//       <a href="/facebook" class="medium teal-alt button"><i class='fa fa-facebook-square'></i> Fan Log In | Sign Up</a>
//     </div>
//   </div>
//                 </header>
// <section class="container">
//       <div class="sixteen columns">
//         <div class="notifications" style="display:none;">

//         </div>

//           <div class="five columns alpha" id="sidebar">

// <a href="/JaRule"><img alt="Ja Rule Tour Dates" class="sidebar-image" src="https://s3.amazonaws.com/bit-photos/large/5378170.jpeg" title="Ja Rule Tour Dates" /></a>

// <aside class="sidebar-info-container">

//     <button class="green full-width track-artist" id="sidebar-button"><span class="unchecked"></span><strong class="button-text">Track This Artist</strong></button>

//     <section class="track-by-email-container">
//       <div style="display:none;" class="message"></div>
//       <div class="email-signup-container">
//         <input type="email" value="" placeholder="Or enter your email address" class="email-signup">
//         <div class="button small email-signup-button">OK</div>
//       </div>
//     </section>

//   <section class="sidebar-content-container">
//     <p class="count">
//       174,687 Trackers
//     </p>

//       <div class="faces">

//           <a href="//www.facebook.com/profile.php?id=1272909427" target="_blank"><img src='//graph.facebook.com/1272909427/picture?type=square'></a>

//           <a href="//www.facebook.com/profile.php?id=100000894175633" target="_blank"><img src='//graph.facebook.com/100000894175633/picture?type=square'></a>

//           <a href="//www.facebook.com/profile.php?id=100001813178766" target="_blank"><img src='//graph.facebook.com/100001813178766/picture?type=square'></a>

//           <a href="//www.facebook.com/profile.php?id=1683051389" target="_blank"><img src='//graph.facebook.com/1683051389/picture?type=square'></a>

//           <a href="//www.facebook.com/profile.php?id=984694201599576" target="_blank"><img src='//graph.facebook.com/984694201599576/picture?type=square'></a>

//           <a href="//www.facebook.com/profile.php?id=100000445210709" target="_blank"><img src='//graph.facebook.com/100000445210709/picture?type=square'></a>

//           <a href="//www.facebook.com/profile.php?id=1222498274454248" target="_blank"><img src='//graph.facebook.com/1222498274454248/picture?type=square'></a>

//           <a href="//www.facebook.com/profile.php?id=501299790" target="_blank"><img src='//graph.facebook.com/501299790/picture?type=square'></a>

//           <a href="//www.facebook.com/profile.php?id=100001099949045" target="_blank"><img src='//graph.facebook.com/100001099949045/picture?type=square'></a>

//           <a href="//www.facebook.com/profile.php?id=10152959331454080" target="_blank"><img src='//graph.facebook.com/10152959331454080/picture?type=square'></a>

//           <a href="//www.facebook.com/profile.php?id=10204575458536944" target="_blank"><img src='//graph.facebook.com/10204575458536944/picture?type=square'></a>

//           <a href="//www.facebook.com/profile.php?id=10205042963419315" target="_blank"><img src='//graph.facebook.com/10205042963419315/picture?type=square'></a>

//           <a href="//www.facebook.com/profile.php?id=10153604347642419" target="_blank"><img src='//graph.facebook.com/10153604347642419/picture?type=square'></a>

//           <a href="//www.facebook.com/profile.php?id=1004183333009859" target="_blank"><img src='//graph.facebook.com/1004183333009859/picture?type=square'></a>

//           <a href="//www.facebook.com/profile.php?id=10155985405495268" target="_blank"><img src='//graph.facebook.com/10155985405495268/picture?type=square'></a>

//           <a href="//www.facebook.com/profile.php?id=133911983700425" target="_blank"><img src='//graph.facebook.com/133911983700425/picture?type=square'></a>

//                                                               <a href="//www.facebook.com/profile.php?id=10103408223784129" target="_blank"><img src='//graph.facebook.com/10103408223784129/picture?type=square'></a>
//           <a href="//www.facebook.com/profile.php?id=10157307894050722" target="_blank"><img src='//graph.facebook.com/10157307894050722/picture?type=square'></a>

//           <a href="//www.facebook.com/profile.php?id=1116402465162141" target="_blank"><img src='//graph.facebook.com/1116402465162141/picture?type=square'></a>

//           <a href="//www.facebook.com/profile.php?id=10207850750772112" target="_blank"><img src='//graph.facebook.com/10207850750772112/picture?type=square'></a>

//           <a href="//www.facebook.com/profile.php?id=1236394166418868" target="_blank"><img src='//graph.facebook.com/1236394166418868/picture?type=square'></a>

//           <a href="//www.facebook.com/profile.php?id=1177909525628367" target="_blank"><img src='//graph.facebook.com/1177909525628367/picture?type=square'></a>

//           <a href="//www.facebook.com/profile.php?id=10211092415817034" target="_blank"><img src='//graph.facebook.com/10211092415817034/picture?type=square'></a>

//           <a href="//www.facebook.com/profile.php?id=743572439140168" target="_blank"><img src='//graph.facebook.com/743572439140168/picture?type=square'></a>

//           <a href="//www.facebook.com/profile.php?id=1258088407613600" target="_blank"><img src='//graph.facebook.com/1258088407613600/picture?type=square'></a>

//           <a href="//www.facebook.com/profile.php?id=10154950051640970" target="_blank"><img src='//graph.facebook.com/10154950051640970/picture?type=square'></a>

//           <a href="//www.facebook.com/profile.php?id=10102037473458882" target="_blank"><img src='//graph.facebook.com/10102037473458882/picture?type=square'></a>

//       </div>

//   </section>
// </aside>

// <script type="text/javascript">

//     BIT.EmailSignupView = new BIT.Views.EmailSignup({
//       el: $('.track-by-email-container'),
//       artistName: "Ja Rule",
//       eventTracker: BIT.GA.EventTracker,
//       animateNotice: true
//     }).render();

//   BIT.TrackArtist = new BIT.Views.TrackArtist({
//     el: $('body'),
//     permissions: "email,user_likes,user_location,user_actions.music",
//     model: new BIT.Models.Artist({"id":385,"name":"Ja Rule"}),
//     isFacebook: false,
//     trigger: null
//   }).render();
// </script>

//   <div class="side-ad">
//     <script>
//   cf_page_artist = "Ja Rule";
//   cf_page_song = "";
//   cf_adunit_id = "39384372";
// </script>
// <script src="//srv.clickfuse.com/showads/showad.js"></script>

//   </div>
// </div>
//           <div class="ten columns omega" id="main">
//           <section class="artist-container" itemscope itemtype="http://schema.org/MusicGroup">
//   <header class="headline">
//     <div class="top-ad">
//       <script>
//   cf_page_artist = "Ja Rule";
//   cf_page_song = "";
//   cf_adunit_id = "39384370";
// </script>
// <script src="//srv.clickfuse.com/showads/showad.js"></script>

//     </div>
//     <h1 itemprop='name'>
//       <div>Ja Rule</div>

//         <div class="subheading">Tour Dates 2017</div>

//     </h1>
//     <h3 class="on-tour subtitle">On Tour</h3> | <h3 class="upcoming-events-count subtitle">8 Upcoming Tour Dates</h3>
//   </header>

//   <section class="events-container">

// <div class="events">
//   <div class="tabs"><h2 class="active">Upcoming Dates</h2> | <a href="/JaRule/past_events">Past Dates</a></div>

//   <div class="events-table">

//       <table>
//         <tr>

//           <th class="date"><span>Date</span></th>
//           <th class="venue"><span>Venue</span></th>
//           <th class="location"><span>Location</span></th>
//           <th class="more"></th>
//         </tr>

//           <tr itemscope itemtype='http://schema.org/MusicEvent' class="microformats" data-event-link="http://bandsintown.com/event/15212951-ja-rule-st-petersburg-vinoy-park-2017?artist=Ja+Rule&came_from=174">

//             <td class="date">
//               <meta content="2017-11-04" itemprop="startDate" />
//               <a href="/event/15212951-ja-rule-st-petersburg-vinoy-park-2017?artist=Ja+Rule&amp;came_from=174">Nov 04</a>
//             </td>
//             <td class='venue'>
//               <a href="/event/15212951-ja-rule-st-petersburg-vinoy-park-2017?artist=Ja+Rule&amp;came_from=174" itemprop="url"><span itemprop="name">Vinoy Park</span></a>
//             </td>
//             <td class='location' itemscope itemprop="location" itemtype="http://schema.org/Place">
//               <span itemprop="address" itemscope itemtype="http://schema.org/PostalAddress">
//               <a href="/event/15212951-ja-rule-st-petersburg-vinoy-park-2017?artist=Ja+Rule&amp;came_from=174"><span itemprop="addressLocality">St Petersburg</span>, <span itemprop="addressRegion">FL</span></a>
//               </span>
//               <span class="venue-name" itemprop="name" style="display:none">
//                               Vinoy Park
//               </span>
//             </td>
//             <td class='more' itemscope itemprop="offers" itemtype="http://schema.org/Offer" data-event-id="15212951" >
//               <span itemprop="price"></span>

//                 <link href="http://schema.org/InStock" itemprop="availability" />
//                 <a href="/event/15212951-ja-rule-st-petersburg-vinoy-park-2017?artist=Ja+Rule&amp;came_from=193" class="tickets-and-more button teal" data-buy-tix="http://bandsintown.com/event/15212951-ja-rule-st-petersburg-vinoy-park-2017/buy_tickets?affil_code=bandsintown_artist&amp;artist=Ja+Rule&amp;came_from=193" itemprop="url">Tickets &amp; More</a>

//             </td>

//           </tr>

//           <tr itemscope itemtype='http://schema.org/MusicEvent' class="microformats" data-event-link="http://bandsintown.com/event/15553970-ja-rule-seattle-showbox-sodo-2017?artist=Ja+Rule&came_from=174">

//             <td class="date">
//               <meta content="2017-11-10" itemprop="startDate" />
//               <a href="/event/15553970-ja-rule-seattle-showbox-sodo-2017?artist=Ja+Rule&amp;came_from=174">Nov 10</a>
//             </td>
//             <td class='venue'>
//               <a href="/event/15553970-ja-rule-seattle-showbox-sodo-2017?artist=Ja+Rule&amp;came_from=174" itemprop="url"><span itemprop="name">Showbox SoDo</span></a>
//             </td>
//             <td class='location' itemscope itemprop="location" itemtype="http://schema.org/Place">
//               <span itemprop="address" itemscope itemtype="http://schema.org/PostalAddress">
//               <a href="/event/15553970-ja-rule-seattle-showbox-sodo-2017?artist=Ja+Rule&amp;came_from=174"><span itemprop="addressLocality">Seattle</span>, <span itemprop="addressRegion">WA</span></a>
//               </span>
//               <span class="venue-name" itemprop="name" style="display:none">
//                 Showbox SoDo
//               </span>
//             </td>
//             <td class='more' itemscope itemprop="offers" itemtype="http://schema.org/Offer" data-event-id="15553970" >
//               <span itemprop="price"></span>

//                 <link href="http://schema.org/InStock" itemprop="availability" />
//                 <a href="/event/15553970-ja-rule-seattle-showbox-sodo-2017?artist=Ja+Rule&amp;came_from=193" class="tickets-and-more button teal" data-buy-tix="http://bandsintown.com/event/15553970-ja-rule-seattle-showbox-sodo-2017/buy_tickets?affil_code=bandsintown_artist&amp;artist=Ja+Rule&amp;came_from=193" itemprop="url">Tickets &amp; More</a>

//             </td>

//           </tr>

//           <tr itemscope itemtype='http://schema.org/MusicEvent' class="microformats" data-event-link="http://bandsintown.com/event/15426113-ja-rule-indio-fantasy-springs-resort-casino-2017?artist=Ja+Rule&came_from=174">

//             <td class="date">
//               <meta content="2017-11-17" itemprop="startDate" />
//               <a href="/event/15426113-ja-rule-indio-fantasy-springs-resort-casino-2017?artist=Ja+Rule&amp;came_from=174">Nov 17</a>
//             </td>
//             <td class='venue'>
//               <a href="/event/15426113-ja-rule-indio-fantasy-springs-resort-casino-2017?artist=Ja+Rule&amp;came_from=174" itemprop="url"><span itemprop="name">Fantasy Springs Resort Casino</span></a>
//             </td>
//             <td class='location' itemscope itemprop="location" itemtype="http://schema.org/Place">
//               <span itemprop="address" itemscope itemtype="http://schema.org/PostalAddress">
//               <a href="/event/15426113-ja-rule-indio-fantasy-springs-resort-casino-2017?artist=Ja+Rule&amp;came_from=174"><span itemprop="addressLocality">Indio</span>, <span itemprop="addressRegion">CA</span></a>
//               </span>
//               <span class="venue-name" itemprop="name" style="display:none">
//                 Fantasy Springs Resort Casino
//               </span>
//             </td>
//             <td class='more' itemscope itemprop="offers" itemtype="http://schema.org/Offer" data-event-id="15426113" >
//                       <span itemprop="price"></span>

//                 <link href="http://schema.org/InStock" itemprop="availability" />
//                 <a href="/event/15426113-ja-rule-indio-fantasy-springs-resort-casino-2017?artist=Ja+Rule&amp;came_from=193" class="tickets-and-more button teal" itemprop="url">Tickets &amp; More</a>

//             </td>

//           </tr>

//           <tr itemscope itemtype='http://schema.org/MusicEvent' class="microformats" data-event-link="http://bandsintown.com/event/15355377-ja-rule-honolulu-neal-s-blaisdell-concert-hall-2017?artist=Ja+Rule&came_from=174">

//             <td class="date">
//               <meta content="2017-11-18" itemprop="startDate" />
//               <a href="/event/15355377-ja-rule-honolulu-neal-s-blaisdell-concert-hall-2017?artist=Ja+Rule&amp;came_from=174">Nov 18</a>
//             </td>
//             <td class='venue'>
//               <a href="/event/15355377-ja-rule-honolulu-neal-s-blaisdell-concert-hall-2017?artist=Ja+Rule&amp;came_from=174" itemprop="url"><span itemprop="name">Neal S Blaisdell Concert Hall</span></a>
//             </td>
//             <td class='location' itemscope itemprop="location" itemtype="http://schema.org/Place">
//               <span itemprop="address" itemscope itemtype="http://schema.org/PostalAddress">
//               <a href="/event/15355377-ja-rule-honolulu-neal-s-blaisdell-concert-hall-2017?artist=Ja+Rule&amp;came_from=174"><span itemprop="addressLocality">Honolulu</span>, <span itemprop="addressRegion">HI</span></a>
//               </span>
//               <span class="venue-name" itemprop="name" style="display:none">
//                 Neal S Blaisdell Concert Hall
//               </span>
//             </td>
//             <td class='more' itemscope itemprop="offers" itemtype="http://schema.org/Offer" data-event-id="15355377" >
//               <span itemprop="price"></span>

//                 <link href="http://schema.org/InStock" itemprop="availability" />
//                 <a href="/event/15355377-ja-rule-honolulu-neal-s-blaisdell-concert-hall-2017?artist=Ja+Rule&amp;came_from=193" class="tickets-and-more button teal" data-buy-tix="http://bandsintown.com/event/15355377-ja-rule-honolulu-neal-s-blaisdell-concert-hall-2017/buy_tickets?affil_code=bandsintown_artist&amp;artist=Ja+Rule&amp;came_from=193" itemprop="url">Tickets &amp; More</a>

//             </td>

//           </tr>

//           <tr itemscope itemtype='http://schema.org/MusicEvent' class="microformats" data-event-link="http://bandsintown.com/event/15612958-ja-rule-indianapolis-egyptian-room-at-old-national-centre-2017?artist=Ja+Rule&came_from=174">

//             <td class="date">
//               <meta content="2017-11-25" itemprop="startDate" />
//               <a href="/event/15612958-ja-rule-indianapolis-egyptian-room-at-old-national-centre-2017?artist=Ja+Rule&amp;came_from=174">Nov 25</a>
//             </td>
//             <td class='venue'>
//               <a href="/event/15612958-ja-rule-indianapolis-egyptian-room-at-old-national-centre-2017?artist=Ja+Rule&amp;came_from=174" itemprop="url"><span itemprop="name">Egyptian Room at Old National Centre</span></a>
//             </td>
//             <td class='location' itemscope itemprop="location" itemtype="http://schema.org/Place">
//               <span itemprop="address" itemscope itemtype="http://schema.org/PostalAddress">
//               <a href="/event/15612958-ja-rule-indianapolis-egyptian-room-at-old-national-centre-2017?artist=Ja+Rule&amp;came_from=174"><span itemprop="addressLocality">Indianapolis</span>, <span itemprop="addressRegion">IN</span></a>
//               </span>
//               <span class="venue-name" itemprop="name" style="display:none">
//                 Egyptian Room at Old National Centre
//               </span>
//             </td>
//             <td class='more' itemscope itemprop="offers" itemtype="http://schema.org/Offer" data-event-id="15612958" >
//               <span itemprop="price"></span>

//                 <link href="http://schema.org/InStock" itemprop="availability" />
//                 <a href="/event/15612958-ja-rule-indianapolis-egyptian-room-at-old-national-centre-2017?artist=Ja+Rule&amp;came_from=193" class="tickets-and-more button teal" data-buy-tix="http://bandsintown.com/event/15612958-ja-rule-indianapolis-egyptian-room-at-old-national-centre-2017/buy_tickets?affil_code=bandsintown_artist&amp;artist=Ja+Rule&amp;came_from=193" itemprop="url">Tickets &amp; More</a>

//             </td>

//                                                                                         </tr>
//                     <tr itemscope itemtype='http://schema.org/MusicEvent' class="microformats" data-event-link="http://bandsintown.com/event/15592660-ja-rule-san-antonio-aztec-theatre-2017?artist=Ja+Rule&came_from=174">

//             <td class="date">
//               <meta content="2017-12-02" itemprop="startDate" />
//               <a href="/event/15592660-ja-rule-san-antonio-aztec-theatre-2017?artist=Ja+Rule&amp;came_from=174">Dec 02</a>
//             </td>
//             <td class='venue'>
//               <a href="/event/15592660-ja-rule-san-antonio-aztec-theatre-2017?artist=Ja+Rule&amp;came_from=174" itemprop="url"><span itemprop="name">Aztec Theatre</span></a>
//             </td>
//             <td class='location' itemscope itemprop="location" itemtype="http://schema.org/Place">
//               <span itemprop="address" itemscope itemtype="http://schema.org/PostalAddress">
//               <a href="/event/15592660-ja-rule-san-antonio-aztec-theatre-2017?artist=Ja+Rule&amp;came_from=174"><span itemprop="addressLocality">San Antonio</span>, <span itemprop="addressRegion">TX</span></a>
//               </span>
//               <span class="venue-name" itemprop="name" style="display:none">
//                 Aztec Theatre
//               </span>
//             </td>
//             <td class='more' itemscope itemprop="offers" itemtype="http://schema.org/Offer" data-event-id="15592660" >
//               <span itemprop="price"></span>

//                 <link href="http://schema.org/InStock" itemprop="availability" />
//                 <a href="/event/15592660-ja-rule-san-antonio-aztec-theatre-2017?artist=Ja+Rule&amp;came_from=193" class="tickets-and-more button teal" data-buy-tix="http://bandsintown.com/event/15592660-ja-rule-san-antonio-aztec-theatre-2017/buy_tickets?affil_code=bandsintown_artist&amp;artist=Ja+Rule&amp;came_from=193" itemprop="url">Tickets &amp; More</a>

//             </td>

//           </tr>

//           <tr itemscope itemtype='http://schema.org/MusicEvent' class="microformats" data-event-link="http://bandsintown.com/event/15647928-ja-rule-memphis-cannon-center-for-the-performing-arts-2017?artist=Ja+Rule&came_from=174">

//             <td class="date">
//               <meta content="2017-12-08" itemprop="startDate" />
//               <a href="/event/15647928-ja-rule-memphis-cannon-center-for-the-performing-arts-2017?artist=Ja+Rule&amp;came_from=174">Dec 08</a>
//             </td>
//             <td class='venue'>
//               <a href="/event/15647928-ja-rule-memphis-cannon-center-for-the-performing-arts-2017?artist=Ja+Rule&amp;came_from=174" itemprop="url"><span itemprop="name">Cannon Center for the Performing Arts</span></a>
//             </td>
//             <td class='location' itemscope itemprop="location" itemtype="http://schema.org/Place">
//               <span itemprop="address" itemscope itemtype="http://schema.org/PostalAddress">
//               <a href="/event/15647928-ja-rule-memphis-cannon-center-for-the-performing-arts-2017?artist=Ja+Rule&amp;came_from=174"><span itemprop="addressLocality">Memphis</span>, <span itemprop="addressRegion">TN</span></a>
//               </span>
//               <span class="venue-name" itemprop="name" style="display:none">
//                 Cannon Center for the Performing Arts
//               </span>
//             </td>
//             <td class='more' itemscope itemprop="offers" itemtype="http://schema.org/Offer" data-event-id="15647928" >
//               <span itemprop="price"></span>

//                 <link href="http://schema.org/InStock" itemprop="availability" />
//                 <a href="/event/15647928-ja-rule-memphis-cannon-center-for-the-performing-arts-2017?artist=Ja+Rule&amp;came_from=193" class="tickets-and-more button teal" data-buy-tix="http://bandsintown.com/event/15647928-ja-rule-memphis-cannon-center-for-the-performing-arts-2017/buy_tickets?affil_code=bandsintown_artist&amp;artist=Ja+Rule&amp;came_from=193" itemprop="url">Tickets &amp; More</a>

//             </td>

//           </tr>

//           <tr itemscope itemtype='http://schema.org/MusicEvent' class="microformats" data-event-link="http://bandsintown.com/event/15682875-ja-rule-baltimore-baltimore-soundstage-2018?artist=Ja+Rule&came_from=174">
//             <td class="date">
//               <meta content="2018-01-10" itemprop="startDate" />
//               <a href="/event/15682875-ja-rule-baltimore-baltimore-soundstage-2018?artist=Ja+Rule&amp;came_from=174">Jan 10, 2018</a>
//             </td>
//             <td class='venue'>
//               <a href="/event/15682875-ja-rule-baltimore-baltimore-soundstage-2018?artist=Ja+Rule&amp;came_from=174" itemprop="url"><span itemprop="name">Baltimore Soundstage</span></a>
//             </td>
//             <td class='location' itemscope itemprop="location" itemtype="http://schema.org/Place">
//               <span itemprop="address" itemscope itemtype="http://schema.org/PostalAddress">
//               <a href="/event/15682875-ja-rule-baltimore-baltimore-soundstage-2018?artist=Ja+Rule&amp;came_from=174"><span itemprop="addressLocality">Baltimore</span>, <span itemprop="addressRegion">MD</span></a>
//               </span>
//               <span class="venue-name" itemprop="name" style="display:none">
//                 Baltimore Soundstage
//               </span>
//             </td>
//             <td class='more' itemscope itemprop="offers" itemtype="http://schema.org/Offer" data-event-id="15682875" >
//               <span itemprop="price"></span>

//                 <link href="http://schema.org/InStock" itemprop="availability" />
//                 <a href="/event/15682875-ja-rule-baltimore-baltimore-soundstage-2018?artist=Ja+Rule&amp;came_from=193" class="tickets-and-more button teal" data-buy-tix="http://bandsintown.com/event/15682875-ja-rule-baltimore-baltimore-soundstage-2018/buy_tickets?affil_code=bandsintown_artist&amp;artist=Ja+Rule&amp;came_from=193" itemprop="url">Tickets &amp; More</a>

//             </td>

//           </tr>

//       </table>

//   </div>
// </div>

//   </section>

// <section class="content-container">
//   <header><h2>Similar Artists On Tour</h2></header>
//   <div><a href="/FatJoe">Fat Joe</a><span>&#183;</span><a href="/Chingy">Chingy</a><span>&#183;</span><a href="/Nelly">Nelly</a><span>&#183;</span><a href="/Mase">Mase</a><span>&#183;</span><a href="/DMX">DMX</a><span>&#183;</span><a href="/Juvenile">Juvenile</a><span>&#183;</span><a href="/Ashanti">Ashanti</a><span>&#183;</span><a href="/G-Unit">G-Unit</a><span>&#183;</span><a href="/112">112</a><span>&#183;</span><a href="/Sisq%C3%B3">Sisqó</a><span>&#183;</span><a href="/Fabolous">Fabolous</a><span>&#183;</span><a href="/Twista">Twista</a><span>&#183;</span><a href="/Ludacris">Ludacris</a><span>&#183;</span><a href="/50Cent">50 Cent</a><span>&#183;</span><a href="/PuffDaddy">Puff Daddy</a><span>&#183;</span><a href="/Ginuwine">Ginuwine</a><span>&#183;</span><a href="/T-Pain">T-Pain</a><span>&#183;</span><a href="/Cassidy">Cassidy</a><span>&#183;</span><a href="/JaggedEdge">Jagged Edge</a><span>&#183;</span><a href="/BustaRhymes">Busta Rhymes</a><span>&#183;</span><a href="/Lloyd">Lloyd</a><span>&#183;</span><a href="/TheGame">The Game</a><span>&#183;</span><a href="/YingYangTwins">Ying Yang Twins</a><span>&#183;</span><a href="/R.Kelly">R. Kelly</a><span>&#183;</span><a href="/JimJones">Jim Jones</a></div>
// </section>

//                                                                               </section>

//                                                                               <script type="application/ld+json">
//   [{"@context":"http://schema.org","@type":"MusicEvent","name":"Ja Rule @ Vinoy Park in St Petersburg, FL","image":"http://www.bandsintown.com/JaRule/photo/medium.jpg","startDate":"2017-11-04T14:00:00","url":"http://www.bandsintown.com/event/15212951?artist=Ja%20Rule\u0026came_from=209\u0026affil_code=google","location":{"@type":"Place","name":"Vinoy Park","address":{"@type":"PostalAddress","addressCountry":"United States","addressLocality":"St Petersburg","addressRegion":"FL","postalCode":"33701-2620","streetAddress":"501 5th Ave NE"},"geo":{"@type":"GeoCoordinates","latitude":27.777617,"longitude":-82.62844}},"offers":[{"@type":"Offer","url":"http://www.bandsintown.com/event/15212951/buy_tickets?artist=Ja%20Rule\u0026came_from=209\u0026affil_code=google","sameAs":"http://www.bandsintown.com/event/15212951/buy_tickets?artist=Ja%20Rule\u0026came_from=209\u0026affil_code=robots","availability":"InStock","category":"primary"}],"performer":[{"@type":"MusicGroup","name":"Ja Rule","sameAs":["http://www.bandsintown.com/JaRule?came_from=209","http://www.theincrecords.com"]}]},{"@context":"http://schema.org","@type":"MusicEvent","name":"Ja Rule @ Showbox SoDo in Seattle, WA","image":"http://www.bandsintown.com/JaRule/photo/medium.jpg","startDate":"2017-11-10T21:00:00","url":"http://www.bandsintown.com/event/15553970?artist=Ja%20Rule\u0026came_from=209\u0026affil_code=google","location":{"@type":"Place","name":"Showbox SoDo","address":{"@type":"PostalAddress","addressCountry":"United States","addressLocality":"Seattle","addressRegion":"WA","postalCode":"98134-1404","streetAddress":"1700 1st Avenue South"},"geo":{"@type":"GeoCoordinates","latitude":47.587978,"longitude":-122.333713}},"offers":[{"@type":"Offer","url":"http://www.bandsintown.com/event/15553970/buy_tickets?artist=Ja%20Rule\u0026came_from=209\u0026affil_code=google","sameAs":"http://www.bandsintown.com/event/15553970/buy_tickets?artist=Ja%20Rule\u0026came_from=209\u0026affil_code=robots","availability":"InStock","category":"primary"}],"performer":[{"@type":"MusicGroup","name":"Ja Rule","sameAs":["http://www.bandsintown.com/JaRule?came_from=209","http://www.theincrecords.com"]}]},{"@context":"http://schema.org","@type":"MusicEvent","name":"Ja Rule @ Fantasy Springs Resort Casino in Indio, CA","image":"http://www.bandsintown.com/JaRule/photo/medium.jpg","startDate":"2017-11-17T20:00:00","url":"http://www.bandsintown.com/event/15426113?artist=Ja%20Rule\u0026came_from=209\u0026affil_code=google","location":{"@type":"Place","name":"Fantasy Springs Resort Casino","address":{"@type":"PostalAddress","addressCountry":"United States","addressLocality":"Indio","addressRegion":"CA","postalCode":"92203","streetAddress":"84-245 Indio Springs Dr"},"geo":{"@type":"GeoCoordinates","latitude":33.720906,"longitude":-116.193303}},"offers":[{"@type":"Offer","url":"http://www.bandsintown.com/event/15426113/buy_tickets?artist=Ja%20Rule\u0026came_from=209\u0026affil_code=google","sameAs":"http://www.bandsintown.com/event/15426113/buy_tickets?artist=Ja%20Rule\u0026came_from=209\u0026affil_code=robots","availability":"SoldOut","category":"primary"}],"performer":[{"@type":"MusicGroup","name":"Ja Rule","sameAs":["http://www.bandsintown.com/JaRule?came_from=209","http://www.theincrecords.com"]}]},{"@context":"http://schema.org","@type":"MusicEvent","name":"Ja Rule @ Neal S Blaisdell Concert Hall in Honolulu, HI","image":"http://www.bandsintown.com/JaRule/photo/medium.jpg","startDate":"2017-11-18T19:00:00","url":"http://www.bandsintown.com/event/15355377?artist=Ja%20Rule\u0026came_from=209\u0026affil_code=google","location":{"@type":"Place","name":"Neal S Blaisdell Concert Hall","address":{"@type":"PostalAddress","addressCountry":"United States","addressLocality":"Honolulu","addressRegion":"HI","postalCode":"96814","streetAddress":"777 Ward Avenue"},"geo":{"@type":"GeoCoordinates","latitude":21.2995017,"longitude":-157.8506904}},"offers":[{"@type":"Offer","url":"http://www.bandsintown.com/event/15355377/buy_tickets?artist=Ja%20Rule\u0026came_from=209\u0026affil_code=google","sameAs":"http://www.bandsintown.com/event/15355377/buy_tickets?artist=Ja%20Rule\u0026came_from=209\u0026affil_code=robots","availability":"InStock","category":"primary"}],"performer":[{"@type":"MusicGroup","name":"Ja Rule","sameAs":["http://www.bandsintown.com/JaRule?came_from=209","http://www.theincrecords.com"]}]},{"@context":"http://schema.org","@type":"MusicEvent","name":"Ja Rule @ Egyptian Room at Old National Centre in Indianapolis, IN","image":"http://www.bandsintown.com/JaRule/photo/medium.jpg","startDate":"2017-11-25T20:00:00","url":"http://www.bandsintown.com/event/15612958?artist=Ja%20Rule\u0026came_from=209\u0026affil_code=google","location":{"@type":"Place","name":"Egyptian Room at Old National Centre","address":{"@type":"PostalAddress","addressCountry":"United States","addressLocality":"Indianapolis","addressRegion":"IN","postalCode":"46204","streetAddress":"502 N New Jersey"},"geo":{"@type":"GeoCoordinates","latitude":39.774645,"longitude":-86.151498}},"offers":[{"@type":"Offer","url":"http://www.bandsintown.com/event/15612958/buy_tickets?artist=Ja%20Rule\u0026came_from=209\u0026affil_code=google","sameAs":"http://www.bandsintown.com/event/15612958/buy_tickets?artist=Ja%20Rule\u0026came_from=209\u0026affil_code=robots","availability":"InStock","category":"primary"}],"performer":[{"@type":"MusicGroup","name":"Ja Rule","sameAs":["http://www.bandsintown.com/JaRule?came_from=209","http://www.theincrecords.com"]}]},{"@context":"http://schema.org","@type":"MusicEvent","name":"Ja Rule @ Aztec Theatre in San Antonio, TX","image":"http://www.bandsintown.com/JaRule/photo/medium.jpg","startDate":"2017-12-02T19:00:00","url":"http://www.bandsintown.com/event/15592660?artist=Ja%20Rule\u0026came_from=209\u0026affil_code=google","location":{"@type":"Place","name":"Aztec Theatre","address":{"@type":"PostalAddress","addressCountry":"United States","addressLocality":"San Antonio","addressRegion":"TX","postalCode":"78205","streetAddress":"201 E Commerce St"},"geo":{"@type":"GeoCoordinates","latitude":29.4245551,"longitude":-98.4912944}},"offers":[{"@type":"Offer","url":"http://www.bandsintown.com/event/15592660/buy_tickets?artist=Ja%20Rule\u0026came_from=209\u0026affil_code=google","sameAs":"http://www.bandsintown.com/event/15592660/buy_tickets?artist=Ja%20Rule\u0026came_from=209\u0026affil_code=robots","availability":"InStock","category":"primary"}],"performer":[{"@type":"MusicGroup","name":"Ja Rule","sameAs":["http://www.bandsintown.com/JaRule?came_from=209","http://www.theincrecords.com"]}]},{"@context":"http://schema.org","@type":"MusicEvent","name":"Ja Rule @ Cannon Center for the Performing Arts in Memphis, TN","image":"http://www.bandsintown.com/JaRule/photo/medium.jpg","startDate":"2017-12-08T21:00:00","url":"http://www.bandsintown.com/event/15647928?artist=Ja%20Rule\u0026came_from=209\u0026affil_code=google","location":{"@type":"Place","name":"Cannon Center for the Performing Arts","address":{"@type":"PostalAddress","addressCountry":"United States","addressLocality":"Memphis","addressRegion":"TN","postalCode":"38103","streetAddress":"255 North Main Street"},"geo":{"@type":"GeoCoordinates","latitude":35.1517949,"longitude":-90.0501709}},"offers":[{"@type":"Offer","url":"http://www.bandsintown.com/event/15647928/buy_tickets?artist=Ja%20Rule\u0026came_from=209\u0026affil_code=google","sameAs":"http://www.bandsintown.com/event/15647928/buy_tickets?artist=Ja%20Rule\u0026came_from=209\u0026affil_code=robots","availability":"InStock","category":"primary"}],"performer":[{"@type":"MusicGroup","name":"Ja Rule","sameAs":["http://www.bandsintown.com/JaRule?came_from=209","http://www.theincrecords.com"]}]},{"@context":"http://schema.org","@type":"MusicEvent","name":"Ja Rule @ Baltimore Soundstage in Baltimore, MD","image":"http://www.bandsintown.com/JaRule/photo/medium.jpg","startDate":"2018-01-10T20:00:00","url":"http://www.bandsintown.com/event/15682875?artist=Ja%20Rule\u0026came_from=209\u0026affil_code=google","location":{"@type":"Place","name":"Baltimore Soundstage","address":{"@type":"PostalAddress","addressCountry":"United States","addressLocality":"Baltimore","addressRegion":"MD","postalCode":"21202-4053","streetAddress":"124 Market Pl"},"geo":{"@type":"GeoCoordinates","latitude":39.287559,"longitude":-76.60685}},"offers":[{"@type":"Offer","url":"http://www.bandsintown.com/event/15682875/buy_tickets?artist=Ja%20Rule\u0026came_from=209\u0026affil_code=google","sameAs":"http://www.bandsintown.com/event/15682875/buy_tickets?artist=Ja%20Rule\u0026came_from=209\u0026affil_code=robots","availability":"InStock","category":"primary"}],"performer":[{"@type":"MusicGroup","name":"Ja Rule","sameAs":["http://www.bandsintown.com/JaRule?came_from=209","http://www.theincrecords.com"]}]}]
//                                                                               </script>

//   <a href="#track-artist-popup-content" class="popup-link" style="display: none">link</a>
// <div style="display: none">
//   <div id="track-artist-popup-content" class="track-artist-popup">
//     <div class="topbar"></div>

//     <div class="primary-text">Get notified whenever <strong class="artist-name">Ja Rule</strong> is in town</div>
//     <input type="email" class="email-signup" placeholder="Enter your email" autofocus>
//     <div class="error-container">
//       <div class="error-message message" style="display:none"></div>
//       <div class="email-loading"></div>
//     </div>
//     <input type="submit" class="email-signup-button" value="Start Tracking">
//     <div class="aux-text">or</div>
//     <a class="facebook-connect">Connect with Facebook</a>
//   </div>
// </div>

// <script type="text/javascript">

//   $(document).delegate("body", "facebook:ready", function() {
//     BIT.TrackArtistLightbox = new BIT.Views.TrackArtistLightbox({
//       el: $('body'),
//       trackArtistView: BIT.TrackArtist,
//       artistName: "Ja Rule",
//       trigger: null,
//       requiredPermissions: ["email","user_likes","user_location","user_actions.music"]
//     }).render();
//   });

//   $(document).delegate("body", "facebook:ready", function() {
//     BIT.TrackArtist.untrackIfTriggered();
//   });

//     jQuery(function($) {
//     BIT.Artist = new BIT.Models.Artist({"id":385,"name":"Ja Rule"});
//     BIT.Events = new BIT.Collections.EventList([{"id":15212951,"artist_event_id":19422195,"artist_id":385,"artist_name":"Ja Rule","bit_ticket_url":"http://www.bandsintown.com/event/15212951/buy_tickets?artist=Ja+Rule","datetime":"2017-11-04T14:00:00","facebook_event_id":null,"formatted_datetime":"Saturday, November 4, 2017 at 2:00pm","formatted_location":"St Petersburg, FL","page_id":null,"published":true,"rsvp_url":"http://www.bandsintown.com/event/15212951/facebook_rsvp?artist=Ja+Rule","rsvp_count":17,"ticket_type":"Tickets","ticket_url":"http://www.bandsintown.com/event/15212951/buy_tickets?artist=Ja+Rule","title":"Nov 4 - Ja Rule @ Vinoy Park - St Petersburg, FL","url":"http://www.bandsintown.com/event/15212951?artist=Ja+Rule","venue_id":282095,"venue_location":{"city":"St Petersburg","region":"Florida","country":"United States","latitude":27.777617,"longitude":-82.62844},"venue_name":"Vinoy Park","second_url":null,"second_url_type":null},{"id":15553970,"artist_event_id":19884012,"artist_id":385,"artist_name":"Ja Rule","bit_ticket_url":"http://www.bandsintown.com/event/15553970/buy_tickets?artist=Ja+Rule","datetime":"2017-11-10T21:00:00","facebook_event_id":null,"formatted_datetime":"Friday, November 10, 2017 at 9:00pm","formatted_location":"Seattle, WA","page_id":null,"published":true,"rsvp_url":"http://www.bandsintown.com/event/15553970/facebook_rsvp?artist=Ja+Rule","rsvp_count":21,"ticket_type":"Tickets","ticket_url":"http://www.bandsintown.com/event/15553970/buy_tickets?artist=Ja+Rule","title":"Nov 10 - Ja Rule @ Showbox SoDo - Seattle, WA","url":"http://www.bandsintown.com/event/15553970?artist=Ja+Rule","venue_id":283159,"venue_location":{"city":"Seattle","region":"Washington","country":"United States","latitude":47.587978,"longitude":-122.333713},"venue_name":"Showbox SoDo","second_url":null,"second_url_type":null},{"id":15426113,"artist_event_id":19708606,"artist_id":385,"artist_name":"Ja Rule","bit_ticket_url":null,"datetime":"2017-11-17T20:00:00","facebook_event_id":null,"formatted_datetime":"Friday, November 17, 2017 at 8:00pm","formatted_location":"Indio, CA","page_id":null,"published":true,"rsvp_url":"http://www.bandsintown.com/event/15426113/facebook_rsvp?artist=Ja+Rule","rsvp_count":1,"ticket_type":"Tickets","ticket_url":null,"title":"Nov 17 - Ja Rule @ Fantasy Springs Resort Casino - Indio, CA","url":"http://www.bandsintown.com/event/15426113?artist=Ja+Rule","venue_id":1286966,"venue_location":{"city":"Indio","region":"California","country":"United States","latitude":33.720906,"longitude":-116.193303},"venue_name":"Fantasy Springs Resort Casino","second_url":null,"second_url_type":null},{"id":15355377,"artist_event_id":19618246,"artist_id":385,"artist_name":"Ja Rule","bit_ticket_url":"http://www.bandsintown.com/event/15355377/buy_tickets?artist=Ja+Rule","datetime":"2017-11-18T19:00:00","facebook_event_id":null,"formatted_datetime":"Saturday, November 18, 2017 at 7:00pm","formatted_location":"Honolulu, HI","page_id":null,"published":true,"rsvp_url":"http://www.bandsintown.com/event/15355377/facebook_rsvp?artist=Ja+Rule","rsvp_count":14,"ticket_type":"Tickets","ticket_url":"http://www.bandsintown.com/event/15355377/buy_tickets?artist=Ja+Rule","title":"Nov 18 - Ja Rule @ Neal S Blaisdell Concert Hall - Honolulu, HI","url":"http://www.bandsintown.com/event/15355377?artist=Ja+Rule","venue_id":276061,"venue_location":{"city":"Honolulu","region":"Hawaii","country":"United States","latitude":21.2995017,"longitude":-157.8506904},"venue_name":"Neal S Blaisdell Concert Hall","second_url":null,"second_url_type":null},{"id":15612958,"artist_event_id":19975798,"artist_id":385,"artist_name":"Ja Rule","bit_ticket_url":"http://www.bandsintown.com/event/15612958/buy_tickets?artist=Ja+Rule","datetime":"2017-11-25T20:00:00","facebook_event_id":null,"formatted_datetime":"Saturday, November 25, 2017 at 8:00pm","formatted_location":"Indianapolis, IN","page_id":null,"published":true,"rsvp_url":"http://www.bandsintown.com/event/15612958/facebook_rsvp?artist=Ja+Rule","rsvp_count":3,"ticket_type":"Tickets","ticket_url":"http://www.bandsintown.com/event/15612958/buy_tickets?artist=Ja+Rule","title":"Nov 25 - Ja Rule @ Egyptian Room at Old National Centre - Indianapolis, IN","url":"http://www.bandsintown.com/event/15612958?artist=Ja+Rule","venue_id":3412822,"venue_location":{"city":"Indianapolis","region":"Indiana","country":"United States","latitude":39.774645,"longitude":-86.151498},"venue_name":"Egyptian Room at Old National Centre","second_url":null,"second_url_type":null},{"id":15592660,"artist_event_id":19939081,"artist_id":385,"artist_name":"Ja Rule","bit_ticket_url":"http://www.bandsintown.com/event/15592660/buy_tickets?artist=Ja+Rule","datetime":"2017-12-02T19:00:00","facebook_event_id":null,"formatted_datetime":"Saturday, December 2, 2017 at 7:00pm","formatted_location":"San Antonio, TX","page_id":null,"published":true,"rsvp_url":"http://www.bandsintown.com/event/15592660/facebook_rsvp?artist=Ja+Rule","rsvp_count":7,"ticket_type":"Tickets","ticket_url":"http://www.bandsintown.com/event/15592660/buy_tickets?artist=Ja+Rule","title":"Dec 2 - Ja Rule @ Aztec Theatre - San Antonio, TX","url":"http://www.bandsintown.com/event/15592660?artist=Ja+Rule","venue_id":736167,"venue_location":{"city":"San Antonio","region":"Texas","country":"United States","latitude":29.4245551,"longitude":-98.4912944},"venue_name":"Aztec Theatre","second_url":null,"second_url_type":null},{"id":15647928,"artist_event_id":20022164,"artist_id":385,"artist_name":"Ja Rule","bit_ticket_url":"http://www.bandsintown.com/event/15647928/buy_tickets?artist=Ja+Rule","datetime":"2017-12-08T21:00:00","facebook_event_id":null,"formatted_datetime":"Friday, December 8, 2017 at 9:00pm","formatted_location":"Memphis, TN","page_id":null,"published":true,"rsvp_url":"http://www.bandsintown.com/event/15647928/facebook_rsvp?artist=Ja+Rule","rsvp_count":1,"ticket_type":"Tickets","ticket_url":"http://www.bandsintown.com/event/15647928/buy_tickets?artist=Ja+Rule","title":"Dec 8 - Ja Rule @ Cannon Center for the Performing Arts - Memphis, TN","url":"http://www.bandsintown.com/event/15647928?artist=Ja+Rule","venue_id":688990,"venue_location":{"city":"Memphis","region":"Tennessee","country":"United States","latitude":35.1517949,"longitude":-90.0501709},"venue_name":"Cannon Center for the Performing Arts","second_url":null,"second_url_type":null},{"id":15682875,"artist_event_id":20068792,"artist_id":385,"artist_name":"Ja Rule","bit_ticket_url":"http://www.bandsintown.com/event/15682875/buy_tickets?artist=Ja+Rule","datetime":"2018-01-10T20:00:00","facebook_event_id":null,"formatted_datetime":"Wednesday, January 10, 2018 at 8:00pm","formatted_location":"Baltimore, MD","page_id":null,"published":true,"rsvp_url":"http://www.bandsintown.com/event/15682875/facebook_rsvp?artist=Ja+Rule","rsvp_count":5,"ticket_type":"Tickets","ticket_url":"http://www.bandsintown.com/event/15682875/buy_tickets?artist=Ja+Rule","title":"Jan 10 - Ja Rule @ Baltimore Soundstage - Baltimore, MD","url":"http://www.bandsintown.com/event/15682875?artist=Ja+Rule","venue_id":1151389,"venue_location":{"city":"Baltimore","region":"Maryland","country":"United States","latitude":39.287559,"longitude":-76.60685},"venue_name":"Baltimore Soundstage","second_url":null,"second_url_type":null}]);

//     BIT.LightboxView = new BIT.Views.MediaLightbox({
//       el: $('body'),
//       url: "http://www.bandsintown.com/JaRule"
//     }).render();

//     BIT.PreviewArtistView = new BIT.Views.PreviewArtist({ el: $('body'), ref: 'BIT - Artist' });

//     BIT.EventsTableView = new BIT.Views.EventsTable({
//       el:          $('body'),
//       permissions: "email,user_likes,user_location,user_actions.music",
//       model:       BIT.Artist,
//       collection:  BIT.Events
//     }).render();

//     BIT.ShareOnFacebook = new BIT.Views.ShareOnFacebook({
//       el: $('.fb-share-container')
//     });
//   });
//                                                                                   </script>
// <script>
//   /* BIT 1x1 */
//   cf_page_artist = "";
//   cf_page_song = "";
//   cf_adunit_id = "39384527";
//   cf_page_element = ".container";
//   cf_page_header = "header";
//   cf_page_footer = "footer";
//   cf_flex = true;
// </script>
// <script src="//srv.clickfuse.com/showads/showad.js"></script>

// </div>

//       </div>
//     </section>

//     <div class="push"></div><!-- .wrapper -->
//   </div><!-- .wrapper -->

//   <footer>

//    <div class="footer-nav">

//     <div id="footer-links">
//       <strong>APP LINKS</strong>
//       <ul>
//         <li><a href="/">Fans</a></li>
//         <li><a href="https://itunes.apple.com/us/app/bandsintown/id471394851?mt=8">iPhone</a></li>
//         <li><a href="http://play.google.com/store/apps/details?id=com.bandsintown">Android</a></li>
//         <li><a href="http://www.bandsintown.com/managerapp">Manager App</a></li>
//       </ul>
//     </div>
//     <div id="footer-help">
//       <strong>ABOUT</strong>
//       <ul>
//         <li><a href="http://corp.bandsintown.com">Corporate</a></li>
//         <li><a href="http://www.artists.bandsintown.com">Artists</a></li>
//         <li><a href="http://corp.bandsintown.com/bandsintown-amplified">Brands</a></li>
//         <li><a href="http://promoters.bandsintown.com">Promoters</a></li>
//         <li><a href="http://corp.bandsintown.com/careers">Careers</a></li>
//         <li><a href="http://corp.bandsintown.com/news">News + Press</a></li>
//         <li><a href="http://corp.bandsintown.com/contact">Contact Us</a></li>
//       </ul>
//     </div>
//     <div id="footer-blogs">
//       <strong>HELP</strong>
//       <ul>
//         <li><a href="http://concerts.help.bandsintown.com">Support</a></li>
//         <li><a href="http://corp.bandsintown.com/media-library">Media Library</a></li>
//         <li><a href="http://corp.bandsintown.com/terms">Terms of Use</a></li>
//         <li><a href="http://corp.bandsintown.com/privacy">Privacy Policy</a></li>
//         <li><a href="http://promoters.bandsintown.com/?utm_source=bandsintown&amp;utm_medium=bit_footer_link&amp;utm_campaign=Bandsintown%20footer">Promote Your Event</a></li>
//       </ul>
//     </div>
//     <div id="footer-developers">
//       <strong>DEVELOPERS</strong>
//       <ul>
//         <li><a href="/artist_platform/website_plugins">Widgets</a></li>
//         <li><a href="/api/overview">Developer API</a></li>
//       </ul>
//     </div>
//     <div id="footer-social-media">
//       <strong>SOCIAL MEDIA</strong>
//       <ul id="social-media-icons">
//         <li id="sprite-twitter"><a class="hide-text" href="http://www.twitter.com/bandsintown"></a></li>
//         <li id="sprite-facebook"><a class="hide-text" href="http://www.facebook.com/bandsintown"></a></li>
//         <li id="sprite-youtube"><a class="hide-text" href="http://www.youtube.com/bandsintown"></a></li>
//         <li id="sprite-instagram"><a class="hide-text" href="http://instagram.com/bandsintown"></a></li>
//         <li id="sprite-tumblr"><a class="hide-text" href="http://blog.bandsintown.com"></a></li>
//       </ul>
//     </div>

//   </div>
//   <div id="footer-signature">
//     <div id="footer-signature-text">&copy; 2017 Bandsintown, LLC</div>
//   </div>

//                                                                           </footer>
//       <img src='//dsy5wmnntou9c.cloudfront.net/clear.gif?property=user_log&param=%7B%22artist_id%22:385,%22source%22:%22Artist%20Page%22,%22logtype%22:%22impression%22,%22nonce%22:267213%7D'
//           alt='' width='1' height='1' border='0'
//           style='height:1px !important;width:1px !important;border-width:0 !important;margin-top:0 !important;margin-bottom:0
//                  !important;margin-right:0 !important;margin-left:0 !important;padding-top:0 !important;padding-bottom:0
//                  !important;padding-right:0 !important;padding-left:0 !important;'/>

//   <script>
//   (function(i,s,o,g,r,a,m){i['GoogleAnalyticsObject']=r;i[r]=i[r]||function(){
//     (i[r].q=i[r].q||[]).push(arguments)},i[r].l=1*new Date();a=s.createElement(o),
//     m=s.getElementsByTagName(o)[0];a.async=1;a.src=g;m.parentNode.insertBefore(a,m)
//   })(window,document,'script','//www.google-analytics.com/analytics.js','ga');

//     ga('create', 'UA-2044446-18', { 'userId': null });

//       ga('send', 'pageview', {"dimension1":"Artist Page","dimension6":"Ja Rule"});

// </script>

// <script type="text/javascript">

//   BIT.GA.EventTracker.category = "Artist Show Page";
//   BIT.GA.EventTracker.label = "Ja Rule"

//                                                                           </script>
// <!-- Facebook Pixel Code -->
// <script>
//   !function(f,b,e,v,n,t,s)
//   {if(f.fbq)return;n=f.fbq=function(){n.callMethod?
//     n.callMethod.apply(n,arguments):n.queue.push(arguments)};
//     if(!f._fbq)f._fbq=n;n.push=n;n.loaded=!0;n.version='2.0';
//     n.queue=[];t=b.createElement(e);t.async=!0;
//     t.src=v;s=b.getElementsByTagName(e)[0];
//     s.parentNode.insertBefore(t,s)}(window,document,'script',
//     'https://connect.facebook.net/en_US/fbevents.js');
//   fbq('init', '206520886459351');
//   fbq('track', 'PageView');
// </script>
// <noscript>
//   <img height="1" width="1"
//        src="https://www.facebook.com/tr?id=206520886459351&ev=PageView
// &noscript=1"/>
// </noscript>
// <!-- End Facebook Pixel Code -->

//       <script type="text/template" id="views-generic-dialog">
//   <div class="generic_dialog pop_dialog" style="display:none" id="{{ prefix }}-popup-container">
//     <div class="generic_dialog_popup wide-popup">
//       <div class="pop_container_advanced popup-border-outer y-offset" id="{{ prefix }}-popup-y-offset">
//         <div class="pop_container_advanced popup-border-inner"></div>
//         <div class="pop_content popup-content">
//           <h2 class="dialog_title"><span id="{{ prefix }}-popup-title">{{ title }}</span></h2>

//           <div class="dialog_content" id="{{ prefix }}-content"></div>
//         </div>
//       </div>
//     </div>
//   </div>
// </script>

// <script type="text/template" id="views-popup-message">
//   <div class="generic_dialog pop_dialog" style="display:none" id="{{prefix}}-message-container">
//     <div class="generic_dialog_popup popup-message">
//       <div class="pop_container_advanced popup-border-outer y-offset">
//         <div class="pop_container_advanced popup-border-inner"></div>
//         <div class="popup-message-container popup-content">
//           <i class="{{iconClass}}"></i>
//           <span class="text">{{text}}</span>
//         </div>
//       </div>
//     </div>
//   </div>
//                                                                           </script>
// <script type="text/template" id="views-dropdown">
//   <label class="dropdown">
//     <span class="dropdown-wrap">
//       <div class="dropdown-choices-wrap">
//         <ul class="dropdown-choices" style="display:none;">
//           <li class="nav prev">Previous</li>
//           <li class="nav next">Next</li>
//         </ul>
//       </div>
//       <a href="javascript:;" class="selected hover selector"><span>{{ selectorText }}</span></a>
//     </span>
//   </label>
// </script>

// <script type="text/template" id="views-dropdown-with-image">
//   <label class="dropdown">
//     <span class="dropdown-wrap">
//       <div class="dropdown-choices-wrap">
//         <ul class="dropdown-choices" style="display:none;">
//           <li class="nav prev">Previous</li>
//           <li class="nav next">Next</li>
//         </ul>
//       </div>
//       <a href="javascript:;" class="selected hover selector"><div class='icon {{ imageClass }}'></div><span>{{ selectorText }}</span></a>
//     </span>
//   </label>
// </script>

// <script type="text/template" id="views-arrow-selector">
// <span class="arrows">
//   <a class="arrow prev" href="javascript:;"></a>
//   <a class="arrow next" href="javascript:;"></a>
// </span>
// <span class="index"><span class="current"></span> {{ text }}</span>
//                                                                           </script>
// <script type="text/template" id="views-mention-tagger">
// <div class="say-something">Send a message to your friends...</div>
// <div class="user-message">
//   <form>
//     <div>
//       <div>
//         <div class="uiMentionsInput">
//           <div class="highlighter">
//             <div>
//               <span class="highlighterContent hilight"></span>
//             </div>
//           </div>
//           <div class="uiTypeahead composerTypeahead mentionsTypeahead">
//             <div class="wrap">
//               <input type="hidden" class="hiddenInput" />
//               <div class="innerWrap">
//                 <textarea class="textarea uiTextareaAutogrow input mentionsTextarea textInput" placeholder=""></textarea>
//               </div>
//             </div>
//           </div>
//         </div>
//       </div>
//     </div>
//     <div class="uiContextualLayerPositioner uiLayer matches" style="display:none;">
//       <div class="uiContextualLayer uiContextualLayerBelowLeft">
//         <div class="uiContextualLayerInner">
//           <div class="uiTypeaheadView uiContextualTypeaheadView">
//             <ul class="compact"></ul>
//           </div>
//         </div>
//       </div>
//     </div>
//   </form>
// </div>
// </script>

// <script type="text/template" id="views-friend-selector-friend">
// <input type="checkbox" class="checkbox" name="selected_friends[]" value="{{ id }}" />
// <a class="anchor" href="javascript:;" tabindex="-1">
//   <div class="friend-clearfix">
//     {{ imageTag }}
//     <div class="content">
//       <div class="content-inner spacer"></div>
//       <div class="content-inner">
//         <div class="text">{{ name }}</div>
//       </div>
//     </div>
//   </div>
// </a>
//                                                                           </script>
// <script type="text/template" id="views-invite-friends">
// <div class="event-title">Invite your friends to join Bandsintown!</div>
// <div class="invite-friends-container">
//   <span class="title"></span>
//   <div class="invite-friends">
//     <div class="friends-header clearfix">
//       <span class="left">Concerts are more fun with friends!</span>
//       <div class="search-container right">
//         <input type="text" class="search" placeholder="Add friends..." />
//         <ul class="search-results" style="display:none;"></ul>
//       </div>
//     </div>

//     <ul class="displayed-friends"></ul>
//   </div>

//   <div class="invite-friends-buttons clearfix">
//     <div class="invite-friends-disable left"></div>
//     <div class="right">
//       <span class="loading-small" style="display:none;"></span>
//       <button class="large" data-trigger="skip-invite-friends">Skip</button>
//       <button class="large teal invite-button" data-trigger="select-friends">Select Friends</button>
//       <button class="large teal invite-button" style="display:none;" data-trigger="invite-friends">Send Invites</button>
//     </div>
//   </div>
// </div>
// </script>

// <script type="text/template" id="views-invite-friends-dialog">
// <div class="dialog_body invite-friends-container">
//   <div class="popup-margin invite-friends">
//     <div class="friends-header clearfix">
//       <span class="left">Concerts are more fun with friends!</span>
//       <div class="search-container right">
//         <input type="text" class="search" placeholder="Add friends..." />
//         <ul class="search-results" style="display:none;"></ul>
//       </div>
//     </div>
//     <ul class="displayed-friends"></ul>
//   </div>
// </div>

// <div class="dialog_buttons invite-friends-buttons clearfix">
//   <div class="invite-friends-disable left"></div>
//   <div class="right">
//     <span class="loading-small" style="display:none;"></span>
//     <label class="uiButton uiButtonLarge uiButtonDefault" data-trigger="skip-invite-friends"><a href="javascript:;" class="uiButtonLink">Skip</a></label>
//     <label class="uiButton uiButtonLarge uiButtonConfirm" data-trigger="select-friends"><a href="javascript:;" class="uiButtonLink">Select Friends</a></label>
//     <label class="uiButton uiButtonLarge uiButtonConfirm" data-trigger="invite-friends" style="display:none;"><a href="javascript:;" class="uiButtonLink">Send Invites</a></label>
//   </div>
// </div>
//                                                                           </script>
// <script type="text/template" id="cancel-event-link">
//   <a href="javascript:;" id="cancel-event">Cancel this Event</a>
// </script>

// <script type="text/template" id="button-factory">
//   <label {{ attrs }}>
//     <input name="commit" type="submit" value="{{ text }}" />
//   </label>
// </script>

// <script type="text/template" id="generic-loader">
//   <span class="loading" style="display:none;" id="loader"></span>
// </script>

//  <script src="https://d38hmgjgf0kofx.cloudfront.net/javascripts/lib/placeholders.js?1386615472" type="text/javascript"></script>
// </body>
// </html>`;

// const $ = cheerio.load(data);
// const locations = $('tr.microformats');
// const venues = $('td.venue');
// const dates = $('td.date')
// console.log(locations.length)
// console.log(venues.length)
// console.log(dates.length)

// let performances = [];
// locations.map((index, element) => {
//   const date = $(element).find('meta').attr('content');
//   const venue = $(element).find('.venue span[itemprop="name"]').text();
//   const city = $(element)
//     .find('.location span[itemprop="addressLocality"]')
//     .text();
//   const state = $(element)
//     .find('.location span[itemprop="addressRegion"]')
//     .text();

//   performances = [...performances, {
//     date,
//     venue,
//     city,
//     state,
//   }];
// });

// console.log(performances);
