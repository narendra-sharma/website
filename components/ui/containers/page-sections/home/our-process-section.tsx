import {CallToActionButton} from "../../../buttons/call-to-action-button";

export const STEP_1_TITLE = "Consultation";
export const STEP_2_TITLE = "Agile Application Development";
export const STEP_3_TITLE = "Deployment and Support";

export const STEP_1_GRAPHIC = "";
export const STEP_2_GRAPHIC = "";
export const STEP_3_GRAPHIC = "";

export const ACTION_BUTTON_LABEL = "Explore";
export const OUR_PROCESS_SECTION_TITLE = "Our Process";

export interface StepData {
  label: string,
  image:any
}
export interface Step {
  step: string;
  label: string;
  image: string; // Or component?
  data: StepData[]
}

export interface OurProcessProps {
  title: string;
  steps: Step[];
  actionButtonLabel: string;
}

export const OurProcessSection = ({
                                    title,
                                    steps,
                                    actionButtonLabel
                                  }: OurProcessProps) => {
  return (
    <div>
      <h1>{title}</h1>
      <CallToActionButton text={actionButtonLabel} />
    </div>
  )
}

