/** @jsxImportSource @emotion/react */
import { css } from "@emotion/react";
import COLOR from "../../styles/color";
import FONT from "../../styles/font";
import Badge from "../badge/Badge";
import { RightArrowIcon } from "../../assets/CommonIcons";
import Button from "../button/Button";
import { useState } from "react";
import { ChattingHistory } from "../../interfaces/chatting";
import EvaluationModal from "../modal/EvaluationModal";
import { useCreateEvaluation } from "../../hooks/worry/useEvaluation";
//데이터 받아서 해야되는뎅...
const matching = {
  id: 1,
  thumbnail: "https://i.ibb.co/wrVDXsy/IMG-6365-23992340.png",
  title: "학생회장 선배 도와주세요ㅠㅠ",
  content: "마음이 있는 것 같나요?",
  createdAt: "2분전",
  mbti1: "EsFP",
  mbti2: "ISTJ",
  color1: "#94E3F8",
  color2: "#F8CAFF",
};
type Profile = {
  profile: ChattingHistory | null;
};

const CurrentChatting: React.FC<Profile> = ({ profile }) => {
  const [isEvaluationModalOpen, setIsEvaluationModalOpen] = useState(false);
  const [selectedOption, setSelectedOption] = useState("");
  const [isSubmitted, setIsSubmitted] = useState(false);
  const handleEvaluation = () => {
    setIsEvaluationModalOpen(true);
  };
  const handleCloseModal = () => {
    setIsEvaluationModalOpen(false);
    setIsSubmitted(true);
  };

  const formData = {
    worryBoardId: matching.id,
    evaluations: [selectedOption],
  };

  const createMutation = useCreateEvaluation(formData);

  const handleSubmit = (selectedOption: string) => {
    setSelectedOption(selectedOption);

    if (selectedOption) {
      createMutation.mutate();
    }
  };

  return (
    <div css={MatchingBoxCSS}>
      <div css={leftCSS}>
        <div css={solveCSS}>
          {isSubmitted && <Badge mbti="해결 완료" color={COLOR.MAIN1} />}
          <div css={mbtiBoxCSS}>
            <Badge mbti={matching.mbti1} color={matching.color1} />
            <RightArrowIcon />
            <Badge mbti={matching.mbti2} color={matching.color2} />
          </div>
        </div>
        <div css={titleCSS}>{matching.title}</div>
      </div>
      <div css={rightCSS}>
        <Button
          onClick={handleEvaluation}
          style={{
            backgroundColor: isSubmitted ? COLOR.WHITE : COLOR.MAIN2,
            color: isSubmitted ? COLOR.GRAY2 : COLOR.WHITE,
          }}
          // disabled={isSubmitted}
        >
          해결완료
        </Button>
      </div>
      {isEvaluationModalOpen && (
        <EvaluationModal
          isOpen={isEvaluationModalOpen}
          onClose={handleCloseModal}
          onClick={handleSubmit}
          profileData={profile}
        />
      )}
    </div>
  );
};

const MatchingBoxCSS = css`
  display: flex;
  width: 100%;
  justify-content: space-between;
`;

const leftCSS = css`
  display: flex;
  flex-direction: column;
`;

const rightCSS = css`
  display: flex;
  align-items: center;
`;

const titleCSS = css`
  font-size: ${FONT.SIZE.TITLE3};
  font-weight: ${FONT.WEIGHT.BOLD};
  margin-bottom: 0.4rem;
`;

const mbtiBoxCSS = css`
  display: flex;
  align-items: center;
`;

const solveCSS = css`
  display: flex;
  color: ${COLOR.GRAY2};
  width: 5rem;
  margin: 0.3rem 0 0.8rem 0;
  align-items: center;
`;

export default CurrentChatting;
