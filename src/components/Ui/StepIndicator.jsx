import React from 'react';
import { Check } from "lucide-react";
import { steps } from "../../services/registerFormUtils";

const StepIndicator = ({ currentStep }) => {
  return (
    <div className="w-full bg-transparent">
      <div className="hidden md:block rounded-lg py-10 px-4 lg:px-6 md:text-md lg:text-xl">
        <div className="space-y-10">
          {steps.map((step, index) => (
            <div
              key={step}
              className={`flex items-center ${
                currentStep === index
                  ? "text-main scale-105 font-extrabold"
                  : "font-bold"
              }`}
            >
              <Check
                size={24}
                className={`rounded-full py-1 ${
                  currentStep === index
                    ? "text-white bg-main scale-105 font-extrabold"
                    : "font-bold"
                }`}
              />
              <span className="ml-2">{step}</span>
            </div>
          ))}
        </div>
      </div>

      <div className="md:hidden overflow-x-hidden py-4 flex justify-center">
      <div className="flex  justify-center gap-2">
        {steps.map((step, index) => (
          <div
            key={step}
            className={`flex flex-col  sm:items-start  ms-3 ${
              currentStep === index
                ? "text-main scale-105 font-semibold"
                : "font-medium"
            }`}
          >
            <Check
              size={20}
              className={`rounded-full p-1 mb-1 ${
                currentStep === index
                  ? "text-white bg-main scale-105"
                  : ""
              }`}
            />
            <span className="text-sm sm:text-base">{step}</span>
          </div>
        ))}
      </div>
    </div>
    </div>
  );
};

export default StepIndicator;
