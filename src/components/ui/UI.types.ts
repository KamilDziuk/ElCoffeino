import * as LabelPrimitive from "@radix-ui/react-label";
export interface PropsType extends React.InputHTMLAttributes<HTMLInputElement> {}
export type LabelProps = React.ComponentPropsWithoutRef<
  typeof LabelPrimitive.Root
>;