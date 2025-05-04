import { Icon } from '@/components/icon';
import { Bell, Menu, X } from 'lucide-react';
import { useEffect, useRef, useState } from 'react';
function Header() {
  const [isOpen, setIsOpen] = useState(false);
  const menuRef = useRef<HTMLDivElement>(null);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  // Tutup menu saat klik di luar
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (menuRef.current && !menuRef.current.contains(event.target as Node)) {
        setIsOpen(false);
      }
    };

    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, []);

  return (
    <nav className="fixed top-0 z-50 mx-auto w-full max-w-sm bg-slate-50 p-4">
      <div className="flex items-center justify-between">
        <div className="flex w-8/12 items-center">
          <div className="relative mr-2 size-12 rounded-full border-[2px] border-sky-300">
            <img src="https://avatar.iran.liara.run/public/boy" alt="avatar" className="absolute h-full w-full bg-cover object-cover" />
          </div>
          <div className="flex flex-col">
            <div className="text-xs leading-relaxed font-light text-slate-500">Hyy</div>
            <div className="text-sm leading-relaxed font-medium text-sky-800">Edi Koswara</div>
          </div>
        </div>
        <div className="flex w-4/12 justify-end gap-4">
          <Bell className="h-6 w-6 text-rose-700" />
          {isOpen ? (
            <Icon iconNode={X} className="h-6 w-6 text-rose-700" onClick={toggleMenu} />
          ) : (
            <Icon iconNode={Menu} className="h-6 w-6 text-sky-700" onClick={toggleMenu} />
          )}
        </div>
      </div>

      {/* Navigation */}
      <div
        className={`${isOpen ? 'block scale-100 transition-all duration-300 ease-in-out' : 'hidden scale-95 transition-all duration-300 ease-in-out'} scale-100 pt-2`}
        ref={menuRef}
      >
        <div className="rounded-md p-2 text-xs font-medium text-sky-700 hover:bg-sky-700 hover:text-sky-50">Home</div>
        <div className="rounded-md p-2 text-xs font-medium text-sky-700 hover:bg-sky-700 hover:text-sky-50">About Us</div>
        <div className="rounded-md p-2 text-xs font-medium text-sky-700 hover:bg-sky-700 hover:text-sky-50">Contact Us</div>
        <div className="mt-2 space-y-2">
          <div className="rounded-md bg-sky-700 p-2 text-center text-xs font-medium text-sky-50">Login</div>
          <div className="rounded-md bg-rose-700 p-2 text-center text-xs font-medium text-sky-50">Register</div>
        </div>
        <div className="mt-2 rounded-full border-2 border-b border-sky-500"></div>
      </div>
    </nav>
  );
}

export default Header;
