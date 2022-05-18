import { Fragment } from 'react';
import { StyledSVG } from './logo.styles';
import type { StyledSVGProps } from './logo.styles';
import type { FC } from 'react';

export const Logo: FC<StyledSVGProps> = (props: StyledSVGProps) => {
  const { css, ...rest } = props;

  return (
    <Fragment>
      <StyledSVG xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="none" css={css} {...rest}>
        <path
          d="M1.95751 8.7703C1.87628 8.46725 1.87627 8.1481 1.95747 7.84505C2.03868 7.54195 2.19825 7.2656 2.42013 7.04375L7.04355 2.42025C7.2654 2.19837 7.54175 2.03881 7.84485 1.95761C8.1479 1.8764 8.46705 1.87641 8.7701 1.95764L13.0965 3.1169C13.1415 2.52419 13.3479 1.9551 13.6932 1.47125L8.4824 0.0751545C8.10835 -0.0250536 7.71455 -0.0250516 7.34055 0.075161C6.96655 0.175374 6.6255 0.372267 6.3517 0.64605L0.646045 6.35175C0.372261 6.6256 0.175371 6.9666 0.07516 7.34065C-0.0250512 7.71465 -0.0250534 8.10845 0.0751535 8.4825L1.52495 13.8932C1.99889 13.5312 2.56315 13.3064 3.15614 13.2434L1.95751 8.7703Z"
          fill="url(#paint0_linear_7_2)"
        />
        <path
          d="M16.8038 6.60702L18.0424 11.2296C18.1237 11.5328 18.1236 11.8518 18.0424 12.1549C17.9612 12.458 17.8016 12.7343 17.5797 12.9562L12.9563 17.5798C12.7344 17.8017 12.4581 17.9611 12.155 18.0424C11.8519 18.1236 11.5328 18.1236 11.2297 18.0424L6.75668 16.8438C6.69363 17.4368 6.46888 18.0011 6.10693 18.475L11.5176 19.9248C11.8915 20.025 12.2854 20.025 12.6593 19.9248C13.0334 19.8245 13.3744 19.6277 13.6483 19.3539L19.3539 13.6482C19.6277 13.3743 19.8245 13.0333 19.9248 12.6592C20.025 12.2853 20.025 11.8914 19.9248 11.5175L18.4203 5.90417C17.9564 6.28282 17.397 6.52602 16.8038 6.60702Z"
          fill="url(#paint1_linear_7_2)"
        />
        <path
          d="M1.65512 14.6394C1.28869 15.0058 1.03914 15.4727 0.938043 15.9809C0.836943 16.4892 0.888828 17.0161 1.08714 17.4949C1.28544 17.9735 1.62127 18.3828 2.05214 18.6707C2.48302 18.9585 2.98959 19.1123 3.5078 19.1123C4.02601 19.1123 4.53258 18.9585 4.96345 18.6707C5.39435 18.3828 5.73015 17.9735 5.92845 17.4949C6.1268 17.0161 6.17865 16.4892 6.07755 15.9809C5.97645 15.4727 5.7269 15.0058 5.3605 14.6394C4.86874 14.1488 4.20245 13.8732 3.5078 13.8732C2.81315 13.8732 2.14687 14.1488 1.65512 14.6394Z"
          fill="url(#paint2_linear_7_2)"
        />
        <path
          d="M14.5037 1.51997C14.1373 1.8864 13.8877 2.35326 13.7867 2.86153C13.6856 3.36978 13.7374 3.89661 13.9357 4.37538C14.1341 4.85414 14.4698 5.26335 14.9007 5.55125C15.3316 5.8392 15.8382 5.99285 16.3563 5.99285C16.8746 5.99285 17.3811 5.8392 17.8121 5.55125C18.2429 5.26335 18.5787 4.85414 18.777 4.37538C18.9753 3.89661 19.0272 3.36978 18.9261 2.86153C18.8251 2.35326 18.5754 1.8864 18.2091 1.51997C17.7174 1.02933 17.051 0.753784 16.3563 0.753784C15.6618 0.753784 14.9954 1.02933 14.5037 1.51997Z"
          fill="url(#paint3_linear_7_2)"
        />
        <defs>
          <linearGradient id="paint0_linear_7_2" x1="6.8466" y1="-6.21582e-09" x2="6.8466" y2="13.8932" gradientUnits="userSpaceOnUse">
            <stop stopColor="#7421CF" />
            <stop offset="0.395833" stopColor="#911BB6" />
            <stop offset="0.760417" stopColor="#971AB2" />
            <stop offset="1" stopColor="#D130C4" />
          </linearGradient>
          <linearGradient id="paint1_linear_7_2" x1="13.0534" y1="5.90417" x2="13.0534" y2="20" gradientUnits="userSpaceOnUse">
            <stop stopColor="#7421CF" />
            <stop offset="0.395833" stopColor="#911BB6" />
            <stop offset="0.760417" stopColor="#971AB2" />
            <stop offset="1" stopColor="#D130C4" />
          </linearGradient>
          <linearGradient id="paint2_linear_7_2" x1="3.5078" y1="13.8732" x2="3.5078" y2="19.1123" gradientUnits="userSpaceOnUse">
            <stop stopColor="#3DB9D5" />
            <stop offset="1" stopColor="#8FF3FD" />
          </linearGradient>
          <linearGradient id="paint3_linear_7_2" x1="16.3564" y1="0.753784" x2="16.3564" y2="5.99285" gradientUnits="userSpaceOnUse">
            <stop stopColor="#3DB9D5" />
            <stop offset="1" stopColor="#8FF3FD" />
          </linearGradient>
        </defs>
      </StyledSVG>
    </Fragment>
  );
};
