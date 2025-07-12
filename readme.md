## ▶️ Run the Project

This is a **PNPM monorepo** containing 6 small Angular projects to demonstrate change detection behavior with and without `zone.js`.

### 🛠 Tech Stack
- Angular (19+)
- PNPM (for monorepo management)
- TypeScript
- Zoneless, Signals, OnPush strategy, and manual CD examples

### 🚀 Getting Started

1. Install dependencies:
  ```bash
  pnpm install
  ```

2. Run all demo projects in parallel:
  ```bash
  pnpm start:all
  ```

This will launch all 6 projects so you can explore and compare how each behaves in both traditional and zoneless Angular setups.

Make sure you have PNPM installed globally. If not:
  ```bash
  npm install -g pnpm
  ```

# 🔍 Zoneless Angular – Talk & Demo Overview

> A 30-minute technical walkthrough exploring how Angular handles change detection with and without `zone.js`, and why zoneless Angular is the future.

---

## 🎯 Overview

In this talk, we’ll dive into how Angular traditionally used `zone.js` to automate change detection, why that had trade-offs, and how Angular 17+ introduced a powerful alternative: **Zoneless Angular**.

---

## 📚 Slides Summary

---

### 📌 Slide 2 – Introduction

**What we’ll cover:**
- What is `zone.js`?
- How Angular used to do change detection
- What is Zoneless Angular?
- Live demo!

---

### 📌 Slide 3 – What is `zone.js`?

- A library that **monkey-patches async APIs** like `setTimeout`, DOM events, and Promises
- Tracks when async tasks **start and finish**
- Used by Angular to **automatically trigger change detection**

---

### 📌 Slide 4 – Why `zone.js` Was Useful

- Developers **didn’t need to worry** about when to update the UI
- It worked **"automagically"** with most async code
- Made Angular **productive and powerful** for its time

---

### 📌 Slide 5 – But at What Cost?

- **Overhead**: performance hit from patching and triggering CD too often
- **Lack of fine-grained control** over what gets checked
- **Debugging async behavior** can be tricky and noisy
- Not ideal for **modern web goals** like SSR, hydration, or fine-grained reactivity

---

### 📌 Slide 6 – How Change Detection Worked

- Angular **walks the entire component tree** on every change
- Performs **dirty checking**: compares current vs previous values
- `zone.js` triggers this process after **every async task** — even if the change was unrelated

---

### 📌 Slide 10 – Zoneless Mode

- As of Angular 17+, **`zone.js` is now optional**
- You can run Angular **without monkey patching** the browser
- Requires **explicit state updates** via:
  - Signals
  - `ChangeDetectorRef.markForCheck()`
  - `ApplicationRef.tick()`

---

### 📌 Slide 11 – Advantages of Going Zoneless

- 🚀 **Better performance**: No global CD after every async op
- 🔍 **More control**: You decide what triggers updates
- 🧠 **Easier debugging**, less hidden logic
- 🧼 **Cleaner SSR and hydration** thanks to predictable reactivity

---

## 🛠 Demo Highlights

- Two identical Angular apps: one **with** zone.js, one **zoneless**
- Visual CD indicators using a custom `Flash` directive
- Live signal-based counter vs global CD behavior

---

## 📦 Assets
- [Slides Link](https://docs.google.com/presentation/d/1YB62ORxWhcDPdZIlfLZKuQzJjwatugcYGuEeDbZBDzI/edit?usp=sharing)

## Useful Links
- [The Latest in Angular Change Detection – All You Need to Know](https://angular.love/the-latest-in-angular-change-detection-zoneless-signals)
- [Change Detection Big Picture – Overview](https://angular.love/change-detection-big-picture-overview)
- [A change detection, zone.js, zoneless, local change detection, and signals story](https://justangular.com/blog/a-change-detection-zone-js-zoneless-local-change-detection-and-signals-story)