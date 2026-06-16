# UNPROFITABLE Agent Communication Protocol

Source skill: `unprofitable-agent-communication-system`

## Working Rule

```text
If another agent owns the truth, delegate before you claim.
```

## Shared-State Rule

Agents do not remember the business through chat.
Agents remember the business through source-of-truth files.
Discord is for visible output.
Repo docs are the actual shared state.
Jace is the final decision maker.

## Runtime Rule

The active communication runtime is tracker-driven, not Discord-history-driven:

```text
tracker row → visible acknowledgment → generated agent deliverable → optional child handoff → support reply routed back → Jace activity feed mirror
```

The dispatcher script is:

```text
C:\Users\mrmer\AppData\Local\hermes\scripts\unp_cross_agent_dispatcher.py
Cron job: 3794ff7569e5 — UNP visible cross-agent dispatcher — every 10m
```

Agents do not rely on reading prior Discord messages. The shared inbox is `docs/agents/cross-agent-task-tracker.md`; the shared memory is `docs/agents/shared-agent-source-of-truth.md`.

Preserve dispatcher behavior:

- Read `docs/agents/cross-agent-task-tracker.md`.
- Read `docs/agents/shared-agent-source-of-truth.md`.
- Read `docs/agents/agent-communication-protocol.md`.
- Only send visible Discord messages when a real task requires acknowledgment/deliverable.
- Patch tracker after sending.
- Do not spam.
- Never resend if tracker already contains a message ID.
- Treat repo docs as the inbox/eyes.
- Do not change dispatcher into a general chatter bot.
- Do not create or schedule cron jobs from the dispatcher.

## Agent Handoff

From:
To:
Task:
Why this agent owns it:
Source files:
Current facts:
Assumptions:
Risks:
Needed output:
Deadline / priority:
Needs Jace approval:
Tracker ID:

## Handoff Acknowledgment

Receiving agent:
Tracker ID:
Accepted? Yes / No / Needs Clarification
Understanding:
Deliverable:
Questions / missing info:
Expected completion:
Needs another agent? Yes / No
If yes, which agent and why:

## Agent Deliverable

Agent:
Tracker ID:
Status: Ready For Review / Waiting On Agent / Waiting On Jace / Blocked / Complete
What changed:
Facts:
Assumptions:
Risks:
Decision / output:
Next owner:
Needs Jace? Yes / No
Source files:
Latest Discord message ID:

## Launch Decision Request

Decision needed:
Prepared by:
Context:
Options:
Recommendation:
Risk:
What approval unlocks:
What happens if delayed:
Source files:

## Tracker Item Requirements

Every tracker item must include:

- ID
- owner
- status
- source files
- latest message ID if sent to Discord
- next required action
- whether Jace approval is needed

Allowed statuses:

```text
New
Assigned
Acknowledged
In Progress
Waiting On Agent
Waiting On Jace
Blocked
Ready For Review
Complete
Cancelled
```

## Cross-Agent Conflict

Issue:
Agents involved:
Agent A position:
Agent B position:
Facts confirmed:
Facts missing:
Risk:
Recommended decision path:
Needs Jace approval? Yes / No

## Weekly Cross-Agent Summary

Overall status: Green / Yellow / Red

Top progress:
1.
2.
3.

Top blockers:
1.
2.
3.

Open delegations:
1.
2.
3.

Waiting on Jace:
1.
2.
3.

Risks of agents being out of sync:
1.
2.
3.

Next cross-agent priorities:
1.
2.
3.
