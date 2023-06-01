const Highlight: React.FC<{ children: React.ReactNode }> = ({ children }) => (
  <span className="text-teal-400">{children}</span>
);

export const Title: React.FC<{
  children: React.ReactNode;
}> & { Highlight: typeof Highlight } = ({ children }) => (
  <h1 className="text-center text-5xl font-extrabold text-gray-300 md:text-7xl">{children}</h1>
);

Title.Highlight = Highlight;
