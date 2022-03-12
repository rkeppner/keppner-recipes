# Build for Hosting

```
bundle exec jekyll build
```

Then upload contents of the `_site` directory to Amazon S3 bucket `recipes.keppner.net`.

```
aws s3 sync _site s3://recipes.keppner.net
```
