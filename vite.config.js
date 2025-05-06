import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import path from 'path';


// __dirname を使う代わりに import.meta.url を使用
const __dirname = path.dirname(new URL(import.meta.url).pathname);


export default defineConfig({
  plugins: [react()],
  resolve: {
    alias: {
      '@': path.resolve(__dirname, 'src'), // '@' を 'src' ディレクトリにエイリアスします
    },
  },
  server: {
    port: 3000, // ポート番号を指定
    host: '0.0.0.0', // サーバーを外部アクセス可能に設定
  },
  build: {
    outDir: 'build' // ビルド出力先を 'build' に設定
  }
});


