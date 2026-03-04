---
title: "Why Your ChatGPT Gets Smarter: Understanding RLHF and SFT in Post-Training"
date: 2026-03-04T10:30:00+08:00
draft: false
tags: ["LLM", "RLHF", "Machine Learning", "AI"]
categories: ["Research"]
---

## Introduction

Have you ever wondered why modern AI assistants like ChatGPT seem to "understand" your instructions so well? The secret lies in two critical post-training techniques: **Reinforcement Learning from Human Feedback (RLHF)** and **Supervised Fine-Tuning (SFT)**.

But here's the surprising truth: **these two techniques are not independent stages** as many assume. Recent research reveals they're fundamentally **coupled**.

## What are RLHF and SFT?

### Supervised Fine-Tuning (SFT)

Think of SFT as "teaching by example." You show the model:
- **Input:** "What's the capital of France?"
- **Ideal Output:** "The capital of France is Paris."

The model learns to mimic these patterns.

### Reinforcement Learning from Human Feedback (RLHF)

RLHF is more like "teaching by reward." You show the model two responses:
- **Response A:** "Paris" ✓ (Good! Get a reward)
- **Response B:** "London" ✗ (Bad! Get a penalty)

The model learns through trial and error.

## The Common Assumption

Most practitioners (including myself until recently) assumed:

```
Data → Pre-training → SFT → RL → Better Model
```

Each stage **independently** improves the model. Apply SFT, get better. Apply RL, get even better. Simple, right?

## The Surprising Discovery

**Recent research challenges this assumption.**

In our latest paper ["On the Non-decoupling of SFT and RL in Post-training"](https://arxiv.org/abs/2601.07389), we show that:

> **SFT and RL are fundamentally coupled, not independent stages.**

### What This Means

1. **Order matters:** Applying SFT **after** RL can override RL improvements
2. **Not simple addition:** You can't just stack improvements
3. **Pipeline design is crucial:** The sequence and combination of training stages requires careful consideration

### Why This Happens

Think of it this way:

- **SFT** teaches the model to follow patterns in the demonstration data
- **RL** teaches the model to maximize reward based on human preferences

When you apply SFT after RL:
- The model might **forget** RL-learned behaviors
- SFT patterns might **conflict** with RL preferences
- The model **reverts** to SFT-style responses

## Practical Implications

### For AI Practitioners

**Don't assume independence:**
- Test different training orders
- Monitor if later stages hurt earlier improvements
- Consider joint training approaches

**Pipeline design:**
```
❌ Bad: Pre-train → SFT → RL → SFT (reverts RL)
✅ Good: Pre-train → SFT → RL (stops here)
✅ Better: Joint SFT+RL optimization
```

### For AI Researchers

This opens new questions:
- How do we design **jointly optimized** post-training?
- Can we **decouple** these stages intentionally?
- What **theoretical framework** explains this coupling?

## The Big Picture

This isn't just a technical detail—it changes how we think about AI training:

- **Old view:** Modular, independent stages
- **New view:** Interdependent, coupled processes

Understanding this coupling is crucial for:
- Building more reliable AI systems
- Designing efficient training pipelines
- Making AI safer through better alignment

## Conclusion

The next time someone tells you "just add more RLHF after SFT," remember: **it's not that simple**.

The relationship between SFT and RL is complex, nuanced, and—most importantly—**fundamentally coupled**.

Understanding this coupling isn't just academic; it's essential for anyone serious about building better AI systems.

---

*Reading time: 8 minutes | Difficulty: ★★★☆☆ | Category: AI Research*
