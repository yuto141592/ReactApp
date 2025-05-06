export function Button({ children, className = '', ...props }) {
    return (
      <button
        className={`bg-blue-500 text-white px-4 py-2 rounded-lg hover:bg-blue-600 active:scale-95 transition ${className}`}
        {...props}
      >
        {children}
      </button>
    );
  }
  