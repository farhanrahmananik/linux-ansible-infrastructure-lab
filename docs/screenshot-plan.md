# Scope 9 Screenshot Plan

Future screenshots should be stored under `screenshots/scope-9/`. Crop or redact terminal prompts, personal details, and any unnecessary identifying information. Do not include IP addresses, MAC addresses, UUIDs, passwords, private keys, personal paths, email addresses, or other sensitive data.

## 1. Hyper-V Architecture

- [x] Suggested filename: `screenshots/scope-9/01-hyper-v-architecture.png`
  - What must be visible: Three running VMs named `ansible-control`, `linux-node-01`, and `linux-node-02`.
  - Caption: Hyper-V lab topology with one Ansible control node managing two Linux nodes.

## 2. Ansible Inventory

- [x] Suggested filename: `screenshots/scope-9/02-ansible-inventory-graph.png`
  - What must be visible: Inventory graph showing the `managed_nodes` group and both managed nodes.
  - Caption: Ansible inventory structure for the managed Linux nodes.

## 3. Ansible Connectivity

- [x] Suggested filename: `screenshots/scope-9/03-ansible-ping-success.png`
  - What must be visible: Successful Ansible ping results for `linux-node-01` and `linux-node-02`.
  - Caption: Connectivity validation confirms Ansible can reach both managed nodes.

## 4. Playbook Validation

- [x] Suggested filename: `screenshots/scope-9/04-playbook-syntax-validation.png`
  - What must be visible: All eight playbooks passing syntax validation.
  - Caption: Playbook syntax validation completed successfully across the lab.

- [x] Suggested filename: `screenshots/scope-9/05-idempotency-recap.png`
  - What must be visible: Representative play recap showing `changed=0` and `failed=0`.
  - Caption: Idempotency validation shows stable automation results on repeat runs.

## 5. Security Baseline

- [x] Suggested filename: `screenshots/scope-9/06-ssh-effective-settings.png`
  - What must be visible: Effective SSH settings: `permitrootlogin no`, `passwordauthentication no`, and `pubkeyauthentication yes`.
  - Caption: SSH hardening baseline is active on the managed nodes.

- [x] Suggested filename: `screenshots/scope-9/07-ufw-baseline.png`
  - What must be visible: UFW active with OpenSSH and Nginx HTTP allowed.
  - Caption: Firewall baseline allows required administration and web traffic only.

## 6. Nginx Deployment

- [x] Suggested filename: `screenshots/scope-9/08-nginx-service-status.png`
  - What must be visible: Nginx service active and enabled.
  - Caption: Nginx is installed, running, and enabled through Ansible automation.

- [x] Suggested filename: `screenshots/scope-9/09-nginx-landing-page.png`
  - What must be visible: Browser view of the Linux Infrastructure Automation Lab landing page.
  - Caption: Portfolio landing page confirms the managed web service is live.

## 7. Backup And Maintenance

- [x] Suggested filename: `screenshots/scope-9/10-backup-timer-status.png`
  - What must be visible: Backup timer active and enabled.
  - Caption: Automated configuration backups are scheduled with a systemd timer.

- [x] Suggested filename: `screenshots/scope-9/11-maintenance-timers.png`
  - What must be visible: `logrotate.timer` active and `systemd-tmpfiles-clean.timer` active.
  - Caption: Standard maintenance timers are active for log rotation and temporary file cleanup.

- [x] Suggested filename: `screenshots/scope-9/12-backup-integrity.png`
  - What must be visible: Backup archive integrity validation passing.
  - Caption: Backup archive integrity checks confirm the generated configuration backup is readable.

## 8. Final Validation

- [x] Suggested filename: `screenshots/scope-9/13-zero-failed-systemd-units.png`
  - What must be visible: Control node and managed nodes showing zero failed systemd units.
  - Caption: System health validation shows no failed systemd units across the lab.

- [x] Suggested filename: `screenshots/scope-9/14-public-safety-scan.png`
  - What must be visible: Public-safety scan passing.
  - Caption: Evidence and collected logs were checked for sensitive values before portfolio use.
