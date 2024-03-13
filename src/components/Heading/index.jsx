import React from "react";

const sizes = {
  s: "text-[22px] font-semibold",
  md: "text-[25px] font-black",
  xs: "text-[17px] font-semibold",
  lg: "text-[28px] font-semibold",
};

const Heading = ({ children, className = "", size = "s", as, ...restProps }) => {
  const Component = as || "h6";

  return (
    <Component className={`text-blue_gray-800 font-inter ${className} ${sizes[size]}`} {...restProps}>
      {children}
    </Component>
  );
};

export { Heading };
