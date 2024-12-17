import NavigationBar from '../Navigation/NavigationBar'
 
export default function Layout({ children }) {
    return (
      <div className="relative">
        <NavigationBar className="absolute top-0 left-0 w-full z-10" />
        <main className="relative z-0">{children}</main>
      </div>
    );
  }