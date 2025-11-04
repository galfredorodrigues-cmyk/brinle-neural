# Brinle Neural - Design Guidelines

## Design Approach
**Reference-Based: Futuristic Productivity Tools**
Drawing inspiration from modern productivity apps with immersive, game-like experiences (Endel, Brain.fm, Focus@Will) combined with neural/sci-fi aesthetics. The design creates an engaging, child-friendly environment that makes focus and productivity feel exciting and powerful.

## Core Design Principles
1. **Neural Immersion**: Every element reinforces the brain-activation theme
2. **Playful Power**: Serious productivity tool that feels like an adventure for kids
3. **Smooth Motion**: Continuous, calming animations that aid focus
4. **Touch-First**: Designed for children's interaction patterns

---

## Typography

**Primary Font**: Space Grotesk or Orbitron (Google Fonts) - futuristic, tech-forward
- Hero/Main Title: 3xl to 5xl, font-bold, tracking-wide
- Button Text: xl to 2xl, font-semibold, uppercase with letter-spacing
- Indicator Labels: base to lg, font-medium
- Status Text: sm to base, font-normal

**Secondary Font**: Inter (Google Fonts) - for body text and descriptions
- Descriptions: sm to base, font-light

---

## Layout System

**Spacing Primitives**: Use Tailwind units of 4, 6, 8, 12, 16
- Component spacing: p-6, p-8, gap-6
- Section spacing: py-12, py-16
- Indicator spacing: space-y-8
- Button padding: px-12, py-6

**Container Structure**:
- Main app: Full viewport height (min-h-screen)
- Content wrapper: max-w-4xl mx-auto with px-6
- Vertical center alignment for main content
- Responsive stacking: Single column layout on all devices

---

## Component Library

### Main Activation Button
- Large, prominent central button: "Iniciar Sessão Neural"
- Size: Generous padding (px-12 py-6 on desktop, px-10 py-5 on mobile)
- Shape: Rounded-2xl with neural glow effect using box-shadow
- State indicators: Pulsing animation when inactive, steady glow when active
- Accessibility: Minimum 60px touch target on mobile

### Neural Indicators (3 Components)
Each indicator contains:
- Label text (Ondas Neurais / Nível de Foco / Flow State)
- Percentage or status value
- Animated progress bar container (h-4 to h-6)
- Filled progress bar with gradient and glow
- Smooth, continuous animation using Framer Motion
- Vertical stacking with consistent spacing (space-y-8)

### Status Display
- Live readout of neural activity
- Floating cards with backdrop blur
- Small text indicators with icons or symbols
- Positioned in corners or top of interface

---

## Visual Effects & Animations

### Background Treatment
- Deep black (#000000 or #0a0a0a) base
- Subtle animated gradient overlay (dark blue to dark purple)
- Optional: Animated neural network lines/particles in background
- Radial gradient emanating from center button area

### Glow Effects
- Primary glow: Electric blue (#00e5ff, #0099ff)
- Secondary glow: Deep purple (#8b5cf6, #a855f7)
- Apply to: Active button, progress bars, accent elements
- Use box-shadow with multiple layers and blur for depth

### Motion Design
- Continuous, smooth bar animations (2-4 second loops)
- Button pulse: Subtle scale and glow on idle (1.5s cycle)
- Entry animations: Fade up with slight scale
- No jarring movements - all transitions ease-in-out
- Progress bars: Width transitions with 0.5-1s duration

### Sound Integration
- Visual feedback when 40Hz audio plays
- Button state change with ripple effect
- Synchronized pulse effects during active session

---

## Responsive Behavior

**Mobile (base to md)**:
- Single column, full-width components
- Larger touch targets (minimum 60px)
- Vertical spacing: py-8 between sections
- Button text: xl with generous padding
- Indicators stack with space-y-6

**Desktop (lg+)**:
- Centered layout with max-w-4xl
- Increased spacing: py-12 between sections
- Button text: 2xl with extra padding
- More dramatic glow effects
- Indicators with space-y-8

---

## Accessibility Considerations

- High contrast text (white/light blue on dark)
- Large, clear typography throughout
- Generous touch targets for children
- Clear visual feedback for all interactions
- Audio plays only after user interaction (mobile requirement)
- Focus indicators visible for keyboard navigation
- Loading states with visual feedback

---

## Images

**Hero/Background**: Abstract neural network visualization or brain wave patterns
- Placement: Full-screen background with dark overlay
- Style: Subtle, low-opacity geometric patterns or particle effects
- Purpose: Reinforce neural theme without distracting from UI
- Treatment: Blurred, low-opacity (15-25%) to maintain focus on controls

No photographic images needed - focus on abstract, tech-inspired visuals that support the neural theme.