
interface StepIndicatorProps {
    currentStep: number;
    totalSteps: number;
}

export function StepIndicator({ currentStep, totalSteps }: StepIndicatorProps) {
    return (
        <div className="flex items-center gap-2 mb-8">
            {Array.from({ length: totalSteps }).map((_, index) => {
                const stepNumber = index + 1;
                const isActive = stepNumber === currentStep;
                const isCompleted = stepNumber < currentStep;

                return (
                    <div key={index} className="flex-1 h-2 rounded-full overflow-hidden bg-secondary">
                        <div
                            className={`h-full transition-all duration-500 ease-in-out ${isActive || isCompleted ? "bg-primary w-full" : "w-0"
                                }`}
                        />
                    </div>
                );
            })}
        </div>
    );
}
