type Props = { logoKey: string; logoLabel: string; logoAccent?: string; size?: 'xs'|'sm'|'md'|'lg' }
export default function LogoMark({logoLabel}: Props) {return <span className="logo-mark" role="img" aria-label={logoLabel}>✳</span>}
