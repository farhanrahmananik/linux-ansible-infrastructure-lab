# Linux Ansible Infrastructure Lab Validation Checklist

## Environment

- [x] Control node is Ubuntu 26.04 LTS.
- [x] Ansible package version is 13.1.0+dfsg-1ubuntu1.
- [x] ansible-core version is 2.20.1-1.
- [x] Managed nodes are `linux-node-01` and `linux-node-02`.
- [x] Both managed nodes passed Ansible ping.
- [x] Control node and both managed nodes have zero failed systemd units.

## Playbook Validation

- [x] All 8 playbooks passed syntax validation.
- [x] All playbooks correctly target the `managed_nodes` inventory group.
- [x] User/group automation passed idempotency validation.
- [x] Package automation passed immediate idempotency validation after the expected APT cache refresh.
- [x] UFW firewall baseline passed idempotency validation.
- [x] SSH hardening passed idempotency validation.
- [x] Nginx deployment passed idempotency validation.
- [x] Backup automation passed idempotency validation.
- [x] Maintenance automation passed idempotency validation.
- [x] Log collection completed successfully.

## Security Baseline

- [x] SSH effective setting `PermitRootLogin no` confirmed.
- [x] SSH effective setting `PasswordAuthentication no` confirmed.
- [x] SSH effective setting `PubkeyAuthentication yes` confirmed.
- [x] UFW is active.
- [x] UFW allows OpenSSH.
- [x] UFW allows Nginx HTTP.

## Web Service

- [x] Nginx is active and enabled.
- [x] Nginx page title is `Linux Infrastructure Automation Lab`.

## Backup And Maintenance

- [x] Backup timer is active and enabled.
- [x] `logrotate.timer` is enabled and active.
- [x] `systemd-tmpfiles-clean.timer` is static and active.

## Evidence Safety

- [x] Scope 4-8 evidence and refreshed collected logs passed the refined public-safety scan.
- [x] The two netmask matches in Scope 4 evidence were reviewed and confirmed as false positives.

## Validation Status

Technical validation passed. Screenshot and documentation work remains part of Scope 9.
