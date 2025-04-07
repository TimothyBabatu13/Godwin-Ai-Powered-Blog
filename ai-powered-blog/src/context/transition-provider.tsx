import { unstable_ViewTransition as TransitionView } from 'react'
const TransitionProvider = ({ children } : {
    children: React.ReactNode
}) => {
  return (
    <TransitionView name='page'>
        {children}
    </TransitionView>
  )
}

export default TransitionProvider