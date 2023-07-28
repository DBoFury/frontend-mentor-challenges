import { FC } from "react";

interface SwitchProps {
  planType: "annually" | "monthly";
  setPlanType: (type: "annually" | "monthly") => void;
}

const Switch: FC<SwitchProps> = ({ planType, setPlanType }) => {
  const handleCheckboxChange = () => {
    const newPlanType = planType === "monthly" ? "annually" : "monthly";
    setPlanType(newPlanType);
  };

  return (
    <label className="relative inline-flex items-center cursor-pointer">
      <input
        type="checkbox"
        checked={planType === "monthly"}
        onChange={handleCheckboxChange}
        className="sr-only peer"
      />
      <span className="mr-6 text-pct-light-grayish-blue">Annually</span>
      <div className="peer h-[2.15rem] w-[3.625rem] rounded-full bg-gradient-to-r from-pct-lg-start to-pct-lg-end after:absolute after:left-[6.5rem] after:top-[3px] after:h-7 after:w-7 after:rounded-full after:border after:border-gray-300 after:bg-white after:transition-all after:content-['']  peer-checked:after:translate-x-[68%] peer-checked:after:border-white peer-focus:outline-none peer-focus:ring-4 peer-focus:ring-blue-300"></div>
      <span className="ml-6 text-pct-light-grayish-blue">Monthly</span>
    </label>
  );
};

export default Switch;
