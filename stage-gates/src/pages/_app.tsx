import "@/styles/globals.css";
import type { AppProps } from "next/app";
import { PipelineProvider } from "@/hook/PipelineContext";
import { TeamProvider } from "@/hook/TeamContext";

export default function App({ Component, pageProps }: AppProps) {
  return (
    <PipelineProvider>
      <TeamProvider>
        <Component {...pageProps} />
      </TeamProvider>
    </PipelineProvider>
  )
}