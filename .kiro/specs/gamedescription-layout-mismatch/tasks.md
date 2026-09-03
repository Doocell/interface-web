# Implementation Plan

## Overview
Fix GameDescription page layout to match Figma design (node 921:1259) with alternating zigzag layout, section-specific badge rotations, absolute positioning, and correct typography/container dimensions.

---

## Tasks

- [ ] 1. Write bug condition exploration test
  - **Property 1: Bug Condition** - Layout Mismatch Across All POS Sections
  - **IMPORTANT**: Write this property-based test BEFORE implementing the fix
  - **CRITICAL**: This test MUST FAIL on unfixed code - failure confirms the bug exists
  - **DO NOT attempt to fix the test or the code when it fails**
  - **NOTE**: This test encodes the expected behavior - it will validate the fix when it passes after implementation
  - **GOAL**: Surface counterexamples that demonstrate the layout mismatch exists
  - **Scoped PBT Approach**: Scope the property to all four POS sections (REVIEW, ANALYZE, IMPROVE, DEPLOY) to ensure comprehensive validation
  - Test implementation details from Bug Condition in design:
    - Verify alternating layout: odd sections (id 1, 3) have left-aligned badges/content, even sections (id 2, 4) have right-aligned badges/content
    - Verify section-specific badge rotations: REVIEW (-2.77deg), ANALYZE (0.93deg), IMPROVE (-2.76deg), DEPLOY (0.93deg)
    - Verify absolute positioning with specific top values: section 1 (424px), section 2 (955px), section 3 (1767px), section 4 (2591px)
    - Verify text alignment matches layout: left-aligned for odd sections, right-aligned for even sections
    - Verify description font size is 31px (approximately 30.66px from Figma)
    - Verify container has fixed width of 1440px centered
  - The test assertions should match the Expected Behavior Properties from design (requirements 2.1-2.7)
  - Run test on UNFIXED code
  - **EXPECTED OUTCOME**: Test FAILS (this is correct - it proves the bug exists)
  - Document counterexamples found to understand root cause:
    - All badges show uniform rotation instead of section-specific values
    - All sections left-aligned instead of alternating
    - Relative margin-based positioning instead of absolute positioning
    - Font size is 17px instead of 31px
    - Container width is 900px instead of 1440px
  - Mark task complete when test is written, run, and failures are documented
  - _Requirements: 1.1, 1.2, 1.3, 1.4, 1.5, 2.1, 2.2, 2.3, 2.4, 2.5, 2.6, 2.7_

- [ ] 2. Write preservation property tests (BEFORE implementing fix)
  - **Property 2: Preservation** - Non-Layout Functionality Unchanged
  - **IMPORTANT**: Follow observation-first methodology
  - Observe behavior on UNFIXED code for non-layout functionality:
    - BACK button navigation using navigate(-1)
    - External link behavior (PANDUAN PERMAINAN DECK opens in new tab)
    - POS_DATA array content integrity
    - Badge color scheme preservation
    - Title styling with yellow 'G' and 'D' letters
    - Navbar and BackgroundPattern component rendering
    - Responsive breakpoint behavior
  - Write property-based tests capturing observed behavior patterns from Preservation Requirements:
    - Navigation preservation: BACK button triggers navigate(-1) for all click events
    - Content data preservation: POS_DATA array remains unchanged across all renders
    - Badge color preservation: All four colors (#DFB009, #189CF4, #9513FF, #FF59FB) remain unchanged
    - Title styling preservation: "GAME DESCRIPTION" maintains styling across all viewport sizes
    - External link preservation: Links open in new tabs with correct href attributes
    - Component hierarchy preservation: Navbar and BackgroundPattern render in same order
    - Responsive behavior preservation: Breakpoints trigger at same viewport widths
  - Property-based testing generates many test cases for stronger guarantees
  - Run tests on UNFIXED code
  - **EXPECTED OUTCOME**: Tests PASS (this confirms baseline behavior to preserve)
  - Mark task complete when tests are written, run, and passing on unfixed code
  - _Requirements: 3.1, 3.2, 3.3, 3.4, 3.5, 3.6, 3.7, 3.8_

- [ ] 3. Fix GameDescription layout to match Figma design

  - [ ] 3.1 Implement alternating zigzag layout system
    - Add helper logic to determine left/right alignment: `const isLeftAligned = pos.id % 2 !== 0`
    - For odd section IDs (1, 3): position badge on left, align content left
    - For even section IDs (2, 4): position badge on right, align content right
    - Update badge positioning: add conditional `margin-left` or `margin-right` based on alignment
    - Update content text alignment: apply `text-align: left` for odd sections, `text-align: right` for even sections
    - _Bug_Condition: isBugCondition(section) where NOT hasAlternatingLayout(section.id)_
    - _Expected_Behavior: Odd sections left-aligned, even sections right-aligned (req 2.1, 2.3, 2.4)_
    - _Preservation: Navigation, content data, colors, title styling, links, components, responsive behavior (req 3.1-3.8)_
    - _Requirements: 1.1, 1.3, 2.1, 2.3, 2.4, 3.1, 3.2, 3.3, 3.4, 3.5, 3.6, 3.7, 3.8_

  - [ ] 3.2 Implement section-specific badge rotations
    - Create rotation mapping: `{ "POS REVIEW": -2.77, "POS ANALYZE": 0.93, "POS IMPROVE": -2.76, "POS DEPLOY": 0.93 }`
    - Replace uniform `rotate(-2deg)` with dynamic rotation: `transform: rotate(${rotationMap[pos.name]}deg)`
    - Apply rotation dynamically to each badge based on section name
    - _Bug_Condition: isBugCondition(section) where NOT hasCorrectBadgeRotation(section.name)_
    - _Expected_Behavior: Each badge has section-specific rotation from Figma (req 2.2)_
    - _Preservation: All non-layout functionality preserved (req 3.1-3.8)_
    - _Requirements: 1.2, 2.2, 3.1, 3.2, 3.3, 3.4, 3.5, 3.6, 3.7, 3.8_

  - [ ] 3.3 Convert to absolute positioning with exact top values
    - Change `.gamedesc-container` to `position: relative` to establish positioning context
    - Apply `position: absolute` to each `.gamedesc-pos-card`
    - Create top position mapping: `{ 1: 424, 2: 955, 3: 1767, 4: 2591 }` (pixels)
    - Apply top values dynamically: `top: ${topPositionMap[pos.id]}px`
    - Calculate total container height based on last section position (e.g., 2591px + section height + padding)
    - Remove `margin-bottom: 40px` from `.gamedesc-pos-card` (no longer needed with absolute positioning)
    - _Bug_Condition: isBugCondition(section) where NOT hasCorrectPositioning(section.id)_
    - _Expected_Behavior: Exact absolute positioning matching Figma (req 2.6)_
    - _Preservation: All non-layout functionality preserved (req 3.1-3.8)_
    - _Requirements: 1.4, 2.6, 3.1, 3.2, 3.3, 3.4, 3.5, 3.6, 3.7, 3.8_

  - [ ] 3.4 Update container width to fixed 1440px
    - Change `.gamedesc-container` from `max-width: 900px` to `width: 1440px`
    - Maintain `margin: 0 auto` for horizontal centering
    - Consider responsive behavior for viewports < 1440px (may need media query adjustment)
    - _Bug_Condition: isBugCondition(section) where NOT hasFixedWidthContainer()_
    - _Expected_Behavior: Fixed 1440px container matching Figma canvas (req 2.7)_
    - _Preservation: Responsive breakpoints continue to work appropriately (req 3.8)_
    - _Requirements: 1.5, 2.7, 3.8_

  - [ ] 3.5 Update description typography to 31px font size
    - Change `.gamedesc-pos-text` font-size from `17px` to `31px`
    - Adjust `line-height` if necessary for optimal readability (may need to increase from 1.6)
    - Update responsive media queries to scale font size appropriately for mobile/tablet
    - _Bug_Condition: isBugCondition(section) where NOT hasCorrectFontSize(section)_
    - _Expected_Behavior: Description text at 31px matching Figma (req 2.5)_
    - _Preservation: Responsive breakpoints continue to work appropriately (req 3.8)_
    - _Requirements: 1.5, 2.5, 3.8_

  - [ ] 3.6 Adjust responsive behavior for new layout
    - Review mobile/tablet media queries (@media max-width: 768px, @media max-width: 480px)
    - Consider reverting to simplified vertical layout for narrow viewports (< 768px)
    - Adjust absolute positioning scale for tablet viewports if needed
    - Ensure container width scales down appropriately (e.g., width: 100%, max-width: 1440px for mobile)
    - Test that font sizes remain readable at mobile breakpoints
    - Verify badge rotations and positioning work well on all viewport sizes
    - _Bug_Condition: N/A (responsive enhancement to prevent new bugs)_
    - _Expected_Behavior: Layout remains usable and visually consistent across all viewports_
    - _Preservation: Responsive breakpoints continue to work appropriately (req 3.8)_
    - _Requirements: 3.8_

  - [ ] 3.7 Verify bug condition exploration test now passes
    - **Property 1: Expected Behavior** - Figma-Compliant Zigzag Layout
    - **IMPORTANT**: Re-run the SAME test from task 1 - do NOT write a new test
    - The test from task 1 encodes the expected behavior
    - When this test passes, it confirms the expected behavior is satisfied
    - Run bug condition exploration test from step 1
    - **EXPECTED OUTCOME**: Test PASSES (confirms bug is fixed)
    - Verify all assertions pass:
      - Alternating left/right layout for all sections
      - Section-specific badge rotations match Figma
      - Absolute positioning with exact top values
      - Text alignment matches layout (left for odd, right for even)
      - Font size is 31px
      - Container width is 1440px
    - _Requirements: 2.1, 2.2, 2.3, 2.4, 2.5, 2.6, 2.7_

  - [ ] 3.8 Verify preservation tests still pass
    - **Property 2: Preservation** - Non-Layout Functionality Unchanged
    - **IMPORTANT**: Re-run the SAME tests from task 2 - do NOT write new tests
    - Run preservation property tests from step 2
    - **EXPECTED OUTCOME**: Tests PASS (confirms no regressions)
    - Confirm all preservation tests still pass after fix:
      - BACK button navigation behavior unchanged
      - External link behavior unchanged
      - POS_DATA content integrity maintained
      - Badge colors preserved
      - Title styling preserved
      - Component hierarchy unchanged
      - Responsive behavior unchanged
    - _Requirements: 3.1, 3.2, 3.3, 3.4, 3.5, 3.6, 3.7, 3.8_

- [ ] 4. Checkpoint - Ensure all tests pass
  - Run full test suite (bug condition + preservation tests)
  - Verify all assertions pass without failures
  - Perform visual regression check against Figma design (node 921:1259)
  - Test responsive behavior across desktop, tablet, and mobile viewports
  - Test navigation and external link functionality manually
  - Ask the user if questions arise or if additional verification is needed

---

## Notes

**Testing Approach:**
- Task 1 (exploration test) will FAIL on unfixed code - this is expected and confirms the bug exists
- Task 2 (preservation tests) will PASS on unfixed code - this captures baseline behavior to preserve
- After implementing the fix (task 3), task 1 test should PASS and task 2 tests should still PASS
- Property-based testing is used for stronger guarantees across the input domain

**Key Implementation Points:**
- Use conditional logic based on section ID (odd vs even) for alternating layout
- Map section names to specific rotation values for badge styling
- Use absolute positioning with a relative container for precise placement
- Increase container width from 900px to 1440px for Figma compliance
- Scale up font size from 17px to 31px for description text
- Ensure responsive behavior remains functional after layout changes

**Figma Reference:**
- Node: 921:1259
- Design shows alternating zigzag pattern with specific positioning and rotations
- Verify final implementation against Figma design for pixel-perfect accuracy
