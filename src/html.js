import React from "react"
import PropTypes from "prop-types"

export default function HTML(props) {
  return (
    <html {...props.htmlAttributes}>
      <head>
        <meta charSet="utf-8" />
        <meta httpEquiv="x-ua-compatible" content="ie=edge" />
        <meta
          name="viewport"
          content="width=device-width, initial-scale=1, shrink-to-fit=no"
        />
        <link
          rel="shortcut icon"
          type="image/icon"
          href="resources/images/favicon.png"
        />
        <link href="resources/css/font-awesome.css" rel="stylesheet" />
        <link href="resources/css/bootstrap.css" rel="stylesheet" />
        <link
          rel="stylesheet"
          type="text/css"
          href="resources/css/animate.css"
        />
        <link href="resources/css/player.css" rel="stylesheet" />
        <link href="resources/css/bootstrap-formhelpers.css" rel="stylesheet" />
        <link rel="stylesheet" href="resources/css/chosen.css" />
        <link href="resources/css/style.css" rel="stylesheet" />
        <link
          href="https://fonts.googleapis.com/css?family=Oswald:200,300,400,500,600,700"
          rel="stylesheet"
        />
        <link
          href="https://fonts.googleapis.com/css?family=Open+Sans:300,300i,400,400i,600,600i,700,700i,800,800i"
          rel="stylesheet"
        />
        <link
          href="https://fonts.googleapis.com/css?family=Special+Elite"
          rel="stylesheet"
        />
        <script src="resources/js/jquery-3.3.1.slim.min.js">{}</script>
        {props.headComponents}
      </head>
      <body {...props.bodyAttributes}>
        {props.preBodyComponents}
        <noscript key="noscript" id="gatsby-noscript">
          This app works best with JavaScript enabled.
        </noscript>
        <div
          key={`body`}
          id="___gatsby"
          dangerouslySetInnerHTML={{ __html: props.body }}
        />
        {props.postBodyComponents}

        <script src="resources/js/popper.min.js">{}</script>
        <script src="resources/js/bootstrap.js">{}</script>
        <script src="resources/js/chosen.jquery.js">{}</script>
        <script src="resources/js/wow.js">{}</script>
        <script src="resources/js/html5media.min.js">{}</script>
        <script src="resources/js/player.js">{}</script>
        <script src="resources/js/youtube-embed.js">{}</script>
        <script src="resources/js/modernizr.custom.js">{}</script>
        <script src="resources/js/jquery.flexslider.min.js">{}</script>
        <script src="resources/js/imagesloaded.pkgd.min.js">{}</script>
        <script src="resources/js/masonry.pkgd.min.js">{}</script>
        <script src="resources/js/cbpGridGallery.js">{}</script>
        <script src="resources/js/bootstrap-formhelpers.js">{}</script>
        <script src="resources/js/magnify.js">{}</script>
        <script src="resources/js/custom.js">{}</script>
      </body>
    </html>
  )
}

HTML.propTypes = {
  htmlAttributes: PropTypes.object,
  headComponents: PropTypes.array,
  bodyAttributes: PropTypes.object,
  preBodyComponents: PropTypes.array,
  body: PropTypes.string,
  postBodyComponents: PropTypes.array,
}
