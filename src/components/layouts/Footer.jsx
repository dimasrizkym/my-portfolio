const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className='px-4 sm:px-8 md:px-16 py-4 border-t border-gray-300'>
        <p className="text-center">© {currentYear} Dimas Rizky</p>
        {/* trigger class line-clamp-2 */}
        <p className="line-clamp-2 hidden"></p>
    </footer>
  )
}

export default Footer