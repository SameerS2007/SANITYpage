export function FilledButton({ children }) {
  return (
    <DefaultButton style="bg-secondary-700 border-secondary-700 text-secondary-100 md:hover:bg-secondary-900 md:hover:border-secondary-900 md:hover:text-secondary-300">
      {children}
    </DefaultButton>
  );
}

export function OutlinedButton({ children }) {
  return (
    <DefaultButton style="border-primary-200 text-primary-200 md:hover:border-primary-400 md:hover:text-primary-400">
      {children}
    </DefaultButton>
  );
}

function DefaultButton({ children, style }) {
  return (
    <button
      className={`inline font-medium bg-transparent border rounded-full md:px-4 px-3.5 md:py-2 py-1.5 md:text-base text-sm transition-colors ${style}`}
    >
      {children}
    </button>
  );
}
