import React from 'react'
import Image from 'next/image';
import logoimg from "../../public/logoimg.jpg";
import Link from 'next/link';

const Navbar = () => {
  return (
     <div className="navbar bg-mylitpink">
  <div className="flex-1">
    <a className="btn btn-ghost hover:bg-myverydarkpink text-myWhite text-xl">Ghaniya khan</a>
  </div>
  <div className="flex-none">
    <div className="dropdown dropdown-end">
      <div tabIndex={0} role="button" className="btn btn-ghost btn-circle avatar">
        <div className="w-14  rounded-full">
          <Image alt='logo' src={logoimg}/>
        </div></div><ul
        tabIndex={0}
        className="menu menu-sm dropdown-content bg-mylitpink rounded-box z-[1] mt-3 w-52 p-2 shadow">
        <li> <Link href={'/'}>Home</Link></li>
        {/* <li className='cursor-pointer'>
        <Link href={'/blog'}>Blog</Link>
        </li> */}
        <li>
        <details>
          <summary>Blog</summary>
          <ul className="p-2">
          <li>
            <Link href={"/eyes"}>Eyes</Link>
          </li>
          <li><Link href={"/lips"}>Lips</Link></li>
          <li><Link href={"/face"}>Face</Link></li>
          <li><Link href={"/nails"}>Nails</Link></li> 
          <li><Link href={"accessories"}>Accessories</Link></li>
          <li><Link href={"/skincare"}>Skin Care</Link></li>
          <li><Link href={"/haircare"}>Hair Care</Link></li>
          </ul>
        </details>
      </li>
        <li><Link href={"/contact"}>Contact</Link></li>
      </ul>
    </div>
  </div>
</div>)}
export default Navbar;



// const ListItem = React.forwardRef<
//   React.ElementRef<"a">,
//   React.ComponentPropsWithoutRef<"a">
// >(({ className, title, children, ...props }, ref) => {
//   return (
//     <li>
//       <asChild>
//         <a
//           ref={ref}
//           className={cn(
//             "block select-none space-y-1 rounded-md p-3 leading-none no-underline outline-none transition-colors hover:bg-accent hover:text-accent-foreground   focus:bg-accent focus:text-accent-foreground",
//             className
//           )}
//           {...props}
//         >
//           <div className="text-sm font-medium leading-none hover:text-mynormalpink duration-300">{title}</div>
//           <p className="line-clamp-2 text-sm leading-snug text-muted-foreground">
//             {children}
//           </p>
//         </a>
//       </>
//     </li>
//   )
// })
// ListItem.displayName = "ListItem"