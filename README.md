# img.simochee.net

[Cloudflare Images](https://developers.cloudflare.com/images/) で最適化された画像を配信する Worker。

## Usage

```bash
npm install
```

```bash
npm run dev
```

Wrangler で http://localhost:8787/ が起動します。

Cloudflare Images による最適化は許可されたホスト以外では無効のため、ローカルでは最適化されません。

## Endpoints

### GET /gyazo/:id

Gyazo にアップロードされた画像を最適化して取得します。

[Cloudflare Images の最適化オプション](https://developers.cloudflare.com/images/transform-images/transform-via-workers/) と対応したクエリパラメータを指定できます。  
詳しくは [schema.ts](./src/schema.ts) をご覧ください。

### GET /gyazo/:id/:profile

Gyazo にアップロードされた画像を指定されたプロファイルで最適化して取得します。

プロファイルの一覧は [profile.ts](./src/profile.ts) をご覧ください。

## License

MIT