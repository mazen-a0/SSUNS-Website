# Printed conference guide QR destination

Encode exactly **https://www.ssuns.org/live** in printed QR codes.

The `/live` route is the permanent, year-independent entry point. Update the guide behind this address without changing the printed destination. Keep this route working in future redesigns and conference years. If the implementation moves, retain `/live` and redirect it to the current guide; do not delete the route.

The site owner must retain the domain, HTTPS, and hosting for this link to keep working. Do not substitute a localhost address, deployment preview URL, external QR shortener, or year-specific path.

Before printing, deploy the route and scan a test QR from a phone on cellular data. Verify that the public URL opens the intended guide. Local development does not establish production availability.
