import styled from "styled-components";
import { BaseFlexContainer } from "../../../../_utility/utility";
import { StepData } from "../../page-sections/home/our-process-section";

export type ConsultationProps = {
    step:string,
    label:string,
    image:any,
    data:any
}

const HeaderText = styled.h3`
    color: #FFFFFF;
    font-weight:700;
    font-size: 18px;
    line-height: 21px;
`;

function processImage(image:any){
    return (
        <img
        alt="technology background"
        src={image}
        className="my-3"
    />);
}
function title(label:any){
    return (
    <HeaderText>
        {label}
    </HeaderText>);
}
export const ConsultationContainer = ({
    step,
    label,
    image,
    data
}: ConsultationProps) => {
    return (
        <BaseFlexContainer className="d-flex align-items-center py-3 px-2">
          <div className="row">
          {data.map((process: any,i:any) => (
             <div className="col text-center p-4" key={i}>
                {processImage(process.image)}
                {title(process.label)}
             </div>
          ))}
          </div>
        </BaseFlexContainer>
    );
}