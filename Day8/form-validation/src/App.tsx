import RegistrationForm from "./components/RegistrationForm";
import {Toaster} from "sonner";

function App() {
  return (
    <main className="min-h-screen bg-slate-100 flex items-center justify-center p-6">
      <Toaster position="top-right" richColors/>
      <RegistrationForm />
    </main>
  );
}

export default App;