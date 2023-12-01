
interface PageWrapperInterface {
  children: React.ReactNode
}

export default function PageWrapper({ children }: PageWrapperInterface) {
  return <>
    {children}
  </>
}
