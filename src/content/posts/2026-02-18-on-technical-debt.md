---
title: Technical debt is a financing decision, not a moral failing
date: 2026-02-18
tag: architecture
excerpt: Teams that treat all debt as shameful end up hiding it. Teams that treat it as a lever end up managing it.
---

Every team I've led has, at some point, had a conversation that goes
roughly: _"we need to stop cutting corners."_ It's well-intentioned and
almost always the wrong framing.

Debt taken on deliberately, with the team's eyes open, is not a
corner cut — it's a loan against future velocity, taken to hit a real
constraint today. The failure mode isn't taking the loan. It's taking
it silently, so nobody remembers it's owed.

## What's worked for me

1. **Tie it to a trigger, not a someday.** Debt that's owed "eventually"
   never comes due. Debt that's owed "before we onboard the next 10k
   users" has a date attached, and dates get planned around.
2. **Write down the interest, not just the principal.** The point isn't
   that the code is ugly. It's that the ugly code costs you two extra
   days per feature and one flaky test per deploy. Put a number on the
   pain and the tradeoff argues itself.
3. **Track it where the work happens.** A ticket in the backlog next to
   real work gets picked up. A wiki page nobody opens becomes folklore.
   If your debt lives somewhere people don't look, you don't have a
   record, you have a diary.
4. **Separate the debt you chose from the debt that happened to you.**
   A deliberate shortcut with a note is a loan. A mess nobody decided on
   is a leak. They need different fixes: one gets scheduled, the other
   needs a look at how it got in.
5. **Pay it down on a schedule, not a mood.** "We fix debt when things
   feel bad" means debt only gets addressed after it's already
   expensive. A steady trickle beats the heroic rewrite every time.

None of this is exotic. It's just treating debt as the financial
instrument it actually is, instead of a referendum on the team's
character.
