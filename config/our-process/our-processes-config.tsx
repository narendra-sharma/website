import {Step, StepData} from "../../components/ui/containers/page-sections/home/our-process-section";
import OurProcessHeader_2x from "../../public/assets/process/OurProcessHeader_2x.svg"
import ScrumBoard from "../../public/assets/process/ScrumBoard.svg"
import {HeaderProcessProps} from "../../components/ui/containers/page-sections/our-process/header-process-section";
import { FullProcessProps } from "../../components/ui/containers/component-containers/our-process/full-process-container";
import { ConsultationProps } from "../../components/ui/containers/component-containers/our-process/consultation-container";
import { AgileProps } from "../../components/ui/containers/component-containers/our-process/agile-application-container";
import { DeployAndSupportProps } from "../../components/ui/containers/component-containers/our-process/deployee-and-support-container";
import TechnicalConsultation from "../../public/assets/process/details/TechnicalConsultation.svg"
import ApplicationRoadmap from "../../public/assets/process/details/ApplicationRoadmap.svg"
import UIUXandprototyping from "../../public/assets/process/details/UIUXandprototyping.svg"
import HighFidelityDesign from "../../public/assets/process/details/HighFidelityDesign.svg"
import DocumentationAndQualityAssurance from "../../public/assets/icons/DocumentationAndQualityAssurance.svg"
import SupportAndMaintenance from "../../public/assets/icons/SupportAndMaintenance.svg"
import CustomerSatisfaction from "../../public/assets/icons/CustomerSatisfaction.svg"
import AgileDevelopmentLifeycle from "../../public/assets/process/details/AgileDevelopmentLifeycle.svg"
import { FooterProcessProps } from "../../components/ui/containers/page-sections/our-process/footer-process-section";


export const HEADER_PROCESS_BACKGROUND_IMAGE = OurProcessHeader_2x;
export const HEADER_PROCESS_SCRUMBOARD_IMAGE = ScrumBoard;

export const STEP_1_STEP = "Phase 1";
export const STEP_2_STEP = "Phase 2";
export const STEP_3_STEP = "Phase 3";

export const STEP_1_LABEL = "Consultation";
export const STEP_2_LABEL = "Agile Application Development";
export const STEP_3_LABEL = "Deployment & Support";

export const STEP_1_GRAPHIC = "";
export const STEP_2_GRAPHIC = AgileDevelopmentLifeycle;
export const STEP_3_GRAPHIC = "";

export const TECHNICAL_LABEL = "TECHNICAL CONSULTATION";
export const GATHERING_LABEL = "REQUIREMENTS GATHERING";
export const APP_ROADMAP_LABEL = "APPLICATION ROADMAP";
export const UI_PROTOTYPING_LABEL = "UI/UX & PROTOTYPING";
export const FIDELITY_DESIGN_LABEL = "HIGH  FIDELITY DESIGN";

export const TECHNICAL_IMAGE = TechnicalConsultation;
export const GATHERING_IMAGE = TechnicalConsultation;
export const APP_ROADMAP_IMAGE = ApplicationRoadmap;
export const UI_PROTOTYPING_IMAGE = UIUXandprototyping;
export const FIDELITY_DESIGN_IMAGE = HighFidelityDesign;

export const OUR_PROCESS_ACTION_BUTTON_LABEL = "Explore";
export const OUR_PROCESS_SECTION_TITLE = "Our Process";
export const OUR_PROCESS_SECTION_DESCRIPTION="WE ARE TRULY AGILE. We can modify the team to fit client needs. Our process gives us access to many on demand developers.";
export const TECHNICAL: StepData = {
  label: TECHNICAL_LABEL,
  image: TECHNICAL_IMAGE 
}
export const GATHERING: StepData = {
  label: GATHERING_LABEL,
  image: GATHERING_IMAGE 
}
export const APP_ROADMAP: StepData = {
  label: APP_ROADMAP_LABEL,
  image: APP_ROADMAP_IMAGE 
}
export const UI_PROTOTYPING: StepData = {
  label: UI_PROTOTYPING_LABEL,
  image: UI_PROTOTYPING_IMAGE 
}
export const FIDELITY_DESIGN: StepData = {
  label: FIDELITY_DESIGN_LABEL,
  image: FIDELITY_DESIGN_IMAGE 
}
export const STEP_1: Step = {
  step: STEP_1_STEP,
  label: STEP_1_LABEL,
  image: STEP_1_GRAPHIC,
  data: [TECHNICAL,GATHERING,APP_ROADMAP,UI_PROTOTYPING,FIDELITY_DESIGN],
  list: [],
  description: ""
}

export const STEP_2_LIST = ['Real-Time Progress Updates', '24/7 Development', 'Flexibility',' Pay solely for the results', 'Transparent Pricing', 'Privacy and Security Code', 'version control','a','b','c','d','e','f','g','h','i','j'];
export const STEP_2_DESCRIPTION = '<span>Our developers are not constrained to a 9-5 work schedule.</span><br/><br/><span class="mt-3">Our developers also are able to work completely remote and flexible hours. Development can run 24/7. This gives us access to many more developers than our competition.</span>';
export const STEP_2: Step = {
  step: STEP_2_STEP,
  label: STEP_2_LABEL,
  image: STEP_2_GRAPHIC,
  data:[],
  list: STEP_2_LIST,
  description: STEP_2_DESCRIPTION
 }
export const DOCUMENT_AND_QUALITY_LABEL = "DOCUMENTATION & QUALITY ASSURANCE";
export const SUPPORT_AND_MAINTENANCE_LABEL = "SUPPORT & MAINTENANCE";
export const SATISFACTION_LABEL = "CUSTOMER SATISFACTION";

export const DOCUMENT_AND_QUALITY_IMAGE = DocumentationAndQualityAssurance;
export const SUPPORT_AND_MAINTENANCE_IMAGE = SupportAndMaintenance;
export const SATISFACTION_IMAGE = CustomerSatisfaction;

export const DOCUMENT_AND_QUALITY: StepData = {
  label: DOCUMENT_AND_QUALITY_LABEL,
  image: DOCUMENT_AND_QUALITY_IMAGE 
}
export const SUPPORT_AND_MAINTENANCE: StepData = {
  label: SUPPORT_AND_MAINTENANCE_LABEL,
  image: SUPPORT_AND_MAINTENANCE_IMAGE 
}
export const SATISFACTION: StepData = {
  label: SATISFACTION_LABEL,
  image: SATISFACTION_IMAGE 
}
export const STEP_3: Step = {
  step: STEP_3_STEP,
  label: STEP_3_LABEL,
  image: STEP_3_GRAPHIC,
  data: [DOCUMENT_AND_QUALITY,SUPPORT_AND_MAINTENANCE,SATISFACTION],
  list: [],
  description: ""
}

export const FOOTER_TITLE="This process gets Results.";
export const FOOTER_DESCRIPTION="We have the ability to truly prove our focus on results and provide complete transparency";

type Props = {
  headerProcessProps: HeaderProcessProps,
  fullProcessProps:FullProcessProps,
  consultationProps:ConsultationProps,
  agileProps:AgileProps,
  deployAndSupportProps:DeployAndSupportProps,
  footerProcessProps: FooterProcessProps,
}
export const OurProcessesConfig: Props = {
  headerProcessProps: {
    header: OUR_PROCESS_SECTION_TITLE,
    description: OUR_PROCESS_SECTION_DESCRIPTION,
    backgroundImage: HEADER_PROCESS_BACKGROUND_IMAGE,
    scrumBoardImage: HEADER_PROCESS_SCRUMBOARD_IMAGE,
  },
  
  consultationProps:{
    step: STEP_1_STEP,
    label: STEP_1_LABEL,
    image: STEP_1_GRAPHIC,
    data: [TECHNICAL,GATHERING,APP_ROADMAP,UI_PROTOTYPING,FIDELITY_DESIGN],
  },
  agileProps:{
    step: STEP_2_STEP,
    label: STEP_2_LABEL,
    image: STEP_2_GRAPHIC,
    list: STEP_2_LIST,
    description: STEP_2_DESCRIPTION
  },
  deployAndSupportProps:{
    step: STEP_3_STEP,
    label: STEP_3_LABEL,
    image: STEP_3_GRAPHIC,
    data: [DOCUMENT_AND_QUALITY,SUPPORT_AND_MAINTENANCE,SATISFACTION]
  },
  fullProcessProps: {
    steps: [ 
      STEP_1,
      STEP_2,
      STEP_3,    
    ]
  }, 
  footerProcessProps: {
    title: FOOTER_TITLE,
    description: FOOTER_DESCRIPTION
  }
}
