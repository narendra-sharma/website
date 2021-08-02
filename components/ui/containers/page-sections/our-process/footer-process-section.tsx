import styled from "styled-components";
import {BaseFlexContainer} from "../../../../_utility/utility";
export type FooterProcessProps = {
  title:string,
  description:string
}

const FooterText = styled.h3`
  color: #90E189;
  font-size: 24px;
  padding-left: 20px;
  padding-right: 20px;
  font-weight: 700;
  line-height: 28.13px;
`;

const FooterDescription = styled.p`
    font-size: 18px;
    font-weight: 500;
    color: #DBD1FE;
    line-height: 21.9px;
`;

export const FooterProcessSection = ({
                                title,
                                description
                            }: FooterProcessProps) => {
    return (
        <BaseFlexContainer className="text-center py-3 px-1" style={{borderLeft: '2px solid #805da7'}}>
            <FooterText className="footerTitle">
                {title}
            </FooterText>
            <FooterDescription className="footerDescription py-3">
                {description}
            </FooterDescription>
        </BaseFlexContainer>
    );
}