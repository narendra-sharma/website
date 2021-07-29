import Head from 'next/head';
import styled, {createGlobalStyle} from "styled-components";
import React from "react";
import { OurProcessesConfig } from '../../../../../config/our-process/our-processes-config';
import { BaseFlexContainer } from '../../../../_utility/utility';
import { BACKGROUND_DEFAULT } from '../../../../../config/app-config';
import { ConsultationContainer, ConsultationProps } from './consultation-container';
import { DevelopementContainer, DevelopementProps } from './developement-container';
import { DeployAndSupportContainer, DeployAndSupportProps } from './deployee-and-support-container';
import Stepper from '@material-ui/core/Stepper';
import Step from '@material-ui/core/Step';
import StepLabel from '@material-ui/core/StepLabel';
import StepContent from '@material-ui/core/StepContent';
const GlobalStyle = createGlobalStyle`
  h1 {
    font-size: 4rem;
  }
`;
export type FullProcessProps = {
  steps:any,
}
type Props = {
  consultationProps: ConsultationProps,
  developementProps: DevelopementProps,
  deployAndSupportProps:DeployAndSupportProps
}


type SectionContainerProps = {
    backgroundColor: string;
    height: string;
}
 // height: ${(props) => props?.height ? props?.height : "500px"};
const SectionContainerStyled = styled.section<SectionContainerProps | any>`
 
  min-height: ${(props) => props?.height ? props?.height : "100px"};
  background-color: ${(props) => props?.backgroundColor ? props?.backgroundColor : BACKGROUND_DEFAULT};
  display: flex;
`;
const HeaderText = styled.h3`
  color:  #FFFFFF;
  font-weight: 400;
  font-size: 28px;
  font-style: normal;
  line-height: 33px;
  letter-spacing: 0em;
  text-align: left; 

`;
function getStepContent(i:any,step:any) {
  switch (i) {
    case 0:
      return (<SectionContainerStyled style={{paddingLeft:'20px'}}>
                <ConsultationContainer {...step}/>
             </SectionContainerStyled>);
    case 1:
      return (<SectionContainerStyled>
               <DevelopementContainer {...step}/>
              </SectionContainerStyled>);
    case 2:
      return (<SectionContainerStyled style={{paddingLeft:'20px'}}>
                <DeployAndSupportContainer {...step}/>
             </SectionContainerStyled>);
    default:
      return 'Unknown step';
  }
}
export const FullProcessContainer = ({steps}: FullProcessProps) => {  
  return (
    <BaseFlexContainer>
        <Stepper orientation="vertical" style={{background:'#1C232E'}}>
          {steps.map((step: any, index: any) => (
            <Step key={index} active={true}>
              <StepLabel>
                <span style={{textTransform:'uppercase',color:' #C6C6C6'}}>{step.step}</span>
                <HeaderText>{step.label}</HeaderText>
              </StepLabel>
              <StepContent>
                {getStepContent(index, step)}
              </StepContent>
            </Step>
          ))}
          <div className="MuiStep-root MuiStep-vertical"></div>
        </Stepper>
      <GlobalStyle />
    </BaseFlexContainer>
  )
}
export const getStaticProps = async () => {
    return {
      props: OurProcessesConfig,
    }
  }
export default FullProcessContainer;