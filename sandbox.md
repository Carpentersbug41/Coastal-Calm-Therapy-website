## Sandbox Deploy Guide (Option A)

Use this to maintain a stable sandbox deployment on Vercel with its own URL, isolated from production. The sandbox is pinned to the `sandbox/vercel` Git branch.

### What you have now
- **Branch**: `sandbox/vercel`
- **Vercel Project**: A separate project linked to this repo
- **Production Branch (for sandbox project)**: `sandbox/vercel`
- **URL**: `https://anxiety-protocol-sandbox.vercel.app/`

### Update the sandbox
1. Make changes locally on the sandbox branch:
   ```bash
   git checkout sandbox/vercel
   # edit code
   git add -A && git commit -m "<your message>"
   git push
   ```
2. Vercel auto-deploys and updates the same sandbox URL.

### Switch back to another branch locally
```bash
git fetch
git checkout <branch-name>
```

### Roll back the sandbox to a previous version
You have two options:
- Git-based: check out an older commit, then push it to `sandbox/vercel`.
  ```bash
  git checkout sandbox/vercel
  git log --oneline
  git checkout <commit-sha>
  git push -f origin HEAD:sandbox/vercel
  ```
- Vercel-based: in the sandbox project Deployments tab, select a previous deployment and click "Promote to Production" (production for the sandbox project).

### Environment variables
- Configure env vars in the sandbox Vercel project (Project Settings → Environment Variables).
- Mirror only what is required. Do not overwrite your local `.env`.
- If you change env vars, redeploy for them to take effect.

### Create the sandbox from scratch (reference)
1. Create/push the branch:
   ```bash
   git checkout -b sandbox/vercel
   git push -u origin sandbox/vercel
   ```
2. In Vercel: New Project → Import your repo → name it like `coastal-calm-sandbox`.
3. Project Settings → Git → set Production Branch to `sandbox/vercel`.
4. Add required environment variables.
5. Deploy. Note the sandbox URL.

### Common tasks
- See current branch: `git branch --show-current`
- List deployments (Vercel CLI): `vercel ls` (optional if CLI installed)
- Trigger redeploy of latest commit: make a no-op commit or use Vercel "Redeploy" from dashboard.

### Cleanup (if ever needed)
- Delete the sandbox project in Vercel (Settings → Danger Zone) – removes the URL.
- Optionally delete the `sandbox/vercel` branch:
  ```bash
  git branch -D sandbox/vercel
  git push origin --delete sandbox/vercel
  ```

### Notes
- The sandbox URL is stable; each push updates the same URL.
- Keep the sandbox isolated: do not point it to production-only services unless intended.
- Production (main site) is unaffected by sandbox unless you explicitly change its project or domain.


