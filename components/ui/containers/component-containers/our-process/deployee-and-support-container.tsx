import styled from "styled-components";
import { BaseFlexContainer } from "../../../../_utility/utility";

export type DeployAndSupportProps = {
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
        className="my-3"
    />);
}
function title(label:any){
    return (
    <HeaderText>
        {label}
    </HeaderText>);
}

export const DeployAndSupportContainer = ({
    step,
    label,
    image,
    data
}: DeployAndSupportProps) => {
    return (
        <BaseFlexContainer className="d-flex py-3 px-2">
          <div className="row my-3" style={{borderRadius:"15px",overflow:'hidden'}}>
          {data.map((process: any,i:any) => (
             <div className="col-sm-4 col-12 text-center step3Boxes" key={i} >
                {processImage(process.image)}
                {title(process.label)}
             </div>
          ))}
          </div>
        </BaseFlexContainer>
    );
}