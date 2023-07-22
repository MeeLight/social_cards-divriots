// Node
import { resolve } from 'path'

// Vite
import {
  defineConfig,
  loadEnv,
  type UserConfig,
  type UserConfigExport
} from 'vite'

// Plugins
import react from '@vitejs/plugin-react-swc'

export default ({ mode }: UserConfig): UserConfigExport => {
  const env = { ...process.env, ...loadEnv(mode, process.cwd()) }

  return defineConfig({
    plugins: [react()],
    resolve: {
      alias: {
        '@app': resolve(__dirname, './src/app'),
        '@assets': resolve(__dirname, './src/assets'),
        '@icons': resolve(__dirname, './src/assets/icons'),
        '@components': resolve(__dirname, './src/components'),
        '@layouts': resolve(__dirname, './src/layouts'),
        '@data': resolve(__dirname, './src/data')
      }
    },
    server: {
      host: true,
      port: +env.VITE_PORT
    }
  })
}
