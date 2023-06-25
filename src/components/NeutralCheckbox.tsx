import { type ChangeEvent, type MouseEventHandler, type RefObject, useRef, useState } from 'react';
import { Box, Input, type InputProps } from '@chakra-ui/react';
import { type IconBaseProps, type IconType } from 'react-icons';
import { RiCheckLine, RiCloseLine, RiQuestionMark } from 'react-icons/ri';

const trilean = {
  true: RiCheckLine,
  false: RiCloseLine,
  neutral: RiQuestionMark,
} as const;

export type Trilean = keyof typeof trilean;

type NeutralCheckboxProps = Omit<InputProps, "onChange" | "defaultValue" | "type" | "value"> & {
  ref?: RefObject<HTMLInputElement> | undefined;
  defaultValue?: Trilean;
  value?: Trilean;
  onChange?: (event: ChangeEvent<HTMLInputElement>) => void;
  trueIcon?: IconType;
  falseIcon?: IconType;
  neutralIcon?: IconType;
  iconStyle?: IconBaseProps;
};

export default function NeutralCheckbox({
  ref,
  hidden,
  value,
  defaultValue,
  onChange,
  trueIcon = trilean.true,
  falseIcon = trilean.false,
  neutralIcon = trilean.neutral,
  iconStyle,
  ...otherProps
}: NeutralCheckboxProps) {
  const inputRef = useRef<HTMLInputElement>(null);
  const [currentValue, setCurrentValue] = useState<Trilean>(defaultValue ?? "neutral");

  const handleCheckboxChange: MouseEventHandler<HTMLDivElement> = () => {
    let newValue: Trilean;

    switch (currentValue) {
      case "true":
        newValue = "false";
        break;
      case "false":
        newValue = "neutral";
        break;
      default:
        newValue = "true";
        break;
    }

    setCurrentValue(newValue);
    const inputRefr = ref !== undefined ? ref : inputRef;
    if(inputRefr.current !== null) {
      inputRefr.current.value = newValue;
      const syntheticEvent: ChangeEvent<HTMLInputElement> = {
        target: inputRefr.current,
        currentTarget: inputRefr.current,
        persist: () => { },
        nativeEvent: new Event("onChange"),
        bubbles: false,
        cancelable: false,
        defaultPrevented: false,
        eventPhase: 0,
        isTrusted: false,
        preventDefault: () => {},
        isDefaultPrevented:  () => false,
        stopPropagation:  () => {},
        isPropagationStopped:  () => true,
        timeStamp: 0,
        type: "onChange"
      };
      onChange && onChange(syntheticEvent);
    }
  };

  const Icon = currentValue === "true" ? trueIcon : currentValue === "false" ? falseIcon : neutralIcon;

  return (
    <Box hidden={hidden} onClick={handleCheckboxChange} {...otherProps}>
      <Input ref={ref ?? inputRef} type="hidden" value={currentValue} />
      <Icon {...iconStyle} />
    </Box>
  );
};