export default function Title({ children, small }) {
    return (
        <h1 className={`font-LUSER ${small ? 'text-6xl' : 'text-8xl'} text-center m-5`}>{children}</h1>
    )
}
