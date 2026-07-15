import "@/styles/globals.css";
import type { AppProps } from "next/app";
import { Toaster } from 'react-hot-toast';
import { PipelineProvider } from "@/hook/PipelineContext";
import { TeamProvider } from "@/hook/TeamContext";
import { ProjectProvider } from "@/hook/ProjectContext";

export default function App({ Component, pageProps }: AppProps) {
  return (
    <ProjectProvider>
      <PipelineProvider>
        <TeamProvider>
          <Component {...pageProps} />
          <Toaster position="top-right" toastOptions={{ duration: 4000 }} />
        </TeamProvider>
      </PipelineProvider>
    </ProjectProvider>
  )
}