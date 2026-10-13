import { useEffect, useRef, useState } from 'react'
import { profile } from '../data/portfolio'
import type { PortfolioShellProps } from '../templates/types'
import { ColorModeButton } from './ui/color-mode'

type NavbarProps = Omit<PortfolioShellProps, 'children'>
export default function Navbar({activeSection, navigationItems, getNavigationHref, onNavigate, layoutMode, onToggleLayoutMode}: NavbarProps) {
 const [open,setOpen] = useState(false)
 const toggle = useRef<HTMLButtonElement>(null)
 const nextLayout = layoutMode === 'single' ? 'Multi-page' : 'Single page'
 useEffect(() => {
  if (!open) return
  const escape = (event: KeyboardEvent) => { if(event.key === 'Escape') {setOpen(false);toggle.current?.focus()} }
  window.addEventListener('keydown',escape)
  return () => window.removeEventListener('keydown',escape)
 },[open])
 return <header className="site-header"><nav className="nav-bar" aria-label="Main navigation">
 <a className="brand" href={getNavigationHref('home')} data-testid="navbar-brand-link" onClick={e=>{e.preventDefault();onNavigate('home');setOpen(false)}}><span className="brand-mark" aria-hidden="true">K<span>·</span></span><span>{profile.name}<small>BIOENGINEERING & BEYOND</small></span></a>
 <div className="desktop-nav">{navigationItems.filter(item=>item.id!=='home').map(item=><a key={item.id} href={getNavigationHref(item.id)} aria-current={activeSection===item.id?'page':undefined} data-testid={`navbar-link-${item.id}`} onClick={e=>{e.preventDefault();onNavigate(item.id)}}>{item.label}</a>)}</div>
 <div className="nav-controls"><ColorModeButton color="var(--text-100)" data-testid="navbar-theme-toggle"/><button className="layout-button" aria-label={`Switch to ${nextLayout} layout`} data-testid="navbar-layout-toggle" onClick={()=>{onToggleLayoutMode();setOpen(false)}}>{layoutMode==='single'?'Chapters':'Full page'}</button><button ref={toggle} className="menu-toggle" aria-expanded={open} aria-controls="mobile-navigation" aria-label={open?'Close menu':'Open menu'} data-testid="navbar-menu-toggle" onClick={()=>setOpen(!open)}>{open?'Close':'Menu'} <span aria-hidden="true">{open?'×':'☰'}</span></button></div>
 </nav>{open&&<nav id="mobile-navigation" className="mobile-nav" aria-label="Section navigation">{navigationItems.map(item=><a key={item.id} href={getNavigationHref(item.id)} aria-current={activeSection===item.id?'page':undefined} data-testid={`navbar-mobile-link-${item.id}`} onClick={e=>{e.preventDefault();onNavigate(item.id);setOpen(false);toggle.current?.focus()}}>{item.label}<span aria-hidden="true">↗</span></a>)}</nav>}</header>
}
