import { defineConfig } from 'vitest/config';
import react from '@vitejs/plugin-react';
import path from 'path';

export default defineConfig({
  plugins: [react()],
  test: {
    globals: true, // describe, it, expect などのグローバルAPIを有効化
    environment: 'jsdom', // ブラウザ環境をエミュレート
    setupFiles: './setup.ts', // テスト実行前に読み込むセットアップファイル
    coverage: {
      provider: 'istanbul', // カバレッジプロバイダー
      reporter: ['text', 'json', 'html'], // カバレッジレポーター
      exclude: ['node_modules/', 'test/'], // カバレッジ計測から除外するディレクトリ
    },
    // ファイル拡張子の指定
    include: ['**/*.{test,spec}.{ts,tsx}'],
    // パスエイリアスの設定（必要に応じて調整）
    alias: {
      '@': path.resolve(__dirname, '.'),
    },
  },
});
