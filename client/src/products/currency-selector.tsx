import { CurrencyEnum } from "@/graphql/graphql";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";

type CurrencySelectorProps = {
  onValueChange: (value: string) => void;
  defaultValue: CurrencyEnum;
};

export default function CurrencySelector({
  onValueChange,
  defaultValue,
}: CurrencySelectorProps) {
  return (
    <>
      <Select onValueChange={onValueChange} defaultValue={defaultValue}>
        <SelectTrigger className="w-fit h-fit py-1">
          <SelectValue placeholder="Currency" />
        </SelectTrigger>
        <SelectContent>
          {Object.values(CurrencyEnum).map((currencyCode) => {
            return <SelectItem value={currencyCode} key={currencyCode}>{currencyCode}</SelectItem>;
          })}
        </SelectContent>
      </Select>
    </>
  );
}
