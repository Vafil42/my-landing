import Header from "./Header";

interface PageWrapperInterface {
  children: React.ReactNode;
}

export default function PageWrapper({ children }: PageWrapperInterface) {
  return (
    <>
      <Header />
      {children}
    </>
  );
}
