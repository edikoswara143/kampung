interface AppContainerProps {
  title?: string;
  children: React.ReactNode;
}

export default function AppContainerLayout({ children }: AppContainerProps) {
  return <div className="mx-auto flex min-h-screen w-full max-w-sm flex-col bg-slate-50">{children}</div>;
}
