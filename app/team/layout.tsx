import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Teams",
  description:
    "IoT Lab, KIIT is a team of dedicated students working under a team of competent and encouraging professors guiding us at every phase and step. IoT Lab is technically a research forum exploring the potential of crowdsourcing and Internet of Things for multidisciplinary research  and projects with more end-user interactions.",
  icons: "/images/logo_small.png",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <div>{children}</div>;
}
