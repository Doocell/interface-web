# Bugfix Requirements Document

## Introduction

The Game Description page (GameDescription.jsx) currently displays POS sections in a simple vertical card layout that does not match the Figma design specification (node 921:1259). The Figma design shows an alternating left/right layout where POS badges and content boxes are positioned with specific rotations, alternating text alignment (left for odd POS, right for even POS), and precise spacing that creates a visually dynamic flow. This mismatch results in a significantly different user experience from the intended design.

## Bug Analysis

### Current Behavior (Defect)

1.1 WHEN the Game Description page renders THEN the system displays all POS sections (POS REVIEW, POS ANALYZE, POS IMPROVE, POS DEPLOY) in a vertically stacked card layout with uniform left-aligned badges and content boxes

1.2 WHEN POS badges are rendered THEN the system applies a uniform rotation of rotate(-2deg) to all badges regardless of their position

1.3 WHEN POS content boxes are rendered THEN the system displays all text as left-aligned with the badge positioned on the left side

1.4 WHEN POS sections are positioned THEN the system uses a simple margin-bottom spacing approach without alternating left/right positioning

1.5 WHEN the page layout is rendered THEN the system uses custom CSS-in-JS styles instead of matching the Figma design's precise positioning and layout structure

### Expected Behavior (Correct)

2.1 WHEN the Game Description page renders THEN the system SHALL display POS sections in an alternating left/right layout where POS REVIEW (left), POS ANALYZE (right), POS IMPROVE (left), and POS DEPLOY (right) create a zigzag visual flow

2.2 WHEN POS badges are rendered THEN the system SHALL apply specific rotations per badge: POS REVIEW rotate(-2.77deg), POS ANALYZE rotate(0.93deg), POS IMPROVE rotate(-2.76deg), POS DEPLOY rotate(0.93deg)

2.3 WHEN left-aligned POS sections (REVIEW, IMPROVE) are rendered THEN the system SHALL position badges on the left side with left-aligned text content

2.4 WHEN right-aligned POS sections (ANALYZE, DEPLOY) are rendered THEN the system SHALL position badges on the right side with right-aligned text content

2.5 WHEN POS content text is rendered THEN the system SHALL use font-size 30.66px (approximately 31px) matching Figma's typography specification

2.6 WHEN POS sections are positioned THEN the system SHALL use absolute positioning with specific top values that match the Figma layout: POS REVIEW at top 424px, POS ANALYZE at top 955px, POS IMPROVE at top 1767px, POS DEPLOY at top 2591px

2.7 WHEN the page container is rendered THEN the system SHALL use a fixed width of 1440px centered layout matching the Figma canvas dimensions

### Unchanged Behavior (Regression Prevention)

3.1 WHEN the Navbar component is rendered THEN the system SHALL CONTINUE TO display the navigation bar at the top of the page

3.2 WHEN the BackgroundPattern component is rendered THEN the system SHALL CONTINUE TO show the decorative background elements

3.3 WHEN the BACK button is clicked THEN the system SHALL CONTINUE TO navigate to the previous page using navigate(-1)

3.4 WHEN POS_DATA array content is accessed THEN the system SHALL CONTINUE TO use the same text content for all four POS descriptions

3.5 WHEN the page title "GAME DESCRIPTION" is rendered THEN the system SHALL CONTINUE TO display the title with yellow 'G' and 'D' letters and white remaining letters with the same text shadow effect

3.6 WHEN POS badge colors are applied THEN the system SHALL CONTINUE TO use the same color scheme: #DFB009 for REVIEW, #189CF4 for ANALYZE, #9513FF for IMPROVE, #FF59FB for DEPLOY

3.7 WHEN external links (e.g., PANDUAN PERMAINAN DECK) are rendered THEN the system SHALL CONTINUE TO open in new tabs with proper href attributes

3.8 WHEN responsive breakpoints are triggered THEN the system SHALL CONTINUE TO adapt layout appropriately for mobile and tablet viewports
