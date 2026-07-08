# Figma Hyperframes Spec — Intro, Hook, Outro

A build spec for recreating the Auth0 for AI Agents teaser visuals as native Figma prototypes using **Smart Animate** between frames (what Figma calls "hyperframe" transitions). Mirrors the playable HTML preview at `intro-hook-outro-preview.html`.

> **Note on tooling.** Figma's `.fig` format cannot be authored from outside the app. This document gives you the exact frame composition, colors, typography, transitions, and timings so you can rebuild the three sequences in roughly 15 to 20 minutes. The HTML preview is the visual source of truth.

---

## 1. File setup

Create one Figma file: **Auth0 for AI Agents — Talk Track Visuals**.

Add three pages, one per sequence:

- `01 / Intro`
- `02 / Hook`
- `03 / Outro`

### Color styles (paste once, reuse across all pages)

| Token name        | Hex       | Usage                                       |
|-------------------|-----------|---------------------------------------------|
| `purple/500`      | `#20003A` | Stage background, intro/outro background    |
| `purple/400`      | `#490186` | Deep accent, gradient stop                  |
| `purple/300`      | `#9921FE` | Brand accent, agent core, glow              |
| `purple/200`      | `#BC6DFF` | Soft accent, label chips, connector lines   |
| `purple/100`      | `#EBD3FF` | Lavender wash, secondary text on dark       |
| `orange/300`      | `#FF6217` | "Production-ready?" badge, checklist boxes  |
| `orange/200`      | `#FF9665` | Highlight foot text                         |
| `neutral/100`     | `#FBFBFA` | Logo fill, primary display text             |
| `neutral/300`     | `#E0DAD2` | Light surface alternative                   |
| `black`           | `#000000` | Last-resort black                           |

### Text styles

| Style name            | Family           | Weight | Size     | Tracking  |
|-----------------------|------------------|--------|----------|-----------|
| `display/xl`          | Aeonik / DM Sans | 700    | 96 px    | -2%       |
| `display/lg`          | Aeonik / DM Sans | 700    | 56 px    | -2%       |
| `display/md`          | Aeonik / DM Sans | 500    | 32 px    | -1%       |
| `mono/label`          | DM Mono          | 500    | 13 px    | +14%      |
| `mono/caption`        | DM Mono          | 400    | 11 px    | +14%      |

### Frame size

All scenes: **1920 × 1080** (16:9). Background fill: `purple/500`.

---

## 2. Sequence 01 — Intro (fade-in logo, ~3 s)

**Goal.** Auth0 logo fades into view from a soft blur, holds briefly, then dissolves into the Hook.

### Frames

| Frame name        | Logo opacity | Logo scale | Logo blur | Glow opacity | Notes                |
|-------------------|--------------|-----------|-----------|--------------|----------------------|
| `intro/01-empty`  | 0            | 94%       | 6         | 0            | Black-purple stage   |
| `intro/02-rise`   | 1            | 100%      | 0         | 1.0          | Logo sharp + lit     |
| `intro/03-hold`   | 1            | 100%      | 0         | 0.8          | Pre-handoff to Hook  |

### Layer composition (every frame)

- `bg` → rectangle 1920×1080, fill `purple/500`
- `glow` → ellipse 1400×1400 centered, radial gradient `purple/300 @ 35%` → transparent, layer blur 80
- `logo` → SVG import of `auth0-logo.svg`, color `neutral/100`, width 360 px, centered

### Prototype connections (Smart Animate)

- `intro/01-empty` → `intro/02-rise`: Smart Animate, 1600 ms, **Ease Out** (custom cubic `0.2, 0.8, 0.2, 1`)
- `intro/02-rise` → `intro/03-hold`: Smart Animate, 800 ms, Linear
- `intro/03-hold` → first Hook frame: Smart Animate, 600 ms, Ease In/Out (this becomes the handoff)

### Trigger

Use **After Delay** on each frame so playback runs hands-free.

---

## 3. Sequence 02 — Hook (3 beats, 20 s total)

> Spoken-copy alignment from `talk-track-3min.md`:
> Beat 1 covers "You've built an AI agent…" through "connects to your systems."
> Beat 2 covers "Now comes the real question: is it ready for production?"
> Beat 3 covers "Production-ready means more than working code…" through "Building that yourself takes quarters of engineering."

### Beat 1 — Agent system diagram (8 s)

#### Frames

| Frame name              | What's visible                                            |
|-------------------------|-----------------------------------------------------------|
| `hook/b1-01-empty`      | Stage only, mono label `// agent` top-left                |
| `hook/b1-02-core`       | Add agent core (purple gradient circle, 180 px)           |
| `hook/b1-03-nodes`      | Add 5 outer nodes (Cart, Calendar, Checkout, Orders, Profile) |
| `hook/b1-04-lines`      | Add dashed connector lines between core and nodes         |
| `hook/b1-05-headline`   | Add bottom-left headline copy                             |

#### Key element specs

- **Agent core:** ellipse 180×180 px, fill = radial gradient `purple/200` → `purple/300` → `purple/400`. Effects: drop shadow `purple/300 @ 55%`, blur 60. Inner stroke 1 px `purple/100 @ 25%` for rim light. Center text `AI AGENT` in `mono/label`, color `neutral/100`.
- **Concentric rings:** two ellipses behind the core at +36 px and +76 px diameter, stroke 1 px, color `purple/200` at 40% and 18% opacity respectively.
- **Outer node card:** 96×96 px, corner radius 18, fill `neutral/100 @ 4%`, stroke 1 px `purple/100 @ 18%`, layer blur 8 (background blur in Figma = blur effect on a frame with `Background blur` enabled).
  - Top glyph: 22 px symbol from a clean icon set (Cart 🛒, Calendar 🗓, Checkout 🧾, Orders ≡, Profile ⌬). Use single-line iconography from the Lucide or Iconoir libraries; avoid emoji.
  - Bottom label: `mono/caption`, color `neutral/200`.
- **Connectors:** vector path, stroke 1.5 px `purple/200 @ 45%`, dash 4-6, no fill. Five paths from each node to the core, slight bezier curve.
- **Headline:** bottom-left, `display/lg`, color `neutral/100`. Highlight the words that align with key terms by setting them to `purple/200`.

#### Prototype connections

| From → To                 | Trigger      | Animation    | Duration | Easing      |
|---------------------------|--------------|--------------|----------|-------------|
| `b1-01-empty` → `b1-02-core` | After 200 ms | Smart Animate | 600 ms   | Ease Out    |
| `b1-02-core` → `b1-03-nodes` | After 400 ms | Smart Animate | 1000 ms  | Ease Out    |
| `b1-03-nodes` → `b1-04-lines`| After 300 ms | Smart Animate | 600 ms   | Ease In/Out |
| `b1-04-lines` → `b1-05-headline` | After 200 ms | Smart Animate | 700 ms | Ease Out    |
| `b1-05-headline` → first Beat 2 frame | After 5500 ms | Dissolve | 600 ms | Ease In/Out |

### Beat 2 — Status badge transition (4 s)

#### Frames

| Frame name             | What's visible                                              |
|------------------------|-------------------------------------------------------------|
| `hook/b2-01-built`     | Centered pill `✓ BUILT` (purple-tinted, lavender text)      |
| `hook/b2-02-question`  | Centered pill `PRODUCTION-READY?` (orange-tinted, orange text) |

#### Specs

- **Built badge:** auto-layout pill, padding 18 / 36, corner radius 999, fill `purple/300 @ 14%`, stroke 1 px `purple/200 @ 40%`. Inside: 36 px round check chip filled `purple/200` with `purple/500` checkmark glyph; label `BUILT` in `display/lg`, color `purple/100`.
- **Question badge:** same auto-layout structure, fill `orange/300 @ 12%`, stroke 1 px `orange/300 @ 55%`, label `PRODUCTION-READY?` in `display/lg`, color `orange/300`.
- **Subline below both:** `mono/label`, uppercase, color `purple/200`. Text: `// now comes the real question`.

#### Prototype connection

`b2-01-built` → `b2-02-question`: Smart Animate, 700 ms, Ease In/Out. Position the two pills at the same coordinates so Smart Animate cross-dissolves the fills, strokes, and label text in place. Hold `b2-02-question` for 2 seconds via After Delay before transitioning to `b3-01`.

### Beat 3 — Production checklist (8 s)

#### Frames

| Frame name              | What's visible                                              |
|-------------------------|-------------------------------------------------------------|
| `hook/b3-01-header`     | Stage with `// production checklist` heading top-left       |
| `hook/b3-02-item-1`     | + item 1 fade in                                            |
| `hook/b3-03-item-2`     | + item 2                                                    |
| `hook/b3-04-item-3`     | + item 3                                                    |
| `hook/b3-05-item-4`     | + item 4                                                    |
| `hook/b3-06-foot`       | + bottom foot text `// building it yourself takes quarters` |

#### Item composition

- Auto-layout horizontal, gap 18.
- **Checkbox:** square 26×26, corner radius 6, stroke 1.5 px `orange/300`, fill `orange/300 @ 6%`.
- **Label:** `display/md`, color `neutral/100`. Items:
  1. Prove who the agent is acting for
  2. Zero standing privileges
  3. Human approval for sensitive actions
  4. Tightly scoped permissions on every call
- **Foot text:** bottom-left, `mono/label`, uppercase, color `orange/200`.

#### Prototype connections

Chain `b3-01` → `b3-02` → … → `b3-06` with Smart Animate, 500 ms each, Ease Out. Use After Delay 600 ms between items so the cascade reads as deliberate, not frantic. Final hold (`b3-06`) for ~2 s, then transition to Outro.

---

## 4. Sequence 03 — Outro (logo fade-out, ~3 s)

### Frames

| Frame name           | Logo opacity | Logo scale | Logo blur | CTA opacity |
|----------------------|--------------|-----------|-----------|-------------|
| `outro/01-rise`      | 0            | 100%      | 0         | 0           |
| `outro/02-hold`      | 1            | 100%      | 0         | 1           |
| `outro/03-fade`      | 0            | 104%      | 6         | 0           |

### Layer composition

- `bg` → 1920×1080, `purple/500`.
- `glow` → centered ellipse, radial gradient `purple/300 @ 32%` → transparent, blur 80, opacity rises and falls with the logo.
- `logo` → `auth0-logo.svg`, `neutral/100`, width 320 px, centered, vertical offset −24 px so the CTA sits below it.
- `tagline` → text below logo, `mono/caption`, uppercase, tracking 22%, color `purple/200`. Copy: `AUTH0 FOR AI AGENTS`. Acts as a title-card resolve, not a CTA.

### Prototype connections

- `outro/01-rise` → `outro/02-hold`: Smart Animate, 1200 ms, Ease Out
- `outro/02-hold` → `outro/03-fade`: Smart Animate, 1400 ms, Ease In (slight scale-up + blur as it fades)

---

## 5. Export and handoff

- Export each frame as PNG @ 2x for static thumbnails and as MP4 from the Figma prototype recorder for motion preview.
- For final video editing, screen-record the Figma prototype in Present mode at 60 fps using QuickTime or Loom, then drop the clip into the timeline of the talk-track edit.
- The HTML preview (`intro-hook-outro-preview.html`) is browser-playable and can also be screen-recorded if you want the motion immediately without rebuilding in Figma.

---

## 6. Quick reference — timing map

| Time (talk-track) | Scene                  | What's on screen                                      |
|-------------------|------------------------|-------------------------------------------------------|
| Pre-roll 00:00–00:03 | Intro                  | Auth0 logo fades in over deep-purple stage            |
| 00:00–00:08       | Hook · Beat 1          | Agent core diagram with five connected systems        |
| 00:08–00:12       | Hook · Beat 2          | "BUILT" → "PRODUCTION-READY?" badge swap              |
| 00:12–00:20       | Hook · Beat 3          | Production checklist of unmet requirements            |
| 02:55–03:00       | Outro                  | Auth0 logo with `AUTH0 FOR AI AGENTS` tagline, fades out |

The Hook sequence runs 20 seconds, matching the spoken Hook segment (00:00–00:20). The Intro plays as a pre-roll over the Hook's first beat or as a brief title card before the spoken track begins, depending on the editor's preference.
