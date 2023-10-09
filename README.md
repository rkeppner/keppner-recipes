# Build for Hosting

## Mac OS X Initial Setup

1. Make sure [Homebrew](https://brew.sh/) is installed.
1. Install Ruby via Homebrew and configure.
    ```
    brew install ruby
    echo 'export PATH="/opt/homebrew/opt/ruby/bin:$PATH"' >> ~/.zshrc
    echo 'export LDFLAGS="-L/opt/homebrew/opt/ruby/lib"' >> ~/.zshrc
    echo 'export CPPFLAGS="-I/opt/homebrew/opt/ruby/include"' >> ~/.zshrc
    source ~/.zshrc
    ```
1. Install AWS CLI.
    ```
    brew install aws aws-shell
    ```
1. Install Bundler.
    ```
    gem install bundler
    bundle update --bundler
    bundle update
    bundle add rexml
    bundle install
    ```

## Build and Deploy

Build the static site.

```
bundle exec jekyll build
```

Then upload contents of the `_site` directory to Amazon S3 bucket `recipes.keppner.net`.

```
aws s3 sync _site s3://recipes.keppner.net
```
