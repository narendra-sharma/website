import styled from "styled-components";
import { BaseFlexContainer } from "../../../../_utility/utility";

export type DevelopementProps = {
    step:string,
    label:string,
    image:any,
    data:any
}

const HeaderText = styled.h3`
    color: #FFFFFF;
    font-weight:400;
    font-size: 18px;
    line-height: 21px;
`;

function processImage(image:any){
    return (
        <img
        alt="technology background"
        src={image}
        className="my-3 developementStepImg"
        width="100%"
    />);
}
function title(label:any){
    return (
    <HeaderText>
        {label}
    </HeaderText>);
}

export const DevelopementContainer = ({
    step,
    label,
    image,
    data
}: DevelopementProps) => {
    return (
        <BaseFlexContainer className="d-flex py-3">
          <div className="row">
          {data.map((process: any,i:any) => (
             <div className="col-sm-4 col-12 my-3" key={i} style={{padding:"20px 10px 20px 0px"}}>
                {processImage(process.image)}
                {title(process.label)}
             </div>
          ))}
          </div>
        </BaseFlexContainer>
    );
}