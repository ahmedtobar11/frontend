import { Check } from "lucide-react";
import { steps } from "../../services/registerFormUtils";

const StepIndicator = ({ currentStep }) => {
  return (
    <div className="rounded-lg py-10 px-6  w-full  text-xl text-nowrap bg-transparent">
      <div className="space-y-10 ">
        {steps.map((step, index) => (
          <div
            key={step}
            className={`flex items-center ${
              currentStep === index
                ? "text-main scale-105 font-extrabold	"
                : "font-bold"
            }`}
          >
            <Check
              size={24}
              className={`  rounded-full py-1 ${
                currentStep === index
                  ? "text-white bg-main scale-105 font-extrabold	"
                  : "font-bold"
              }`}
            />
            <span className="ml-2">{step} </span>
          </div>
        ))}
      </div>
    </div>
  );
};

export default StepIndicator;
