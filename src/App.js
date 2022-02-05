import "./App.css";
import { QueryClient, QueryClientProvider } from "react-query";

import { Characters } from "./components";

const queryClient = new QueryClient();

function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <div className="App">
        <Characters />
      </div>
    </QueryClientProvider>
  );
}

export default App;
