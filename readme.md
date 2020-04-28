
laravel mix
https://qiita.com/shunyaendoh/items/0db9f1257e2c25801012
https://www.willstyle.co.jp/blog/1836/

ongaq
https://www.ongaqjs.com/dashboard/


css
https://tekito-style.me/columns/laravel-css-changes



heroku
以下の事前準備を行って下さい。
$ wget https://cli-assets.heroku.com/heroku-linux-x64.tar.gz -O heroku.tar.gz
$ sudo mkdir -p /usr/local/lib/heroku
$ sudo tar --strip-components 1 -zxvf heroku.tar.gz -C /usr/local/lib/heroku
$ sudo ln -s /usr/local/lib/heroku/bin/heroku /usr/local/bin/heroku
Herokuへログインする
ターミナル上で、Heroku にログインします。
$ heroku login -i
Enter your Heroku credentials.
Email: Herokuに登録したメールアドレスを入力
Password: Herokuに登録したパスワードを入力
$ heroku create Herokuアプリ名
$ git remote -v
Heroku アプリ用に Procfile というファイル名前のファイルを作成します。 Procfile は「Herokuで何のWebサーバソフトウェアを使うか」を指定をするためのファイルです。
 フォルダの直下で、下記のコマンドをコピー＆ペーストで実行しましょう。これにより、 message-board フォルダの直下に Procfile が作成されます。
$ echo "web: vendor/bin/heroku-php-apache2 public/" > Procfile
Procfileに以下を記載
web: vendor/bin/heroku-php-apache2 public/
その後、Herokuの環境変数の設定
heroku addons:create heroku-postgresql:hobby-dev
heroku config
$ heroku config:set DB_CONNECTION=pgsql DB_USERNAME=ユーザ名 DB_PASSWORD=パスワード DB_HOST=ホスト名 DB_DATABASE=データベース名
