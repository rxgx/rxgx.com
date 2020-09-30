# rxgx.com

To deploy changes to `gh-pages` branch:

```
git subtree push --prefix public origin gh-pages
```

To deploy from untracked build directory:

```
git push origin `git subtree split --prefix public main`:gh-pages --force
```
