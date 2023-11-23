import React from "react";
import { ErrorMessage } from "../../components/ErrorMessage";

const shapes = { square: "rounded-none" };
const sizes = { xs: "pt-0.5" };

export type CheckboxProps = Omit<
  React.DetailedHTMLProps<
    React.InputHTMLAttributes<HTMLInputElement>,
    HTMLInputElement
  >,
  "size" | "prefix" | "type" | "onChange"
> &
  Partial<{
    inputClassName: string;
    className: string;
    name: string;
    label: string;
    errors: string[];
    id: string;
    onChange: Function;

    shape: keyof typeof shapes;

    size: keyof typeof sizes;
  }>;

const CheckBox = React.forwardRef<HTMLInputElement, CheckboxProps>(
  (
    {
      inputClassName = "",
      className = "",
      name = "",
      children,
      label = "",
      errors = [],
      id = "checkbox_id",
      onChange,

      shape = "",

      size = "",
      ...restProps
    },
    ref,
  ) => {
    const handleChange: React.ChangeEventHandler<HTMLInputElement> = (e) => {
      if (onChange) onChange(e?.target?.checked);
    };

    return (
      <>
        <div className={className}>
          <input
            className={`${inputClassName} ${(shape && shapes[shape]) || ""} ${
              (size && sizes[size]) || ""
            }`}
            ref={ref}
            type="checkbox"
            name={name}
            onChange={handleChange}
            {...restProps}
            id={id}
          />
          <label htmlFor={id}>{label}</label>
        </div>
        <ErrorMessage errors={errors} />
        {children}
      </>
    );
  },
);

export { CheckBox };
