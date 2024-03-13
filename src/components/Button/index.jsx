import React from "react";
import PropTypes from "prop-types";

const shapes = {
  round: "rounded-[15px]",
  circle: "rounded-[50%]",
};
const variants = {
  fill: {
    white_A700: "bg-white-A700 shadow-xs",
    pink_50: "bg-pink-50",
    orange_50: "bg-orange-50",
    blue_50: "bg-blue-50",
    cyan_50: "bg-cyan-50",
    indigo_A700_02: "bg-indigo-A700_02 text-white-A700",
    gray_100: "bg-gray-100",
  },
};
const sizes = {
  sm: "h-[30px] px-[7px]",
  xs: "h-[25px] px-1.5",
  "2xl": "h-[50px] px-[35px] text-lg",
  "4xl": "h-[55px] px-[13px]",
  md: "h-[40px] px-[35px] text-[15px]",
  xl: "h-[45px] px-[13px]",
  "3xl": "h-[50px] px-3",
  lg: "h-[40px] px-[11px]",
};

const Button = ({
  children,
  className = "",
  leftIcon,
  rightIcon,
  shape = "",
  variant = "fill",
  size = "lg",
  color = "gray_100",
  ...restProps
}) => {
  return (
    <button
      className={`${className} flex items-center justify-center text-center cursor-pointer ${(shape && shapes[shape]) || ""} ${(size && sizes[size]) || ""} ${(variant && variants[variant]?.[color]) || ""}`}
      {...restProps}
    >
      {!!leftIcon && leftIcon}
      {children}
      {!!rightIcon && rightIcon}
    </button>
  );
};

Button.propTypes = {
  className: PropTypes.string,
  children: PropTypes.node,
  leftIcon: PropTypes.node,
  rightIcon: PropTypes.node,
  shape: PropTypes.oneOf(["round", "circle"]),
  size: PropTypes.oneOf(["sm", "xs", "2xl", "4xl", "md", "xl", "3xl", "lg"]),
  variant: PropTypes.oneOf(["fill"]),
  color: PropTypes.oneOf(["white_A700", "pink_50", "orange_50", "blue_50", "cyan_50", "indigo_A700_02", "gray_100"]),
};

export { Button };
