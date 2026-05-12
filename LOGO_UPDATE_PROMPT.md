# Logo and Favicon Update Prompt

Project location:

C:\Users\FreakMaster\Desktop\landing-citas-clinicas

Main files:
- index.html
- styles.css
- script.js
- privacy.html
- aviso-legal.html
- cookies.html
- rgpd.html

Task:

Update the website branding in the header and browser tab.

Current issue:
The current header logo/name looks too basic. The browser tab mini-logo/favicon is not good enough and appears as a simple white/old icon or only text-like branding. I want a more premium blue mini-logo.

Brand:
Tus Citas Clínicas

Current positioning:
The website is now mainly focused on physiotherapy clinics first, and later also aesthetic clinics and private clinics. Avoid dental-specific imagery.

Important:
- Do not use any tooth or dental icon.
- Do not make the brand look only for dentists.
- Make the brand feel suitable for physiotherapy clinics, aesthetic clinics, and private healthcare centers.
- Keep the current white and light-blue SaaS visual identity.
- Keep the current dark navy main text and blue accent style.
- Do not touch robots.txt.
- Do not break the legal pages.
- Do not break the homepage layout.
- Do not remove existing footer/legal links.

Create or update these assets:
- assets/logo.svg
- assets/favicon.svg
- optionally assets/apple-touch-icon.png or favicon.png only if easy and useful

Logo direction:
Create a premium horizontal logo for the header:
- Left: rounded-square blue gradient icon.
- Inside icon: white appointment/calendar shape with an abstract human/wellness/physio-friendly figure.
- Include a small checkmark badge to suggest confirmed appointment.
- No tooth.
- No dental imagery.
- Right: wordmark “Tus Citas Clínicas”.
- Use rounded, friendly, modern typography.
- “Tus Citas” in dark navy.
- “Clínicas” in bright blue.
- Make it look more friendly, rounded and modern than the current logo.
- It should fit well in the current header height.
- It should look premium but not childish.

Favicon direction:
Create a favicon using only the blue rounded-square icon, not the full text.
- Blue gradient background.
- White appointment/calendar + abstract human figure.
- Small confirmation check.
- No tooth.
- No white-only favicon.
- No text-only favicon.
- Must be readable in browser tab at 16x16/32x32.

Implementation:
1. Create an assets folder if it does not exist.
2. Add logo.svg and favicon.svg.
3. Update index.html header to use the new logo.
4. Update all legal pages headers to use the same new logo if they have a header.
5. Update the <head> of all pages to use:
   <link rel="icon" href="/assets/favicon.svg" type="image/svg+xml">
6. If there is an existing old favicon reference, replace it.
7. Make sure the header logo is responsive.
8. On mobile, the logo should not be too large or break the navigation.
9. Keep nav links aligned and clean.
10. Keep the brand text readable.

CSS requirements:
- Add clean styles for .brand, .brand-logo, .brand-icon, or similar.
- Header logo height around 40-48px on desktop.
- Favicon is separate and should not depend on CSS.
- Use hover/focus states if the logo links to homepage.
- Make it look polished and premium.

Before editing:
Briefly tell me what files you will change.

Then apply the changes directly.