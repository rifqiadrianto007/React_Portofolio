import './App.css'
import { useState } from 'react';
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { Home } from "./pages/Home";
import { NotFound } from "./pages/NotFound";
import { Toaster } from "@/components/ui/toaster";
import { LoadingScreen } from "@/components/ui/LoadingScreen";

function App() {
    const [isLoading, setIsLoading] = useState(true);
    const loadingDuration = 3000; // durasi loading (dalam ms)

    // Tampilkan loading screen jika masih loading
    if (isLoading) {
        return (
            <LoadingScreen
                duration={loadingDuration}
                onLoadingComplete={() => setIsLoading(false)}
            />
        );
    }

    return (
        <>
            <Toaster />
            <BrowserRouter>
                <Routes>
                    <Route index element={<Home />} />
                    <Route path="*" element={<NotFound />} />
                </Routes>
            </BrowserRouter>
        </>
    );
}

export default App;