# Linux Ansible Infrastructure Lab Troubleshooting Guide

This guide summarizes real issues encountered during Scopes 1-9 and the practical fixes used to keep validation clean, repeatable, and public-safe.

## Git Repository Not Initialized

### Symptom

`fatal: not a git repository`

### Cause

The `.git` directory did not exist in the project directory.

### Resolution

Confirm repository status before using Git commands.

```bash
git status
```

### Validation

Git commands should only be used after confirming the project is initialized as a Git repository.

## Missing Sudo Password During Ansible Validation

### Symptom

`Task failed: Missing sudo password`

### Cause

Privilege escalation required authentication on the managed nodes.

### Resolution

Rerun privileged validation with become password prompting.

```bash
ansible-playbook --ask-become-pass playbook.yml
```

Never store or expose sudo passwords.

### Validation

Privileged validation completes only when authentication is provided securely.

## Deprecated Ansible `-o` Option

### Symptom

Deprecation warning for the oneline callback.

### Cause

`ansible-core` 2.20 reports future removal of the oneline callback behavior used by `-o`.

### Resolution

Remove `-o` and use standard Ansible output.

### Validation

Commands run without the deprecation warning while preserving readable validation output.

## Expected APT Cache Change During Idempotency Check

### Symptom

`changed=1` for `Update apt package cache`.

### Cause

The `cache_valid_time` value of 3600 seconds had expired.

### Resolution

Refresh the cache, then immediately rerun check mode.

```bash
ansible-playbook playbook.yml
ansible-playbook playbook.yml --check
```

### Validation

Final result was `changed=0` and `failed=0` on both managed nodes.

## Public-Safety Scan False Positive

### Symptom

Possible IP matches in `system-facts-public.txt`.

### Cause

Netmask values matched the IPv4 pattern.

### Resolution

Inspect matching categories safely, confirm they were netmasks, and exclude reviewed netmask lines from the refined scan.

### Validation

The refined public-safety scan passed after the reviewed netmask false positives were excluded.

## Check-Mode Tasks Skipped

### Symptom

Some tasks were skipped during check mode, including SSH or firewall reconnection validation, backup execution, and the maintenance journal entry.

### Cause

These tasks intentionally do not run in check mode.

### Resolution

Treat skipped status as expected when `failed=0` and configuration tasks remain unchanged.

### Validation

Check-mode validation remained acceptable when skipped operational tasks were expected and configuration idempotency still showed no changes.
