import Head from 'next/head';

import styled from "styled-components";
import React from "react";
import {HeaderProcessProps, HeaderProcessSection} from '../components/ui/containers/page-sections/our-process/header-process-section';
import {BACKGROUND_DEFAULT} from "../config/app-config";
import {BaseFlexContainer} from "../components/_utility/utility";
import {OurProcessesConfig} from "../config/our-process/our-processes-config";
import {FullProcessProps,FullProcessContainer} from '../components/ui/containers/component-containers/our-process/full-process-container';
import { FooterProcessProps, FooterProcessSection } from '../components/ui/containers/page-sections/our-process/footer-process-section';


type Props = {
    headerProcessProps: HeaderProcessProps,
    fullProcessProps: FullProcessProps,
    footerProcessProps: FooterProcessProps
}


type SectionContainerProps = {
    backgroundColor: string;
    height: string;
}
const SectionContainerStyled = styled.section<SectionContainerProps | any>`
  min-height: ${(props) => props?.height ? props?.height : "100px"};
  background-color: ${(props) => props?.backgroundColor ? props?.backgroundColor : BACKGROUND_DEFAULT};
  display: flex;
`;

export const OurProcess = ({
                 headerProcessProps,
                 fullProcessProps,
                 footerProcessProps
              }: Props) => {

  return (
    <BaseFlexContainer>
      <SectionContainerStyled>
        <HeaderProcessSection {...headerProcessProps} />
      </SectionContainerStyled>
      <SectionContainerStyled>
        <FullProcessContainer {...fullProcessProps}/>
      </SectionContainerStyled>
      <SectionContainerStyled className="process_footer">
        <FooterProcessSection {...footerProcessProps}/>
      </SectionContainerStyled>
    </BaseFlexContainer>
  )
}
export const getStaticProps = async () => {
    return {
      props: OurProcessesConfig,
    }
  }
export default OurProcess;
