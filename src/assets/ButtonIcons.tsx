interface LikeIconProps {
  onClick: () => void;
}

export const LikeIcon = ({ onClick }: LikeIconProps) => {
  return (
    <svg
      width="70"
      height="70"
      viewBox="0 0 90 90"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      cursor="pointer"
      onClick={onClick}
    >
      <circle cx="45" cy="45" r="45" fill="#AD71EA" />
      <path
        d="M38 71.0938C41.0703 71.1016 43.0078 72.0703 43.0156 73.75C43.0078 75.3906 41.0703 76.375 38 76.375C34.9609 76.375 33 75.3906 33 73.75C33 72.0703 34.9609 71.1016 38 71.0938ZM31.6719 70.0781V68.6719H36.6406V66.1094H38.3594V68.6719H44.4844V70.0781H31.6719ZM33.1406 64.3125V62.9375H42.9219V64.1094C42.9297 65.2266 42.9297 66.4141 42.5312 67.8594L40.8125 67.7031C41.1641 66.3359 41.1875 65.3359 41.1875 64.3125H33.1406ZM34.75 73.75C34.7344 74.5781 35.9609 75.0312 38 75.0312C40.0469 75.0312 41.2812 74.5781 41.2969 73.75C41.2812 72.8906 40.0469 72.4062 38 72.4062C35.9609 72.4062 34.7344 72.8906 34.75 73.75ZM56.6094 62.2656V65.4844H58.5781V66.9062H56.6094V70.2031H54.875V62.2656H56.6094ZM45.3594 69.0781C48.6328 68.2422 50.4922 66.5703 50.7969 64.5312H46.0312V63.125H52.6875C52.6797 66.7969 50.2734 69.3359 46.0469 70.4688L45.3594 69.0781ZM47.4688 76.2031V70.7656H56.6094V76.2031H47.4688ZM49.2031 74.8281H54.8906V72.1875H49.2031V74.8281Z"
        fill="white"
      />
      <path
        d="M65.125 29.8906C65.125 42.4688 46.4752 52.6498 45.681 53.0703C45.4717 53.1829 45.2377 53.2419 45 53.2419C44.7623 53.2419 44.5283 53.1829 44.319 53.0703C43.5248 52.6498 24.875 42.4688 24.875 29.8906C24.8783 26.937 26.0531 24.1052 28.1417 22.0167C30.2302 19.9281 33.062 18.7533 36.0156 18.75C39.7262 18.75 42.9749 20.3456 45 23.0427C47.0251 20.3456 50.2738 18.75 53.9844 18.75C56.938 18.7533 59.7698 19.9281 61.8583 22.0167C63.9469 24.1052 65.1217 26.937 65.125 29.8906Z"
        fill="white"
      />
    </svg>
  );
};

export const LikeClickedIcon = ({ onClick }: LikeIconProps) => {
  return (
    <svg
      width="70"
      height="70"
      viewBox="0 0 90 90"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      cursor="pointer"
      onClick={onClick}
    >
      <circle cx="45" cy="45" r="45" fill="#AD71EA" />
      <path
        d="M38 71.0938C39.0208 71.0938 39.9062 71.2005 40.6562 71.4141C41.4115 71.6224 41.9922 71.9271 42.3984 72.3281C42.8099 72.724 43.0156 73.1979 43.0156 73.75C43.0156 74.2917 42.8099 74.7578 42.3984 75.1484C41.9922 75.5443 41.4115 75.8464 40.6562 76.0547C39.9062 76.2682 39.0208 76.375 38 76.375C36.9896 76.375 36.1068 76.2682 35.3516 76.0547C34.6016 75.8464 34.0208 75.5443 33.6094 75.1484C33.2031 74.7578 33 74.2917 33 73.75C33 73.1979 33.2031 72.724 33.6094 72.3281C34.0208 71.9271 34.6016 71.6224 35.3516 71.4141C36.1068 71.2005 36.9896 71.0938 38 71.0938ZM31.6719 68.6719H36.6406V66.1094H38.3594V68.6719H44.4844V70.0781H31.6719V68.6719ZM33.1406 62.9375H42.9219V64.1094V64.5234C42.9219 65.1328 42.8958 65.6979 42.8438 66.2188C42.7969 66.7396 42.6927 67.2865 42.5312 67.8594L40.8125 67.7031C40.9688 67.0885 41.0703 66.5286 41.1172 66.0234C41.1641 65.5182 41.1875 64.9479 41.1875 64.3125H33.1406V62.9375ZM34.75 73.75C34.7448 74.1615 35.026 74.4792 35.5938 74.7031C36.1667 74.9219 36.9688 75.0312 38 75.0312C39.0312 75.0312 39.8359 74.9219 40.4141 74.7031C40.9974 74.4792 41.2917 74.1615 41.2969 73.75C41.2917 73.3229 40.9974 72.9922 40.4141 72.7578C39.8359 72.5234 39.0312 72.4062 38 72.4062C36.974 72.4062 36.1745 72.5234 35.6016 72.7578C35.0286 72.9922 34.7448 73.3229 34.75 73.75ZM56.6094 65.4844H58.5781V66.9062H56.6094V70.2031H54.875V62.2656H56.6094V65.4844ZM45.3594 69.0781C46.4375 68.8021 47.3646 68.4401 48.1406 67.9922C48.9167 67.5391 49.526 67.0208 49.9688 66.4375C50.4167 65.849 50.6927 65.2135 50.7969 64.5312H46.0312V63.125H52.6875C52.6875 64.3385 52.4271 65.4297 51.9062 66.3984C51.3906 67.3672 50.638 68.1927 49.6484 68.875C48.6589 69.5573 47.4583 70.0885 46.0469 70.4688L45.3594 69.0781ZM47.4688 70.7656H56.6094V76.2031H47.4688V70.7656ZM54.8906 74.8281V72.1875H49.2031V74.8281H54.8906Z"
        fill="white"
      />
      <path
        d="M65.125 29.8906C65.125 42.4688 46.4752 52.6498 45.681 53.0703C45.4717 53.1829 45.2377 53.2419 45 53.2419C44.7623 53.2419 44.5283 53.1829 44.319 53.0703C43.5248 52.6498 24.875 42.4688 24.875 29.8906C24.8783 26.937 26.0531 24.1052 28.1417 22.0167C30.2302 19.9281 33.062 18.7533 36.0156 18.75C39.7262 18.75 42.9749 20.3456 45 23.0427C47.0251 20.3456 50.2738 18.75 53.9844 18.75C56.938 18.7533 59.7698 19.9281 61.8583 22.0167C63.9469 24.1052 65.1217 26.937 65.125 29.8906Z"
        fill="#FF5C5C"
      />
    </svg>
  );
};
