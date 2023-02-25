import React from "react";
import { AuthProvider } from "util/auth";
import { ThemeProvider } from "util/theme";
import { QueryClientProvider } from "util/db";

function MyApp({ Component, serverEmotionCache, pageProps }) {
  return (
    <QueryClientProvider>
      <ThemeProvider serverEmotionCache={serverEmotionCache}>
        <AuthProvider>
          <Component {...pageProps} />
        </AuthProvider>
      </ThemeProvider>
    </QueryClientProvider>
  );
}

export default MyApp;
