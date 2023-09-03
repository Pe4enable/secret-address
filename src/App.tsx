// import '@coreui/coreui/dist/css/coreui.min.css';
import './App.css';
//wallet import
import '@rainbow-me/rainbowkit/styles.css';
import {
  RainbowKitProvider,
  lightTheme
} from '@rainbow-me/rainbowkit';

import { connectorsForWallets } from '@rainbow-me/rainbowkit';
import {
  metaMaskWallet,
  trustWallet,
  injectedWallet,
  rainbowWallet,
  walletConnectWallet,
  coinbaseWallet,
} from '@rainbow-me/rainbowkit/wallets';

import { configureChains, createConfig, WagmiConfig } from 'wagmi';
import { opBNBMainnet, opBNBTestnet } from './utils/chain.ts'
import { Main } from './pages/main';
import { xdcTestnet } from './utils/xdcTestnet';
import { xdc } from './utils/xdc';
import './index.css'
import { publicProvider } from 'wagmi/providers/public';

const projectId = import.meta.env.VITE_PROJECT_ID;
const { chains, publicClient } = configureChains(
  [opBNBMainnet, opBNBTestnet, xdcTestnet, xdc],
  [
    publicProvider()
  ]
);

const connectors = connectorsForWallets([
  {
    groupName: 'Recommended',
    wallets: [
      metaMaskWallet({ projectId, chains }),
      trustWallet({ projectId, chains }),
    ]
  },
  {
    groupName: 'Others',
    wallets: [
      coinbaseWallet({ chains, 
        appName: 'Spacetar | A Community Empowering Mental Well-Being' }),
      injectedWallet({ chains }),
      rainbowWallet({ projectId, chains }),
      walletConnectWallet({ projectId, chains }),
    ],
  },
]);


const wagmiConfig = createConfig({
  autoConnect: true,
  connectors,
  publicClient
})

// window.Buffer = window.Buffer || require('buffer').Buffer;

function App() {
  return (
    <>
<WagmiConfig config={wagmiConfig}>
      <RainbowKitProvider 
      theme={lightTheme({
        accentColor: '#1570ef',
        accentColorForeground: 'white',
        borderRadius: 'small',
        fontStack: 'system',
        overlayBlur: 'small'
      },
      )}
      chains={chains}>
        <Main />
      </RainbowKitProvider>
      </WagmiConfig>

    </>
  );
}

export default App;
