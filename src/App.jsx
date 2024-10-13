import { BranchesAndTracksProvider } from "./contexts/BranchesAndTracksContext";
import MultiStepForm from "./pages/MultiStepForm";
function App() {
  return (
    <>
      <BranchesAndTracksProvider>
        <MultiStepForm />
      </BranchesAndTracksProvider>
    </>
  );
}

export default App;
