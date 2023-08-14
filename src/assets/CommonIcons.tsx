/** @jsxImportSource @emotion/react */
import COLOR from "../styles/color";
import { css } from "@emotion/react";

export const SearchIcon = () => {
  return (
    <svg
      width="35"
      height="35"
      viewBox="0 0 35 35"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M14 22C18.4183 22 22 18.4183 22 14C22 9.58172 18.4183 6 14 6C9.58172 6 6 9.58172 6 14C6 18.4183 9.58172 22 14 22Z"
        stroke="#222222"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M27 27L20 20"
        stroke="#222222"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
};

export const SettingIcon = () => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="#000000"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <circle cx="12" cy="12" r="3"></circle>
      <path d="M19.4 15a1.65 1.65 0 0 0 .33 1.82l.06.06a2 2 0 0 1 0 2.83 2 2 0 0 1-2.83 0l-.06-.06a1.65 1.65 0 0 0-1.82-.33 1.65 1.65 0 0 0-1 1.51V21a2 2 0 0 1-2 2 2 2 0 0 1-2-2v-.09A1.65 1.65 0 0 0 9 19.4a1.65 1.65 0 0 0-1.82.33l-.06.06a2 2 0 0 1-2.83 0 2 2 0 0 1 0-2.83l.06-.06a1.65 1.65 0 0 0 .33-1.82 1.65 1.65 0 0 0-1.51-1H3a2 2 0 0 1-2-2 2 2 0 0 1 2-2h.09A1.65 1.65 0 0 0 4.6 9a1.65 1.65 0 0 0-.33-1.82l-.06-.06a2 2 0 0 1 0-2.83 2 2 0 0 1 2.83 0l.06.06a1.65 1.65 0 0 0 1.82.33H9a1.65 1.65 0 0 0 1-1.51V3a2 2 0 0 1 2-2 2 2 0 0 1 2 2v.09a1.65 1.65 0 0 0 1 1.51 1.65 1.65 0 0 0 1.82-.33l.06-.06a2 2 0 0 1 2.83 0 2 2 0 0 1 0 2.83l-.06.06a1.65 1.65 0 0 0-.33 1.82V9a1.65 1.65 0 0 0 1.51 1H21a2 2 0 0 1 2 2 2 2 0 0 1-2 2h-.09a1.65 1.65 0 0 0-1.51 1z" />
    </svg>
  );
};

type StarIconProps = {
  onClick: () => void;
};

export const FilledStarIcon = ({ onClick }: StarIconProps) => {
  return (
    <svg
      width="20"
      height="20"
      viewBox="0 0 16 15"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      onClick={onClick}
    >
      <path
        d="M8 0L9.79611 5.52786H15.6085L10.9062 8.94427L12.7023 14.4721L8 11.0557L3.29772 14.4721L5.09383 8.94427L0.391548 5.52786H6.20389L8 0Z"
        fill="#AD71EA"
      />
    </svg>
  );
};

export const EmptyStarIcon = ({ onClick }: StarIconProps) => {
  return (
    <svg
      width="20"
      height="20"
      viewBox="0 0 16 15"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      onClick={onClick}
    >
      <path
        d="M8 1.61803L9.32058 5.68237L9.43284 6.02786H9.79611H14.0696L10.6123 8.53976L10.3184 8.75329L10.4306 9.09878L11.7512 13.1631L8.29389 10.6512L8 10.4377L7.70611 10.6512L4.24877 13.1631L5.56936 9.09878L5.68162 8.75329L5.38772 8.53976L1.93039 6.02786H6.20389H6.56716L6.67942 5.68237L8 1.61803Z"
        stroke="#AD71EA"
      />
    </svg>
  );
};

export const HeartIcon = () => {
  return (
    <svg
      width="20"
      height="20"
      viewBox="0 0 20 20"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      style={{ marginRight: "0.2rem" }}
    >
      <path
        d="M18.75 7.34375C18.75 12.8125 10.6414 17.2391 10.2961 17.4219C10.2051 17.4708 10.1033 17.4965 10 17.4965C9.89665 17.4965 9.79492 17.4708 9.70391 17.4219C9.35859 17.2391 1.25 12.8125 1.25 7.34375C1.25145 6.05955 1.76223 4.82837 2.6703 3.9203C3.57837 3.01223 4.80955 2.50145 6.09375 2.5C7.70703 2.5 9.11953 3.19375 10 4.36641C10.8805 3.19375 12.293 2.5 13.9062 2.5C15.1904 2.50145 16.4216 3.01223 17.3297 3.9203C18.2378 4.82837 18.7486 6.05955 18.75 7.34375Z"
        fill="#AD71EA"
      />
    </svg>
  );
};

export const BestIcon = () => {
  return (
    <svg
      width="34"
      height="24"
      viewBox="0 0 34 24"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      style={{ marginRight: "0.5rem" }}
    >
      <rect width="34" height="24" rx="12" fill="#FF5C5C" />
      <path
        d="M6.18359 7.51562H7.19141V10.6445H7.27344C7.41406 10.4258 7.53906 10.252 7.64844 10.123C7.75781 9.99023 7.93555 9.86328 8.18164 9.74219C8.42773 9.61719 8.73828 9.55469 9.11328 9.55469C9.64453 9.55469 10.1152 9.68945 10.5254 9.95898C10.9355 10.2246 11.2559 10.6055 11.4863 11.1016C11.7168 11.5977 11.832 12.1758 11.832 12.8359C11.832 13.5 11.7168 14.082 11.4863 14.582C11.2559 15.0781 10.9355 15.4609 10.5254 15.7305C10.1152 15.9961 9.64844 16.1289 9.125 16.1289C8.75391 16.1289 8.44336 16.0684 8.19336 15.9473C7.94727 15.8262 7.76367 15.6934 7.64258 15.5488C7.52148 15.4043 7.39844 15.2305 7.27344 15.0273H7.15625V16H6.18359V7.51562ZM7.16797 12.8125C7.16797 13.293 7.23828 13.7148 7.37891 14.0781C7.51953 14.4414 7.72461 14.7246 7.99414 14.9277C8.26758 15.127 8.59375 15.2266 8.97266 15.2266C9.36328 15.2266 9.69727 15.1211 9.97461 14.9102C10.252 14.6992 10.459 14.4121 10.5957 14.0488C10.7363 13.6855 10.8086 13.2734 10.8125 12.8125C10.8086 12.3594 10.7383 11.9551 10.6016 11.5996C10.4648 11.2441 10.2578 10.9648 9.98047 10.7617C9.70703 10.5586 9.37109 10.457 8.97266 10.457C8.58984 10.457 8.26172 10.5547 7.98828 10.75C7.71875 10.9453 7.51367 11.2207 7.37305 11.5762C7.23633 11.9277 7.16797 12.3398 7.16797 12.8125ZM15.8164 16.1289C15.2109 16.1289 14.6836 15.9941 14.2344 15.7246C13.7852 15.4551 13.4395 15.0742 13.1973 14.582C12.959 14.0898 12.8398 13.5195 12.8398 12.8711C12.8398 12.2227 12.959 11.6484 13.1973 11.1484C13.4395 10.6445 13.7773 10.2539 14.2109 9.97656C14.6484 9.69531 15.1523 9.55469 15.7227 9.55469C16.2031 9.55469 16.6504 9.66211 17.0645 9.87695C17.4785 10.0879 17.8145 10.4316 18.0723 10.9082C18.334 11.3809 18.4648 11.9883 18.4648 12.7305V13.1523H13.8477C13.8633 13.5938 13.9551 13.9707 14.123 14.2832C14.2949 14.5957 14.5254 14.834 14.8145 14.998C15.1035 15.1582 15.4375 15.2383 15.8164 15.2383C16.1758 15.2383 16.4785 15.1719 16.7246 15.0391C16.9746 14.9023 17.1641 14.7266 17.293 14.5117H18.3711C18.2695 14.8359 18.0996 15.1211 17.8613 15.3672C17.627 15.6094 17.334 15.7969 16.9824 15.9297C16.6348 16.0625 16.2461 16.1289 15.8164 16.1289ZM17.4453 12.2969C17.4453 11.9453 17.373 11.6289 17.2285 11.3477C17.0879 11.0664 16.8867 10.8457 16.625 10.6855C16.3672 10.5254 16.0664 10.4453 15.7227 10.4453C15.3672 10.4453 15.0508 10.5293 14.7734 10.6973C14.5 10.8652 14.2832 11.0918 14.123 11.377C13.9668 11.6582 13.877 11.9648 13.8535 12.2969H17.4453ZM23.3164 11.2891C23.2422 11.0156 23.0977 10.8027 22.8828 10.6504C22.6719 10.4941 22.3867 10.4141 22.0273 10.4102C21.7695 10.4102 21.5391 10.4531 21.3359 10.5391C21.1328 10.625 20.9727 10.7422 20.8555 10.8906C20.7383 11.0352 20.6797 11.1953 20.6797 11.3711C20.6836 11.582 20.7734 11.7617 20.9492 11.9102C21.125 12.0547 21.3984 12.1719 21.7695 12.2617L22.7188 12.4961C23.2852 12.6289 23.709 12.8398 23.9902 13.1289C24.2715 13.4141 24.4141 13.7773 24.418 14.2188C24.4141 14.5898 24.3145 14.9199 24.1191 15.209C23.9238 15.498 23.6387 15.7246 23.2637 15.8887C22.8887 16.0488 22.4414 16.1289 21.9219 16.1289C21.2109 16.1328 20.6465 15.9805 20.2285 15.6719C19.8105 15.3633 19.5586 14.918 19.4727 14.3359H20.5273C20.6445 14.9453 21.0938 15.25 21.875 15.25C22.3398 15.25 22.7051 15.1641 22.9707 14.9922C23.2402 14.8164 23.375 14.5781 23.375 14.2773C23.375 14.0508 23.291 13.8633 23.123 13.7148C22.9551 13.5664 22.6914 13.4492 22.332 13.3633L21.3711 13.1406C20.8203 13.0117 20.3984 12.8008 20.1055 12.5078C19.8164 12.2148 19.6719 11.8555 19.6719 11.4297C19.6719 11.0703 19.7695 10.748 19.9648 10.4629C20.1641 10.1777 20.4414 9.95508 20.7969 9.79492C21.1562 9.63477 21.5664 9.55469 22.0273 9.55469C22.457 9.55469 22.8359 9.62695 23.1641 9.77148C23.4922 9.91602 23.752 10.1191 23.9434 10.3809C24.1387 10.6426 24.2578 10.9453 24.3008 11.2891H23.3164ZM28.5078 10.4805H27.1719V14.1719C27.168 14.543 27.2402 14.7949 27.3887 14.9277C27.541 15.0566 27.7461 15.1211 28.0039 15.1211C28.1562 15.1211 28.3027 15.1152 28.4434 15.1035L28.6016 15.0977V16.0352C28.3906 16.0664 28.1562 16.082 27.8984 16.082C27.6016 16.082 27.3203 16.0215 27.0547 15.9004C26.7891 15.7754 26.5723 15.5879 26.4043 15.3379C26.2363 15.0879 26.1523 14.7852 26.1523 14.4297V10.4805H25.1914V9.63672H26.1523V8.11328H27.1719V9.63672H28.5078V10.4805Z"
        fill="white"
      />
    </svg>
  );
};

interface ArrowIconProps {
  onClick: () => void;
}

export const ArrowIcon = ({ onClick }: ArrowIconProps) => {
  return (
    <svg
      width="11"
      height="11"
      viewBox="0 0 14 12"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      onClick={onClick}
      cursor="pointer"
    >
      <path d="M1 1L7 10L13 1" stroke="#222222" strokeWidth="2" />
    </svg>
  );
};

export const SmallArrowIcon = () => {
  return (
    <svg
      width="10"
      height="8"
      viewBox="0 0 12 9"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path d="M1 1L6 8L11 1" stroke="#7A7A7B" />
    </svg>
  );
};

interface CheckIconProps extends React.SVGProps<SVGAElement> {
  className?: string;
  checked: boolean;
}

export const CheckIcon: React.FC<CheckIconProps> = ({ className, checked }) => {
  return (
    <svg
      className={className}
      width="17"
      height="17"
      viewBox="0 0 17 17"
      fill="none "
      xmlns="http://www.w3.org/2000/svg"
    >
      <circle
        cx="8.5"
        cy="8.5"
        r="8.5"
        fill={checked ? "#D4D3D3" : "#AD71EA"}
      />

      <path d="M4 7.15385L7.91304 11L13 6" stroke="white" />
    </svg>
  );
};

export const RightArrowIcon = () => {
  return (
    <svg
      width="19"
      height="8"
      viewBox="0 0 19 8"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      style={{ marginRight: "0.5rem" }}
    >
      <path
        d="M18.3536 4.35355C18.5488 4.15829 18.5488 3.84171 18.3536 3.64645L15.1716 0.464466C14.9763 0.269204 14.6597 0.269204 14.4645 0.464466C14.2692 0.659728 14.2692 0.976311 14.4645 1.17157L17.2929 4L14.4645 6.82843C14.2692 7.02369 14.2692 7.34027 14.4645 7.53553C14.6597 7.7308 14.9763 7.7308 15.1716 7.53553L18.3536 4.35355ZM0 4.5H18V3.5H0V4.5Z"
        fill="#AD71EA"
      />
    </svg>
  );
};

interface PolygonIconProps {
  onClick?: () => void;
  width?: string;
  height?: string;
}

export const PolygonIcon = ({ onClick, width, height }: PolygonIconProps) => {
  return (
    <svg
      width={width || "17"}
      height={height || "50"}
      viewBox="0 0 14 33"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      transform="translate(10,13)"
      css={PolygonIconCSS}
      onClick={onClick}
    >
      <path
        d="M7 0L13.0622 10.5H0.937822L7 0Z"
        fill="#D9D9D9"
        css={[IconCSS, HoverIconCSS]}
      />
      <path
        d="M7 22L0.937822 11.5H13.0622L7 22Z"
        fill="#D9D9D9"
        transform="translate(0, 15)"
        css={[IconCSS, HoverIconCSS]}
      />
    </svg>
  );
};

const PolygonIconCSS = css`
  cursor: pointer;
`;

const IconCSS = css`
  transition: fill 0.3s;

  &:hover {
    fill: ${COLOR.GRAY1};
  }
`;

const HoverIconCSS = css`
  &:hover {
    fill: ${COLOR.GRAY1};
  }
`;
