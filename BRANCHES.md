# Branch policy

This fork of [Vinzent03/obsidian-git](https://github.com/Vinzent03/obsidian-git) keeps upstream history and local work apart.

| Branch | Role |
| --- | --- |
| `master` | Mirror of upstream `Vinzent03/obsidian-git` `master`. Do not commit local changes here. [`.github/workflows/sync-upstream.yml`](.github/workflows/sync-upstream.yml) hard-resets it to upstream. |
| `wta` | Default branch. Plugin changes (including English/中文 i18n) live here. Upstream updates are merged in with `git merge --no-ff master`, so `git log` records each sync. |

Manual sync:

```sh
git fetch upstream master
git checkout master
git reset --hard upstream/master
git push origin master
git checkout wta
git merge --no-ff master -m "merge: sync upstream master into wta"
git push origin wta
```

If the merge conflicts, resolve it on `wta` and commit the merge. Do not rebase the upstream commits away.
