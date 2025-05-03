import { Icon } from '@/components/icon';
import { Bell, Menu } from 'lucide-react';
function Header() {
  return (
    <div className="fixed top-0 z-50 mx-auto w-full max-w-sm bg-slate-50 p-4">
      <div className="flex items-center justify-between">
        <div className="flex w-8/12 items-center">
          <div className="relative mr-2 size-12 rounded-full border border-sky-300 bg-lime-200"></div>
          <div className="flex flex-col">
            <div className="text-xs leading-relaxed font-light text-slate-500">Hyy</div>
            <div className="text-sm leading-relaxed font-medium text-sky-800">Edi Koswara</div>
          </div>
        </div>
        <div className="flex w-4/12 justify-end gap-4">
          <Bell className="h-6 w-6 text-rose-700" />
          <Icon iconNode={Menu} className="h-6 w-6 text-sky-700" />
        </div>
      </div>

      {/* Navigation */}
      <div className="hidden pt-2">
        <ul className="">
          <li className="rounded-md p-2 text-xs font-medium text-sky-700 hover:bg-sky-700 hover:text-sky-50">Home</li>
          <li className="rounded-md p-2 text-xs font-medium text-sky-700 hover:bg-sky-700 hover:text-sky-50">About Us</li>
          <li className="rounded-md p-2 text-xs font-medium text-sky-700 hover:bg-sky-700 hover:text-sky-50">Contact Us</li>
          <li className="rounded-md p-2 text-xs font-medium text-sky-700 hover:bg-sky-700 hover:text-sky-50">Login</li>
          <li className="rounded-md p-2 text-xs font-medium text-sky-700 hover:bg-sky-700 hover:text-sky-50">Register</li>
        </ul>
      </div>
    </div>
  );
}

export default Header;
