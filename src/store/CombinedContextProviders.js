import ContextProviderComposer from './ContextProviderComposer';
import { GlobalStateProvider } from './global/global.provider'; 

const CombinedContextProviders = ({ children }) => {
  return (
    <ContextProviderComposer
      contextProviders={[<GlobalStateProvider key={"global_state_provider"} />]}
    >
      {children}
    </ContextProviderComposer>
  )
};

export default CombinedContextProviders;