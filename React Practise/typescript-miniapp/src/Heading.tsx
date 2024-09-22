type HeadingProps = {
  textColor: string;
  children: React.ReactNode;
};

export const Heading = ({ textColor, children }: HeadingProps) => {
  const textStyling = {
    color: textColor,
  };
  return <h1 style={textStyling}>{children}</h1>;
};
