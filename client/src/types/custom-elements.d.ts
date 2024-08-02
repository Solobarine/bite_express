declare namespace JSX {
  interface IntrinsicElements {
    "box-icon": React.DetailedHTMLProps<
      React.HTMLAttributes<HTMLElement>,
      HTMLElement
    > & {
      name?: string;
      type?: string;
      size?: string;
      color?: string;
      className?: string;
    };
  }
}
