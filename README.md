# Kfahim Event

Arabic RTL event landing page for Ahmad Al Qathani.

## Design
Matches the visual system of [ramez961/khalik-fahem](https://github.com/ramez961/khalik-fahem): lime #b2cc3a, deep green #001c15, IBM Plex Sans Arabic, original logo and pattern.

The event layout adapts the reference's centered two-line headline, 850px white frame, dark green closing section, button styling, and mobile action bar. The framed hero presents event details. The mobile action hides while registration is visible so it does not cover the form.

## Run
Serve this directory with any static HTTP server. No build or dependencies required.

## Loading and accessibility

- IBM Plex Sans Arabic is served locally as WOFF2, with Arabic and Latin subsets for weights 400, 600, and 700. The bold Arabic face is preloaded; font licensing is in `assets/fonts/OFL.txt`.
- Typeform's live embed SDK loads when the form is within 200px of the viewport or a registration link is clicked. The existing live embed configuration is retained. A fixed-height container prevents the embed from moving surrounding content.
- The form has a loading message, an accessible Arabic iframe title, a timeout/error message, and a permanent direct registration link that also works without JavaScript.
- TikTok's page-view integration is retained; its external script is scheduled during browser idle time with a 1.5-second timeout.
- Keyboard skip navigation, visible focus, reduced motion, mobile touch targets, a favicon, and social sharing metadata are included.

The hosting provider should enable Brotli/gzip and appropriate cache headers. Hosting is configured outside this repository. No production Lighthouse score or Core Web Vitals result is claimed. Complete event dates and the production URL are needed before adding event structured data or canonical URLs.

## Existing integrations
- Typeform Live embed: 01M0PAF8QZKA5P0EGJCHREBKJT
- Direct registration fallback: https://form.typeform.com/to/y1BHy5oH
- TikTok page view: D9L4Q53C77U3RB5B3NTG

The event date, time and venue are preserved from kfahimevent.com; no year has been inferred. The Typeform's internal colors and questions are managed in Typeform.

## Deployment
Publish the repository root on the existing hosting provider. The production host is not configured in this repository; merging code alone may not update kfahimevent.com.

## Pending event details
The venue is Ritz-Carlton (city not supplied). At the owner's request, the previous August 26 date, 8 PM time and Typeform are retained temporarily until replacement details arrive. Confirm these before production release.
