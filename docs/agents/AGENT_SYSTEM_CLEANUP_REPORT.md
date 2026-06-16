# AGENT SYSTEM CLEANUP REPORT

Date: 2026-06-16
Owner: UNPROFITABLE Orchestrator

## Summary

Cleaned the active Hermes/Discord agent system into a leaner UNPROFITABLE-first operating structure while preserving the active website revamp branch and tooling context.

## What Was Removed

- Removed CardVault/Omaha channel prompts from active Discord config:
  - `1511035345117118565`
  - `1511384118955475080`
- Removed CardVault/Omaha skill bindings from active Discord config.
- Removed CardVault/Omaha channels from `discord.free_response_channels`.
- Removed old CardVault/Omaha memory from global memory/profile files.
- Removed active UNPROFITABLE skill drift wording that referenced old projects as current context.

## What Was Preserved

- Preserved UNPROFITABLE agent lanes only:
  - Website Designer
  - Marketing
  - Finance
  - Brand QA
  - Product / Supplier
  - Ops / CX
  - Chief of Staff
  - Launch Decisions
  - Social Media
- Preserved the dispatcher operating model:
  - repo docs are shared state
  - Discord is visible output only
  - dispatcher reads tracker/source-of-truth/protocol
  - dispatcher should not become a chatter bot
- Preserved the website revamp branch context:
  - active branch `feature/21stdev-motion-hero`
  - remote `origin/feature/21stdev-motion-hero`
  - known-good commit `8cb62b70b69f1c5507af8e114afed1874cb2cd58`
  - earlier branch creation SHA `eea5dad70f0319bb33f862f8fc0d015883fa59e1`
- Preserved the decision not to use Motion AI Kit / `npx motion-ai`.
- Preserved the lighter Motion / Tailwind / Motion Primitives setup.
- Did not delete, revert, or clean any website repo files.

## What Was Rewritten

### Hermes config

File:

```txt
C:/Users/mrmer/AppData/Local/hermes/config.yaml
```

Changes:

- Replaced long UNPROFITABLE channel prompts with short routing wrappers.
- Replaced channel skill bindings with the lean recommended UNPROFITABLE-only set.
- Removed old Omaha/CardVault channel prompts and bindings.
- Changed display personality from `kawaii` to `concise`, because `direct` is not one of the built-in personality keys in the current Hermes build.

### Memory

Files:

```txt
C:/Users/mrmer/AppData/Local/hermes/memories/MEMORY.md
C:/Users/mrmer/AppData/Local/hermes/memories/USER.md
```

Changes:

- Rewrote global memory to durable Jace operating preferences only.
- Moved UNPROFITABLE project truth to repo source-of-truth instead of global memory.
- Removed detailed trading setup rules from generic global memory.
- Removed Omaha/CardVault memory.

### Persona

File:

```txt
C:/Users/mrmer/AppData/Local/hermes/SOUL.md
```

Changes:

- Replaced empty/default SOUL with direct operator assistant persona.
- Added no-project-mixing rule.
- Added source-of-truth priority rule.
- Added no-invented-claims rule.

### UNPROFITABLE shared source of truth

File:

```txt
C:/Users/mrmer/projects/unprofitable/docs/agents/shared-agent-source-of-truth.md
```

Changes:

- Added explicit agent operating rule:
  - agents do not remember the business through chat
  - repo docs are shared state
  - Discord is visible output
  - Jace is final decision maker
- Added `Website Revamp / 21st.dev Hero Branch` section with branch, commit, tooling, Motion AI Kit abandonment, and next decision needed.

### Communication protocol

File:

```txt
C:/Users/mrmer/projects/unprofitable/docs/agents/agent-communication-protocol.md
```

Changes:

- Rewrote protocol into concise shared-state and dispatcher-preservation rules.
- Added updated handoff format.
- Added updated launch decision request format.
- Added tracker item requirements.
- Preserved dispatcher runtime details.

### Website Designer skill

File:

```txt
C:/Users/mrmer/AppData/Local/hermes/skills/creative/unprofitable-website-designer/SKILL.md
```

Changes:

- Added `Active Website Revamp Context` section.
- Documented branch, remote, current known-good commit, approved lightweight stack, Motion AI Kit ban, working-tree safety rules, and current next action.
- Removed old-project drift wording from active UNPROFITABLE skill context.

### UNPROFITABLE skill normalization

Files patched non-destructively:

```txt
C:/Users/mrmer/AppData/Local/hermes/skills/creative/unprofitable-orchestrator-agent/SKILL.md
C:/Users/mrmer/AppData/Local/hermes/skills/creative/unprofitable-chief-of-staff-agent/SKILL.md
C:/Users/mrmer/AppData/Local/hermes/skills/creative/unprofitable-brand-qa-agent/SKILL.md
C:/Users/mrmer/AppData/Local/hermes/skills/creative/unprofitable-marketing-specialist/SKILL.md
C:/Users/mrmer/AppData/Local/hermes/skills/creative/unprofitable-product-supplier-agent/SKILL.md
C:/Users/mrmer/AppData/Local/hermes/skills/creative/unprofitable-operations-cx-agent/SKILL.md
C:/Users/mrmer/AppData/Local/hermes/skills/creative/unprofitable-social-media-agent/SKILL.md
C:/Users/mrmer/AppData/Local/hermes/skills/creative/unprofitable-website-designer/SKILL.md
C:/Users/mrmer/AppData/Local/hermes/skills/creative/unprofitable-agent-communication-system/SKILL.md
C:/Users/mrmer/AppData/Local/hermes/skills/finance/finance-operator-agent/SKILL.md
```

Changes:

- Added a non-destructive `Agent Architecture Standard` section to each relevant UNPROFITABLE skill.
- Did not delete the deeper lane-specific behavior from existing skills.
- Standardized the expectation that skills use source-of-truth docs, handoffs, Jace approval rules, and separated facts/assumptions/risks/decisions.

## Files Changed

```txt
C:/Users/mrmer/AppData/Local/hermes/config.yaml
C:/Users/mrmer/AppData/Local/hermes/SOUL.md
C:/Users/mrmer/AppData/Local/hermes/memories/MEMORY.md
C:/Users/mrmer/AppData/Local/hermes/memories/USER.md
C:/Users/mrmer/projects/unprofitable/docs/agents/shared-agent-source-of-truth.md
C:/Users/mrmer/projects/unprofitable/docs/agents/agent-communication-protocol.md
C:/Users/mrmer/projects/unprofitable/docs/agents/AGENT_SYSTEM_CLEANUP_REPORT.md
C:/Users/mrmer/AppData/Local/hermes/skills/creative/unprofitable-orchestrator-agent/SKILL.md
C:/Users/mrmer/AppData/Local/hermes/skills/creative/unprofitable-chief-of-staff-agent/SKILL.md
C:/Users/mrmer/AppData/Local/hermes/skills/creative/unprofitable-brand-qa-agent/SKILL.md
C:/Users/mrmer/AppData/Local/hermes/skills/creative/unprofitable-marketing-specialist/SKILL.md
C:/Users/mrmer/AppData/Local/hermes/skills/creative/unprofitable-product-supplier-agent/SKILL.md
C:/Users/mrmer/AppData/Local/hermes/skills/creative/unprofitable-operations-cx-agent/SKILL.md
C:/Users/mrmer/AppData/Local/hermes/skills/creative/unprofitable-social-media-agent/SKILL.md
C:/Users/mrmer/AppData/Local/hermes/skills/creative/unprofitable-website-designer/SKILL.md
C:/Users/mrmer/AppData/Local/hermes/skills/creative/unprofitable-agent-communication-system/SKILL.md
C:/Users/mrmer/AppData/Local/hermes/skills/finance/finance-operator-agent/SKILL.md
```

Backup created before edits:

```txt
C:/Users/mrmer/AppData/Local/hermes/backups/unp-agent-cleanup-20260616-113405
```

## Verification

Verified:

- Active Discord config no longer contains CardVault/Omaha/Pokemon/Pokémon text.
- Global `MEMORY.md` no longer contains CardVault/Omaha/Pokemon/Pokémon text.
- Global `USER.md` no longer contains CardVault/Omaha/Pokemon/Pokémon text.
- Active channel prompt IDs are UNPROFITABLE-only.
- Active skill bindings are UNPROFITABLE-only.
- `config.yaml` parses as valid YAML.
- Website branch still exists locally and remotely.
- Current repo branch is still `feature/21stdev-motion-hero`.
- Current repo HEAD remains `8cb62b70b69f1c5507af8e114afed1874cb2cd58`.
- No website branch files were deleted, reverted, staged, or cleaned by this cleanup.

## Current Website Repo Status

```txt
Branch: feature/21stdev-motion-hero
Remote tracking: origin/feature/21stdev-motion-hero
HEAD: 8cb62b70b69f1c5507af8e114afed1874cb2cd58
```

Working tree warning remains active: the repo already contains unrelated modified/untracked files. Do not run broad cleanup commands. Do not stage unrelated files.

## Risks

- Hermes gateway likely needs a restart/new session for config/SOUL/memory/channel prompt changes to take full effect.
- Some UNPROFITABLE docs in the repo are currently untracked; this cleanup wrote source-of-truth/protocol/report files but did not stage or commit them.
- UNPROFITABLE skills still contain deep historical lane-specific behavior by design. The cleanup added a standard architecture section instead of destructively rewriting every skill from scratch.
- Detailed trading strategy memory was removed from global memory; trading work should rely on trading-specific skills/source files going forward.

## Anything Needing Jace Approval

- Whether to restart Hermes gateway now so the cleaned config/persona/memory is active everywhere.
- Whether to commit repo docs changed by this cleanup.
- Which 21st.dev hero section Website Designer should adapt first.
- Whether old Omaha/CardVault skill files should merely remain unused or be archived later. They were not deleted.

## Do Not Touch Until Approved

- Do not delete old Omaha/CardVault skill files unless Jace explicitly approves archival/deletion.
- Do not clean the UNPROFITABLE website working tree blindly.
- Do not delete untracked website/social/agent files without approval.
- Do not revert or overwrite `feature/21stdev-motion-hero`.
- Do not run `npx motion-ai`.
- Do not ask Jace for a Motion API token unless he reverses the Motion AI Kit decision.
