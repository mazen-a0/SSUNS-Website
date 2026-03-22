# Asset TODOs

## Video
- `/public/video/montreal-panorama.webm`
  - Keep / replace with final Montreal panorama loop
  - 16:9
  - Recommended: 1920x1080
- `/public/video/montreal-panorama.mp4`
  - MP4 fallback for hero video
  - 16:9
  - Recommended: 1920x1080
- `/public/video/munager-howto.mp4`
  - Munager walkthrough video
  - 16:9
  - Recommended: 1920x1080
- `/public/video/ssuns-recap-2025.mp4`
  - Optional fallback walkthrough / recap video
  - 16:9
  - Recommended: 1920x1080

## Homepage / editorial photography
- `/public/placeholders/hero-1920x1080.jpg`
  - Final homepage poster image
  - Subject: delegates entering plenary or Montreal arrival atmosphere
  - 16:9
  - Recommended: 1920x1080
- `/public/placeholders/montreal-1600x900.jpg`
  - Montreal establishing photography
  - Subject: skyline, civic architecture, downtown streetscape
  - 16:9
  - Recommended: 1600x900
- `/public/placeholders/hotel-1600x900.jpg`
  - Venue photography
  - Subject: Le Centre Sheraton Montreal exterior, lobby, or arrival sequence
  - 16:9
  - Recommended: 1600x900
- `/public/placeholders/delegates-1600x1067.jpg`
  - Editorial conference image
  - Subject: delegates caucusing, moderated debate, crisis updates
  - 3:2
  - Recommended: 1600x1067
- `/public/placeholders/ballroom-1600x900.jpg`
  - Plenary or ballroom image
  - Subject: opening ceremony, ballroom setup, keynote scene
  - 16:9
  - Recommended: 1600x900

## Committees
- `/public/placeholders/committee-1200x800.jpg`
  - Replaced with committee-specific card image set
  - Subject: placards, dais, caucusing, crisis room atmosphere
  - 3:2
  - Recommended: 1200x800
- Committee detail image slots in `/src/components/CommitteeDetailSheet.tsx`
  - Replace with committee room / dais photography
  - 3:2
  - Recommended: 1200x800

## Secretariat / portraits
- `/public/placeholders/portrait-800x1000.jpg`
  - Replace with real headshots for all secretariat members
  - 4:5
  - Recommended: 800x1000
- Pages/components using portrait placeholder:
  - `/src/app/about/secretariat/page.tsx`
  - `/src/components/ProfileCard.tsx`
  - `/src/app/page.tsx` director note
  - `/src/app/registration/page.tsx`

## Sponsorship
- `/public/docs/SSUNS_Sponsorship_Package_2026.pdf`
  - Sponsorship package download
  - PDF
  - Final exported package from design team

## Graphics
- Registration timeline graphic if design team wants a static companion asset
  - Suggested path: `/public/graphics/registration-timeline.svg`
  - Wide horizontal layout
  - Recommended: 1600x500
- Schedule overview graphic if design team wants a brochure-style insert
  - Suggested path: `/public/graphics/schedule-band.svg`
  - Wide horizontal layout
  - Recommended: 1600x500
