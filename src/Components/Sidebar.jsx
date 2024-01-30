export function Sidebar({ children, isOpen, onClickClose }) {
  return (
    <div
      className={`fixed left-0 top-0 h-full w-full z-50 bg-white transition duration-300 transform ${
        isOpen ? "translate-x-0" : "translate-x-full"
    }`}
    >
      <button onClick={onClickClose} className="absolute right-4 top-4 p-2 text-black font-bold">
        x
      </button>
      {children}
    </div>
  );
}
