# Next.js モックサーバー

## 仕様ライブラリ

### msw

https://mswjs.io/docs/

### React Query

https://react-query.tanstack.com/

### codegen

https://graphql-code-generator.com/docs/getting-started/index

### graphql-request

https://github.com/prisma-labs/graphql-request

## 動かし方

## yarn dev

- http://localhost:3000 で立ち上げ
- / →Query
- /login →Mutation

## Query, Mutation 書き方

- project 下に schema.json （バックエンドで生成）をおく
- graphql/mutations, graphql/queries に graphql ファイルを設置
- yarn graphql:generate でコードを生成
- hooks/mutation, hooks/query にあるみたいなカスタムフック作成

## モックデータ

- mocks/handler.ts に追加
