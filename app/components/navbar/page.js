import Link from "next/link";
// import Image from "next/image";
// import logo from "./components/next_js_logo.jpeg"

export default function Nabvar() {
  return (
    <div> 
  
      <ul className="flex justify-between m-10 item-center">
      
        <div>
         
          <Link href="/">
            <li>Home</li>
          </Link>
        </div>

        <div className="flex gap-10 ">
          <Link href="/videos">
            <li>Videos</li>
          </Link>
          <Link href="/login">
            <li>Login</li>
          </Link>
          <Link href="/register">
            <li>Register</li>
          </Link>
        </div>
      </ul>
    </div>
  );
}
